/** jQuery Char Counter
  * Counts the available characters left in a text area
  * @author Gabriele Romanato <http://blog.gabrieleromanato.com>
  * @requires jQuery 1.4+
  *
  * Usage: $(element).charcounter(options)
  *
  *        max: Maximum number of allowed characters
  *        counter: The jQuery element when the counting will be displayed
  *        errorClass: The CSS class to be added (and removed) to 'counter' when a user has exceeded the number of allowed characters (or not)
  */

(function($) {

	$.fn.charcounter = function(options) {
	
		var that = this;
		var settings = {
		
			max: 140,
			counter: $('#counter'),
			errorClass: 'warning'
		
		};
		
		options = $.extend(settings, options);
		
		
		var calculate = function(obj) {
  
  			var count = ($(obj).is('textarea')) ? $(obj).val().length : $(obj).text().length;
			var available = options.max - count;
			options.counter.text(available);
	
			if(available <= 0) {
	
				options.counter.addClass(options.errorClass);
	
			} else {
	
				options.counter.removeClass(options.errorClass);	
	
			}
  		};

		
		
		return that.each(function() {
		
			
			$(that).bind('keyup', function() {    
    
     			calculate(this); 
  
  			});
  			
  			$(that).bind('paste', function() {
  			
  				calculate(this);
  			
  			});

		
		
		});
	
	
	};


})(jQuery);