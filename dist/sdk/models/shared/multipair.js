"use strict";
/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MultiPair = exports.Token1 = exports.Token0 = void 0;
var utils_1 = require("../../../internal/utils");
var class_transformer_1 = require("class-transformer");
var Token0 = /** @class */ (function (_super) {
    __extends(Token0, _super);
    function Token0() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "address" }),
        __metadata("design:type", String)
    ], Token0.prototype, "address", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "decimals" }),
        __metadata("design:type", Number)
    ], Token0.prototype, "decimals", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "id" }),
        __metadata("design:type", Number)
    ], Token0.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "logo" }),
        __metadata("design:type", String)
    ], Token0.prototype, "logo", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "name" }),
        __metadata("design:type", String)
    ], Token0.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "price" }),
        __metadata("design:type", Number)
    ], Token0.prototype, "price", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "priceToken" }),
        __metadata("design:type", Number)
    ], Token0.prototype, "priceToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "symbol" }),
        __metadata("design:type", String)
    ], Token0.prototype, "symbol", void 0);
    return Token0;
}(utils_1.SpeakeasyBase));
exports.Token0 = Token0;
var Token1 = /** @class */ (function (_super) {
    __extends(Token1, _super);
    function Token1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "address" }),
        __metadata("design:type", String)
    ], Token1.prototype, "address", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "decimals" }),
        __metadata("design:type", Number)
    ], Token1.prototype, "decimals", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "id" }),
        __metadata("design:type", Number)
    ], Token1.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "logo" }),
        __metadata("design:type", String)
    ], Token1.prototype, "logo", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "name" }),
        __metadata("design:type", String)
    ], Token1.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "price" }),
        __metadata("design:type", Number)
    ], Token1.prototype, "price", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "priceToken" }),
        __metadata("design:type", Number)
    ], Token1.prototype, "priceToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "symbol" }),
        __metadata("design:type", String)
    ], Token1.prototype, "symbol", void 0);
    return Token1;
}(utils_1.SpeakeasyBase));
exports.Token1 = Token1;
var MultiPair = /** @class */ (function (_super) {
    __extends(MultiPair, _super);
    function MultiPair() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "address" }),
        __metadata("design:type", String)
    ], MultiPair.prototype, "address", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "blockchain" }),
        __metadata("design:type", String)
    ], MultiPair.prototype, "blockchain", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "exchange" }),
        __metadata("design:type", String)
    ], MultiPair.prototype, "exchange", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "factory" }),
        __metadata("design:type", String)
    ], MultiPair.prototype, "factory", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "liquidity" }),
        __metadata("design:type", Number)
    ], MultiPair.prototype, "liquidity", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "price" }),
        __metadata("design:type", Number)
    ], MultiPair.prototype, "price", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "protocol" }),
        __metadata("design:type", String)
    ], MultiPair.prototype, "protocol", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "token0" }),
        (0, class_transformer_1.Type)(function () { return Token0; }),
        __metadata("design:type", Token0)
    ], MultiPair.prototype, "token0", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "token1" }),
        (0, class_transformer_1.Type)(function () { return Token1; }),
        __metadata("design:type", Token1)
    ], MultiPair.prototype, "token1", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "volume" }),
        __metadata("design:type", Number)
    ], MultiPair.prototype, "volume", void 0);
    return MultiPair;
}(utils_1.SpeakeasyBase));
exports.MultiPair = MultiPair;
