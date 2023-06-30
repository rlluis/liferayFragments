This project has been created with [generator-liferay-fragments][1]. You can read
how to manage this project in the [generator documentation][2].

[1]: https://www.npmjs.com/package/generator-liferay-fragments
[2]: https://www.npmjs.com/package/generator-liferay-fragments#usage

Up to now this collection includes five different fragments, CSS & JS files to be configured as remote apps, and some examples of News Structure and Templates.

# Containers
A Sticky container fragment with pure CSS and just JS to adjust when Control Panel or Publications is active and deactivate it if in edit mode, 100% friendly with Liferay and easy to use. 

NOTE: you need to add the fragment to a Master Page template (so you have the CSS class and the JS) and then add a Normal Container in the page and add the CSS Class to this normal container in the advanced tab. All this is because of a bug that wil be solved in the future, but it's easy anyways. The current bug is that for the sticky to work, the sticky class needs to be added two divs in the tree before the actual div. The only way of doing this wihout complex code is to add a class in the advanced tab of a normal container as this class (sticky) will be correctly placed in the tree of divs.
Another way could be to create a CSS a JS and add both in the Master Page configuration and repeat again the steps above adding a normal container and adding the sticky class (from the remote's CSS) here


# News

The NEWS TICKER will show a scrolling electronic display of a Collecion defined in Liferay, now also compatible with LXC!. You will be able to:

 - Configure the Collection
 - Configure a template to show the items of the collection (WARNING: there's a dependency with [Evan's article template contributor (stop using ServiceLocator)][3] HOWEVER, if you don't have this module (like in LXC) it will still be compatible as in case the module is missing it will call the HEADLESS layer
 - Define the Text Color of the left part (ej. Breaking News:). This color will also be applied as a border for the full news ticker and for a dot separing each headline
 - Define the background color of the left part
 - Define the Text Color of the right part (the headlines from the Collection)
 - In the Templates folder there is an example of a template that you can use (with also a News Structure) as an starting point

[3]: https://github.com/lfrsales/article-service-template-context-contributor

To create something like this (just the Announcements bar below the Advices' label):

![liferayFragments](/images/NewsTicker.png)

Inverse-Card is a Card with the image below the text body and covering the space with a image. You will be able to:

 - Configure the type of Header (H1, H2, etc.) for the title of the card
 - You can also configure the max size of the image and decide if the card hsa a transiition for Hover or not and up to 3 different transition effects
 
 ![liferayFragments](/images/InverseCard.png)
 
News-Slider is a SLIDER, based on the awesome JQuery slider work by the author's of the Slick Slider (https://kenwheeler.github.io/slick/). You will be able to:

 - Create a Slider with a Collection Display Fragment in a very easy way. No need to create ADT for Asset Publisher, just Fragments (News Slider and Collection Display Fragment)
 - First step is to add the dependencies with Slick Slider. For that you need to create two remote apps, one for CSS and another one for JS and configure them in a Master Page. To map the dependencies please use this URLs:
 
 JS --> https://cdn.jsdelivr.net/gh/rlluis/liferayFragments@v1.1.4/remoteCSS%26JS/slick.min.js
 
 CSS --> https://cdn.jsdelivr.net/gh/rlluis/liferayFragments@v1.1.4/remoteCSS%26JS/slick.css
 
 - In a Content Page you will then add news-slider Fragment and then drop a Collection Display Fragment on it. Then leave the collection configuration (Grid, etc.) as it is by default
 - The Fragment lets you configure different settings for the Slider like its type (Full, Centered, Fade), Colors of the arrows, Dots, speed, etc.
 - NOTE: the first time you add it while editing the page it won't work. You may need to save and come back to edit mode to see it's there working and now you can configure better the different parameters. Same will happen if you change a parameter: it will work once you save it and Publish. Unfortunately the DOM modification that is done here creates some problems when the DOM changes while editing. If you need a more stable version, use the next version of the slider (News Slider With Collection) where you will need a template, however
 - NOTE2: the fragment takes into account that you may want to add two or more instances in a page. It's possible, no problem.

 ![liferayFragments](/images/NewsSlider.png)
 
News-Slider-with-collection is just a variation of the SLIDER: similar to the Ticker, here you will find a fragment where you can configure a Collection and then it will be shown as an slider
 
 - The parameters to configure it are the same than the sample above. Plus a template to be used to shown each Piece of news.
 - So in this case you don't need to drag and drop a Collection Display Fragment. However, you will need a template to show each piece of news.
 - In the Templates folder there is an example of a template that you can use (with also a News Structure)
 - NOTE: This alternative is more stable than the other slider, but it's a little bit less fancy as you still need a template.
