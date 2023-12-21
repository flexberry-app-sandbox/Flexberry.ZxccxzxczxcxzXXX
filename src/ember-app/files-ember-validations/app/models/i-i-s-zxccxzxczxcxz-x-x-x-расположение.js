import {
  defineNamespace,
  defineProjections,
  Model as РасположениеMixin
} from '../mixins/regenerated/models/i-i-s-zxccxzxczxcxz-x-x-x-расположение';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(РасположениеMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
