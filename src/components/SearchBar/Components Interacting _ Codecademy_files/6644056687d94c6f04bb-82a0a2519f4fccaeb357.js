(window.webpackJsonp=window.webpackJsonp||[]).push([[94],{"./webpack/assets/javascripts/components/CodeMirror/linters/index.js":function(e,s,o){"use strict";o.r(s);var r=o("./node_modules/codemirror/lib/codemirror.js"),t=o.n(r),n=o("./node_modules/htmlhint/lib/htmlhint.js"),i={"tagname-lowercase":!0,"attr-lowercase":!0,"attr-value-double-quotes":!1,"doctype-first":!1,"tag-pair":!0,"spec-char-escape":!0,"id-unique":!0,"src-not-empty":!0,"attr-no-duplication":!0};t.a.registerHelper("lint","html",function(e,s){for(var o=[],r=n.HTMLHint.verify(e,s&&s.rules||i),a=0;a<r.length;a++){var l=r[a],c=l.line-1,d=l.line-1,p=l.col-1,u=l.col;o.push({from:t.a.Pos(c,p),to:t.a.Pos(d,u),message:l.message,severity:l.type})}return o});var a=o("./node_modules/csslint/lib/csslint-node.js");t.a.registerHelper("lint","css",function(e,s){var o=[];if(!a.CSSLint)return window.console&&window.console.error("Error: window.CSSLint not defined, CodeMirror CSS linting cannot run."),o;for(var r,n=a.CSSLint.verify(e,s).messages.filter(function(e){return!e.message.match(/(['"]\d+fr['"])|(RBRACE)/)}),i=0;i<n.length;i++){var l=(r=n[i]).line-1,c=r.line-1,d=r.col-1,p=r.col;o.push({from:t.a.Pos(l,d),to:t.a.Pos(c,p),message:r.message,severity:r.type})}return o});o("./node_modules/codemirror/addon/lint/lint.css"),o("./node_modules/codemirror/addon/lint/lint.js"),o("./webpack/assets/javascripts/components/CodeMirror/styles/lint-tooltips.scss"),s.default="linters"},"./webpack/assets/javascripts/components/CodeMirror/styles/lint-tooltips.scss":function(e,s,o){}}]);
//# sourceMappingURL=6644056687d94c6f04bb-82a0a2519f4fccaeb357.js.map