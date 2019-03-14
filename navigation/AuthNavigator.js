import { createStackNavigator, createDrawerNavigator } from 'react-navigation';
import SigninScreen from '../screens/Signin';
import SignupScreen from '../screens/Signup';

//authentication stack for user before login
export const AuthStack = createStackNavigator({
    Signin: SigninScreen,
    Signup:SignupScreen
            
},{
    initialRouteName: 'Signin',
});
    



