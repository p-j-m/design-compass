$(document).ready(function() {

    $('.animate').scrolla({
		mobile: true,
		once: true
	});

	$('#button-show-window').click(function() {
		var template = $('#modal-template').html();
		$('body').append(template);
		$('.animate').scrolla('bind');
		$('section.modal .modal-close').click(function() {
			$(this).closest('section.modal').remove();
		});

		return false;
	});
    
    
    
    
});

$(window).load(function() {
		// Animate loader off screen
		$(".se-pre-con").fadeOut("slow");
    
$(function(){
  var getMatchingUri = function(){
    this.init();
  };

  getMatchingUri.prototype = {
    init : function(){
      this.cacheElement();
      this.setEvent();
    },
    cacheElement : function(){
      this.wel = $("#gnb");
      this.el = this.wel.find("a");
    },
    click : function(e){
      var uri = e.currentTarget.href,
          pattern = /\#(?:.*)/g,
          pageString = uri.match(pattern)[0];

      $.each(this.el, function(){
        var $this = $(this);
        if(pageString === $this.attr("href")){
          $this.parent().addClass("current");
        } else {
          $this.parent().removeClass("current");
        }

      });
    },
    setEvent : function(){
      this.el.on("click", $.proxy(this.click, this));
    }
  };

  var getmatchuri = new getMatchingUri();
}());
    
	});

