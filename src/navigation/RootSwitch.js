/* eslint-disable prettier/prettier */

import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { rootSwitch } from '../configs/navigatorName';

import MainStack from './MainStack';


// import Loading from 'src/screens/loading';

const Stack = createStackNavigator();

function RootStack() {

    // const isAuthorized = useSelector(
    //   (state) => state.auth.get('isAuthorized'),
    //   shallowEqual
    // );
    // console.log('isAuthorized', isAuthorized);
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            {/* {!isAuthorized ? */}
            <Stack.Screen
                name={rootSwitch.main}
                component={MainStack}
                options={{
                    animationEnabled: false,
                }}
            />
        </Stack.Navigator>
    );
}



export default RootStack;
