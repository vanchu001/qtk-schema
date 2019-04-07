const BaseSchema = require('../base');
const {number: semanticSchema} = require('../../../node_modules/semantic-schema').schema;

module.exports = class NumberSchema extends BaseSchema {
    constructor(min = undefined, max = undefined) {
        super();
        this._semanticSchema = semanticSchema(); //semanticSchema的min,max有bug
        if (min !== undefined) this._semanticSchema.min(min);
        if (max !== undefined) this._semanticSchema.max(max);
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
     * 描述最大值
     * @param {number} num 最大值
     */
    max(num) {
        this._semanticSchema.max(num);
        return this;
    }

    /**
     * 描述最小值
     * @param {number} num 最小值
     */
    min(num) {
        this._semanticSchema.min(num);
        return this;
    }

    /**
     * 小于设置值
     * @param {number} num 设置值
     */
    exclusiveMax(num) {
        this._semanticSchema.exclusiveMax(num);
        return this;
    }

    /**
     * 大于设置值
     * @param {number} num 设置值
     */
    exclusiveMin(num) {
        this._semanticSchema.exclusiveMin(num);
        return this;
    }

    /**
     * 例子描述，支持number，function与faker需要其他组件支持
     * @param {null|function|Faker} example 例子
     */
    example(example) {
        this._semanticSchema.example(example);
        return this;
    }
};
