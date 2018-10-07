<?php

/////Start Mce Button Add

function travego_add_mce_button() {
    if ( !current_user_can( 'edit_posts' ) && !current_user_can( 'edit_pages' ) ) {
        return;
    }
    if ( 'true' == get_user_option( 'rich_editing' ) ) {
        add_filter( 'mce_external_plugins', 'travego_add_tinymce_plugin' );
        add_filter( 'mce_buttons', 'travegotheme_register_mce_button' );
    }
}
add_action('admin_head', 'travego_add_mce_button');

function travego_add_tinymce_plugin( $plugin_array ) {
    $plugin_array['travegotheme_mce_button'] = get_template_directory_uri() .'/inc/mce-button/travego-mce-button.js';
    return $plugin_array;
}

function travegotheme_register_mce_button( $buttons ) {
    array_push( $buttons, 'travegotheme_mce_button' );
    return $buttons;
} 

/////End Mce Button Add