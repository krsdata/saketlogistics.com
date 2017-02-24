<?php

include_once('classes/tgm-plugin-activation.php');

/**
* TGM Plugin activator
*/
function logistic_register_required_plugins() {

	$plugins = array(
		array(
			'name'     	=> 'Visual Content Composer',
			'slug'     	=> 'js_composer',
			'source'   	=> get_stylesheet_directory() . '/plugins/js_composer.zip',
			'required' 	=> true,
			'version'	=> '4.6'
		),array(
			'name'     	=> 'Logistic Essentials',
			'slug'     	=> 'ozy-logistic-essentials',
			'source'   	=> get_stylesheet_directory() . '/plugins/ozy-logistic-essentials.zip',
			'required' 	=> true,
			'version'	=> '1.5'
		),array(
			'name'     	=> 'Master Slider',
			'slug'     	=> 'masterslider',
			'source'   	=> get_stylesheet_directory() . '/plugins/masterslider.zip',
			'required' 	=> false,
			'version'	=> '2.18.2'
		),array(
			'name'     	=> 'Theme Updater (by Envato)',
			'slug'     	=> 'envato-wordpress-toolkit-master',
			'source'   	=> get_stylesheet_directory() . '/plugins/envato-wordpress-toolkit-master.zip',
			'required' 	=> false,
			'version'	=> '1.7.2'
		),array(
			'name'     	=> 'Contact Form 7',
			'slug'     	=> 'contact-form-7',
			'required' 	=> false,
			'version'	=> '4.1.2'
		),array(
			'name'     	=> 'WordPress Importer',
			'slug'     	=> 'wordpress-importer',			
			'required' 	=> false,
			'version'	=> '0.6.1'			
		),array(
			'name'     	=> 'Widget Data - Setting Import/Export Plugin',
			'slug'     	=> 'widget-settings-importexport',
			'required' 	=> false,
			'version'	=> '1.4.1'
		),array(
			'name'     	=> 'MailChimp List Subscribe Form',
			'slug'     	=> 'mailchimp',
			'required' 	=> false,
			'version'	=> '1.4.2'
		)
	);

	$config = array(
		'domain'       		=> 'vp_textdomain',         	// Text domain - likely want to be the same as your theme.
		'default_path' 		=> '',                         	// Default absolute path to pre-packaged plugins
		'parent_menu_slug' 	=> 'themes.php', 				// Default parent menu slug
		'parent_url_slug' 	=> 'themes.php', 				// Default parent URL slug
		'menu'         		=> 'install-required-plugins', 	// Menu slug
		'has_notices'      	=> true,                       	// Show admin notices or not
		'is_automatic'    	=> false,					   	// Automatically activate plugins after installation or not
		'message' 			=> '',							// Message to output right before the plugins table
		'strings'      		=> array(
			'page_title'                       	=> __( 'Install Required Plugins', 'vp_textdomain' ),
			'menu_title'                       	=> __( 'Install Plugins', 'vp_textdomain' ),
			'installing'                       	=> __( 'Installing Plugin: %s', 'vp_textdomain' ), // %1$s = plugin name
			'oops'                             	=> __( 'Something went wrong with the plugin API.', 'vp_textdomain' ),
			'notice_can_install_required'     	=> _n_noop( '<span class="required-plugin-line">This theme requires the following plugin for the perfect results:</span> %1$s.', 'This theme requires the following plugins: %1$s.' ), // %1$s = plugin name(s)
			'notice_can_install_recommended'	=> _n_noop( 'This theme recommends the following plugin for the perfect results: %1$s.', 'This theme recommends the following plugins for the perfect results: %1$s.' ), // %1$s = plugin name(s)
			'notice_cannot_install'  			=> _n_noop( 'Sorry, but you do not have the correct permissions to install the %s plugin. Contact the administrator of this site for help on getting the plugin installed.', 'Sorry, but you do not have the correct permissions to install the %s plugins. Contact the administrator of this site for help on getting the plugins installed.' ), // %1$s = plugin name(s)
			'notice_can_activate_required'    	=> _n_noop( '<span class="required-plugin-line">The following required plugin is currently inactive:</span> %1$s.', 'The following required plugins are currently inactive: %1$s.' ), // %1$s = plugin name(s)
			'notice_can_activate_recommended'	=> _n_noop( 'The following recommended plugin is currently inactive: %1$s.', 'The following recommended plugins are currently inactive: %1$s.' ), // %1$s = plugin name(s)
			'notice_cannot_activate' 			=> _n_noop( 'Sorry, but you do not have the correct permissions to activate the %s plugin. Contact the administrator of this site for help on getting the plugin activated.', 'Sorry, but you do not have the correct permissions to activate the %s plugins. Contact the administrator of this site for help on getting the plugins activated.' ), // %1$s = plugin name(s)
			'notice_ask_to_update' 				=> _n_noop( 'The following plugin needs to be updated to its latest version to ensure maximum compatibility with this theme: %1$s.', 'The following plugins need to be updated to their latest version to ensure maximum compatibility with this theme: %1$s.' ), // %1$s = plugin name(s)
			'notice_cannot_update' 				=> _n_noop( 'Sorry, but you do not have the correct permissions to update the %s plugin. Contact the administrator of this site for help on getting the plugin updated.', 'Sorry, but you do not have the correct permissions to update the %s plugins. Contact the administrator of this site for help on getting the plugins updated.' ), // %1$s = plugin name(s)
			'install_link' 					  	=> _n_noop( 'Begin installing plugin', 'Begin installing plugins' ),
			'activate_link' 				  	=> _n_noop( 'Activate installed plugin', 'Activate installed plugins' ),
			'return'                           	=> __( 'Return to Required Plugins Installer', 'vp_textdomain' ),
			'plugin_activated'                 	=> __( 'Plugin activated successfully.', 'vp_textdomain' ),
			'complete' 							=> __( 'All plugins installed and activated successfully. %s', 'vp_textdomain' ), // %1$s = dashboard link
			'nag_type'							=> 'updated' // Determines admin notice type - can only be 'updated' or 'error'
		)
	);

	tgmpa( $plugins, $config );

}

add_action('tgmpa_register', 'logistic_register_required_plugins');

?>