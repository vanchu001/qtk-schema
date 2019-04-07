const BaseSchema = require('../base');
const {object: semanticSchema} = require('../../../node_modules/semantic-schema').schema;

module.exports = class ObjectSchema extends BaseSchema {
    constructor(properties) {
        super();
        this._semanticSchema = semanticSchema();
        if (properties !== undefined) this.properties(properties);
    }

    /**
     * 描述object对象必含的字段
     * @param  {...string} propertyNameArr 必含的字段，多个以逗号隔开
     */
    require(...propertyNameArr) {
        let hadSetProperties = this._semanticSchema._current.get('properties') !== undefined || this._semanticSchema._tree.get('properties') !== undefined; //if情况要判断两个
        if (!hadSetProperties) throw new Error('must set properties before setting require');
        this._semanticSchema.require(...propertyNameArr);
        return this;
    }

    /**
     * 描述properties里所有的字段都必含，注意必须先描述properties或者patternProperties
     */
    requireAll() {
        let hadSetProperties = this._semanticSchema._current.get('properties') !== undefined || this._semanticSchema._tree.get('properties') !== undefined; //if情况要判断两个
        if (!hadSetProperties) throw new Error('must set properties before setting require');
        this._semanticSchema.require(...Object.keys(this._semanticSchema._current.get('properties')));
        return this;
    }

    /**
     * 描述object对象里含有的字段及其类型
     * @param {object} properties 描述体
     */
    properties(properties) {
        this._semanticSchema.properties(
            Object.keys(properties)
                .reduce((prev, key) => {
                    prev[key] = require('../../sugar').resolve(properties[key]).normalize();
                    return prev;
                }, {})
        );
        return this;
    }

    /**
     * 描述object对象里含有的字段(使用正则描述key)及其类型
     * @param {object} patternProperties 
     */
    patternProperties(patternProperties) {
        this._semanticSchema.patternProperties(
            Object.keys(patternProperties)
                .reduce((prev, key) => {
                    prev[key] = require('../../sugar').resolve(patternProperties[key]).normalize();
                    return prev;
                }, {})
        );
        return this;
    }

    /**
     * 描述object对象是否允许出现properties/patternProperties里未定义的字段，默认为是
     * @param {boolean} isAllow 
     */
    additionalProperties(isAllow = true) {
        this._semanticSchema.additionalProperties(isAllow);
        return this;
    }

    /**
     * 分情况描述-if
     */
    get if() {
        this._semanticSchema = this._semanticSchema.if;
        return this;
    }

    /**
     * 分情况描述-当符合某个条件时，进行描述对象
     */
    get then() {
        this._semanticSchema = this._semanticSchema.then;
        return this;
    }

    /**
     * 分情况描述-elseIf
     */
    get elseIf() {
        this._semanticSchema = this._semanticSchema.elseIf;
        return this;
    }

    /**
     * 分情况描述-else
     */
    get else() {
        this._semanticSchema = this._semanticSchema.else;
        return this;
    }

    /**
     * 分情况描述-结束标准
     */
    get endIf() {
        this._semanticSchema = this._semanticSchema.endIf;
        return this;
    }
};
