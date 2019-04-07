const validator = require('semantic-schema').validator;

module.exports = class Validator {
    /**
     * @constructor
     * 设置校验器schema
     * @param {any} schema schema
     */
    constructor(schema) {
        schema = require('../sugar').resolve(schema);
        this._validator = validator.from(schema.normalize());
        this._schema = this._validator._schema;
        this._validate = this._validator._validate;
    }

    /**
     * 设置校验器schema
     * @param {any} schema schema
     */
    static from(schema) {
        return new Validator(schema);
    }

    /**
     * 校验json实例是否符合schema描述
     * @param {any} instance json数据
     */
    validate(instance) {
        return this._validate(instance);
    }

    /**
     * 校验器错误对象
     */
    errors() {
        return this._validate.errors;
    }

    /**
     * 校验器错误文本信息
     * @param {*} errors 
     */
    errorsText(errors) {
        return this._validator.errorsText(errors);
    }

    /**
     * 获取将qtk-schema转换为json-schema
     */
    get jsonSchema() {
        return this._schema;
    }
};
