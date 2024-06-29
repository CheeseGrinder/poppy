# Contributing

Thanks for your interest in contributing to the Poppy UI ! 🎉

- [Contributing Etiquette](#contributing-etiquette)
- [Creating an Issue](#creating-an-issue)
  * [Creating a Good Code Reproduction](#creating-a-good-code-reproduction)
- [Using VS Code on Windows](#using-vs-code-on-windows)
- [Creating a Pull Request](#creating-a-pull-request)
  * [Requirements](#requirements)
  * [Setup](#setup)
  * [Core](#core)
    + [Modifying Components](#modifying-components)
    + [Preview Changes](#preview-changes)
    + [Lint Changes](#lint-changes)
    + [Modifying Documentation](#modifying-documentation)
    + [Modifying Tests](#modifying-tests)
      - [Screenshot Tests](#screenshot-tests)
    + [Building Changes](#building-changes)
  * [Angular, React, and Vue](#angular-react-and-vue)
    + [Modifying Files](#modifying-files)
    + [Preview Changes](#preview-changes-1)
    + [Lint Changes](#lint-changes-1)
    + [Modifying Tests](#modifying-tests-1)
    + [Building Changes](#building-changes-1)
  * [Submit Pull Request](#submit-pull-request)
- [Commit Message Guidelines](#commit-message-guidelines)
  * [Commit Message Format](#commit-message-format)
  * [Revert](#revert)
  * [Type](#type)
  * [Scope](#scope)
  * [Subject](#subject)
  * [Body](#body)
  * [Footer](#footer)
  * [Examples](#examples)
- [License](#license)


## Contributing Etiquette

Please see our [Contributor Code of Conduct](https://github.com/CheeseGrinder/poppy-ui/blob/main/CODE_OF_CONDUCT.md) for information on our rules of conduct.


## Creating an Issue

<!-- * If you have a question about using the framework, please ask on the [Poppy Forum](http://forum.poppy-ui.com/) or in the [Poppy Discord](https://poppy.link/discord). -->

* It is required that you clearly describe the steps necessary to reproduce the issue you are running into. Although we would love to help our users as much as possible, diagnosing issues without clear reproduction steps is extremely time-consuming and simply not sustainable.

* The issue list of this repository is exclusively for bug reports and feature requests. Non-conforming issues will be closed immediately.

* Issues with no clear steps to reproduce will not be triaged. If an issue is labeled with "needs: reply" and receives no further replies from the author of the issue for more than 14 days, it will be closed.

* If you think you have found a bug, or have a new feature idea, please start by making sure it hasn't already been [reported](https://github.com/CheeseGrinder/poppy-ui/issues?utf8=%E2%9C%93&q=is%3Aissue). You can search through existing issues to see if there is a similar one reported. Include closed issues as it may have been closed with a solution.

* Next, [create a new issue](https://github.com/CheeseGrinder/poppy-ui/issues/new/choose) that thoroughly explains the problem. Please fill out the populated issue form before submitting the issue.


## Creating a Good Code Reproduction

### What is a Code Reproduction?

A code reproduction is a small application that is built to demonstrate a particular issue. The code reproduction should contain the minimum amount of code needed to recreate the issue and should focus on a single issue.

### Why Should You Create a Reproduction?

A code reproduction of the issue you are experiencing helps us better isolate the cause of the problem. This is an important first step to getting any bug fixed!

Without a reliable code reproduction, it is unlikely we will be able to resolve the issue, leading to it being closed. In other words, creating a code reproduction of the issue helps us help you.

### How to Create a Reproduction

* Create a new Poppy UI application.
* Add the minimum amount of code needed to recreate the issue you are experiencing. Do not include anything that is not required to reproduce the issue. This includes any 3rd party plugins you have installed.
* Publish the application on GitHub and include a link to it when [creating an issue](#creating-an-issue).
* Be sure to include steps to reproduce the issue. These steps should be clear and easy to follow.

### Benefits of Creating a Reproduction

* **Uses the latest version of Poppy:** By creating a new application, you are ensuring that you are testing against the latest version. Sometimes the issues you are experiencing have already been resolved in a newer version!
* **Minimal surface area:** By removing code that is not needed in order to reproduce the issue, it makes it easier to identify the cause of the issue.
* **No secret code needed:** Creating a minimal reproduction of the issue prevents you from having to publish any proprietary code used in your project.
* **Get help fixing the issue:** If we can reliably reproduce an issue, there is a good chance we will be able to address it.

## Using VS Code on Windows

To contribute on Windows, do the following:

- Configure VS Code to read/save files using line breaks (LF) instead of carriage returns (CRLF). Set it globally by navigating to: Settings -> Text Editor -> Files -> Eol. Set to `\n`.

  - You can optionally use the following settings in your `.vscode/settings.json`:
    ```json
    { "files.eol": "\n" }
    ```

- Check that the Git setting `core.autocrlf` is set to `false`: run `git config -l | grep autocrlf`. Switch it to false using: `git config --global core.autocrlf false`.
- If you've already cloned the `poppy-ui` repo, the files may already be cached as LF. To undo this, you need to clean the cache files of the repository. Run the following (make sure you stage or commit your changes first): `git rm --cached -r .` then `git reset --hard`.

## Creating a Pull Request

Before creating a pull request, please read our requirements that explains the minimal details to have your PR considered and merged into the codebase.

### Requirements
1. PRs must reference an existing issue that describes the issue or feature being submitted.
2. PRs must have a reproduction app or the issue must include a reproduction app to verify changes against.
3. PRs must include tests covering the changed behavior or a description of why tests cannot be written.

> Note: We appreciate you taking the time to contribute! Before submitting a pull request, please take the time to comment on the issue you are wanting to resolve. This helps us prevent duplicate effort or advise if the team is already addressing the issue.

* Looking for an issue to fix? Look through our issues with the [help wanted](https://github.com/CheeseGrinder/poppy-ui/issues?q=is%3Aopen+is%3Aissue+label%3A%22help+wanted%22) label!

### Setup

1. [Download the installer](https://nodejs.org/) for the LTS version of Node.js. This is the best way to also [install npm](https://blog.npmjs.org/post/85484771375/how-to-install-npm#_=_).
2. Fork this repository.
3. Clone your fork.
4. Create a new branch from main for your change.
5. Navigate into the directory of the package you wish to modify (core, angular, etc.).
6. Run `npm install` to install dependencies for this package.
7. Follow the steps for the specific package below.


### Core

#### Modifying Components

1. Locate the component(s) to modify inside `/core/src/components/`.
2. Take a look at the [Stencil Documentation](https://stenciljs.com/docs/introduction/) and other components to understand the implementation of these components.
3. Make your changes to the component. If the change is overly complex or out of the ordinary, add comments so we can understand the changes.
4. [Preview your changes](#preview-changes) locally.
5. [Modify the documentation](#modifying-documentation) if needed.
6. [Run prettier](#prettier-changes) on the directory and make sure all files are formatted.
6. [Run lint](#lint-changes) on the directory and make sure there are no errors.
7. [Build the project](#building-changes).
8. After the build is finished, commit the changes. Please follow the [commit message format](#commit-message-format) for every commit.
9. [Submit a Pull Request](#submit-pull-request) of your changes.


#### Preview Changes

##### Previewing in this repository

1. Run `npm start` from within the `core` directory.
2. A browser should open at `http://localhost:3333/`.
3. From here, navigate to one of the component's tests to preview your changes.
4. If a test showing your change doesn't exist, [add a new test or update an existing one](#modifying-tests).
5. To test in RTL mode, once you are in the desired component's test, add `?rtl=true` at the end of the url; for example: `http://localhost:3333/src/components/alert/test/basic?rtl=true`.
6. To test in dark mode, once you are in the desired component's test, add `?palette=dark` at the end of the url; for example: `http://localhost:3333/src/components/alert/test/basic?palette=dark`.

##### Previewing in an external app

We can use `npm pack` to test Poppy-ui changes in an external app outside of this repository. Follow the below steps based on your framework.

###### JavaScript

Run the following commands to build the core directory and pack the changes:

```bash
cd packages/core
npm i
npm run build
npm pack --pack-destination ~
```

Then, in your Poppy ui JavaScript app, run the following command to use the built package with the `.tgz` file that was created:

```bash
npm install file:/~/poppy-ui-core-1.0.0.tgz
```


###### Angular

Run the following commands to build the core & angular directories and pack the changes:

```bash
cd packages/core
npm i
npm run build
npm pack --pack-destination ~

cd ../angular
npm i
npm run sync
npm run build
cd dist/
npm pack --pack-destination ~
```

Then, in your Poppy ui Angular app, run the following commands to use the built packages with the `.tgz` files that were created:

```bash
rm -rf .angular/
npm install file:/~/poppy-ui-core-1.0.0.tgz
npm install file:/~/poppy-ui-angular-1.0.0.tgz
```


###### React

Run the following commands to build the core & react directories and pack the changes:

```bash
cd packages/core
npm i
npm run build
npm pack --pack-destination ~

cd ../react
npm i
npm run sync
npm run build
npm pack --pack-destination ~

cd ../react-router
npm i
npm run sync
npm run build
npm pack --pack-destination ~
```

Then, in your Poppy ui React app, run the following commands to use the built packages with the `.tgz` files that were created:

```bash
npm install file:/~/poppy-ui-core-1.0.0.tgz
npm install file:/~/poppy-ui-react-1.0.0.tgz
npm install file:/~/poppy-ui-react-router-1.0.0.tgz
```


##### Vue

Run the following commands to build the core & vue directories and pack the changes:

```bash
cd packages/core
npm i
npm run build
npm pack --pack-destination ~

cd ../vue
npm i
npm run sync
npm run build
npm pack --pack-destination ~

cd ../vue-router
npm i
npm run sync
npm run build
npm pack --pack-destination ~
```

Then, in your Poppy ui Vue app, run the following commands to use the built packages with the `.tgz` files that were created:

```bash
npm install file:/~/poppy-ui-core-1.0.0.tgz
npm install file:/~/poppy-ui-vue-1.0.0.tgz
npm install file:/~/poppy-ui-vue-router-1.0.0.tgz
```


#### Prettier Changes

1. Run `npm run prettier` to lint the TypeScript and Sass.



#### Lint Changes

> [!IMPORTANT]
> If you are using a Windows machine, you will need to configure your local development environment to use the correct line endings.
> - Check that the Git setting `core.autocrlf` is set to `false`: run `git config -l | grep autocrlf`. Switch it to false using: `git config --global core.autocrlf false`.
> - If you've already cloned the `poppy-docs` repo, the files may already be cached as LF. To undo this, you need to clean the cache files of the repository. Run the following (make sure you stage or commit your changes first): `git rm --cached -r .` then `git reset --hard`.


1. Run `npm run lint` to lint the TypeScript and Sass.
2. If there are lint errors, run `npm run lint:fix` to automatically fix any errors. Repeat step 1 to ensure the errors have been fixed, and manually fix them if not.
3. To lint and fix only TypeScript errors, run `npm run lint:ts` and `npm run lint:ts:fix`, respectively.
4. To lint and fix only Sass errors, run `npm run lint:sass` and `npm run lint:sass:fix`, respectively.


#### Building Changes

1. Once all changes have been made and the documentation has been updated, run `npm run build` inside of the `packages/core` directory. This will add your changes to any auto-generated files, if necessary.
2. Review the changes and, if everything looks correct, [commit](#commit-message-format) the changes.
3. Make sure the build has finished before committing. If you made changes to the documentation, properties, methods, or anything else that requires an update to a generate file, this needs to be committed.
4. After the changes have been pushed, publish the branch and [create a pull request](#creating-a-pull-request).

### Angular, React, and Vue

#### Modifying Files

1. Locate the files inside the relevant root directory:
  - Angular: [`/packages/angular/src`](/packages/angular/src)
  - React: [`/packages/react/src`](/packages/react/src)
  - Vue: [`/packages/vue/src`](/packages/vue/src)
2. Make your changes to the files. If the change is overly complex or out of the ordinary, add comments so we can understand the changes.
3. Run prettier on the directory and make sure all files are formatted.
3. Run lint on the directory and make sure there are no errors.
4. Build the project.
5. After the build is finished, commit the changes. Please follow the [commit message format](#commit-message-format) for every commit.
6. [Submit a Pull Request](#submit-pull-request) of your changes.



#### Preview Changes

##### Previewing in this repository

Follow the steps in the test directory for each framework:
  - Angular: [`/packages/angular/test`](/packages/angular/test/README.md)
  - React: [`/packages/react/test`](/packages/react/test/README.md)
  - Vue: [`/packages/vue/test`](/packages/vue/test/README.md)

##### Previewing in an external app

Follow the steps to [preview changes in core](#preview-changes).

#### Lint Changes

1. Run `npm run lint` to lint the TypeScript in the relevant directory:
  - Angular: [`/packages/angular/src`](/packages/angular/src)
  - React: [`/packages/react/src`](/packages/react/src)
  - Vue: [`/packages/vue/src`](/packages/vue/src)
2. If there are lint errors, run `npm run lint.fix` to automatically fix any errors. Repeat step 1 to ensure the errors have been fixed, and manually fix them if not.

#### Building Changes

1. Once all changes have been made, run `npm run build` inside of the package's root directory. This will add your changes to any auto-generated files, if necessary.
2. Review the changes and, if everything looks correct, [commit](#commit-message-format) the changes.
3. Make sure the build has finished before committing. If you made changes to the documentation, properties, methods, or anything else that requires an update to a generate file, this needs to be committed.
4. After the changes have been pushed, publish the branch and [create a pull request](#creating-a-pull-request).

### Submit Pull Request

1. [Create a new pull request](https://github.com/CheeseGrinder/poppy-ui/compare) with the `main` branch as the `base`. You may need to click on `compare across forks` to find your changes.
2. See the [Creating a pull request from a fork](https://help.github.com/articles/creating-a-pull-request-from-a-fork/) GitHub help article for more information.
3. Please fill out the provided Pull Request template to the best of your ability and include any issues that are related.

### Review Process for Feature PRs

The team has an internal design process for new Poppy features, which must be completed before the PR can be reviewed or merged. As a result of the design process, community feature PRs are subject to large changes. In some cases, the team may instead create a separate PR using pieces of the community PR. Either way, you will always receive co-author commit credit when the feature is merged.

To expedite the process, please ensure that all feature PRs have an associated issue created, with a clear use case for why the feature should be added to Poppy.


## Commit Message Guidelines

We have very precise rules over how our git commit messages should be formatted. This leads to readable messages that are easy to follow when looking through the project history. We also use the git commit messages to generate our [changelog](https://github.com/CheeseGrinder/poppy-ui/blob/main/CHANGELOG.md). Our format closely resembles Angular's [commit message guidelines](https://github.com/angular/angular/blob/main/CONTRIBUTING.md#commit).

### Commit Message Format

We follow the [Conventional Commits specification](https://www.conventionalcommits.org/). A commit message consists of a **header**, **body** and **footer**.  The header has a **type**, **scope** and **subject**:

```
<type> (<scope>): <subject>
<BLANK LINE>
<body>
<BLANK LINE>
<footer>
```

The **header** and the **scope** of the header are mandatory.

### Revert

If the commit reverts a previous commit, it should begin with `revert: `, followed by the header of the reverted commit. In the body it should say: `This reverts commit <hash>.`, where the hash is the SHA of the commit being reverted.

### Type

If the prefix is `feat`, `fix` or `perf`, it will appear in the changelog. However if there is any [BREAKING CHANGE](#footer), the commit will always appear in the changelog.

Must be one of the following:

* **feat**: A new feature
* **fix**: A bug fix
* **docs**: Documentation only changes
* **style**: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
* **refactor**: A code change that neither fixes a bug nor adds a feature
* **perf**: A code change that improves performance
* **test**: Adding missing tests
* **chore**: Changes to the build process or auxiliary tools and libraries such as documentation generation

### Scope

The scope can be anything specifying place of the commit change. Usually it will refer to the package you have modified, but it can also refer to a component. For example `action-sheet`, `button`, `css`, `menu`, `nav`, etc. If you make multiple commits for the same package/component, please keep the naming consistent. For example, if you make a change to navigation and the first commit is `fix (nav)`, you should continue to use `nav` for any more commits related to navigation. As a general rule, if you're modifying a component use the name of the folder.

### Subject

The subject contains succinct description of the change:

* use the imperative, present tense: "change" not "changed" nor "changes"
* do not capitalize first letter
* do not place a period `.` at the end
* entire length of the commit message must not go over 50 characters
* describe what the commit does, not what issue it relates to or fixes
* **be brief, yet descriptive** - we should have a good understanding of what the commit does by reading the subject

### Body

Just as in the **subject**, use the imperative, present tense: "change" not "changed" nor "changes".
The body should include the motivation for the change and contrast this with previous behavior.

### Footer

The footer should contain any information about **Breaking Changes** and is also the place to
reference GitHub issues that this commit **Closes**.

**Breaking Changes** should start with the word `BREAKING CHANGE:` with a space or two newlines. The rest of the commit message is then used for this.

### Examples

Does not appear in the generated changelog:

```
docs (changelog): update steps to update
```

Appears under "Features" header, toast subheader:

```
feat (toast): add 'buttons' property
```

Appears under "Bug Fixes" header, skeleton-text subheader, with a link to issue #28:

```
fix (skeleton-text): use proper color when animated

closes #28
```

Appears under "Performance Improvements" header, and under "Breaking Changes" with the breaking change explanation:

```
perf (css): remove all css utility attributes

BREAKING CHANGE: The CSS utility attributes have been removed. Use CSS classes instead.
```

Appears under "Breaking Changes" with the breaking change explanation:

```
refactor (animations): update to new animation system

BREAKING CHANGE:

Removes the old animation system to use the new Poppy animations.
```

The following commit and commit `667ecc1` do not appear in the changelog if they are under the same release. If not, the revert commit appears under the "Reverts" header.

```
revert: feat (skeleton-text): add animated property

This reverts commit 667ecc1654a317a13331b17617d973392f415f02.
```


## License

By contributing your code to the cheese-grinder/poppy-ui GitHub Repository, you agree to license your contribution under the MIT license.
