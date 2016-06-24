import {stripeFactory} from './service';

export {stripeProvider};

stripeProvider.$inject = ['angularLoad', '$window', '$q'];
function stripeProvider (angularLoad, $window, $q) {
    let setPublishableKey = $q.defer();

    angularLoad.loadScript('https://js.stripe.com/v2/').then(function() {
        let stripe = $window.Stripe;
        setPublishableKey.resolve(stripe.setPublishableKey);
    }).catch(function() {
        setPublishableKey.reject(noPublishAbleKey)
        function noPublishAbleKey() {
            console.log('Stripe is not available as window.Stripe');
        };
    });

    this.setPublishableKey = setPublishableKey.promise;

    this.$get = stripeFactory;
}
