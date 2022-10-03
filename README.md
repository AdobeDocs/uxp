# UXP Documentation

This repository contains the source files for the documentation of UXP.

It isn't intended to be hosted by itself, but instead should be imported into host-specific documentation for applications providing UXP-based extensibility (such as Photoshop and XD)

The documentation is based on the [`AdobeDocs/dev-site-documentation-template`](https://github.com/AdobeDocs/dev-site-documentation-template).

## Documentation Pages using docs from this repository

| Page                                | Repository                                                              |
| ----------------------------------- | ----------------------------------------------------------------------- |
| https://www.adobe.io/photoshop/uxp/ | [`AdobeDocs/uxp-photoshop`](https://github.com/AdobeDocs/uxp-photoshop) |
| https://www.adobe.io/xd/uxp/        | [`AdobeDocs/uxp-xd`](https://github.com/AdobeDocs/uxp-xd)               |

## Working

This repo is run manually and locally to pull-in markdowns generated from `torq-native` using JSDocs.

### Transclusions

- Transclusions play an important role when the content from this repo has to be imported into `AdobeDocs/uxp-photoshop` and `AdobeDocs/uxp-xd`. It carries the reference to the actual markdown content inside `src/pages`. 
- `uxp_documentation` is the alias name given to this repo when it is referred from other repos mentioned above.
- It carries references to pages in `src/pages` location

## Run this project

Create an .env file and define UXP_REPO_SOURCE & UXP_REPO_SOURCE

Example
```
UXP_REPO_SOURCE="<path-to>/torq-native/docs/dist"
UXP_REPO_SOURCE_DOCS="<path-to>/torq-native/docs/dist"
```

### Work in progress

This work is in attempt to make this repo work with specific branch in UXP source branch: https://git.corp.adobe.com/torq/torq-native/tree/sgoswami/jsdocrefactor. This repo expects `torq-native` to supply `_transclusions`, or files like `reference-js.js` etc. The sgoswami/jsdocrefactor brnach does not produce these files. Hence, use `npm run experiment`, which is the shorter version of the actual commands.
