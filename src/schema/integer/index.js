const NumberSchema = require('../number');
const {integer: semanticSchema} = require('../../semantic-schema').schema;

module.exports = class IntegerSchema extends NumberSchema {
    constructor() {
        super();
        this._semanticSchema = semanticSchema();
    }
};
