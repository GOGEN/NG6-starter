'use strict';

export default function routeConfig($stateProvider, $urlRouterProvider) {
  'ngInject';
  $stateProvider
    .state('steps', {
      abstract: true,
      url: '/steps',
      template: '<ui-view/>'
    })
    .state('steps.first', {
      url: '/first',
      template: '<first-step/>'
    })
    .state('steps.second', {
      url: '/second',
      template: '<second-step/>'
    });

  $urlRouterProvider.otherwise('/steps/first');

}
