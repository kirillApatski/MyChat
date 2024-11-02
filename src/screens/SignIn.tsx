import React from 'react';
import {Image, Pressable, StyleSheet, View} from 'react-native';
import {Text, TEXT_SIZE, TEXT_WEIGHT} from '../shared/ui/Text';
import {Input} from '../shared/ui/Input';
import {FormProvider, useForm} from 'react-hook-form';
import {moderateScale} from 'react-native-size-matters';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Button, BUTTON_SIZE} from '../shared/ui/Button';
import {COLORS} from '../shared/config/colors';
import {images} from '../shared/assets/images';
import {useNavigation} from '@react-navigation/native';

export const SignIn = () => {
  const {navigate} = useNavigation<any>();
  const method = useForm();

  const navigateToRegister = () => {
    navigate('SignUp');
  };
  return (
    <>
      <Image source={images.bg} resizeMode={'cover'} style={[s.bg]} />
      <View style={[s.container]}>
        <Text
          text={'Войти'}
          size={TEXT_SIZE.XXXL}
          weight={TEXT_WEIGHT.BOLD}
          style={[s.text]}
        />
        <FormProvider {...method}>
          <Input
            name="Email"
            placeholder="Email"
            leftIcon={
              <Ionicons name="mail-outline" size={24} color={COLORS.white} />
            }
          />
          <Input
            name="Пароль"
            placeholder="Пароль"
            secureTextEntry
            leftIcon={
              <Ionicons name="key-outline" size={24} color={COLORS.white} />
            }
          />
          <Pressable style={[s.btnForgot]} hitSlop={moderateScale(10)}>
            <Text
              size={TEXT_SIZE.LG}
              text={'Забыли пароль?'}
              style={[s.forgotText]}
            />
          </Pressable>
          <Button
            size={BUTTON_SIZE.small}
            text="Войти"
            textSize={TEXT_SIZE.XL}
          />
          <View style={[s.containerRegisterText]}>
            <Text
              size={TEXT_SIZE.LG}
              text={'Не зарегестрированы? '}
              style={[s.forgotText]}
            />
            <Pressable
              style={[s.btnForgot]}
              hitSlop={moderateScale(10)}
              onPress={navigateToRegister}>
              <Text
                size={TEXT_SIZE.LG}
                weight={TEXT_WEIGHT.BOLD}
                text={'Регистрация'}
                style={[s.registerText]}
              />
            </Pressable>
          </View>
        </FormProvider>
      </View>
    </>
  );
};

const s = StyleSheet.create({
  bg: {
    height: moderateScale(340),
    marginLeft: moderateScale(-30),
    borderBottomLeftRadius: moderateScale(120),
    borderBottomRightRadius: moderateScale(160),
  },
  container: {
    marginTop: moderateScale(-40),
    gap: moderateScale(10),
    paddingHorizontal: moderateScale(16),
  },
  text: {
    color: COLORS.white,
  },
  btnForgot: {
    justifyContent: 'flex-end',
    alignSelf: 'flex-end',
  },
  forgotText: {
    color: COLORS.black,
  },
  containerRegisterText: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginTop: moderateScale(20),
  },
  registerText: {
    color: COLORS.blue['500'],
  },
});
