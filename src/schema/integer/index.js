const NumberSchema = require('../number');
const {integer: semanticSchema} = require('../../../node_modules/semantic-schema').schema;

module.exports = class IntegerSchema extends NumberSchema {
    constructor() {
        super();
        this._semanticSchema = semanticSchema();
    }
};
