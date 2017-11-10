!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("Megadraft"),require("React")):"function"==typeof define&&define.amd?define(["Megadraft","React"],t):"object"==typeof exports?exports["html-megadraft-plugin"]=t(require("Megadraft"),require("React")):e["html-megadraft-plugin"]=t(e.Megadraft,e.React)}(this,function(e,t){return function(e){function t(o){if(n[o])return n[o].exports;var r=n[o]={exports:{},id:o,loaded:!1};return e[o].call(r.exports,r,r.exports,t),r.loaded=!0,r.exports}var n={};return t.m=e,t.c=n,t.p="/dist/",t(0)}([function(e,t,n){e.exports=n(1)},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(2),a=n(3),i=o(a),u=n(7),l=o(u),f=n(6),c=o(f);t.default={title:c.default.PLUGIN_NAME,type:c.default.PLUGIN_TYPE,buttonComponent:i.default,blockComponent:l.default,options:{defaultDisplay:"medium",displayOptions:[{key:"small",icon:r.MegadraftIcons.MediaSmallIcon,label:"SMALL"},{key:"medium",icon:r.MegadraftIcons.MediaMediumIcon,label:"MEDIUM"},{key:"big",icon:r.MegadraftIcons.MediaBigIcon,label:"BIG"}]}}},function(t,n){t.exports=e},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==("undefined"==typeof t?"undefined":u(t))&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+("undefined"==typeof t?"undefined":u(t)));e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),f=n(4),c=o(f),p=n(5),d=o(p),s=n(6),y=o(s),b=n(2),h=function(e){function t(e){r(this,t);var n=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.onClick=n.onClick.bind(n),n}return i(t,e),l(t,[{key:"onClick",value:function(e){var t={type:y.default.PLUGIN_TYPE,caption:"Initial plugin text"};this.props.onChange((0,b.insertDataBlock)(this.props.editorState,t))}},{key:"render",value:function(){return c.default.createElement("button",{className:this.props.className,type:"button",onClick:this.onClick,title:y.default.PLUGIN_NAME},c.default.createElement(d.default,{className:"sidemenu__button__icon"}))}}]),t}(f.Component);t.default=h},function(e,n){e.exports=t},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==("undefined"==typeof t?"undefined":u(t))&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+("undefined"==typeof t?"undefined":u(t)));e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},f=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),c=n(4),p=o(c),d=function(e){function t(){return r(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),f(t,[{key:"render",value:function(){return p.default.createElement("svg",l({},this.props,{width:"24",height:"24",viewBox:"0 0 24 24"}),p.default.createElement("g",{fill:"none",fillRule:"evenodd"},p.default.createElement("path",{d:"M0 0h24v24H0z"}),p.default.createElement("path",{d:"M19.095 11.619h-1.143V8.571c0-.838-.685-1.523-1.523-1.523H13.38V5.905a1.905 1.905 0 0 0-3.81 0v1.143H6.524c-.838 0-1.516.685-1.516 1.523v2.896h1.135a2.058 2.058 0 0 1 0 4.114H5v2.895C5 19.314 5.686 20 6.524 20h2.895v-1.143a2.058 2.058 0 0 1 4.114 0V20h2.896c.838 0 1.523-.686 1.523-1.524V15.43h1.143a1.905 1.905 0 0 0 0-3.81z",fill:"currentColor"})))}}]),t}(p.default.Component);t.default=d},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={PLUGIN_NAME:"html megadraft plugin",PLUGIN_TYPE:"html-megadraft-plugin"}},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==("undefined"==typeof t?"undefined":u(t))&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+("undefined"==typeof t?"undefined":u(t)));e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},f=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),c=n(4),p=o(c),d=n(2),s=d.MegadraftPlugin.BlockContent,y=d.MegadraftPlugin.BlockData,b=d.MegadraftPlugin.BlockInput,h=d.MegadraftPlugin.CommonBlock,m=function(e){function t(e){r(this,t);var n=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n._handleCaptionChange=n._handleCaptionChange.bind(n),n._handleEdit=n._handleEdit.bind(n),n.actions=[{key:"edit",icon:d.MegadraftIcons.EditIcon,action:n._handleEdit},{key:"delete",icon:d.MegadraftIcons.DeleteIcon,action:n.props.container.remove}],n}return i(t,e),f(t,[{key:"_handleEdit",value:function(){alert(JSON.stringify(this.props.data,null,4))}},{key:"_handleCaptionChange",value:function(e){this.props.container.updateData({caption:e.target.value})}},{key:"render",value:function(){return p.default.createElement(h,l({},this.props,{actions:this.actions}),p.default.createElement(s,null,p.default.createElement("pre",null,this.props.data.caption||"- NO TEXT -")),p.default.createElement(y,null,p.default.createElement(b,{placeholder:"Caption",value:this.props.data.caption,onChange:this._handleCaptionChange})))}}]),t}(c.Component);t.default=m}])});
//# sourceMappingURL=html-megadraft-plugin.js.map