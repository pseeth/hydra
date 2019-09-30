(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{85:function(e,n,t){"use strict";t.r(n);var r=t(0),o=t.n(r),a=t(86);function c(e){var n=Object(r.useRef)(null),t=Object(r.useRef)("undefined"!=typeof document?document.createElement("script"):null);return Object(r.useEffect)((function(){n.current.appendChild(t.current)}),[]),Object(r.useEffect)((function(){for(var n in e)e.hasOwnProperty(n)&&(t.current[n]=e[n])})),o.a.createElement("div",{ref:n})}function l(){return(l=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}t.d(n,"frontMatter",(function(){return p})),t.d(n,"rightToc",(function(){return u})),t.d(n,"default",(function(){return b}));var p={id:"tab_completion",title:"Tab completion",sidebar_label:"Tab completion"},u=[],s={rightToc:u},f="wrapper";function b(e){var n=e.components,t=i(e,["components"]);return Object(a.b)(f,l({},s,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("p",null,"You can enable shell TAB completion "),Object(a.b)("pre",null,Object(a.b)("code",l({parentName:"pre"},{}),'eval "$(python your_python_script.py -sc install=SHELL_NAME)"\n# Or\neval "$(your_app -sc install=SHELL_NAME)"\n')),Object(a.b)("p",null,"Replace SHELL_NAME by your shell name, currently, only Bash is supported and we are relying on the community to implement completion plugins for additional shells."),Object(a.b)("p",null,"Example:"),Object(a.b)("pre",null,Object(a.b)("code",l({parentName:"pre"},{}),'eval "$(python your_python_script.py -sc install=bash)"\n')),Object(a.b)("p",null,"See this short video demonstration of tab completion:"),Object(a.b)(c,{id:"asciicast-269503",src:"https://asciinema.org/a/269503.js",async:!0,mdxType:"Script"}))}b.isMDXComponent=!0},86:function(e,n,t){"use strict";t.d(n,"a",(function(){return l})),t.d(n,"b",(function(){return s}));var r=t(0),o=t.n(r),a=o.a.createContext({}),c=function(e){var n=o.a.useContext(a),t=n;return e&&(t="function"==typeof e?e(n):Object.assign({},n,e)),t},l=function(e){var n=c(e.components);return o.a.createElement(a.Provider,{value:n},e.children)};var i="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},u=Object(r.forwardRef)((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,i=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&-1===n.indexOf(r)&&(t[r]=e[r]);return t}(e,["components","mdxType","originalType","parentName"]),u=c(t),s=r,f=u[l+"."+s]||u[s]||p[s]||a;return t?o.a.createElement(f,Object.assign({},{ref:n},i,{components:t})):o.a.createElement(f,Object.assign({},{ref:n},i))}));function s(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,c=new Array(a);c[0]=u;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l[i]="string"==typeof e?e:r,c[1]=l;for(var s=2;s<a;s++)c[s]=t[s];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"}}]);