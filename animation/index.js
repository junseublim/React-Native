/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
//import RNAnimations from './Focus'
//import RNAnimations from './Loading'
import RNAnimations from './Parallel'
import {name as appName} from './app.json';
AppRegistry.registerComponent(appName, () => RNAnimations);
