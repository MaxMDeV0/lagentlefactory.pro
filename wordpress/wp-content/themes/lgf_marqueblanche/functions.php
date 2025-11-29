<?php

/**
 * lgf_marqueblanche functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package lgf_marqueblanche
 */

if (! defined('_S_VERSION')) {
	// Replace the version number of the theme on each release.
	define('_S_VERSION', '1.0.0');
}

/**
 * Sets up theme defaults and registers support for various WordPress features.
 *
 * Note that this function is hooked into the after_setup_theme hook, which
 * runs before the init hook. The init hook is too late for some features, such
 * as indicating support for post thumbnails.
 */
function lgf_marqueblanche_setup()
{
	/*
		* Make theme available for translation.
		* Translations can be filed in the /languages/ directory.
		* If you're building a theme based on lgf_marqueblanche, use a find and replace
		* to change 'lgf_marqueblanche' to the name of your theme in all the template files.
		*/
	load_theme_textdomain('lgf_marqueblanche', get_template_directory() . '/languages');

	// Add default posts and comments RSS feed links to head.
	add_theme_support('automatic-feed-links');

	/*
		* Let WordPress manage the document title.
		* By adding theme support, we declare that this theme does not use a
		* hard-coded <title> tag in the document head, and expect WordPress to
		* provide it for us.
		*/
	add_theme_support('title-tag');

	/*
		* Enable support for Post Thumbnails on posts and pages.
		*
		* @link https://developer.wordpress.org/themes/functionality/featured-images-post-thumbnails/
		*/
	add_theme_support('post-thumbnails');

	// This theme uses wp_nav_menu() in one location.
	register_nav_menus(
		array(
			'menu-1' => esc_html__('Primary', 'lgf_marqueblanche'),
		)
	);

	/*
		* Switch default core markup for search form, comment form, and comments
		* to output valid HTML5.
		*/
	add_theme_support(
		'html5',
		array(
			'search-form',
			'comment-form',
			'comment-list',
			'gallery',
			'caption',
			'style',
			'script',
		)
	);

	// Set up the WordPress core custom background feature.
	add_theme_support(
		'custom-background',
		apply_filters(
			'lgf_marqueblanche_custom_background_args',
			array(
				'default-color' => 'ffffff',
				'default-image' => '',
			)
		)
	);

	// Add theme support for selective refresh for widgets.
	add_theme_support('customize-selective-refresh-widgets');

	/**
	 * Add support for core custom logo.
	 *
	 * @link https://codex.wordpress.org/Theme_Logo
	 */
	add_theme_support(
		'custom-logo',
		array(
			'height'      => 250,
			'width'       => 250,
			'flex-width'  => true,
			'flex-height' => true,
		)
	);
}
add_action('after_setup_theme', 'lgf_marqueblanche_setup');

/**
 * Set the content width in pixels, based on the theme's design and stylesheet.
 *
 * Priority 0 to make it available to lower priority callbacks.
 *
 * @global int $content_width
 */
function lgf_marqueblanche_content_width()
{
	$GLOBALS['content_width'] = apply_filters('lgf_marqueblanche_content_width', 640);
}
add_action('after_setup_theme', 'lgf_marqueblanche_content_width', 0);

/**
 * Register widget area.
 *
 * @link https://developer.wordpress.org/themes/functionality/sidebars/#registering-a-sidebar
 */
function lgf_marqueblanche_widgets_init()
{
	register_sidebar(
		array(
			'name'          => esc_html__('Sidebar', 'lgf_marqueblanche'),
			'id'            => 'sidebar-1',
			'description'   => esc_html__('Add widgets here.', 'lgf_marqueblanche'),
			'before_widget' => '<section id="%1$s" class="widget %2$s">',
			'after_widget'  => '</section>',
			'before_title'  => '<h2 class="widget-title">',
			'after_title'   => '</h2>',
		)
	);
}
add_action('widgets_init', 'lgf_marqueblanche_widgets_init');

/**
 * Enqueue scripts and styles.
 */
