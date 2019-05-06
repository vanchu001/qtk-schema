const BaseSchema = require('../base');
const {empty: semanticSchema} = require('../../semantic-schema').schema;

module.exports = class extends BaseSchema {
    constructor() {
        super();
        this._semanticSchema = semanticSchema();
    }
};
