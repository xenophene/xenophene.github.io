$(function() {
  var id = $('body').attr('id');
  $('ul li #' + id).parent().addClass('active');
  $('a').each(function() {
    if (!($(this).parent().parent().hasClass('nav') || $(this).hasClass('brand')))
      $(this).attr('target', '_blank');
  });
  if (id == 'acad') {
    $('.courses li').each(function () {
      if ($(this).attr('id')) {
        if (courses[$(this).attr('id')]) {
          $(this).popover({
            title: $(this).attr('id') + ' - Course Contents',
            content: courses[$(this).attr('id')]
          });
        }
      }
    });
  }
});
