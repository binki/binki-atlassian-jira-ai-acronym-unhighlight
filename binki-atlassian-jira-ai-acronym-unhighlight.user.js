// ==UserScript==
// @name binki-atlassian-jira-ai-acronym-unhighlight
// @homepageURL https://github.com/binki/binki-atlassian-jira-ai-acronym-unhighlight
// @version 1.0.0
// @match https://*.atlassian.net/*
// @require https://github.com/binki/binki-userscript-when-element-changed-async/raw/88cf57674ab8fcaa0e86bdf5209342ec7780739a/binki-userscript-when-element-changed-async.js
// @require https://github.com/binki/binki-userscript-when-element-query-selector-async/raw/0a9c204bdc304a9e82f1c31d090fdfdf7b554930/binki-userscript-when-element-query-selector-async.js
// ==/UserScript==

(async () => {
  while (true) {
    const acronymHighlightSpan = await whenElementQuerySelectorAsync(document.body, 'span.acronym-highlight');
    while(acronymHighlightSpan.lastChild) acronymHighlightSpan.after(acronymHighlightSpan.lastChild);
    acronymHighlightSpan.remove();
  }
})();
