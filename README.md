whenOnScreen
====

whenOnScreen is a lightweight mobile optimised utility to check when an element is visible on screen. It checks for visibility both when vertical and horizontal scrolling is enabled.

####How it works?
The plugins uses the getBoundingClientRect function available as part of the W3C spec. The function returns the exact position of the element plus its height, width on the screen if it was positioned absolute in the layout. Read more about the funciton [here](https://developer.mozilla.org/en-US/docs/Web/API/Element.getBoundingClientRect). The tricky part that this plugin also handles is to include the case when inner scroll is enabled and we have to find the position relative to the outer scrollable container.


####How to use it?.

Call the utility on any element on which you want to do some operation once its visible on screen.

You can call it in two ways.

As a jquery plugin
```
$("selector").whenOnScreen();
```
Normal execution 
```
whenOnScreen(element);
```


####Parameters.
1. callback - The callback function to call when the visibility check is passed.
2. parent - pass if the element has a parent where inner scroll is enabled. Not passing this may result in passing the visibility check although the element is hidden behind the parent container. Check this [demo](http://agaase.github.io/webpages/whenonscreen/demos/demo3.html).
3. debug - true if debug log is to be printed. (default - false)
 
```
//an example call with all parameters.
$(".checkMe").whenOnScreen({
		"callback": function(){
			alert("visible");
		},
		"parent" : $(".itemS")[0],
		"debug" : true
	});
```

####Demos
1. [checking element inside a parent scrollable element which is both horizontally and vertically scrollable](http://agaase.github.io/webpages/whenonscreen/demos/demo1.html)
This demo checks for a box (one in red at bottom right) among the grid of boxes and turns it green once its visible.

2. [checking element inside a parent scrollable element which is hidden](http://agaase.github.io/webpages/whenonscreen/demos/demo2.html) The demo checks for element which is inside another scrollable element which is itself hidden. (Check this [demo](http://agaase.github.io/webpages/whenonscreen/demos/demo3.html) which is broken where if you dont pass the parent element it returns visible although its hidden behind parent div. )

####Installing and Building
 The dependencies and build is managed through grunt and you can use following steps to locally run grunt.
 
1. Clone the git project
2. run - npm install (installs npm dependencies)
3. run - grunt (runs jshint,cleans and builds the files under dist/).
