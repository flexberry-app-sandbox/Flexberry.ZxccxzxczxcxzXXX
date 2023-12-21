import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as ОтчетОСервереMixin
} from '../mixins/regenerated/models/i-i-s-zxccxzxczxcxz-x-x-x-отчет-о-сервере';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ОтчетОСервереMixin, Validations, {
});

defineProjections(Model);

export default Model;
