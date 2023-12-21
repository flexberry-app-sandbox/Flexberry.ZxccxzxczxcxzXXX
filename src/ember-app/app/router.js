import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-zxccxzxczxcxz-x-x-x-должность-l');
  this.route('i-i-s-zxccxzxczxcxz-x-x-x-должность-e',
  { path: 'i-i-s-zxccxzxczxcxz-x-x-x-должность-e/:id' });
  this.route('i-i-s-zxccxzxczxcxz-x-x-x-должность-e.new',
  { path: 'i-i-s-zxccxzxczxcxz-x-x-x-должность-e/new' });
  this.route('i-i-s-zxccxzxczxcxz-x-x-x-отчет-о-сервере-l');
  this.route('i-i-s-zxccxzxczxcxz-x-x-x-отчет-о-сервере-e',
  { path: 'i-i-s-zxccxzxczxcxz-x-x-x-отчет-о-сервере-e/:id' });
  this.route('i-i-s-zxccxzxczxcxz-x-x-x-отчет-о-сервере-e.new',
  { path: 'i-i-s-zxccxzxczxcxz-x-x-x-отчет-о-сервере-e/new' });
  this.route('i-i-s-zxccxzxczxcxz-x-x-x-расположение-l');
  this.route('i-i-s-zxccxzxczxcxz-x-x-x-расположение-e',
  { path: 'i-i-s-zxccxzxczxcxz-x-x-x-расположение-e/:id' });
  this.route('i-i-s-zxccxzxczxcxz-x-x-x-расположение-e.new',
  { path: 'i-i-s-zxccxzxczxcxz-x-x-x-расположение-e/new' });
  this.route('i-i-s-zxccxzxczxcxz-x-x-x-сервер-l');
  this.route('i-i-s-zxccxzxczxcxz-x-x-x-сервер-e',
  { path: 'i-i-s-zxccxzxczxcxz-x-x-x-сервер-e/:id' });
  this.route('i-i-s-zxccxzxczxcxz-x-x-x-сервер-e.new',
  { path: 'i-i-s-zxccxzxczxcxz-x-x-x-сервер-e/new' });
  this.route('i-i-s-zxccxzxczxcxz-x-x-x-сотрудник-l');
  this.route('i-i-s-zxccxzxczxcxz-x-x-x-сотрудник-e',
  { path: 'i-i-s-zxccxzxczxcxz-x-x-x-сотрудник-e/:id' });
  this.route('i-i-s-zxccxzxczxcxz-x-x-x-сотрудник-e.new',
  { path: 'i-i-s-zxccxzxczxcxz-x-x-x-сотрудник-e/new' });
});

export default Router;
