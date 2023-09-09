# UXP Documentation

This repository contains the source files for the documentation of UXP. It consumes the md files generated from the internal `torq-native` repository.

It isn't intended to be hosted by itself but instead should be imported into host-specific documentation for applications providing UXP-based extensibility (such as Photoshop and XD)

The documentation is based on the [`AdobeDocs/dev-site-documentation-template`](https://github.com/AdobeDocs/dev-site-documentation-template).

## Documentation website using docs from this repository

| Page                                | Repository                                                              |
| ----------------------------------- | ----------------------------------------------------------------------- |
| https://developer.adobe.com/photoshop/uxp/ | [`AdobeDocs/uxp-photoshop`](https://github.com/AdobeDocs/uxp-photoshop) |
| https://developer.adobe.com/xd/uxp/        | [`AdobeDocs/uxp-xd`](https://github.com/AdobeDocs/uxp-xd)               |
| https://developer.adobe.com/indesign/uxp/  | [`AdobeDocs/uxp-indesign`](https://github.com/AdobeDocs/uxp-indesign)    |


## Run this project

This repo is run manually and locally to pull in markdowns generated from `torq-native` using JSDocs. 

1. You must first ensure that the markdowns in `torq-native` are available locally on your machine.
2. Create an .env file and define UXP_REPO_SOURCE_DOCS pointing to the markdown folder.
Example
```
UXP_REPO_SOURCE_DOCS="<path-to-torq-native>/docs/dist"
```
3. Run `npm run prepare-docs` to copy over the files.

## Working

### Transclusions

- Transclusions play an important role when the content from this repo has to be imported into `AdobeDocs/uxp-photoshop`, `AdobeDocs/uxp-xd`, and `AdobeDocs/uxp-indesign`. It carries the reference to the actual markdown content inside `src/pages`. 
- `uxp_documentation` is the alias name given to this repo when it is referred from other repos mentioned above.
- It carries references to pages in `src/pages` location

### Side navigation

The side navigation panel in the devsite is generated from the `reference-*.js` files.

