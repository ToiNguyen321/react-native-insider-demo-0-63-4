import { NavigationActions, StackActions } from 'react-navigation';
let _navigator;

function setTopLevelNavigator(navigatorRef) {
  _navigator = navigatorRef;
}

function canUseNavigator() {
  return _navigator
}

function navigate(routeName, params) {
  console.log("🚀 ~ file: NavigationService.js:13 ~ navigate ~ routeName:", routeName)
  _navigator.dispatch(
    NavigationActions.navigate({
      routeName,
      params,
    })
  );
}
function setParams(routeName, params) {
  _navigator.dispatch(
    NavigationActions.setParams({
      routeName,
      params,
    })
  );
}

function push(routeName, params) {
  try {
    _navigator._navigation.push(
      routeName,
      params
    )
  } catch (error) {

  }
}

function goBack(keyOrStep) {
  _navigator.dispatch(
    NavigationActions.back({
    })
  );
}

function popToTop() {
  try {
    _navigator._navigation.popToTop()
  } catch (error) {

  }
}

function getNavigatorNav() {
  return _.get(_navigator, 'state.nav', {})
}

// add other navigation functions that you need and export them

export default {
  navigate,
  setParams,
  setTopLevelNavigator,
  getNavigatorNav,
  goBack,
  popToTop,
  push, canUseNavigator,
};