import axios from 'axios';
import * as inquirer from 'inquirer';
import { getBaseAnswers, Answers } from './base-answers';
import { timeout } from './timeout';
import { argv } from './get-argv';

export interface AnswersWithCount extends Answers {
  releaseCount: number;
}

(async () => {
  const inquirerAnswers = await inquirer.prompt([
    ...getBaseAnswers(argv),
    {
      type: 'number',
      default: 20,
      name: 'releaseCount',
      message: 'Number of fake releases to create:',
      when: !argv.releaseCount,
    },
  ]);

  const answers: AnswersWithCount = {
    ...argv,
    ...inquirerAnswers,
  };

  let version = {
    major: Math.round(Math.random() * 5),
    minor: Math.round(Math.random() * 10),
    patch: Math.round(Math.random() * 10),
  };

  for (let i = 0; i < answers.releaseCount; i++) {
    // Bump the version
    const rand = Math.random();
    if (rand > 0.9) {
      version.major++;
      version.minor = 0;
      version.patch = 0;
    } else if (rand > 0.6) {
      version.minor++;
      version.patch = 0;
    } else {
      version.patch++;
    }

    const versionString = `${version.major}.${version.minor}.${version.patch}`;

    const { data: description } = await axios.get(
      'https://jaspervdj.be/lorem-markdownum/markdown.txt',
    );

    const release = {
      name: `Release ${versionString}`,
      tag_name: `v${versionString}`,
      description,
      ref: 'master',
    };

    console.log(`Creating ${release.name}...`);

    await axios.post(
      `${answers.baseUrl}/api/v4/projects/${answers.projectId}/releases`,
      release,
      {
        headers: {
          'Private-Token': answers.accessToken,
        },
      },
    );

    // Wait for a second to avoid pegging https://jaspervdj.be
    await timeout(1000);
  }
})();
