(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{21:function(t,e,n){"use strict";n.d(e,"a",function(){return f});var o=n(0),r=n(55),a=n.n(r);function i(t){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function l(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function c(t,e){return!e||"object"!==i(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function u(t){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function s(t,e){return(s=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var f=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),c(this,u(e).apply(this,arguments))}var n,r,i;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&s(t,e)}(e,o["Component"]),n=e,(r=[{key:"render",value:function(){return o.createElement("div",null,o.createElement("img",{src:a.a}))}}])&&l(n.prototype,r),i&&l(n,i),e}()},44:function(t,e,n){"use strict";var o=n(0),r=n(13),a=n(2),i=n.n(a);function l(t){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function c(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function u(t){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function s(t,e){return(s=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function f(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}var p=function(t){function e(t){var n,o,r;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),o=this,r=u(e).call(this,t),(n=!r||"object"!==l(r)&&"function"!=typeof r?f(o):r).handleDelete=function(t){t.preventDefault(),i.a.delete("http://localhost/api/books/".concat(n.props.loanid)).then(function(t){console.log(t)}).catch(function(t){console.log(t)})},n.state={showmodal:"",borrower:"",booktitle:"",date:n.props.date,active:""},n.handleClick=n.handleClick.bind(f(f(n))),n.handleClose=n.handleClose.bind(f(f(n))),n.handleDelete=n.handleDelete.bind(f(f(n))),n}var n,a,p;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&s(t,e)}(e,o["Component"]),n=e,(a=[{key:"handleClick",value:function(){this.setState({showModal:"is-active"})}},{key:"handleClose",value:function(){this.setState({showModal:""})}},{key:"componentWillMount",value:function(){var t=this;i.a.get("http://localhost/api/books").then(function(e){e.data.map(function(e){e._id===t.props.book&&t.setState({booktitle:e.title})})}),i.a.get("http://localhost/api/users").then(function(e){e.data.map(function(e){e._id===t.props.borrower&&t.setState({borrower:e.name})})}),this.props.active?this.setState({active:"Yes"}):this.setState({active:"No"})}},{key:"render",value:function(){return o.createElement("tr",null,o.createElement("th",null,this.state.booktitle),o.createElement("th",null,this.state.borrower),o.createElement("td",null,this.state.date),o.createElement("td",null,this.state.active),o.createElement("td",null,o.createElement("button",{className:"secondary-button"},"Edit"),o.createElement("button",{className:"selected-button",onClick:this.handleClick},"Delete")),o.createElement(r.a,{name:"a loan",closeModal:this.handleClose,show:this.state.showModal,title:"the loan of ".concat(this.props.book," by ").concat(this.props.borrower),delete:this.handleDelete}))}}])&&c(n.prototype,a),p&&c(n,p),e}();e.a=p},47:function(t,e,n){"use strict";var o=n(0),r=n.n(o);function a(){return(a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t}).apply(this,arguments)}e.a=function(t){return r.a.createElement("svg",a({viewBox:"0 0 60 60",width:250,height:250},t),r.a.createElement("path",{d:"M38.914 0H6.5v60h47V14.586L38.914 0zm.586 3.414L50.086 14H39.5V3.414zM8.5 58V2h29v14h14v42h-43z","data-original":"#000000",className:"list_svg__active-path","data-old_color":"#000000",fill:"#FFF"}),r.a.createElement("path",{d:"M42.5 21h-16a1 1 0 1 0 0 2h16a1 1 0 1 0 0-2zM22.875 18.219l-4.301 3.441-1.367-1.367a.999.999 0 1 0-1.414 1.414l2 2a.998.998 0 0 0 1.331.074l5-4a1 1 0 0 0-1.249-1.562zM42.5 32h-16a1 1 0 1 0 0 2h16a1 1 0 1 0 0-2zM22.875 29.219l-4.301 3.441-1.367-1.367a.999.999 0 1 0-1.414 1.414l2 2a.998.998 0 0 0 1.331.074l5-4a1 1 0 0 0-1.249-1.562zM42.5 43h-16a1 1 0 1 0 0 2h16a1 1 0 1 0 0-2zM22.875 40.219l-4.301 3.441-1.367-1.367a.999.999 0 1 0-1.414 1.414l2 2a.998.998 0 0 0 1.331.074l5-4a1 1 0 0 0-1.249-1.562z","data-original":"#000000",className:"list_svg__active-path","data-old_color":"#000000",fill:"#FFF"}))}},51:function(t,e,n){"use strict";var o=n(0),r=n(52),a=n(2),i=n.n(a);function l(t){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function c(t){return function(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function u(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function s(t){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function f(t,e){return(f=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function p(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}var h=function(t){function e(t){var n,o,r;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),o=this,(n=!(r=s(e).call(this,t))||"object"!==l(r)&&"function"!=typeof r?p(o):r).handleSubmit=n.handleSubmit.bind(p(p(n))),n.state={review:[]},n}var n,a,h;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&f(t,e)}(e,o["Component"]),n=e,(a=[{key:"componentDidMount",value:function(){var t=this;i.a.get("http://localhost/api/reviews/").then(function(e){var n=e.data;t.setState({review:n})})}},{key:"handleSubmit",value:function(t){var e=this;t.preventDefault(),i.a.post("http://localhost/api/reviews",{authorID:this.state.authorID,authorName:this.state.authorName,authorSurname:this.state.authorSurname,bookID:this.state.bookID,rating:this.state.rating,comment:this.state.comment}).then(function(t){200!==t.status?console.log("Vous avez déjà posté cette review"):e.setState(function(e){return{review:[].concat(c(e.review),[t.data])}})})}},{key:"render",value:function(){var t=this,e=this.state.review.map(function(e,n){var a=n+1;if(e.bookID===t.props.id)return o.createElement(r.a,{index:a,key:e._id,author:e.authorName,book:e.bookID,rating:e.rating,comment:e.comment,created:e.created_at})});return o.createElement("div",{className:"modal ".concat(this.props.show)},o.createElement("div",{className:"modal-background"}),o.createElement("div",{className:"modal-content"},o.createElement("h1",{id:"modalTitle"},this.props.title),o.createElement("p",{id:"modalAuthor"},"By ".concat(this.props.author)),o.createElement("img",{src:this.props.thumbnail}),o.createElement("p",{id:"modalSummary"},this.props.summary),o.createElement("div",{className:"reviewcont"},o.createElement("h1",{className:"titlereview"}," ","Reviews"),o.createElement("br",null),o.createElement("br",null),o.createElement("br",null),e,o.createElement("form",{onSubmit:this.handleSubmit},o.createElement("input",{className:"InsideReview",placeholder:"Your review here"}),o.createElement("button",{className:"submit-button"},"Into the wild")))),o.createElement("button",{onClick:this.props.closeModal,className:"modal-close is-large","aria-label":"close"}))}}])&&u(n.prototype,a),h&&u(n,h),e}();e.a=h}}]);