function lgf_marqueblanche_scripts()
{
	wp_enqueue_style('lgf_marqueblanche-style', get_stylesheet_uri(), array(), _S_VERSION);
	wp_style_add_data('lgf_marqueblanche-style', 'rtl', 'replace');

	wp_enqueue_script('lgf_marqueblanche-navigation', get_template_directory_uri() . '/js/navigation.js', array(), _S_VERSION, true);

	if (is_singular() && comments_open() && get_option('thread_comments')) {
		wp_enqueue_script('comment-reply');
	}
}
add_action('wp_enqueue_scripts', 'lgf_marqueblanche_scripts');

/**
 * Implement the Custom Header feature.
 */
require get_template_directory() . '/inc/custom-header.php';

/**
 * Custom template tags for this theme.
 */
require get_template_directory() . '/inc/template-tags.php';

/**
 * Functions which enhance the theme by hooking into WordPress.
 */
require get_template_directory() . '/inc/template-functions.php';

/**
 * Customizer additions.
 */
require get_template_directory() . '/inc/customizer.php';

/**
 * Load Jetpack compatibility file.
 */
if (defined('JETPACK__VERSION')) {
	require get_template_directory() . '/inc/jetpack.php';
}

function atelier_textile_register_menus()
{
	register_nav_menus(array(
		'primary' => __('Menu Principal', 'atelier-textile'),
	));
}
add_action('after_setup_theme', 'atelier_textile_register_menus');

// Charger les styles et scripts
function atelier_textile_enqueue_assets()
{
	// Style principal
	wp_enqueue_style(
		'atelier-textile-style',
		get_stylesheet_directory_uri() . '/style.css',
		array(),
		filemtime(get_stylesheet_directory() . '/style.css')
	);

	// Google Fonts - Karla
	wp_enqueue_style(
		'atelier-textile-fonts',
		'https://fonts.googleapis.com/css2?family=Karla:wght@300;400;500;700;800&display=swap',
		array(),
		null
	);
}
add_action('wp_enqueue_scripts', 'atelier_textile_enqueue_assets');

// Support pour les fonctionnalités WordPress
function atelier_textile_theme_support()
{
	add_theme_support('title-tag');
	add_theme_support('post-thumbnails');
	add_theme_support('html5', array(
		'search-form',
		'comment-form',
		'comment-list',
		'gallery',
		'caption',
	));
}
add_action('after_setup_theme', 'atelier_textile_theme_support');

/**
 * Custom Walker pour le menu WordPress
 * Ajoute les classes CSS nécessaires pour le mega menu
 */
class Custom_Nav_Walker extends Walker_Nav_Menu
{

	// Début d'un élément de niveau supérieur
	function start_lvl(&$output, $depth = 0, $args = null)
	{
		$indent = str_repeat("\t", $depth);
		$output .= "\n$indent<ul class=\"sub-menu\">\n";
	}

	// Début d'un élément
	function start_el(&$output, $item, $depth = 0, $args = null, $id = 0)
	{
		$indent = ($depth) ? str_repeat("\t", $depth) : '';

		$classes = empty($item->classes) ? array() : (array) $item->classes;
		$classes[] = 'menu-item-' . $item->ID;

		// Ajouter la classe 'menu-item-has-children' si l'item a des enfants
		if (
			in_array('menu-item-has-children', $classes) ||
			(!empty($args->walker->has_children))
		) {
			$classes[] = 'menu-item-has-children';
		}

		$class_names = join(' ', apply_filters('nav_menu_css_class', array_filter($classes), $item, $args, $depth));
		$class_names = $class_names ? ' class="' . esc_attr($class_names) . '"' : '';

		$output .= $indent . '<li' . $class_names . '>';

		// Lien
		$atts = array();
		$atts['title']  = !empty($item->attr_title) ? $item->attr_title : '';
		$atts['target'] = !empty($item->target) ? $item->target : '';
		$atts['rel']    = !empty($item->xfn) ? $item->xfn : '';
		$atts['href']   = !empty($item->url) ? $item->url : '';

		$atts = apply_filters('nav_menu_link_attributes', $atts, $item, $args, $depth);

		$attributes = '';
		foreach ($atts as $attr => $value) {
			if (!empty($value)) {
				$value = ('href' === $attr) ? esc_url($value) : esc_attr($value);
				$attributes .= ' ' . $attr . '="' . $value . '"';
			}
		}

		$title = apply_filters('the_title', $item->title, $item->ID);
		$title = apply_filters('nav_menu_item_title', $title, $item, $args, $depth);

		$item_output = $args->before;
		$item_output .= '<a' . $attributes . '>';
		$item_output .= $args->link_before . $title . $args->link_after;
		$item_output .= '</a>';
		$item_output .= $args->after;

		$output .= apply_filters('walker_nav_menu_start_el', $item_output, $item, $depth, $args);
	}
}

