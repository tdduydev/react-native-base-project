import AsyncStorage from '@react-native-async-storage/async-storage';

import en from './en';
import vi from './vi';

export const setLangCode = async code => {
  await AsyncStorage.setItem('lang_code', code);
};

export const getLangCode = () => {
  let lang_code = AsyncStorage.getItem('lang_code');
  if (lang_code == null) {
    return 'vi';
  } else {
    return lang_code;
  }
};

export default {
  en,
  vi,
};
