import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-zxccxzxczxcxz-x-x-x-сотрудник', 'Unit | Model | i-i-s-zxccxzxczxcxz-x-x-x-сотрудник', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-zxccxzxczxcxz-x-x-x-должность',
    'model:i-i-s-zxccxzxczxcxz-x-x-x-настройки',
    'model:i-i-s-zxccxzxczxcxz-x-x-x-отчет-о-сервере',
    'model:i-i-s-zxccxzxczxcxz-x-x-x-программы',
    'model:i-i-s-zxccxzxczxcxz-x-x-x-расположение',
    'model:i-i-s-zxccxzxczxcxz-x-x-x-сервер',
    'model:i-i-s-zxccxzxczxcxz-x-x-x-сотрудник',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
