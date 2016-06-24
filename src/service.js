import stripeAsPromised from 'stripe-as-promised';

export {stripeFactory};

stripeFactory.$inject = ['angularLoad', '$q', '$window'];
function stripeFactory (angularLoad, $q, $window) {
    let deferred = $q.defer();

    angularLoad.loadScript('https://js.stripe.com/v2/').then(function() {
        let Stripe = $window.Stripe;
        deferred.resolve(stripeAsPromised(Stripe, $q));
    }).catch(function(err) {
        deferred.reject(err);
    });

    return deferred.promise
}
