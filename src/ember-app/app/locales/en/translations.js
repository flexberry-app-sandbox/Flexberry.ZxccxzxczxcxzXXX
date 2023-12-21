import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

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
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Zxccxzxczxcxz XXX',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Zxccxzxczxcxz XXX',
          title: 'Zxccxzxczxcxz XXX'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
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
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
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
