import {Dimensions, PixelRatio} from 'react-native';

export const responsiveWidth = (percentage: string) => {
  const {width} = Dimensions.get('window');
  const elementWidth = parseFloat(percentage);
  return PixelRatio.roundToNearestPixel((width * elementWidth) / 100);
};

export const responsiveHeight = (percentage: string) => {
  const {height} = Dimensions.get('window');
  const elementHeight = parseFloat(percentage);
  return PixelRatio.roundToNearestPixel((height * elementHeight) / 100);
};
