// import {isIOS} from './helper';
const Fonts = {
    SFProTextRegular: 'SFProText-Regular',
    SFProTextBold: 'SFProText-Bold',
    SFProTextHeavy: 'SFProText-Heavy',
    SFProTextLight: 'SFProText-Light',
    SFProTextMedium: 'SFProText-Medium',
    SFProTextSemiBold: 'SFProText-SemiBold',
  
    // SFProTextRegular: isIOS ? 'SFProText-Regular' : 'SFProText-Regular',
  };
  
  export default (fontName) => {
    return Fonts[fontName];
  };
  