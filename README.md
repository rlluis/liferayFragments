# News

This project has been created with [generator-liferay-fragments][1]. You can read
how to manage this project in the [generator documentation][2].

[1]: https://www.npmjs.com/package/generator-liferay-fragments
[2]: https://www.npmjs.com/package/generator-liferay-fragments#usage

Up to now this collection includes three fragments.

The first one is a NEWS TICKER that will show a scrolling electronic display of a Collecion defined in Liferay, now also compatible with LXC!. You will be able to:

 - Configure the Collection
 - Configure a template to show the items of the collection (WARNING: there's a dependency with [Evan's article template contributor (stop using ServiceLocator)][3] HOWEVER, if you don't have this module (like in LXC) it will still be compatible as in case the module is missing it will call the HEADLESS layer
 - Define the Text Color of the left part (ej. Breaking News:). This color will also be applied as a border for the full news ticker and for a dot separing each headline
 - Define the background color of the left part
 - Define the Text Color of the right part (the headlines from the Collection)

[3]: https://github.com/lfrsales/article-service-template-context-contributor

To create something like this (just the Announcements bar below the Advices' label):

![liferayFragments](/images/NewsTicker.png)

The second one is an INVERSE CARD, with the image below the text body and covering the space with a minimum heigh of 200px (for the image). You will be able to:

 - Configure the type of Header (H1, H2, etc.) for the title of the card
 
 ![liferayFragments](/images/InverseCard.png)
 
The third one is a SLIDER, based on the awesome JQuery slider work by the author's of the Slick Slider (https://kenwheeler.github.io/slick/). You will be able to:

 - Create a Slider with a Collection Display Fragment in a very easy way. No need to create ADT for Asset Publisher, just Fragments (News Slider and Collection Display Fragment)
 - First step is to add the dependencies with Slick Slider. For that you need to create two remote apps, one for CSS and another one for JS and configure them in a Master Page. You will find these files in the remoteCSS&JS folder
 - The Fragment just needs to be added as the main one to be used in the Collection, leaving the collection configuration (Grid, etc.) as it is by default
 - The Fragment let you configure different settings for the Slider like its type (Full, Centered, Fade), Colors of the arrows, Dots, speed, etc.
 - For the EDIT mode to work, the JQuery will be loaded just one second after everything is loaded (only if edit mode). Pending to make this better but working on my tests so far
 - NOTE: the first time you add it while editing the page it won't work. You may need to save and come back to edit mode to see it's there working and now you can configure better the different parameters. Same will happen if you change a parameter: it will work once you save it.

 ![liferayFragments](/images/NewsSlider.png)