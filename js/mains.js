// $(document).ready(function () {
//     $('button').click(function () {
//         $('#todo').append("<ul>" + $("input[name=task]").val() + " <a href='#' class='close' aria-hidden='true'>&times;</a></ul>");
//     });
//     $("body").on('click', '#todo a', function () {
//         $(this).closest("ul").remove();
//     });
// });


$('form').on('submit', function(e){
  e.preventDefault();
    var item = '<li>' + $('#enter').val () + '</li>';
    $('ul').append(item);
    $('ul li').on('click', function (){
      $(this).css('text-decoration', 'line-through');
});
$('#enter').val("");
})
