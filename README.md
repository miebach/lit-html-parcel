# No Framework with parcel and lit-html

This is a simple but powerful starter kit for a javascript web project. 

 - No framework involved
 - Parcel for development (simple replacement for webpack)
 - HMR just works with parcel, no configuration necessary
 - Template rendering with lit-html


## Install

1) It is assumed that node/npm is already installed globally.

2) Install yarn globally

```
sudo npm install -g yarn
```

3) Install parcel globally

Do not install it into the project.

https://parceljs.org/getting_started.html

```
sudo yarn global add parcel-bundler
```


4) Checkout this project

... and cd into its root directory.

5) Install npm packages 

```
yarn install
```

Yarn cli: https://yarnpkg.com/lang/en/docs/cli/install/

6) Start developing

To start a local dev server with HMR: 

    parcel index.html

## Yarn 

Uses a lockfile yarn.lock for better version control. 
There are 2 additional steps to make the lockfile work with git

1) Tell git to treat the lockfile as textfile and merge it

The file ./.gitattributes contains the line `yarn.lock -text`

2) Verify all merges of the lockfile manually

https://stackoverflow.com/a/5091756/362951

a) Tell git there is a custom merge driver. Append this to the repo's config file (.git/config).
*This step needs to be done once manually in each checked out location for now!*:

```
[merge "verify"]
        name = merge and verify driver
        driver = ./bin/git-merge-and-verify %A %O %B
```

Steps b) and c) are in the repository:

b) Added the executable file `bin/git-merge-and-verify.sh`:

```
#!/bin/bash
git merge-file "${1}" "${2}" "${3}"
exit 1
```
c) Told git to verify the merges of the lockfile by adding the line `yarn.lock merge=verify` to `./.gitattributes`. 

The result is that git will merge the lockfile normally, but as the script always returns non-zero git will afterwards indicate that there was a conflict, even if the merge was actually resolved without conflicts. The reason is that git sometimes could introduce errors when merging the lockfile, see https://github.com/yarnpkg/yarn/issues/1776#issuecomment-280437649

## Behaviour driven development and end-to-end testing

With mocha and puppeteer, see BEHAVIOUR.md

## `Parcel` with HMR

https://parceljs.org/

The package `parcel-bundle` should not be added locally into the project as a dev dependency, otherwise there were problems and HMR did not work with the current dependencies.

## Templates with `lit-html`

https://github.com/Polymer/lit-html

When a template is repeatedly rendered, only the changed content in the
dom is replaced. Quick demo video: https://github.com/miebach/lit-html-parcel/blob/master/doc/demo.mp4

Good introduction: https://alligator.io/web-components/lit-html/

## How to build this project from scratch

1. Install node system wide
2. Install yarn with node system wide 
3. Go to the empty folder for the new project
4. Start a new parcel project following the parcel instructions (uses yarn) https://parceljs.org/getting_started.html
5. Add lit-html with yarn to the project
