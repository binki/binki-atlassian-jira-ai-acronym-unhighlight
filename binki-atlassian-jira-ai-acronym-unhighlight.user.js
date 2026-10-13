// ==UserScript==
// @name binki-atlassian-jira-ai-acronym-unhighlight
// @homepageURL https://github.com/binki/binki-atlassian-jira-ai-acronym-unhighlight
// @version 1.0.0
// @match https://*.atlassian.net/*
// @require https://github.com/binki/binki-userscript-on-query-selector/raw/6a5df240b70b2f393dd738791c931258ebf5984f/binki-userscript-on-query-selector.js
// ==/UserScript==

binkiOnQuerySelector('span.acronym-highlight', acronymHighlightSpan => {
  while (acronymHighlightSpan.lastChild) acronymHighlightSpan.after(acronymHighlightSpan.lastChild);
  acronymHighlightSpan.remove();
});
