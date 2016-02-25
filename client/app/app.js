'use strict';

import angular from 'angular';
import uiRouter from 'ui-router';
import ngMaterial from 'angular-material';
import ngMessages from 'angular-messages';
import angularFormly from 'angular-formly';
import angularFormlyMaterial from 'angular-formly-material';
import 'normalize.css';
import 'angular-material/angular-material.css';

import config from './app.config';
import routeConfig from './app.route';

import AppComponent from './app.component';
import firstStep from './steps/firstStep/widget';

var module = angular.module('app', [
    uiRouter,
    ngMessages,
    ngMaterial,
    angularFormly,
    angularFormlyMaterial
  ]);

module
  .config(config)
  .config(routeConfig)
  .component('app', AppComponent)
  .component('firstStep', firstStep);
