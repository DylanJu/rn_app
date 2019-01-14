import { Navigation } from 'react-native-navigation'

export const goToSignIn = () => Navigation.setRoot({
  root: {
    bottomTabs: {
      id: 'BottomTabsId',
      children: [
        {
          component: {
            name: 'SignIn',
            options: {
              bottomTab: {
                fontSize: 12,
                text: 'Sign In',
                icon: require('./signin.png'),
              },
            },
          },
        },
        {
          component: {
            name: 'SignUp',
            options: {
              bottomTab: {
                text: 'Sign Up',
                fontSize: 12,
                icon: require('./signup.png'),
              },
            },
          },
        },
      ],
    },
  },
});

export const goSideMenu = () => Navigation.setRoot({
  root: {
    sideMenu: {
      left: {
        component: {
          name: 'Chart',
        },
      },
      center: {
        component: {
          name: 'Order',
        },
      },
      right: {
        component: {
          name: 'History',
        },
      },
    },
  },
});

export const goStack = () => Navigation.setRoot({
  root: {
    stack: {
      children: [{
        component: {
          name: 'VerificationOne',
          options: {
            bottomTab: {
              fontSize: 12,
              text: 'Sign In',
              icon: require('./signin.png'),
            },
          },
        }
      }]
    }
  }
})

export const goTwo = id => Navigation.push(id, {
  component: {
    name: 'VerificationTwo',
  },
});

export const goThree = id => Navigation.push(id, {
  component: {
    name: 'VerificationThree',
  },
});
