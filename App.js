import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import HomeScreen from './src/screens/HomeScreen'

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'Study Buddy',
      headerStyle: {
        backgroundColor: '#FFEAD0',
      },
      headerTintColor: '#326771',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }
  },
)

export default createAppContainer(navigator)