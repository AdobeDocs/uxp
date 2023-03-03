### Work in progress or TODO

1. For Persistent file storage APIs, `storage.md` is not utilized yet. Some fixes to the old files were manually added. Refer to https://github.com/AdobeDocs/uxp/commit/b3c0c783bf3195704abfe18e1190ca7b5c0d534d. Make sure you dont update `Persistent file storage/index.md` until you want to use storage.md. 
    * FileSystem.md was manually created by copying content from Storage.md
3.  Few files were manually changed in this repo. Be careful while merging their content. The incomming changes might be missing some information or change formatting. In the future, move these changes to the UXP source files.
    * `reference-js/index.md`
    * `LocalStorage.md`
    * `SessionStorage.md`
    * `Versions.md`
    * `version3P.md`
    * `known-issues.md`
    * `changelog3P.md`
    * `src/pages/api-ref/index.md`
    * `reference-spectrum/index.md`
    * `reference-js/index.md`
    * `HTMLWebViewElement.md`
4. Maintain a consistent order for the API information. 
    * Since
    * Description
    * See <link>
    * Params
    * Returns
    * Throws
    * Examples
6. Other fixes done manually in this repo which should be fixed in sourve files:
    * Backticks in H1 titles in source files.
    * Extra dots. Example `Promise.<void>` in SecureStorage.md
    * `<br>` tags without a closing `</br>`
7. Index pages (coming from index.md) show links ordered alphabetically. For example: https://developer.adobe.com/photoshop/uxp/2022/uxp/reference-js/Global%20Members/HTML%20DOM/. But the left side panel (coming from reference-*.js) is not necessarily alphabetical. Make them consistent.

