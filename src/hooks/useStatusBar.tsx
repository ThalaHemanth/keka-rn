import React from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { StatusBar } from 'react-native';

/*
 *   Provide a simple function to change the status bar color when its on current screen
 * */

const useStatusBar: React.FC<{
  style: string;
  color: string;
  animated: boolean;
}> = (style, color, animated = true) => {
  useFocusEffect(
    React.useCallback(() => {
      StatusBar.setBarStyle(style, animated);
      color && StatusBar.setBackgroundColor(color);
    }, [animated, style, color]),
  );
};

export default useStatusBar;
