<?php
/**
 * Plugin Name:       Cpo Block
 * Description:       This Plugin activate a Custom Gutenberg Block for Company Staffs Overview in the Custom Gutenberg post type section.
 * Requires at least: 5.8
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            <a href="https://hiwisdom.github.io/online.github.io">Orodje Wisdom</a>
 * License:           GPL-2.0-or-later
 * Text Domain:       cpo-block
 *
 * @package           create-block
 */

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */

 
	// defined ('ABSPATH') or die ('You can\'t access this site');

	// use Inc\uninstall;

	// class CPOPlugin {
	// 	function register() {
	// 		add_action('admin_enqueue_scripts', array($this, 'CPOPlugin'));
	// 	}

	// 	function uninstall() {
	// 		require_once plugin_dir_path(__FILE__).'uninstall.php';
	// 		uninstall::uninstall();
	// 	}
	// }

	// if (class_exists('CPOPlugin')) {
	// $CPOPlugin = new CPOPlugin();
	// $CPOPlugin->register();
	// }

	// //uninstall
	// register_uninstall_hook(__FILE__, array($CPOPlugin, 'uninstall'));



function custom_register_block() {
	

	// Register JavasScript File build/index.js
	wp_register_script(
		'my-custom-block',
		plugins_url( 'build/index.js', __FILE__ ),
		array( 'wp-blocks', 'wp-element', 'wp-editor', 'wp-components' ),
		filemtime( plugin_dir_path( __FILE__ ) . 'build/index.js' )
	);

	// Register editor style src/editor.css
	wp_register_style(
		'my-custom-block-editor-style',
		plugins_url( 'src/editor.scss', __FILE__ ),
		array( 'wp-edit-blocks' ),
		filemtime( plugin_dir_path( __FILE__ ) . 'src/editor.scss' )
	);

	// Register front end block style src/style.css
	wp_register_style(
		'my-custom-block-frontend-style',
		plugins_url( 'src/style.scss', __FILE__ ),
		array( 'wp-edit-blocks'),
		filemtime( plugin_dir_path( __FILE__ ) . 'src/style.scss' )
	);

	// Register your block
	register_block_type( 'create-block/cpo-block', array(
		'editor_script' => 'my-custom-block',
		'editor_style' => 'my-custom-block-editor-style',
		'style' => 'my-custom-block-frontend-style',
	) );




}

add_action( 'init', 'custom_register_block' );
