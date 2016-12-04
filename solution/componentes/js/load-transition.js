/**
* @version   $Id: load-transition.js 1637 2012-07-13 00:13:40Z kevin $
* @author    RocketTheme http://www.rockettheme.com
* @copyright Copyright (C) 2007 - 2014 RocketTheme, LLC
* @license   http://www.gnu.org/licenses/gpl-2.0.html GNU/GPLv2 only
*/(function(){var e=function(){var e=document.id("rt-transition");if(Browser.Engine.gecko19||Browser.Engine.trident&&!Browser.Engine.trident7){e&&(e.set("tween",{duration:800,transition:"quad:out"}),e.setStyles({visibility:"hidden",opacity:0}),e.removeClass("rt-hidden").fade("in"));return}e&&e.removeClass("rt-hidden").addClass("rt-visible")};window.addEvent("load",e)})();