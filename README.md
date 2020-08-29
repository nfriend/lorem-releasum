# Lorem Releasum

A utility to quickly create realistic(-ish) GitLab releases for testing
purposes.

## Usage

Using
[npx](https://blog.npmjs.org/post/162869356040/introducing-npx-an-npm-package-runner)
(which you already have installed if you've previously installed
[node](https://nodejs.org/en/)):

```bash
npx lorem-releasum
```

This will ask you a series of questions and create a number of fake releases in
the project you specify:

```
❯ npx lorem-releasum
npx: installed 70 in 4.879s
? Project ID to create releases in: 19
? GitLab access token to use for POSTing to GitLab's API: K7D6ytuLT5sYj2tEpR2a
? Base URL of GitLab instance: http://gdk.test:3000
? Number of fake releases to create: 20
```

Alternatively, you can answer the questions using command line arguments:

```bash
npx lorem-releasum --project-id 19 --access-token K7D6ytuLT5sYj2tEpR2a --base-url http://gdk.test:3000 --release-count 20
```