/**
 * Ajouter une classe CSS personnalisée aux body
 */
function atelier_textile_body_classes($classes)
{
	if (is_front_page()) {
		$classes[] = 'home-page';
	}
	return $classes;
}
add_filter('body_class', 'atelier_textile_body_classes');

/**
 * Ajuste le header quand la barre d'administration WordPress est affichée.
 * - Ajoute un margin-top statique (32px desktop / 46px mobile)
 * - Et un petit script qui calcule dynamiquement la hauteur de #wpadminbar
 *   (utile si d'autres barres d'édition comme Elementor changent la hauteur).
 */
function atelier_textile_adminbar_header_fix()
{
	// CSS statique pour le cas standard (conforme aux recommandations WP)
	echo '<style>';
	echo 'body.admin-bar .site-header{margin-top:32px;}\n';
	echo '@media screen and (max-width:782px){ body.admin-bar .site-header{margin-top:46px;} }\n';
	// Cacher le header lors de l'édition avec Elementor
	echo 'body.elementor-editor-active .site-header{display:none !important;}\n';

	echo '</style>';
	// Script qui ajuste dynamiquement selon la hauteur réelle de #wpadminbar
	echo '<script>(function(){function adjustHeader(){var admin=document.getElementById("wpadminbar");var header=document.querySelector(".site-header");if(admin && header){header.style.marginTop=admin.offsetHeight+"px";}}if(document.readyState==="loading"){document.addEventListener("DOMContentLoaded",adjustHeader);}else{adjustHeader();}window.addEventListener("resize",adjustHeader);})();</script>';
}
add_action('wp_head', 'atelier_textile_adminbar_header_fix');

/**
 * Masque le header dans l'aperçu iframe quand on édite avec Elementor.
 */
function atelier_textile_hide_header_in_elementor_editor()
{
	// Détection robuste du mode édition Elementor
	$is_elementor_editor = (isset($_GET['action']) && $_GET['action'] === 'elementor')
		|| (defined('ELEMENTOR_VERSION') && class_exists('\Elementor\Plugin') && method_exists(\Elementor\Plugin::instance(), 'editor') && \Elementor\Plugin::instance()->editor->is_edit_mode());

	if (! $is_elementor_editor) {
		return;
	}

	// Script admin : pour chaque iframe d'aperçu, cacher .site-header dans son document
	echo '<script>
        (function(){
            function hideHeaderInIframe(iframe){
                try{
                    var d = iframe.contentDocument || iframe.contentWindow.document;
                    if(!d) return;
                    var h = d.querySelector(".site-header");
                    if(h) h.style.display = "none";
                }catch(e){}
            }
            document.addEventListener("DOMContentLoaded", function(){
                // si l\'iframe est déjà présent
                var iframes = document.querySelectorAll("iframe");
                iframes.forEach(function(iframe){
                    // si l\'iframe est déjà chargé
                    if (iframe.contentDocument && iframe.contentDocument.readyState === "complete") {
                        hideHeaderInIframe(iframe);
                    } else {
                        iframe.addEventListener("load", function(){ hideHeaderInIframe(iframe); });
                    }
                });
                // observer pour iframes ajoutés dynamiquement
                var obs = new MutationObserver(function(mutations){
                    mutations.forEach(function(m){
                        m.addedNodes.forEach(function(n){
                            if(n.tagName === "IFRAME") {
                                n.addEventListener("load", function(){ hideHeaderInIframe(n); });
                            }
                        });
                    });
                });
                obs.observe(document.body, { childList: true, subtree: true });
            });
        })();</script>';
}
add_action('admin_head', 'atelier_textile_hide_header_in_elementor_editor');
