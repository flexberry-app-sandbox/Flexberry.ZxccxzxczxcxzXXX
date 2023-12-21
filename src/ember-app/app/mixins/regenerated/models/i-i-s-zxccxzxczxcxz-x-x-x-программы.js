import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  версия: DS.attr('string'),
  едИзмерения: DS.attr('i-i-s-zxccxzxczxcxz-x-x-x-ед-изм'),
  название: DS.attr('string'),
  описание: DS.attr('string'),
  размер: DS.attr('string'),
  сервер: DS.belongsTo('i-i-s-zxccxzxczxcxz-x-x-x-сервер', { inverse: 'программы', async: false })
});

export let ValidationRules = {
  версия: {
    descriptionKey: 'models.i-i-s-zxccxzxczxcxz-x-x-x-программы.validations.версия.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  едИзмерения: {
    descriptionKey: 'models.i-i-s-zxccxzxczxcxz-x-x-x-программы.validations.едИзмерения.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  название: {
    descriptionKey: 'models.i-i-s-zxccxzxczxcxz-x-x-x-программы.validations.название.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  описание: {
    descriptionKey: 'models.i-i-s-zxccxzxczxcxz-x-x-x-программы.validations.описание.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  размер: {
    descriptionKey: 'models.i-i-s-zxccxzxczxcxz-x-x-x-программы.validations.размер.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  сервер: {
    descriptionKey: 'models.i-i-s-zxccxzxczxcxz-x-x-x-программы.validations.сервер.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ПрограммыE', 'i-i-s-zxccxzxczxcxz-x-x-x-программы', {
    название: attr('Название', { index: 0 }),
    описание: attr('Описание', { index: 1 }),
    версия: attr('Версия', { index: 2 }),
    размер: attr('Размер', { index: 3 }),
    едИзмерения: attr('Ед измерения', { index: 4 })
  });
};
