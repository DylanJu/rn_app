"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_native_navigation_1 = require("react-native-navigation");
var VerificationOne_1 = __importDefault(require("src/stack/VerificationOne"));
function registerScreens() {
    react_native_navigation_1.Navigation.registerComponent('VerificationOne', function () { return VerificationOne_1.default; });
}
exports.registerScreens = registerScreens;
