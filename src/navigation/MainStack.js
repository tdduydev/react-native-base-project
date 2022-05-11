/* eslint-disable quotes */
import * as React from "react";
import { mainStack } from "../configs/navigatorName";
import {
    createStackNavigator,
    TransitionPresets,
} from "@react-navigation/stack";

const Stack = createStackNavigator();

import HomeScreen from "../pages/HomeScreen";


const TransitionScreenOptions = {
    ...TransitionPresets.SlideFromRightIOS, // This is where the transition happens
    // gestureEnabled: false,
    // headerShown: true,
    // headerTransparent: true,
    cardStyle: { backgroundColor: "transparent" },
    // cardStyleInterpolator: ({current: {progress}}) => ({
    //   cardStyle: {
    //     opacity: progress.interpolate({
    //       inputRange: [0, 1],
    //       outputRange: [0, 1],
    //     }),
    //   },
    //   overlayStyle: {
    //     opacity: progress.interpolate({
    //       inputRange: [0, 1],
    //       outputRange: [0, 0.5],
    //       extrapolate: 'clamp',
    //     }),
    //   },
    // }),
};
const MainStack = () => {
    return (
        <Stack.Navigator
            initialRouteName={mainStack.home}
            screenOptions={TransitionScreenOptions}
            detachInactiveScreens={false}
        >
            <Stack.Screen
                options={{ headerShown: false }}
                name={mainStack.home}
                component={HomeScreen}
            />
        </Stack.Navigator>
    );
};

export default MainStack;
