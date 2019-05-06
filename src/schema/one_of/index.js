const BaseSchema = require('../base');
const {oneOf: semanticSchema} = require('../../semantic-schema').schema;

module.exports = class extends BaseSchema {
    constructor(...items) {
        super();
        this._semanticSchema = semanticSchema(...items.map(item => require('../../sugar').resolve(item).normalize()));
    }
};
