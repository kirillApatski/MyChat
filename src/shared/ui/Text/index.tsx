import React from 'react';
import {StyleSheet, Text as RNText, TextProps} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import {COLORS} from '../../config/colors';

type TextType = {
  text?: string;
  size?: TEXT_SIZE;
  weight?: TEXT_WEIGHT;
} & TextProps;

export enum TEXT_SIZE {
  XS = 'size_xs',
  BASE = 'size_base',
  LG = 'size_lg',
  XL = 'size_xl',
  XXXL = 'size_xxxl',
}

export enum TEXT_WEIGHT {
  REGULAR = 'font_regular',
  MEDIUM = 'font_medium',
  BOLD = 'font_bold',
}

export const Text = ({
  text,
  size = TEXT_SIZE.BASE,
  weight = TEXT_WEIGHT.REGULAR,
  style,
  ...rest
}: TextType) => {
  return (
    <RNText style={[s.text, s[size], s[weight], style]} {...rest}>
      {text}
    </RNText>
  );
};

const s = StyleSheet.create({
  text: {
    textAlign: 'center',
    color: COLORS.white,
    fontFamily: 'InterMedium',
  },
  size_xs: {
    fontSize: moderateScale(10),
    lineHeight: moderateScale(12),
  },
  size_base: {
    fontSize: moderateScale(12),
    lineHeight: moderateScale(18),
  },
  size_lg: {
    fontSize: moderateScale(14),
    lineHeight: moderateScale(21),
  },
  size_xl: {
    fontSize: moderateScale(16),
    lineHeight: moderateScale(21),
  },
  size_xxxl: {
    fontSize: moderateScale(36),
    lineHeight: moderateScale(41),
  },
  font_regular: {
    fontFamily: 'Inter-Regular',
    fontWeight: '400',
  },
  font_medium: {
    fontFamily: 'Inter-Medium',
    fontWeight: '500',
  },
  font_bold: {
    fontWeight: '700',
  },
});
