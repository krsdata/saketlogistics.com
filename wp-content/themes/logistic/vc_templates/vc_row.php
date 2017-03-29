<?php
/** @var $this WPBakeryShortCode_VC_Row */
$output = $el_class = $bg_image = $bg_color = $bg_image_repeat = $font_color = $padding = $margin_bottom = $css = $full_width = $el_id = $parallax_image = $parallax = $bg_slider_size = '';
extract( shortcode_atts( array(
	'el_class' => '',
	'bg_image' => '',
	'bg_color' => '',
	'bg_image_repeat' => '',
	'font_color' => '',
	'padding' => '',
	'margin_bottom' => '',
	'row_fullwidth'	  => '', //ozy
	'row_fullheight'  => '', //ozy
	'bg_parallax'	  => '', //ozy
	'row_min_height'  => '', //ozy
	'bg_slider'		  => '', //ozy
	'bg_slider_images'=> '', //ozy
	'bg_slider_size'  => '', //ozy
	'bg_video'		  => '', //ozy
	'bg_video_mp4'	  => '', //ozy
	'bg_video_webm'	  => '', //ozy
	'bg_video_ogv'	  => '', //ozy
	'row_id'		  => '', //ozy	
	'video_overlay_color' => '', //ozy
	'bottom_button' => '', //ozy
	'bottom_button_icon' => '', //ozy
	'bottom_button_link' => '', //ozy
	'bottom_button_color' => '', //ozy
	'row_zero_column_space' => '', //ozy
	'bg_scroll' => '', //ozy
	'row_vertical_center' => '', //ozy	
	'full_width' => false,
	'parallax' => false,
	'parallax_image' => false,
	'css' => '',
	'el_id' => '',
), $atts ) );
$parallax_image_id = '';
$parallax_image_src = '';

// wp_enqueue_style( 'js_composer_front' );
wp_enqueue_script( 'wpb_composer_front_js' );
// wp_enqueue_style('js_composer_custom_css');

$el_class = $this->getExtraClass( $el_class );

$css_class = apply_filters( VC_SHORTCODE_CUSTOM_CSS_FILTER_TAG, 'vc_row wpb_row ' . ( $this->settings( 'base' ) === 'vc_row_inner' ? 'vc_inner ' : '' ) . get_row_css_class() . $el_class . vc_shortcode_custom_css_class( $css, ' ' ), $this->settings['base'], $atts );

$style = $this->buildStyle( $bg_image, $bg_color, $bg_image_repeat, $font_color, $padding, $margin_bottom );

/*ozy*/
/*if font color selected for the row element, make sure all the sub elements are affected*/
if($font_color && $css_class) {
	global $ozyHelper;
	$rand_id = "ozy-crfclr-". rand(1,10000);
	$ozyHelper->set_footer_style(".$rand_id h1,.$rand_id h2,.$rand_id h3,.$rand_id h4,.$rand_id h5,.$rand_id h6{color:$font_color !important;}");
	$css_class .= " " . $rand_id;
}

/*ozy*/
$css_class .= ($row_fullwidth == '1' ? ' ozy-custom-full-row' : '');
$css_class .= ($row_fullheight == '1' ? ' ozy-custom-fullheight-row' : '');
$css_class .= ($row_vertical_center == '1' ? ' ozy-custom-verticalcentered-row' : '');
$css_class .= ($bg_parallax == 'on' || $bg_parallax == '1' ? ' ozy-custom-row parallax' : '');

if((int)$row_min_height>0) {
	if(strpos($style, 'style="')>-1) {
		$style = str_replace('style="', ' style="position:relative;overflow:hidden;min-height:'. $row_min_height .'px;', $style);
	}else{
		$style = ' style="position:relative;overflow:hidden;min-height:'. $row_min_height .'px;"';
	}
}
$css_class .= ($bg_video == 'on' ? ' ozy-row-has-video' : '');
$css_class .= ($row_zero_column_space == '1' ? ' ozy-row-zero-space' : '');
$css_class .= ($full_width == 'stretch_row_content_no_spaces' ? ' vc_row-no-padding' : '');
if(!$el_id && $row_id) $el_id = $row_id; //ozy. cover old ROW ID value

