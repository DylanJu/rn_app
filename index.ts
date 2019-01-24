import { Navigation } from 'react-native-navigation';
import { registerScreens } from 'src/screen';

registerScreens();

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      stack: {
        id: 'AppStack',
        children: [{
          component: {
            name: 'VerificationOne',
            // options: {
            //   bottomTab: {
            //     fontSize: 12,
            //     text: 'Sign In',
            //     icon: require('./src/signin.png'),
            //   },
            // },
          }
        }]
      }
    }
  });
});
