import { NavigationActions } from "@react-navigation/compat";
import { CommonActions } from "@react-navigation/native";

let _navigator;

function setTopLevelNavigator(navigatorRef) {
  _navigator = navigatorRef;
}

function navigate(routeName, params = {}) {
  _navigator.dispatch(
    NavigationActions.navigate({
      routeName,
      params,
    })
  );
}

function goBack() {
  _navigator.dispatch(NavigationActions.back());
}

function reset(routeName, params = {}) {
  _navigator.dispatch(
    CommonActions.reset({
      index: 1,
      routes: [{ name: routeName, params: params }],
    })
  );
}

// add other navigation functions that you need and export them

export default {
  navigate,
  goBack,
  setTopLevelNavigator,
  reset,
};
