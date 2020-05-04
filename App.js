import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import HomeScreen from './src/screens/HomeScreen'
import QuestionScreen from './src/screens/QuestionScreen'

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Question: QuestionScreen,
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