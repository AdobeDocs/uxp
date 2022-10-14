# UXP Documentation

This repository contains the source files for the documentation of UXP. It consumes the md files generated from `torq-native`.

It isn't intended to be hosted by itself, but instead should be imported into host-specific documentation for applications providing UXP-based extensibility (such as Photoshop and XD)

The documentation is based on the [`AdobeDocs/dev-site-documentation-template`](https://github.com/AdobeDocs/dev-site-documentation-template).

## Documentation Pages using docs from this repository

| Page                                | Repository                                                              |
| ----------------------------------- | ----------------------------------------------------------------------- |
| https://www.adobe.io/photoshop/uxp/ | [`AdobeDocs/uxp-photoshop`](https://github.com/AdobeDocs/uxp-photoshop) |
| https://www.adobe.io/xd/uxp/        | [`AdobeDocs/uxp-xd`](https://github.com/AdobeDocs/uxp-xd)               |


## Run this project

This repo is run manually and locally to pull-in markdowns generated from `torq-native` using JSDocs. 

1. You must first ensure that the markdowns in `torq-native` are available locally in your machine.
2. Create an .env file and define UXP_REPO_SOURCE_DOCS pointing to the markdown folder.
Example
```
UXP_REPO_SOURCE_DOCS="<path-to-torq-native>/docs/dist"
```
3. Run `npm run prepare-docs` to copy over the files.

## Working

### Transclusions

- Transclusions play an important role when the content from this repo has to be imported into `AdobeDocs/uxp-photoshop` and `AdobeDocs/uxp-xd`. It carries the reference to the actual markdown content inside `src/pages`. 
- `uxp_documentation` is the alias name given to this repo when it is referred from other repos mentioned above.
- It carries references to pages in `src/pages` location

### Side navigation

The side navigation panel in the devsite is generated from the `reference-*.js` files.

### Work in progress

- For Persistent file storage APIs, `storage.md` is not utilized yet. Some fixes to the old files were manually added. Refer to https://github.com/AdobeDocs/uxp/commit/b3c0c783bf3195704abfe18e1190ca7b5c0d534d.
- Files: version3P.md, known-issues.md, changelog3P.md, and src/pages/uxp/index.md, reference-spectrum/index.md were formatted manually in this repo. This should be done in `torq-native` instead. Refer to https://github.com/AdobeDocs/uxp/commit/dbb4671b6746ddeda3fb3ea5ac6e6e0da9d21715
- In the future, `_transclusions` should be generated from `torq-native`. For now, any new files should be manually added to `_transclusions` and `reference-*.js` files. Otherwise, it will not appear in the devsite.

