import axios from 'axios';
import * as inquirer from 'inquirer';
import { getBaseAnswers, Answers } from './base-answers';
import { argv } from './get-argv';

(async () => {
  const inquirerAnswers: Answers = await inquirer.prompt([
    ...getBaseAnswers(argv),
  ]);

  const answers: Answers = {
    ...argv,
    ...inquirerAnswers,
  };

  const { confirmed } = await inquirer.prompt([
    {
      type: 'confirm',
      default: false,
      name: 'confirmed',
      message: `Are you sure you want to delete ALL releases for project ${answers.projectId}?`,
    },
  ]);

  if (confirmed) {
    console.log('deleting...');
    console.log('(not yet implemented...)');
  } else {
    console.log('Canceled. No releases have been deleted.');
  }
})();
