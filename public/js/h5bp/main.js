// Style switcher

(function() {
  var styles = ['nostyle', 'style1'];
  var $style = $('#style');
  var $style_sel = $('#style-select');

  $style_sel.click(function(evt) {
    evt.preventDefault();
    var style = $style.attr('href');
    // console.log(style);

    // check current style and cycle to next one
    if (style.indexOf('nostyle') != -1) {
      $style.attr('href','css/style1.css');
    } else if (style.indexOf('style1') != -1) {
      $style.attr('href','css/nostyle.css');

    } else {
      console.log('unknown style');
    }
  });

})();