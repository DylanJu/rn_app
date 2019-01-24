"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_native_navigation_1 = require("react-native-navigation");
var screen_1 = require("src/screen");
screen_1.registerScreens();
react_native_navigation_1.Navigation.events().registerAppLaunchedListener(function () {
    react_native_navigation_1.Navigation.setRoot({
        root: {
            stack: {
                id: 'AppStack',
                children: [{
                        component: {
                            name: 'VerificationOne',
                        }
                    }]
            }
        }
    });
});
