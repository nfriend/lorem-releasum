import * as yargs from 'yargs';

export const argv = yargs
  .alias('p', 'project-id')
  .describe('p', 'Project ID to create releases in')
  .alias('t', 'access-token')
  .describe('t', "GitLab access token to use for POSTing to GitLab's API")
  .alias('b', 'base-url')
  .describe('b', 'Base URL of GitLab instance')
  .alias('c', 'release-count')
  .describe('c', 'Number of releases to create')
  .help('h')
  .alias('h', 'help').argv;
