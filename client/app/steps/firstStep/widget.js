'use strict';

import FirstStepController from './controller'
import template from './view.html';

let firstStep = {
  bindings: {
    data: '='
  },
  controller: FirstStepController,
  controllerAs: 'ctrl',
  template: template
};

export default firstStep;
