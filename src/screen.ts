import { Navigation } from 'react-native-navigation';

// import Home from './Home.js';
// import SignIn from './SignIn';
// import SignUp from './SignUp';
// import Chart from './sideMenu/Chart';
// import Order from './sideMenu/Order';
// import History from './sideMenu/History';
import VerificationOne from 'stack/VerificationOne';
import VerificationTwo from 'stack/VerificationTwo';
import VerificationThree from 'stack/VerificationThree';

export function registerScreens() {
  // Navigation.registerComponent('Home', () => Home);
  // Navigation.registerComponent('SignIn', () => SignIn);
  // Navigation.registerComponent('SignUp', () => SignUp);
  // Navigation.registerComponent('Chart', () => Chart);
  // Navigation.registerComponent('Order', () => Order);
  // Navigation.registerComponent('History', () => History);
  Navigation.registerComponent('VerificationOne', () => VerificationOne);
  Navigation.registerComponent('VerificationTwo', () => VerificationTwo);
  Navigation.registerComponent('VerificationThree', () => VerificationThree);
}