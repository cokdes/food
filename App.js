import { createStackNavigator, createAppContainer} from 'react-navigation';
import SearchScreen from './src/screens/SearchScreen';


const navigator = createStackNavigator({
  Search : SearchScreen
}, {
  initialRoutName: 'Search',
  defaultNavigationOptions:{
    title: 'BusinessSearch'
  }
});

export default createAppContainer(navigator);
