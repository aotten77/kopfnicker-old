/*!
 * require-main
 *
 * http://joinmedia.de/
 *
 * Copyright (c) 2014 join.media GmbH & Co. KG
 *
 * Created by aotten77 on 22.08.2014.
 *
 * Released under the MIT license
 */
var pathToJQuery;
var buildPath = (window.dc.config.loadUnminifyVersion) ? '' : 'build/';
if('querySelector' in document && 'localStorage' in window && 'addEventListener' in window){
	pathToJQuery = buildPath+'describer-core/libs/jquery-2.1.0';
}else{
	pathToJQuery = buildPath+'describer-core/libs/jquery-1.11.0';
}
require.config({
	baseUrl: '/js',
	paths      : {
		// ******************* describer-core ******************************
		'_config'                                           : buildPath+'describer-config/describer',
		'config.validation'                                 : buildPath+'describer-config/validation',
		'config.googlemap'                                  : buildPath+'describer-config/googlemap',
		'config.require-css.owl_carousel'                   : buildPath+'describer-config/require-css/owl.carousel',
		'config.require-css.video'                          : buildPath+'describer-config/require-css/video',
		'config.languageTextObj'                            : buildPath+'describer-config/languageTextObj',
		'language/nls/speak'                                : buildPath+'describer-config/nls/speak',
		'language/nls/en/speak'                             : buildPath+'describer-config/nls/en/speak',


		// ******************* describer-core ******************************
		'async'                                             : buildPath+'describer-core/libs/async',
		'jquery'                                            : pathToJQuery,
		'scrolltotop'                                       : buildPath+'describer-core/libs/scrolltotop',
		'rAF'                                               : buildPath+'describer-core/libs/rAF',


		// mylibs
		'core'                                              : buildPath+'describer-core/core',

		'_super'                                            : buildPath+'describer-core/_super',
		'actions.add'                                       : buildPath+'describer-core/actions/add',
		'actions.ajax'                                      : buildPath+'describer-core/actions/ajax',
		'actions.apply'                                     : buildPath+'describer-core/actions/apply',
		'actions.exec'                                      : buildPath+'describer-core/actions/exec',
		'actions.link'                                      : buildPath+'describer-core/actions/link',
		'actions.move'                                      : buildPath+'describer-core/actions/move',
		'actions.remove'                                    : buildPath+'describer-core/actions/remove',
		'actions.scroll'                                    : buildPath+'describer-core/actions/scroll',
		'actions.set'                                       : buildPath+'describer-core/actions/set',
		/*		'actions.sticky'                                   : 'mylibs/actions/sticky',*/
		'actions.toggle'                                    : buildPath+'describer-core/actions/toggle',
		'actions.trigger'                                   : buildPath+'describer-core/actions/trigger',



		// ******************* describer-more ******************************

		'modules.carousel'                                  : buildPath+'describer-add-ons/modules/carousel',
		//'modules.carousel-ts'                               : buildPath+'describer-more/modules/carousel-ts',
		//
		///*'modules.carousel-ts'                              : 'describer-more/empty',*/
		//'modules.countdown'                                 : buildPath+'describer-more/modules/countdown',
		//'modules.dependentSelectionGroup'                   : buildPath+'describer-more/modules/dependentSelectionGroup',
		//'modules.equalheights'                              : buildPath+'describer-more/modules/equalheights',
		//'modules.form.autocomplete'                         : buildPath+'describer-more/modules/form/autocomplete',
		//'modules.form.formvalidate'                         : buildPath+'describer-more/modules/form/formvalidate',
		//'modules.form.selectOptionExtractInGroup'           : buildPath+'describer-more/modules/form/selectOptionExtractInGroup',
		//'modules.form.submitbutton'                         : buildPath+'describer-more/modules/form/submitbutton',
		//'modules.fotoupload'                                : buildPath+'describer-more/modules/fotoupload',
		'modules.googlemap'                                 : buildPath+'describer-add-ons/modules/googlemap',
		'modules.modal'                                     : buildPath+'describer-add-ons/modules/modal',
		'modules.onView'                                    : buildPath+'describer-add-ons/modules/onView',
		//'modules.parallax'                                  : buildPath+'describer-more/modules/parallax',
		//'modules.scrollControlFrames'                       : buildPath+'describer-more/modules/scrollControlFrames',
		//'modules.scrollControlTransform'                    : buildPath+'describer-more/modules/scrollControlTransform',
		//'modules.tablesort'                                 : buildPath+'describer-more/modules/tablesort',
		//'modules.video'                                     : buildPath+'describer-more/modules/video',
		//'modules.videocontrol'                              : buildPath+'describer-more/modules/videoControl',
		//'modules.videoplayer'                               : buildPath+'describer-more/modules/videoplayer',

		// untouched externel
		'i18n'                                              : buildPath+'describer-add-ons/modules/i18n',
		//'jquery_canvasResize'                               : buildPath+'describer-more/plugins/jquery.canvasResize',
		//'fastclick'                                         : buildPath+'describer-more/plugins/fastclick',
		//'fixedfixed'                                        : buildPath+'describer-more/plugins/fixedfixed',
		//'fixedsticky'                                       : buildPath+'describer-more/plugins/fixedsticky',
		//'jquery_mousewheel'                                 : buildPath+'describer-more/plugins/jquery.mousewheel',
		'md5'                                               : buildPath+'describer-add-ons/plugins/md5',
		//'video_4_10_2'                                      : buildPath+'describer-more/plugins/video.4.10.2',
		//'videojs-youtube'                                   : buildPath+'describer-more/plugins/youtube',

		// customized externel
		//'jquery_autocomplete'                               : buildPath+'describer-more/plugins/customized/jquery.autocomplete',
		'jquery_ba-dotimeout'                               : buildPath+'describer-core/libs/jquery.ba-dotimeout',
		//'jquery_countdown'                                  : buildPath+'describer-more/plugins/customized/jquery.countdown',
		//'jquery_countdown-de'                               : buildPath+'describer-more/plugins/customized/jquery.countdown-de',
		//'jquery_exif'                                       : buildPath+'describer-more/plugins/customized/jquery.exif',
		//'jquery_parallax'                                   : buildPath+'describer-more/plugins/customized/jquery.parallax',
		//'jquery_plugin'                                     : buildPath+'describer-more/plugins/customized/jquery.plugin',
		//'jquery_smoothMousewheel'                           : buildPath+'describer-more/plugins/customized/jquery.smoothMousewheel',
		//'jquery_validate'                                   : buildPath+'describer-more/plugins/customized/jquery.validate',
		'owl_carousel'                                      : buildPath+'describer-add-ons/plugins/customized/owl.carousel',
		//'video'                                             : buildPath+'describer-more/plugins/customized/video',

		// overwritings externel
		//'overwritings.jquery_validate'                      : buildPath+'describer-more/plugins/overwritings/jquery.validate',
		'overwritings.owl_carousel'                         : buildPath+'describer-add-ons/plugins/overwritings/owl.carousel'
	},
	shim: {
		//'jquery_canvasResize': {
		//	deps: ['jquery_exif', 'jquery']
		//},
		//'fastclick': {
		//
		//},
		//'fixedsticky': {
		//	deps: ['fixedfixed']
		//}
	},
	map: {
	    '*': {
	        'css': buildPath+'describer-add-ons/plugins/css' // or whatever the path to require-css is
	    }
	},
	waitSeconds: 500,
	locale: document.getElementsByTagName('html')[0].getAttribute('lang')
});

