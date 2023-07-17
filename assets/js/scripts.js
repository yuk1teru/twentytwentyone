jQuery(function ($) {
  $(".search-artem").on("input", function () {
    // Використовуйте подію "input" для відстеження введення тексту в реальному часі
    var search_term = $(this).val(); // Отримати значення введеного тексту
    var data = {
      action: "filter_posts",
      search_term: search_term, // Додати введений текст до Ajax-запиту
    };
    console.log(variables.ajax_url);
    $.ajax({
      url: variables.ajax_url,
      type: "POST",
      data: data,
      success: function (response) {
        $(".js-artem").html(response);
      },
    });
  });
});
