whenOnScreen
====

whenOnScreen is a lightweight mobile optimised utility to check when an element is visible on screen and call the passed callback. It checks for visibility both when vertial and horizontal scrolling is enabled.

####How it works?
The plugins uses the getBoundingClientRect function available as part of the W3C spec. The function returns the exact position of the element plus its height, width on the screen if it was positioned absolute in the layout. The tricky part is to include the case when inner scroll is enabled and we have to find the position relative to the outer container where scrolling is enabled.


####How to use it?.

Call the utility on any element where you want to do some miscellaneous task when the element is visible.

You can call it in two ways.
1. As a jquery plugin
```
$("selector").whenOnScreen();
```

2. Normal execution 
```
whenOnScreen(element);
```


####Parameters.
1. callback - The callback function to call when the visibility check is passed.
2. parent - pass if the element has a parent where inner scroll is enabled. Not passing this may result in passing the visibiliy check although the element is hidden behind the parent container.
3. debug - true if debug log is to be printed. (default - false)
 
```
//an example options object
$(".checkMe").whenOnScreen({
		"callback": function(){
			alert("visible");
		},
		"parent" : $(".itemS")[0],
		"debug" : true
	});
```

####Demos
1. [checking element inside a parent scrollable element](http://agaase.github.io/webpages/imgr/demos/demo1.html)
This demo checks for a box (one in red at bottom right) among the grid of boxes and turns it green once its visible.

####Installing and Building
 The dependencies and build is managed through grunt and you can use following steps to locally run grunt.
 
1. Clone the git project
2. run - npm install (installs npm dependencies)
3. run - grunt (runs jshint,cleans and builds the files under dist/).