require(['jquery', '_config'], function require_jquery($){
	// need jquery
	require(['core'], function require_core(){
		// DomReady
		$(function domReady(){

			if(window.dc.client.userOS === 'iOS' && Number(dc.client.userOSver.charAt(0)) < 8){
				require(['viewport-units-buggyfill'], function(vub){
					vub.init();
				});
			}

			var $body = $('body');

			// -----------------------------------------------------
			// --------------- User Events -------------------------
			// -----------------------------------------------------

			//---------------- Listener for focus, change, blur, checkValidation -------------------------------------


			// Jedes Input(ausgenommen type="submit"), texarea und select feuert ein Event "checkValidation" wenn focus, change oder blur getriggert wird.
			// TODO Andreas evtl. obsolate da hier auch mit jmtrigger:checkValidation gearbeitet werden kann. Prüfen. Evtl. dominit="true" und blur, focus, jmtrigger:checkValidtion in den Config-Event-Stirng
			$body.on('blur change focus checkValidation', 'form[data-jmname="form"]', dc.eventflow.eventDelegationTrigger);

			// Change-Listener für select, textarea und input ohne input[type="radio"] zur initialisierung und Aufruf der change-Funktion des Plugins
			$body.on('change',  'select[data-jmname], textarea[data-jmname],input[data-jmname]:not(input[type="radio"][data-jmname])', dc.eventflow.eventDelegationTrigger);

			// Change-Listenerinput[type="radio"]
			$body.on('change',  'input[type="radio"][data-jmname]', dc.eventflow.eventDelegationTriggerForRadios);


			//---------------- Listener for click --------------------------------------------------------

			$body.on('click dcpointer', '[data-jmname]:not(label[data-jmname], a[data-jmname], form[data-jmname])', dc.eventflow.eventDelegationTrigger);

			$body.on('click dcpointer', 'a[data-jmname]', dc.eventflow.eventDelegationTriggerForATags);

			$body.on('click dcpointer', 'label[data-jmname]', dc.eventflow.eventDelegationTriggerForLabels);


			// -----------------------------------------------------
			// --------------- generische Events -------------------
			// -----------------------------------------------------


			$body.on('dominit', '[data-jmname]', dc.eventflow.eventDelegationTriggerForDomInit);

			// Change-Listener für select, input[type="radio"] und input[type="checkbox"] zur initialisierung und Aufruf der change-Funktion des Plugins
			$body.on('jmtrigger', '[data-jmname]', dc.eventflow.eventDelegationTrigger);


			$(window).on('resize', dc.helper.checkOrientationAndTriggerDcResize);

			$body.on('touchstart.dctouch MSPointerDown.dctouch','.js-touch',  dc.pointer.start);
			$body.on('touchmove.dctouch MSPointerMove.dctouch','.js-touch',  dc.pointer.move);
			$body.on('touchend.dctouch MSPointerUp.dctouch','.js-touch',  dc.pointer.end);
			//			//$body.on('click.pointer', dc.pointerEnd);

			// -----------------------------------------------------
			// -------- ausführen von Domready-Funktionen ----------
			// -----------------------------------------------------

			// läde die auf der Seite benötigten JS-Module
			$body.requirementsForJmPlugins();

			// Initialisiert die Elemente, die mit dem Attribut data-jmdominit="true" versehen sind
			$body.triggerSelfexecObj();

			// Führt die im DomReadyObject hinterlegten Funktionen aus
			execDomReadyObject();

			dc.domready.checkUrl();
			dc.helper.setDevicePerfForParallax();

			// Trigger Picturefill um die entsprechenden Images in die Div-Container zu injecten
			try{picturefill();}catch(e){}

			if(dc.config.debug){
				dc.dev.checkConfigJS();
				dc.dev.checkJmNameElementenOnNecessaryDominitAttribut();
			}
		});
	});
});