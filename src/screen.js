"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_native_navigation_1 = require("react-native-navigation");
var VerificationOne_1 = __importDefault(require("stack/VerificationOne"));
var VerificationTwo_1 = __importDefault(require("stack/VerificationTwo"));
var VerificationThree_1 = __importDefault(require("stack/VerificationThree"));
function registerScreens() {
    react_native_navigation_1.Navigation.registerComponent('VerificationOne', function () { return VerificationOne_1.default; });
    react_native_navigation_1.Navigation.registerComponent('VerificationTwo', function () { return VerificationTwo_1.default; });
    react_native_navigation_1.Navigation.registerComponent('VerificationThree', function () { return VerificationThree_1.default; });
}
exports.registerScreens = registerScreens;
