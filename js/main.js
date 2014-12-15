/*note, this requires jQuery to work. It could be written without jQuery */
$(document).ready(function(){

  //this is the code to slide the main navigation up and down.
  $('#menu_button').click(function(evt){
    console.log('evt',evt);
    evt.preventDefault();
    $('#main_nav').slideToggle();
  });//end menu_button

  
  //this code taken from Sebastien on Stackoverflow: http://stackoverflow.com/questions/6461300/triggering-jquery-with-css-media-queries
  //it's been rearranged slightly
  //leave the lines below and then write your code in the doneResizing function below
  doneResizing();
  var id;
  $(window).resize(function() {
    clearTimeout(id);
    id = setTimeout(doneResizing, 0);
  });
  
});

function doneResizing() {
  //this code requires that you have Modernizr included BEFORE this file. Here is modernizr: http://modernizr.com/
  //the trick with min-width media queries is that you need to start from your largest and go down. In the else at the end you can write  js for any size below your smallest min-width.
  
  if(Modernizr.mq('screen and (min-width:41em)')) {
    $('#main_nav').show();//make sure it is showing at larger sizes
  }else{
    //Your code goes here for screens below 30em in this example. If you add other min-width media queries this will always be the width below the smallest in your media queries.This example just changes some text in the footer
   $('#main_nav').hide();//make sure hiding at smaller sizes
  }
}//end doneResizing
    