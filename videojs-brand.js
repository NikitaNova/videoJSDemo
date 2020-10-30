/**
 * videojs-brand
 * @version 0.0.4
 * @copyright 2020 Emmanuel Alves <manel.pb@gmail.com>
 * @license MIT
 */
(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.videojsBrand = f()}})(function(){var define,module,exports;return (function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
(function (global){(function (){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _videoJs = (typeof window !== "undefined" ? window['videojs'] : typeof global !== "undefined" ? global['videojs'] : null);

var _videoJs2 = _interopRequireDefault(_videoJs);

// Default options for the plugin.
var defaults = {
  image: "/logo-example.png",
  title: "Logo Title",
  destination: "http://www.google.com",
  destinationTarget: "_blank"
};

/**
 * Function to invoke when the player is ready.
 *
 * This is a great place for your plugin to initialize itself. When this
 * function is called, the player will have its DOM and child components
 * in place.
 *
 * @function onPlayerReady
 * @param    {Player} player
 * @param    {Object} [options={}]
 */
var onPlayerReady = function onPlayerReady(player, options) {
  var containerElement = document.createElement("div");
  containerElement.className = "vjs-brand-container";

  var linkElement = document.createElement("a");
  linkElement.className = "vjs-brand-container-link";
  linkElement.setAttribute("href", options.destination || defaults.destination);
  linkElement.setAttribute("title", options.title || defaults.title);
  linkElement.setAttribute("target", options.destinationTarget || defaults.destinationTarget);

  var imageElement = document.createElement("img");
  imageElement.src = options.image || defaults.image;

  linkElement.appendChild(imageElement);
  containerElement.appendChild(linkElement);

  player.controlBar.el().insertBefore(containerElement, player.controlBar.fullscreenToggle.el());
  player.addClass('vjs-brand');
};

/**
 * A video.js plugin.
 *
 * In the plugin function, the value of `this` is a video.js `Player`
 * instance. You cannot rely on the player being in a "ready" state here,
 * depending on how the plugin is invoked. This may or may not be important
 * to you; if not, remove the wait for "ready"!
 *
 * @function brand
 * @param    {Object} [options={}]
 *           An object of options left to the plugin author to define.
 */
var brand = function brand(options) {
  var _this = this;

  this.ready(function () {
    onPlayerReady(_this, _videoJs2["default"].mergeOptions(defaults, options));
  });
};

// Register the plugin with video.js.
_videoJs2["default"].plugin('brand', brand);

// Include the version number.
brand.VERSION = '0.0.4';

exports["default"] = brand;
module.exports = exports["default"];
}).call(this)}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}]},{},[1])(1)
});
