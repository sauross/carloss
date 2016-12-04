/**
* @package    CDU Common Template
* @author     Christoph Hagedorn
* @copyright  Copyright © 2007 Free Software Foundation, Inc. <http://fsf.org />
* @license    GNU/GPL, see license.php
*
* snippet taken from
* @author Thoriq Firdaus, www.hongkiat.com
**
* CDU Common Template uses the Gantry Framework (http://www.rockettheme.com), a GNU/GPLv2 web platform theme framework
* Gantry uses the Joomla Framework (http://www.joomla.org), a GNU/GPLv2 content management system
**/(function(e){e(document).ready(function(){var t=e("#rt-header-surround-pattern").offset().top,n=function(){var n=e(window).scrollTop(),r=window.matchMedia("(max-width: 767px)");!r.matches&&n>t?e("#rt-header-surround-pattern").addClass("rt-sticky"):e("#rt-header-surround-pattern").removeClass("rt-sticky")};n(),e(window).scroll(function(){n()})})})(jQuery);