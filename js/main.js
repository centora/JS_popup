(function(){
	'use strict';

  // Show - method
  // Hide - method
  // Event buttons - method get 2 params, 1 - event, 2 - fn
  // AppendTo  (params - element in which we want append our popup)

  var popup = {
  	show: function(){

  	},
  	hide: function(){

  	},
  	addEventBtn: function(event, fn){

  	},
  	appendTo: function(selector){

  	}
  }

  var helper = {
  	$: function( selector, context ){
  		return (context || document).querySelectorAll( selector );
  	},
  	hide: function(elem){
  		elem.style.display = "none";
  	},
  	show: function(elem){
  		elem.style.display = "block";
  	}
  }

   var p = helper.$(".popup")[0];
   helper.hide(p);
   console.log(helper.$("h2", p));


})();