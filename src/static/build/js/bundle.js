/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/static/build/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./static/assets/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./static/assets/js/index.js":
/*!***********************************!*\
  !*** ./static/assets/js/index.js ***!
  \***********************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// import React from 'react';
// import ReactDOM from 'react-dom';


// class App extends React.Component{

//     componentDidMount(){
//         console.log("Component did mount!!")
//     }

//     render(){
//         return(
//             <div>
//                 <h2>Hello, This is Homepage</h2>
//             </div>
//         )
//     }

// }

// ReactDOM.render(
//     <App/>,
//     document.getElementById('root')
// );

// Using VanillaJS 

document.addEventListener('DOMContentLoaded', function () {
    var Demo = function () {
        function Demo(element) {
            _classCallCheck(this, Demo);

            this.element = element;

            // this.element.innerText = "Hello, VanillaJS"

            this.createElement(this.element, 'h1', "Hello, VanillaJS");
        }

        /**
         * 
         * @param {*HtmlElement} p parent element to append the tag newly created
         * @param {*} tag 
         * @param {*} c 
         * @param {*} co 
         */


        _createClass(Demo, [{
            key: 'createElement',
            value: function createElement(p, tag, co) {
                var t = document.createElement(tag);
                t.innerText = co;
                p.appendChild(t);
                return p;
            }
        }]);

        return Demo;
    }();

    var el = document.querySelector('#root');

    var d = new Demo(el);

    console.log('Content Loaded');
});

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZmI5ZDhmOTdiZDY1NjRkM2ZiNDQiLCJ3ZWJwYWNrOi8vLy4vc3RhdGljL2Fzc2V0cy9qcy9pbmRleC5qcyJdLCJuYW1lcyI6WyJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJEZW1vIiwiZWxlbWVudCIsImNyZWF0ZUVsZW1lbnQiLCJwIiwidGFnIiwiY28iLCJ0IiwiaW5uZXJUZXh0IiwiYXBwZW5kQ2hpbGQiLCJlbCIsInF1ZXJ5U2VsZWN0b3IiLCJkIiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQzdEQTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUFBLFNBQVNDLGdCQUFULENBQTBCLGtCQUExQixFQUE4QyxZQUFVO0FBQUEsUUFFOUNDLElBRjhDO0FBR2hELHNCQUFZQyxPQUFaLEVBQW9CO0FBQUE7O0FBQ2hCLGlCQUFLQSxPQUFMLEdBQWVBLE9BQWY7O0FBRUE7O0FBRUEsaUJBQUtDLGFBQUwsQ0FBbUIsS0FBS0QsT0FBeEIsRUFBaUMsSUFBakMsRUFBdUMsa0JBQXZDO0FBQ0g7O0FBRUQ7Ozs7Ozs7OztBQVhnRDtBQUFBO0FBQUEsMENBa0JsQ0UsQ0FsQmtDLEVBa0IvQkMsR0FsQitCLEVBa0J6QkMsRUFsQnlCLEVBa0J0QjtBQUN0QixvQkFBSUMsSUFBSVIsU0FBU0ksYUFBVCxDQUF1QkUsR0FBdkIsQ0FBUjtBQUNBRSxrQkFBRUMsU0FBRixHQUFjRixFQUFkO0FBQ0FGLGtCQUFFSyxXQUFGLENBQWNGLENBQWQ7QUFDQSx1QkFBT0gsQ0FBUDtBQUNIO0FBdkIrQzs7QUFBQTtBQUFBOztBQTBCcEQsUUFBSU0sS0FBS1gsU0FBU1ksYUFBVCxDQUF1QixPQUF2QixDQUFUOztBQUVBLFFBQUlDLElBQUksSUFBSVgsSUFBSixDQUFTUyxFQUFULENBQVI7O0FBRUFHLFlBQVFDLEdBQVIsQ0FBWSxnQkFBWjtBQUNILENBL0JELEUiLCJmaWxlIjoianMvYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL3N0YXRpYy9idWlsZC9cIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3RhdGljL2Fzc2V0cy9qcy9pbmRleC5qc1wiKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCBmYjlkOGY5N2JkNjU2NGQzZmI0NCIsIi8vIGltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG4vLyBpbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcblxuXG4vLyBjbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XG5cbi8vICAgICBjb21wb25lbnREaWRNb3VudCgpe1xuLy8gICAgICAgICBjb25zb2xlLmxvZyhcIkNvbXBvbmVudCBkaWQgbW91bnQhIVwiKVxuLy8gICAgIH1cblxuLy8gICAgIHJlbmRlcigpe1xuLy8gICAgICAgICByZXR1cm4oXG4vLyAgICAgICAgICAgICA8ZGl2PlxuLy8gICAgICAgICAgICAgICAgIDxoMj5IZWxsbywgVGhpcyBpcyBIb21lcGFnZTwvaDI+XG4vLyAgICAgICAgICAgICA8L2Rpdj5cbi8vICAgICAgICAgKVxuLy8gICAgIH1cblxuLy8gfVxuXG4vLyBSZWFjdERPTS5yZW5kZXIoXG4vLyAgICAgPEFwcC8+LFxuLy8gICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb290Jylcbi8vICk7XG5cbi8vIFVzaW5nIFZhbmlsbGFKUyBcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uKCl7XG5cbiAgICBjbGFzcyBEZW1ve1xuICAgICAgICBjb25zdHJ1Y3RvcihlbGVtZW50KXtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnRcblxuICAgICAgICAgICAgLy8gdGhpcy5lbGVtZW50LmlubmVyVGV4dCA9IFwiSGVsbG8sIFZhbmlsbGFKU1wiXG5cbiAgICAgICAgICAgIHRoaXMuY3JlYXRlRWxlbWVudCh0aGlzLmVsZW1lbnQsICdoMScsIFwiSGVsbG8sIFZhbmlsbGFKU1wiIClcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBcbiAgICAgICAgICogQHBhcmFtIHsqSHRtbEVsZW1lbnR9IHAgcGFyZW50IGVsZW1lbnQgdG8gYXBwZW5kIHRoZSB0YWcgbmV3bHkgY3JlYXRlZFxuICAgICAgICAgKiBAcGFyYW0geyp9IHRhZyBcbiAgICAgICAgICogQHBhcmFtIHsqfSBjIFxuICAgICAgICAgKiBAcGFyYW0geyp9IGNvIFxuICAgICAgICAgKi9cbiAgICAgICAgY3JlYXRlRWxlbWVudChwLCB0YWcsICBjbyl7XG4gICAgICAgICAgICBsZXQgdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnKTtcbiAgICAgICAgICAgIHQuaW5uZXJUZXh0ID0gY29cbiAgICAgICAgICAgIHAuYXBwZW5kQ2hpbGQodClcbiAgICAgICAgICAgIHJldHVybiBwXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBsZXQgZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcm9vdCcpO1xuXG4gICAgbGV0IGQgPSBuZXcgRGVtbyhlbClcblxuICAgIGNvbnNvbGUubG9nKCdDb250ZW50IExvYWRlZCcpXG59KVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3N0YXRpYy9hc3NldHMvanMvaW5kZXguanMiXSwic291cmNlUm9vdCI6IiJ9