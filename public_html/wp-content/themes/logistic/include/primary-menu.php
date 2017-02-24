		<?php 
		if(!$ozy_data->hide_everything_but_content) { 
		?>
            <div id="header" class="header-v1">
                <div id="top-search" class="clearfix search-input-unfold">
                    <form action="<?php echo home_url(); ?>/" method="get" class="wp-search-form">
                        <i class="oic-pe-icon-7-stroke-24"></i>
                        <input type="text" name="s" id="search" autocomplete="off" placeholder="<?php echo get_search_query() == '' ? __('Type and hit Enter', 'vp_textdomain') : get_search_query() ?>" />
                        <i class="oic-pe-icon-7-stroke-139" id="ozy-close-search"></i>
                    </form>
                </div><!--#top-search-->
                <header>
                    <nav id="top-menu" class="<?php echo esc_attr($ozy_data->menu_align);?>">
                        <div class="logo">
                            <?php
                            if(ozy_get_option('use_custom_logo') == '1') {
                                echo '<a href="'. get_home_url() .'" id="logo">';
                                echo '<img id="logo-default" src="'. ozy_get_option('custom_logo') .'" '. (ozy_get_option('custom_logo_retina') ? 'data-at2x="'. ozy_get_option('custom_logo_retina') .'"' : '') .' data-src="'. ozy_get_option('custom_logo') .'" alt="logo"/>';
                                echo '</a>';										
                            }else{
                                 echo '<h1><a href="'. esc_url(home_url()) .'/" title="'. get_bloginfo('description') .'">'. get_bloginfo('name') .'</a></h1>';
                            }
                            ?>
                            
                        </div>
                        <div id="head-mobile"></div>
                        <div class="menu-button"></div>                                
                        <?php
                            $args = array(
                                'menu_class' => '', 
                                'container' => '',
								'fallback_cb' => true,								
                                'walker' => new BootstrapNavMenuWalker
                            );
							if (has_nav_menu('logged-in-menu') && has_nav_menu('header-menu')) {
								$args['theme_location'] = (is_user_logged_in() ? 'logged-in-menu' : 'header-menu');							
							}else{
								$ozy_data->custome_primary_menu = true; //if no location selected, make sure SEARCH button will be visible on menu
							}
                            if(ozy_get_metabox('custom_menu') !== '-1' && ozy_get_metabox('custom_menu')) {
                                $args['menu'] = ozy_get_metabox('custom_menu');
                                $ozy_data->custome_primary_menu = true;
                            }
                            wp_nav_menu( $args );
                        ?>
                    </nav>
                </header>        
    
            </div><!--#header-->
                    
        <?php
		}
		
		global $ozy_data;
		if(isset($ozy_data->request_a_rate_form) && $ozy_data->request_a_rate_form) {
			echo '<div id="request-a-rate"><div class="heading-font">' . ($ozy_data->request_a_rate_character_issue === 'yes' ? ozy_htmlentitiesOutsideHTMLTags(do_shortcode($ozy_data->request_a_rate_form)) : do_shortcode($ozy_data->request_a_rate_form)) . '</div><a href="#close" class="close"><i class="oic-pe-icon-7-stroke-139">&nbsp;</i></a></div>';
		}		
		
        ?>		