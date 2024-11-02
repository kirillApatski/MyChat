import React, {useMemo} from 'react';
import {
  Pressable,
  PressableProps,
  StyleProp,
  StyleSheet,
  TextStyle,
  ViewStyle,
} from 'react-native';
import {COLORS} from '../../config/colors';
import {Text, TEXT_SIZE} from '../Text';
import {moderateScale} from 'react-native-size-matters';

type ButtonProps = {
  text?: string;
  size?: BUTTON_SIZE;
  textSize?: TEXT_SIZE;
  style?: StyleProp<ViewStyle>;
  pressedStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  pressedTextStyle?: StyleProp<TextStyle>;
} & PressableProps;

export enum BUTTON_SIZE {
  small = 'small',
  middle = 'middle',
  large = 'large',
}

export const Button = ({
  text,
  size = BUTTON_SIZE.large,
  textSize = TEXT_SIZE.BASE,
  style,
  textStyle,
  pressedTextStyle,
  pressedStyle,
  disabled,
  ...rest
}: ButtonProps) => {
  const containerStyle = useMemo(
    () =>
      StyleSheet.flatten([
        s.container,

        size === BUTTON_SIZE.small && s.smallContainer,
        size === BUTTON_SIZE.middle && s.middleContainer,
        size === BUTTON_SIZE.large && s.largeContainer,

        style,

        disabled && s.pressableDisable,
      ]),
    [size, disabled, style],
  );
  return (
    <Pressable
      style={({pressed}) => [
        containerStyle,
        pressed && [s.basePressedStyle, pressedStyle],
      ]}
      disabled={disabled}
      {...rest}>
      {({pressed}) => (
        <Text
          text={text}
          size={textSize}
          style={[textStyle, pressed && [pressedTextStyle]]}
        />
      )}
    </Pressable>
  );
};

const s = StyleSheet.create({
  container: {
    backgroundColor: COLORS.blue['400'],
    borderRadius: moderateScale(8),
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    paddingVertical: moderateScale(12),
    paddingHorizontal: moderateScale(12),
    width: '100%',
  },

  smallContainer: {
    paddingVertical: moderateScale(8),
    paddingHorizontal: moderateScale(12),
  },
  middleContainer: {
    paddingVertical: moderateScale(10),
    paddingHorizontal: moderateScale(12),
  },
  largeContainer: {
    paddingVertical: moderateScale(15),
    paddingHorizontal: moderateScale(12),
  },

  basePressedStyle: {
    backgroundColor: COLORS.blue['300'],
  },
  pressableDisable: {
    backgroundColor: COLORS.blue['300'],
    opacity: 0.7,
  },

  leftIconStyle: {marginStart: 8, zIndex: 1},
  rightIconStyle: {marginEnd: 8, zIndex: 1},
});
