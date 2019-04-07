const BaseSchema = require('../base');
const {empty: semanticSchema} = require('../../../node_modules/semantic-schema').schema;

module.exports = class extends BaseSchema {
    constructor() {
        super();
        this._semanticSchema = semanticSchema();
    }

    /**
     * 例子描述，支持null，function与faker需要其他组件支持
     * @param {null|function|Faker} example 例子
     */
    example(example) {
        this._semanticSchema.example(example);
        return this;
    }
};
