import { Navigation } from 'react-native-navigation';
import { registerScreens } from 'src/screens';

registerScreens();

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      component: {
        name: 'SignIn',
        // options: {
        //   bottomTab: {
        //     fontSize: 12,
        //     text: 'Sign In',
        //     icon: require('./src/signin.png'),
        //   },
        // },
      }
    }
  });
});
