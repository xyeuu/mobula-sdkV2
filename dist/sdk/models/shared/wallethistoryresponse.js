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
exports.WalletHistoryResponse = exports.WalletHistoryResponseData = exports.BalanceHistory = void 0;
var utils_1 = require("../../../internal/utils");
var class_transformer_1 = require("class-transformer");
var BalanceHistory = /** @class */ (function (_super) {
    __extends(BalanceHistory, _super);
    function BalanceHistory() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return BalanceHistory;
}(utils_1.SpeakeasyBase));
exports.BalanceHistory = BalanceHistory;
var WalletHistoryResponseData = /** @class */ (function (_super) {
    __extends(WalletHistoryResponseData, _super);
    function WalletHistoryResponseData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ elemType: BalanceHistory }),
        (0, class_transformer_1.Expose)({ name: "balance_history" }),
        (0, class_transformer_1.Type)(function () { return BalanceHistory; }),
        __metadata("design:type", Array)
    ], WalletHistoryResponseData.prototype, "balanceHistory", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "balance_usd" }),
        __metadata("design:type", Number)
    ], WalletHistoryResponseData.prototype, "balanceUsd", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "wallet" }),
        __metadata("design:type", Array)
    ], WalletHistoryResponseData.prototype, "wallet", void 0);
    return WalletHistoryResponseData;
}(utils_1.SpeakeasyBase));
exports.WalletHistoryResponseData = WalletHistoryResponseData;
var WalletHistoryResponse = /** @class */ (function (_super) {
    __extends(WalletHistoryResponse, _super);
    function WalletHistoryResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "data" }),
        (0, class_transformer_1.Type)(function () { return WalletHistoryResponseData; }),
        __metadata("design:type", WalletHistoryResponseData)
    ], WalletHistoryResponse.prototype, "data", void 0);
    return WalletHistoryResponse;
}(utils_1.SpeakeasyBase));
exports.WalletHistoryResponse = WalletHistoryResponse;
