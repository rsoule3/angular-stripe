import {stripeProvider} from './provider';
import ngLoader from 'angular-load';

module.exports = angular.module('angular-stripe', ['angularLoad'])
.provider('stripe', stripeProvider)
.name;
