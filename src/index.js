import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import './config-i18n';
import NavigationService from './utils/navigation';
import AppRouter from './AppRouter';
import { enableScreens } from 'react-native-screens';

export default class App extends React.Component {

    componentDidMount() {
        enableScreens(true);
    }

    render() {
        return (
            <NavigationContainer
                ref={navigationRef => {
                    NavigationService.setTopLevelNavigator(navigationRef);
                }}>
                <SafeAreaProvider>
                    <AppRouter />
                </SafeAreaProvider>
            </NavigationContainer>
        );
    }
}
