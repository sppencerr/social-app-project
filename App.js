import { AsyncStorage } from 'react-native';
import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';
import Auth from 
import ShareAPlace from 
import FindPlaces from 
import PlaceDetails from 
import SideBar from 

import startMainApp from './src/screens/startTabsScreen';
import startLoginScreen from './src/screens/startLoginScreen';

import store from './src/store/store';

const appStore = store();
const startApp = async () => {
  const result = await AsyncStorage.getItem('@auth:auth');

  if (result === 'true') {
    startMainApp();
  } else {
    startLoginScreen();
  }
  
  return result;
}

Navigation.registerComponent('places-bookmarker.Auth', () => Auth, appStore, Provider);
Navigation.registerComponent('places-bookmarker.ShareAPlace', () => ShareAPlace, appStore, Provider);
Navigation.registerComponent('places-bookmarker.FindPlaces', () => FindPlaces, appStore, Provider);
Navigation.registerComponent('places-bookmarker.PlaceDetails', () => PlaceDetails, appStore, Provider);
Navigation.registerComponent('places-bookmarker.SideDrawer', () => SideDrawer);

startApp();

