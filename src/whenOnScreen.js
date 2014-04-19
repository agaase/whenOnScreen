var $ = $ || {};
(function($,window){

var outerEle;
var eleToCheck;
var callbackFn;
var eventTimer = 0;
var keepChecking = false;
var debug = false;
/**
 * a dummy object representing the position of window object as
 * it would be returned by getBoundingClientRect()
 * @type {Object}
 */
var win = {
            "height":window.innerHeight,
            "width":window.innerWidth,
            "bottom":window.innerHeight,
            "top":0,
            "left":0,
            "right":window.innerWidth
          };

var log = function(msg,t){
  if(debug){
    var lf = console[t] || console["log"];
    lf.call(console,"whenonscreen:"+msg);
  }
};
/**
 * Function executed everytime a page is moved/scrolled.
 * @method pageMoveEvent
 */
var pageMoveEvent = function(){
  if(eventTimer){
    clearTimeout(eventTimer);
  }
  eventTimer = setTimeout(function(){
    log("checking..");
    checkIfElementLoaded();
  },500);
};

/**
 * Binds the scroll event to the window.
 * Generally the scroll interaction is identified by touchmove or mousewheel event.
 * @method bindScroll
 */
var bindScroll = function(){
  var timer=0;
  window.addEventListener("touchmove",pageMoveEvent);
  window.addEventListener("mousewheel",pageMoveEvent);
  checkIfElementLoaded();
};

var unbindScroll = function(){
  window.removeEventListener("touchmove",pageMoveEvent);
  window.removeEventListener("mousewheel",pageMoveEvent);
};

/**
 * Generic utility to checks the visibility of an element against a parent.
 * @method checkVisibility
 */
var checkVisibility = function(el,par){
  if(el.height >= par.height || (el.top <= par.bottom && el.bottom>par.top)){
      log("element is inside viewport vertically");
      if(el.width >= par.width || (el.left <= par.right && el.right>par.left)){
        log("element is inside viewport horizontally");
        return true;
      }
    }
  return false;
};

var checkIfElementLoaded = function(){
  var posEl = eleToCheck.getBoundingClientRect();
  if(outerEle){
    var posParent = outerEle.getBoundingClientRect();
    if(checkVisibility(posParent,win) && checkVisibility(posEl,posParent)){
        callbackFn();
        if(!keepChecking){
          unbindScroll();
        }
    }
  }else if(checkVisibility(posEl,win)){
        callbackFn();
        if(!keepChecking){
          unbindScroll();
        }
  }
};

if($.fn){
  $.fn.whenOnScreen = function(params){
    eleToCheck = $(this)[0];
    outerEle = params.parent;
    callbackFn = params.callback;
    debug = params.debug || debug;
    bindScroll();
  };
}
window.whenOnScreen = function(ele,params){
  eleToCheck = ele;
  outerEle = params.parent;
  callbackFn = params.callback;
  debug = params.debug || debug;
  bindScroll();
};

})($,window);