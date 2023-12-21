import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  iP: DS.attr('string'),
  порт: DS.attr('number'),
  протокол: DS.attr('string'),
  сотрудник: DS.belongsTo('i-i-s-zxccxzxczxcxz-x-x-x-сотрудник', { inverse: null, async: false }),
  настройки: DS.hasMany('i-i-s-zxccxzxczxcxz-x-x-x-настройки', { inverse: 'сервер', async: false }),
  программы: DS.hasMany('i-i-s-zxccxzxczxcxz-x-x-x-программы', { inverse: 'сервер', async: false })
});

export let ValidationRules = {
  iP: {
    descriptionKey: 'models.i-i-s-zxccxzxczxcxz-x-x-x-сервер.validations.iP.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  порт: {
    descriptionKey: 'models.i-i-s-zxccxzxczxcxz-x-x-x-сервер.validations.порт.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  протокол: {
    descriptionKey: 'models.i-i-s-zxccxzxczxcxz-x-x-x-сервер.validations.протокол.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  сотрудник: {
    descriptionKey: 'models.i-i-s-zxccxzxczxcxz-x-x-x-сервер.validations.сотрудник.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  настройки: {
    descriptionKey: 'models.i-i-s-zxccxzxczxcxz-x-x-x-сервер.validations.настройки.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
  программы: {
    descriptionKey: 'models.i-i-s-zxccxzxczxcxz-x-x-x-сервер.validations.программы.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('СерверE', 'i-i-s-zxccxzxczxcxz-x-x-x-сервер', {
    протокол: attr('Протокол', { index: 0 }),
    iP: attr('IP', { index: 1 }),
    порт: attr('Порт', { index: 2 }),
    сотрудник: belongsTo('i-i-s-zxccxzxczxcxz-x-x-x-сотрудник', 'Сотрудник', {
      имя: attr('Имя', { index: 4, hidden: true })
    }, { index: 3, displayMemberPath: 'имя' }),
    настройки: hasMany('i-i-s-zxccxzxczxcxz-x-x-x-настройки', 'Настройки', {
      типНастроек: attr('Тип настроек', { index: 0 }),
      датаНачала: attr('Дата начала', { index: 1 }),
      датаОкончания: attr('Дата окончания', { index: 2 }),
      описаний: attr('Описаний', { index: 3 })
    }),
    программы: hasMany('i-i-s-zxccxzxczxcxz-x-x-x-программы', 'Программы', {
      название: attr('Название', { index: 0 }),
      описание: attr('Описание', { index: 1 }),
      версия: attr('Версия', { index: 2 }),
      размер: attr('Размер', { index: 3 }),
      едИзмерения: attr('Ед измерения', { index: 4 })
    })
  });

  modelClass.defineProjection('СерверL', 'i-i-s-zxccxzxczxcxz-x-x-x-сервер', {
    протокол: attr('Протокол', { index: 0 }),
    iP: attr('IP', { index: 1 }),
    порт: attr('Порт', { index: 2 }),
    сотрудник: belongsTo('i-i-s-zxccxzxczxcxz-x-x-x-сотрудник', 'Имя', {
      имя: attr('Имя', { index: 3 })
    }, { index: -1, hidden: true })
  });
};
