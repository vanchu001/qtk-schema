const BaseSchema = require('../base');
const {boolean: semanticSchema} = require('../../../node_modules/semantic-schema').schema;

module.exports = class BooleanSchema extends BaseSchema {
    constructor() {
        super();
        this._semanticSchema = semanticSchema();
    }

    /**
     * 设置枚举值
     * @param  {...any} enumArr 枚举值，多个以逗号隔开
     */
    enum(...enumArr) {
        this._semanticSchema.enum(...enumArr);
        return this;
    }

    /**
     * 例子描述，支持布尔值，function与faker需要其他组件支持
     * @param {boolean|function|Faker} example 例子
     */
    example(example) {
        this._semanticSchema.example(example);
        return this;
    }
};
