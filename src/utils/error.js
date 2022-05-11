import { showMessage } from 'react-native-flash-message';
import { Alert } from 'react-native';

import NavigationService from './navigation';
import { rootSwitch } from '../configs/navigatorName';

export function handleError(e) {
  console.log('handleError', e);

  switch (e.errorCode) {
    case 409 || 406 || 401:
      Alert.alert('Thông báo', e.errorMessage, [
        {
          text: 'Đồng ý',
          onPress: () => {
            NavigationService.navigate(rootSwitch.auth);
          },
          style: 'destructive',
        },
      ]);
      break;
    case 404:
      showMessage({
        message: 'Thông báo',
        description: 'Máy chủ bảo trì, xin vui lòng thử lại sau',
        type: 'danger',
        icon: 'info',
      });
      break;
    case 408:
      showMessage({
        message: 'Thông báo',
        description: 'Request Timeout response',
        type: 'danger',
        icon: 'info',
      });
      break;
    case 500:
      showMessage({
        message: 'Thông báo',
        description: 'internal server error',
        type: 'danger',
        icon: 'info',
      });
      break;
    default:
      showMessage({
        message: 'Thông báo',
        description: 'internal server error',
        type: 'danger',
        icon: 'info',
      });
  }
  // if (e.errorCode === '409' || e.errorCode === '406' || e.errorCode === '401') {
  //   Alert.alert('Thông báo', e.errorMessage, [
  //     {
  //       text: 'Đồng ý',
  //       onPress: () => {
  //         NavigationService.navigate(rootSwitch.auth);
  //       },
  //       style: 'destructive',
  //     },
  //   ]);
  // }
  // else if (e?.errorCode !== '0' && e?.errorCode) {
  //   showMessage({
  //     message: 'Thông báo',
  //     description: e?.errorMessage,
  //     type: 'danger',
  //     icon: 'info',
  //   });
  // }
}

export function notificationMessage(data) {
  const type = data && data.type ? data.type : 'error';
  const message = data && data.message ? data.message : 'Fail';
  const errors = data && data.errors ? data.errors : {};
  return {
    type,
    message,
    errors,
  };
}
