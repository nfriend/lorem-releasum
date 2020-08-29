export interface Answers {
  projectId: number;
  accessToken: string;
  baseUrl: string;
}

export const getBaseAnswers = (argv) => [
  {
    type: 'number',
    name: 'projectId',
    message: 'Project ID to create releases in:',
    validate: (input) =>
      (Number.isFinite(input) && input > 0) ||
      'Project ID must be a number greater than 0',
    when: !argv.projectId,
  },
  {
    type: 'password',
    name: 'accessToken',
    mask: true,
    message: "GitLab access token to use for POSTing to GitLab's API:",
    validate: (input) => Boolean(input) || 'Access token is required',
    when: !argv.accessToken,
  },
  {
    type: 'input',
    default: 'https://gitlab.com',
    name: 'baseUrl',
    message: 'Base URL of GitLab instance:',
    when: !argv.baseUrl,
  },
];
