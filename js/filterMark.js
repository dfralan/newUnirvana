$(document).ready(function() {
    $("#FAQFilter").on("keyup", function() {
      var value = $(this).val().toLowerCase();
      
      // Remove all class="highlighted" inside #myDIV 
      $("#FAQ").html($("#FAQ").html().replace(/(<span class="highlighted">)|(<\/span>)/g, ""))
      
      $("#FAQ *").map(function() {
          var el = $(this);
          // Only in deep children aplly your logic
          if (el.children().length == 0) {
          var content = el.html().replace(/(<span class="highlighted">)|(<\/span>)/g, "");
          el.html(content);
          var hasText = el.text().toLowerCase().indexOf(value) > -1;
          el.toggle(hasText);
          if (hasText) {
            // escape value for use in regex
            var textRegex = new RegExp(value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "g");
            el.html(content.replace(textRegex, '<span class="highlighted">$&</span>'));
          }
        }
      });
    });
  });