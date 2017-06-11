/* global $, Stripe */
//Document ready
$(document).on('turbolinks:load', function(){
  var theForm = $('#pro_form');
  var submitBtn = $('#form-submit-btn');
  //Set Stripe public key
  Stripe.setPublishableKey( $('meta[name="stripe-key"]').attr('content') )
  
  //When user clicks form submit button 
  submitBtn.click(function(event){
    //prevent default submission behavior.
    event.preventDefault();
    
    //Collect the credit card fields
    var ccNum = $('#card_number').val(), 
    cvcNum = $('#card_code').val(),
    expMonth = $('#card_month').val(),
    expYear = $('#card_year').val(),
    
    //Send info to stripe
    Stripe.createToken({
      number: ccNum,
      cvc: cvcNum,
      exp_month: expMonth,
      exp_year: expYear
    }, stripeResponseHandler);
  });
  //prevent default behavior
  
  
  //Stripe will return back card token
  //Inject card token as hidden field into form
  //submit form to our rails app
});