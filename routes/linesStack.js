import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Lines from '../screens/Lines';
import StopDetails from '../screens/StopDetails';

const screens = {
  Lines: {
    screen: Lines
  },
  LineDetails: {
    screen: LineDetails
  },
  StopDetails: {
    screen: StopDetails
  }
}

const LinesStack = createStackNavigator(screens);

export default createAppContainer(LinesStack);