?>
	<div <?php echo isset( $el_id ) && ! empty( $el_id ) ? "id='" . esc_attr( $el_id ) . "'" : ""; ?> <?php
?>class="<?php echo esc_attr( $css_class ); ?><?php if ( $full_width == 'stretch_row_content_no_spaces' ): echo ' vc_row-no-padding'; endif; ?><?php if ( ! empty( $parallax ) ): echo ' vc_general vc_parallax vc_parallax-' . $parallax; endif; ?><?php if ( ! empty( $parallax ) && strpos( $parallax, 'fade' ) ): echo ' js-vc_parallax-o-fade'; endif; ?><?php if ( ! empty( $parallax ) && strpos( $parallax, 'fixed' ) ): echo ' js-vc_parallax-o-fixed'; endif; ?>"<?php if ( ! empty( $full_width ) ) {
	echo ' data-vc-full-width="true" data-vc-full-width-init="false" ';
	if ( $full_width == 'stretch_row_content' || $full_width == 'stretch_row_content_no_spaces' ) {
		echo ' data-vc-stretch-content="true"';
	}
} ?>
<?php
// parallax bg values

$bgSpeed = 1.5;
?>
<?php
if ( $parallax ) {
	wp_enqueue_script( 'vc_jquery_skrollr_js' );

	echo '
            data-vc-parallax="' . $bgSpeed . '"
        ';
}
if ( strpos( $parallax, 'fade' ) ) {
	echo '
            data-vc-parallax-o-fade="on"
        ';
}
if ( $parallax_image ) {
	$parallax_image_id = preg_replace( '/[^\d]/', '', $parallax_image );
	$parallax_image_src = wp_get_attachment_image_src( $parallax_image_id, 'full' );
	if ( ! empty( $parallax_image_src[0] ) ) {
		$parallax_image_src = $parallax_image_src[0];
	}
	echo '
                data-vc-parallax-image="' . $parallax_image_src . '"
            ';
}
?>
<?php echo $style; echo $bg_scroll ? ' data-bgscroll="'. esc_attr($bg_scroll) .'"':'' ?>><?php
/*ozy*/
if($bg_slider === 'on') {
	$bg_slider_images = explode(',', $bg_slider_images); $counter = 0;
	echo '<div id="ozy-background-cycler" class="'. esc_attr($bg_slider_size) .'" >';
	foreach($bg_slider_images as $bg_slider_image) {
		$current_image = wp_get_attachment_image_src($bg_slider_image, 'full');
		if(isset($current_image[0])) {
			echo '<div class="'. ($counter === 0? 'active' : '') .'" style="background-image:url('. esc_attr($current_image[0]) .')"></div>';
		}
		$counter++;
	}
	echo '</div>';
}

/*ozy*/
if($bg_video == 'on') { 
	echo '<video class="slider-video" width="1920" height="1081" style="position:absolute;left:0;top:0;" preload="auto" loop autoplay src="'.$bg_video_mp4.'">';
	if($bg_video_ogv) echo '<source type="video/ogv" src="'. $bg_video_ogv .'">';
	if($bg_video_mp4) echo '<source type="video/mp4" src="'. $bg_video_mp4 .'">';	
	if($bg_video_webm) echo '<source type="video/webm" src="'. $bg_video_webm .'">';
	echo '</video>';
}
if($video_overlay_color) {
	echo '<div class="video-mask'. ($video_overlay_color ? ' has-bg' : '' ) .'" '. ($video_overlay_color ? ' style="background-color:'. $video_overlay_color .';"' : '' ) .'></div>';
}
echo '<div class="parallax-wrapper">'; //ozy
echo wpb_js_remove_wpautop( $content );
echo '</div>'; //ozy
/*ozy*/
if($bottom_button == 'on') {
	echo '<a href="'. $bottom_button_link .'" class="row-botton-button" style="color:'. $bottom_button_color .'"><span class="'. $bottom_button_icon .'" ></span></a>';
}
?></div><?php echo $this->endBlockComment( 'row' );
if ( ! empty( $full_width ) ) {
	echo '<div class="vc_row-full-width"></div>';
}