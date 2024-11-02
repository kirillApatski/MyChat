import React from 'react';
import {StyleSheet, TextInput, TextInputProps, View} from 'react-native';
import {Controller, useFormContext} from 'react-hook-form';
import {Text} from '../Text';
import {COLORS} from '../../config/colors';
import {moderateScale} from 'react-native-size-matters';

type InputProps = {
  name: string;
  placeholder?: string;
  leftIcon?: any;
} & TextInputProps;

export const Input = ({name, placeholder, leftIcon, ...rest}: InputProps) => {
  const {
    control,
    formState: {errors},
  } = useFormContext();
  return (
    <>
      <Controller
        control={control}
        name={name}
        render={({field: {value, onChange, onBlur}}) => (
          <View style={[s.inputContainer]}>
            {leftIcon && leftIcon}
            <TextInput
              {...rest}
              placeholder={placeholder}
              value={value}
              onBlur={onBlur}
              onChangeText={onChange}
              style={[s.input]}
              placeholderTextColor={COLORS.white}
            />
          </View>
        )}
      />
      {errors[name] && (
        <Text style={s.errorText}>
          {errors[name]?.message?.toString() || 'Opps...'}
        </Text>
      )}
    </>
  );
};

const s = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: moderateScale(10),
    borderRadius: moderateScale(8),
    padding: moderateScale(8),
    backgroundColor: COLORS.blue['300'],
  },
  input: {
    width: '85%',
    fontSize: moderateScale(16),
    color: COLORS.white,
  },
  errorText: {
    color: COLORS.red['700'],
  },
});
