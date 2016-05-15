'use strict'

var service = require('./service');

module.exports = stripeProvider;

stripeProvider.$inject = ['Stripe'];

function stripeProvider (Stripe) {
  if (Stripe) {
      this.setPublishableKey = Stripe.setPublishableKey;
  } else {
      this.setPublishableKey = function() {
          console.log('Stripe is not available as window.Stripe');
      };
  }

  this.$get = service;
}
