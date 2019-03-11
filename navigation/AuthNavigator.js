import { createStackNavigator, createDrawerNavigator } from 'react-navigation';
import SigninScreen from '../screens/Signin';




        //authentication stack for user before login
        export const AuthStack = createStackNavigator({
            Enter: {
                screen: SigninScreen,
                navigationOptions:{
                header:null
                }
            }
            // Signin: SigninScreen,
                 
        },{
            initialRouteName: 'Enter',
        });
    



