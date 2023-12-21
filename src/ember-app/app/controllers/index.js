import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.zxccxzxczxcxz-x-x-x.caption'),
          title: i18n.t('forms.application.sitemap.zxccxzxczxcxz-x-x-x.title'),
          children: [{
            link: 'i-i-s-zxccxzxczxcxz-x-x-x-сотрудник-l',
            caption: i18n.t('forms.application.sitemap.zxccxzxczxcxz-x-x-x.i-i-s-zxccxzxczxcxz-x-x-x-сотрудник-l.caption'),
            title: i18n.t('forms.application.sitemap.zxccxzxczxcxz-x-x-x.i-i-s-zxccxzxczxcxz-x-x-x-сотрудник-l.title'),
            icon: 'folder open',
            children: null
          }, {
            link: 'i-i-s-zxccxzxczxcxz-x-x-x-расположение-l',
            caption: i18n.t('forms.application.sitemap.zxccxzxczxcxz-x-x-x.i-i-s-zxccxzxczxcxz-x-x-x-расположение-l.caption'),
            title: i18n.t('forms.application.sitemap.zxccxzxczxcxz-x-x-x.i-i-s-zxccxzxczxcxz-x-x-x-расположение-l.title'),
            icon: 'suitcase',
            children: null
          }, {
            link: 'i-i-s-zxccxzxczxcxz-x-x-x-сервер-l',
            caption: i18n.t('forms.application.sitemap.zxccxzxczxcxz-x-x-x.i-i-s-zxccxzxczxcxz-x-x-x-сервер-l.caption'),
            title: i18n.t('forms.application.sitemap.zxccxzxczxcxz-x-x-x.i-i-s-zxccxzxczxcxz-x-x-x-сервер-l.title'),
            icon: 'folder open',
            children: null
          }, {
            link: 'i-i-s-zxccxzxczxcxz-x-x-x-должность-l',
            caption: i18n.t('forms.application.sitemap.zxccxzxczxcxz-x-x-x.i-i-s-zxccxzxczxcxz-x-x-x-должность-l.caption'),
            title: i18n.t('forms.application.sitemap.zxccxzxczxcxz-x-x-x.i-i-s-zxccxzxczxcxz-x-x-x-должность-l.title'),
            icon: 'archive',
            children: null
          }, {
            link: 'i-i-s-zxccxzxczxcxz-x-x-x-отчет-о-сервере-l',
            caption: i18n.t('forms.application.sitemap.zxccxzxczxcxz-x-x-x.i-i-s-zxccxzxczxcxz-x-x-x-отчет-о-сервере-l.caption'),
            title: i18n.t('forms.application.sitemap.zxccxzxczxcxz-x-x-x.i-i-s-zxccxzxczxcxz-x-x-x-отчет-о-сервере-l.title'),
            icon: 'file',
            children: null
          }]
        }
      ]
    };
  }),
})