'use strict';

// var angular = require('angular')
var provider = require('./provider');
var Stripe = window.Stripe;

module.exports = angular.module('angular-stripe', [])
.constant('Stripe', Stripe)
.provider('stripe', provider)
.name;
