<?php
/*Template Name: Template postsArtem*/
get_header();

$args =[
    'post_type' => 'artem_posts',
    'posts_per_page' => -1,
    ];

    $postsArtem = new WP_Query($args); ?>
    <main>

        <div class="artem_container">   
		<form>
			<input class="search-artem" type="text">
		</form>
       
		<div class='js-artem'></div>
    </main>
<?php
get_footer();
?>