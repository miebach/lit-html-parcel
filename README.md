# No Framework with parcel and lit-html

This is a simple but powerful starter kit for a javascript web project. 

 - No framework
 - Parcel for development (Simple replacement for webpack)
 - HMR just works, no configuration necessary
 - Template rendering with lit-html. 
 
## `Parcel` with HMR

We use parcel with hot module replacement.

## Templates with `lit-html`

https://github.com/Polymer/lit-html

When a template is repeatedly rendered, only the changed content in the
dom is replaced. Quick demo video: https://github.com/miebach/lit-html-parcel/blob/master/doc/demo.mp4

Good introduction: https://alligator.io/web-components/lit-html/

## How to build this project from scratch

1. Install node system wide
2. Install yarn with node system wide
3. Go to the empty folder for the new project
4. Start a new parcel project following the parcel instructions (uses yarn)
5. Add lit-html with yarn to the project
