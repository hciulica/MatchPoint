import { createAppContainer } from 'react-navigation';
import { createStackNavigator} from 'react-navigation-stack';
import StartScreen from './src/screens/StartScreen';

const navigator = createStackNavigator({
  Start: StartScreen,
}, 
{
    initialRouteName: 'Start',
    defaultNavigationOptions: {
      title: 'MatchPoint'
  }
});

export default createAppContainer(navigator);