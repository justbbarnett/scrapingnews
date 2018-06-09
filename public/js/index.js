$('.landing-btn').on('click', function(e){
	e.preventDefault();
	$('.landing-btn').addClass('gone')
	$('.loader-wrapper').addClass('loading')
	$('.scraping-reroute')[0].click()
})

$('.add-note').on('click', function(e){
	e.preventDefault();
	$('.note-form').addClass('show')
	$('.add-note').hide();
})

$(document).on('click', ".delete-note", function(e) {
	e.preventDefault();
	let noteId = $(this).attr("data-note");
	$.ajax({
		method: "DELETE",
		url: "/api/notes/" + noteId
	}).then(function(res){
		window.location.reload(true)
	})
})

$(document).on("click", ".note-form-submit", function() {
  let thisId = $(this).attr("data-article");
  $.ajax({
    method: "POST",
    url: "/articles/" + thisId,
    data: {
      title: $("#noteTitle").val(),
      body: $("#noteBody").val()
    }
  })
  .then(function(data) {
		// word
  });
  
  $("#titleinput").val("");
  $("#bodyinput").val("");
  $('.note-form').removeClass('show');
	$('.add-note').show();
});

$(document).on("click", ".note-form-cancel", function() {
  $('.note-form').removeClass('show');
	$('.add-note').show();
});