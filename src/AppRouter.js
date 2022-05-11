/* eslint-disable prettier/prettier */
import React from 'react';
import { StatusBar } from 'react-native';
import FlashMessage from 'react-native-flash-message';
import { withTranslation } from 'react-i18next';

import './config-i18n';
/** Quản lý thame */
import { Components } from '@tdduydev/rn-base-component';

/** Saga Module */
import { connect } from 'react-redux';
import { compose } from 'redux';

/*----$---*/

import Router from './navigation/RootSwitch';


class AppRouter extends React.Component {
    constructor(props) {
        super(props);
        const { i18n, language } = props;
        if (i18n.language !== language) {
            i18n.changeLanguage(language);
        }
    }

    componentDidUpdate(prevProps) {
        const { i18n, language } = this.props;
        if (i18n.language !== language) {
            i18n.changeLanguage(language);
        }
    }

    render() {
        const themeColor = Components.darkColors;
        const barStyle = 'dark-content';
        return (
            <Components.ThemeProvider theme={themeColor}>
                <StatusBar
                    translucent
                    barStyle={barStyle}
                    backgroundColor="transparent"
                />
                <Router />

                <FlashMessage position="top" />
            </Components.ThemeProvider>
        );
    }
}


export default compose(withTranslation())(AppRouter);
