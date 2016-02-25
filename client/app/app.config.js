'use strict';

export default function config($locationProvider) {
  'ngInject';
  $locationProvider.html5Mode(true).hashPrefix('!');
}
