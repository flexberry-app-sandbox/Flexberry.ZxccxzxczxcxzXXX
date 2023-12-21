import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

import IISZxccxzxczxcxzXXXДолжностьLForm from './forms/i-i-s-zxccxzxczxcxz-x-x-x-должность-l';
import IISZxccxzxczxcxzXXXОтчетОСервереLForm from './forms/i-i-s-zxccxzxczxcxz-x-x-x-отчет-о-сервере-l';
import IISZxccxzxczxcxzXXXРасположениеLForm from './forms/i-i-s-zxccxzxczxcxz-x-x-x-расположение-l';
import IISZxccxzxczxcxzXXXСерверLForm from './forms/i-i-s-zxccxzxczxcxz-x-x-x-сервер-l';
import IISZxccxzxczxcxzXXXСотрудникLForm from './forms/i-i-s-zxccxzxczxcxz-x-x-x-сотрудник-l';
import IISZxccxzxczxcxzXXXДолжностьEForm from './forms/i-i-s-zxccxzxczxcxz-x-x-x-должность-e';
import IISZxccxzxczxcxzXXXОтчетОСервереEForm from './forms/i-i-s-zxccxzxczxcxz-x-x-x-отчет-о-сервере-e';
import IISZxccxzxczxcxzXXXРасположениеEForm from './forms/i-i-s-zxccxzxczxcxz-x-x-x-расположение-e';
import IISZxccxzxczxcxzXXXСерверEForm from './forms/i-i-s-zxccxzxczxcxz-x-x-x-сервер-e';
import IISZxccxzxczxcxzXXXСотрудникEForm from './forms/i-i-s-zxccxzxczxcxz-x-x-x-сотрудник-e';
import IISZxccxzxczxcxzXXXДолжностьModel from './models/i-i-s-zxccxzxczxcxz-x-x-x-должность';
import IISZxccxzxczxcxzXXXНастройкиModel from './models/i-i-s-zxccxzxczxcxz-x-x-x-настройки';
import IISZxccxzxczxcxzXXXОтчетОСервереModel from './models/i-i-s-zxccxzxczxcxz-x-x-x-отчет-о-сервере';
import IISZxccxzxczxcxzXXXПрограммыModel from './models/i-i-s-zxccxzxczxcxz-x-x-x-программы';
import IISZxccxzxczxcxzXXXРасположениеModel from './models/i-i-s-zxccxzxczxcxz-x-x-x-расположение';
import IISZxccxzxczxcxzXXXСерверModel from './models/i-i-s-zxccxzxczxcxz-x-x-x-сервер';
import IISZxccxzxczxcxzXXXСотрудникModel from './models/i-i-s-zxccxzxczxcxz-x-x-x-сотрудник';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-zxccxzxczxcxz-x-x-x-должность': IISZxccxzxczxcxzXXXДолжностьModel,
    'i-i-s-zxccxzxczxcxz-x-x-x-настройки': IISZxccxzxczxcxzXXXНастройкиModel,
    'i-i-s-zxccxzxczxcxz-x-x-x-отчет-о-сервере': IISZxccxzxczxcxzXXXОтчетОСервереModel,
    'i-i-s-zxccxzxczxcxz-x-x-x-программы': IISZxccxzxczxcxzXXXПрограммыModel,
    'i-i-s-zxccxzxczxcxz-x-x-x-расположение': IISZxccxzxczxcxzXXXРасположениеModel,
    'i-i-s-zxccxzxczxcxz-x-x-x-сервер': IISZxccxzxczxcxzXXXСерверModel,
    'i-i-s-zxccxzxczxcxz-x-x-x-сотрудник': IISZxccxzxczxcxzXXXСотрудникModel
  },

  'application-name': 'Zxccxzxczxcxz XXX',

  forms: {
    loading: {
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Zxccxzxczxcxz XXX',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Zxccxzxczxcxz XXX',
          title: 'Zxccxzxczxcxz XXX'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
          title: ''
        },
        'zxccxzxczxcxz-x-x-x': {
          caption: 'ZxccxzxczxcxzXXX',
          title: 'ZxccxzxczxcxzXXX',
          'i-i-s-zxccxzxczxcxz-x-x-x-сотрудник-l': {
            caption: 'Сотрудник',
            title: ''
          },
          'i-i-s-zxccxzxczxcxz-x-x-x-расположение-l': {
            caption: 'Расположение',
            title: ''
          },
          'i-i-s-zxccxzxczxcxz-x-x-x-сервер-l': {
            caption: 'Сервер',
            title: ''
          },
          'i-i-s-zxccxzxczxcxz-x-x-x-должность-l': {
            caption: 'Должность',
            title: ''
          },
          'i-i-s-zxccxzxczxcxz-x-x-x-отчет-о-сервере-l': {
            caption: 'Отчет о сервере',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
    },
    'i-i-s-zxccxzxczxcxz-x-x-x-должность-l': IISZxccxzxczxcxzXXXДолжностьLForm,
    'i-i-s-zxccxzxczxcxz-x-x-x-отчет-о-сервере-l': IISZxccxzxczxcxzXXXОтчетОСервереLForm,
    'i-i-s-zxccxzxczxcxz-x-x-x-расположение-l': IISZxccxzxczxcxzXXXРасположениеLForm,
    'i-i-s-zxccxzxczxcxz-x-x-x-сервер-l': IISZxccxzxczxcxzXXXСерверLForm,
    'i-i-s-zxccxzxczxcxz-x-x-x-сотрудник-l': IISZxccxzxczxcxzXXXСотрудникLForm,
    'i-i-s-zxccxzxczxcxz-x-x-x-должность-e': IISZxccxzxczxcxzXXXДолжностьEForm,
    'i-i-s-zxccxzxczxcxz-x-x-x-отчет-о-сервере-e': IISZxccxzxczxcxzXXXОтчетОСервереEForm,
    'i-i-s-zxccxzxczxcxz-x-x-x-расположение-e': IISZxccxzxczxcxzXXXРасположениеEForm,
    'i-i-s-zxccxzxczxcxz-x-x-x-сервер-e': IISZxccxzxczxcxzXXXСерверEForm,
    'i-i-s-zxccxzxczxcxz-x-x-x-сотрудник-e': IISZxccxzxczxcxzXXXСотрудникEForm
  },

});

export default translations;
