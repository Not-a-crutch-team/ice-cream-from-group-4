parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"JS6f":[function(require,module,exports) {
for(var e=15,t=document.querySelector(".open"),o=document.querySelector(".close"),n=document.querySelector(".modals"),a=document.createDocumentFragment(),d=0;d<e;d++){var l=document.createElement("div");l.classList.add("modal-drop"),l.style.top=Math.floor(100*Math.random())+"vh",l.style.left=Math.floor(100*Math.random())+"vw",l.style.transitionDelay=Math.random()+"s",a.appendChild(l)}console.log(),n.appendChild(a),t.addEventListener("click",function(){n.style.display="block",window.setTimeout(function(){n.classList.add("active")},.1)}),o.addEventListener("click",function(){n.classList.remove("active"),window.setTimeout(function(){n.style.display="none"},3e3)});
},{}]},{},["JS6f"], null)
//# sourceMappingURL=/ice-cream-from-group-4/modal-buy-now.744ce82c.js.map