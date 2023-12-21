import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-zxccxzxczxcxz-x-x-x-программы', 'Unit | Serializer | i-i-s-zxccxzxczxcxz-x-x-x-программы', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-zxccxzxczxcxz-x-x-x-программы',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'transform:i-i-s-zxccxzxczxcxz-x-x-x-ед-изм',
    'transform:i-i-s-zxccxzxczxcxz-x-x-x-режим-сервера',
    'transform:i-i-s-zxccxzxczxcxz-x-x-x-тип-настр',

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
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
