'use strict';

import StepsController from './controller'
import template from './view.html';

let steps = {
  bindings: {
    data: '='
  },
  controller: StepsController,
  controllerAs: 'ctrl',
  template: template
};

export default steps;
