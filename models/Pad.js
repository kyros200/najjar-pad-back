const { Model } = require('objection');
const knex = require('../database/KnexConnection');

class Pad extends Model {
  static get tableName() {
    return 'pad';
  }
  static get idColumn() {
    return 'id_pad';
  }
}
Pad.knex(knex);

module.exports = Pad;
