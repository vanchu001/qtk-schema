const SemanticSchema = require('../../../node_modules/semantic-schema/src/schema/base');

module.exports = class {
    constructor() {
        this._semanticSchema = new SemanticSchema();
    }

    /**
     * 字段的简介描述
     * @param {string} desc 简介描述
     */
    title(title) {
        this._semanticSchema.custom('title', title);
        return this;
    }

    /**
     * 字段的详细描述
     * @param {string} desc 详细描述
     */
    desc(desc) {
        this._semanticSchema.desc(desc);
        return this;
    }

    /**
     * 主动schema抛错
     */
    invalid() {
        this._semanticSchema.invalid();
        return this;
    }

    /**
     * 将qtk-schema转换为semantic-schema,可以继续normalize(),将会转换为json-schema
     */
    normalize() {
        return this._semanticSchema;
    }
};
