const Base = require('../base');
const {string: semanticSchema} = require('../../../node_modules/semantic-schema').schema;

module.exports = class extends Base {
    constructor(pattern) {
        super();
        this._semanticSchema = semanticSchema(pattern);
    }

    /**
     * 例子描述，支持null，function与faker需要其他组件支持
     * @param {null|function|Faker} example 例子
     */
    enum(...enumArr) {
        this._semanticSchema.enum(...enumArr);
        return this;
    }

    /**
     * 描述字符串最大长度
     * @param {integer} len 最大长度
     */
    maxLength(len) {
        this._semanticSchema.maxLength(len);
        return this;
    }

    /**
     * 描述字符串最小长度
     * @param {integer} len 最小长度
     */
    minLength(len) {
        this._semanticSchema.minLength(len);
        return this;
    }

    /**
     * 描述字符串确切长度,minLength,maxLength
     * @param {integer} len 长度确切值
     */
    length(len) {
        this.minLength(len).maxLength(len);
        return this;
    }

    /**
     * 使用正则描述字符串
     * @param {string|Regex} regex 正则对象或者正则字符串
     */
    pattern(regex) {
        this._semanticSchema.pattern(regex);
        return this;
    }

    /**
     * 例子描述，支持string，function与faker需要其他组件支持
     * @param {null|function|Faker} example 例子
     */
    example(example) {
        this._semanticSchema.example(example);
        return this;
    }
};
