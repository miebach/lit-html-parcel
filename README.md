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
yarn install
```

3) Install parcel globally

Do not install it into the project.

https://parceljs.org/getting_started.html

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
