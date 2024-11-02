import React from 'react';
import {Image, Pressable, StyleSheet, View} from 'react-native';
import {images} from '../shared/assets/images';
import {moderateScale} from 'react-native-size-matters';
import {Text, TEXT_SIZE, TEXT_WEIGHT} from '../shared/ui/Text';
import {FormProvider, useForm} from 'react-hook-form';
import {Input} from '../shared/ui/Input';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {COLORS} from '../shared/config/colors';
import {Button, BUTTON_SIZE} from '../shared/ui/Button';
import {useNavigation} from '@react-navigation/native';

export const SignUp = () => {
  const {navigate} = useNavigation<any>();

  const method = useForm();

  const navigateToSignIn = () => {
    navigate('SignIn');
  };

  return (
    <>
      <Image source={images.register} resizeMode={'stretch'} style={[s.bg]} />
      <View style={[s.container]}>
        <Text
          text={'Регистрация'}
          size={TEXT_SIZE.XXXL}
          weight={TEXT_WEIGHT.BOLD}
          style={[s.text]}
        />
        <FormProvider {...method}>
          <Input
            name="Имя"
            placeholder="Имя"
            leftIcon={
              <Ionicons name="person-outline" size={24} color={COLORS.white} />
            }
          />
          <Input
            name="Email"
            placeholder="Email"
            leftIcon={
              <Ionicons name="mail-outline" size={24} color={COLORS.white} />
            }
          />
          <Input
            name="password"
            placeholder="Пароль"
            secureTextEntry
            leftIcon={
              <Ionicons name="key-outline" size={24} color={COLORS.white} />
            }
          />
          <Input
            name="repeatPassword"
            placeholder="Повторите Пароль"
            secureTextEntry
            leftIcon={
              <Ionicons name="key-outline" size={24} color={COLORS.white} />
            }
          />
          <Button
            size={BUTTON_SIZE.small}
            text="Зарегистрировать"
            textSize={TEXT_SIZE.XL}
          />
          <View style={[s.containerRegisterText]}>
            <Text
              size={TEXT_SIZE.LG}
              text={'Есть аккаунт? '}
              style={[s.forgotText]}
            />
            <Pressable
              style={[s.btnForgot]}
              hitSlop={moderateScale(10)}
              onPress={navigateToSignIn}>
              <Text
                size={TEXT_SIZE.LG}
                weight={TEXT_WEIGHT.BOLD}
                text={'Войти'}
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
    backgroundColor: 'red',
    height: moderateScale(200),
    width: '65%',
    borderBottomLeftRadius: moderateScale(50),
    borderBottomRightRadius: moderateScale(50),
    alignSelf: 'center',
  },
  container: {
    gap: moderateScale(20),
    paddingHorizontal: moderateScale(16),
  },
  text: {
    color: COLORS.blue['400'],
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
  },
  registerText: {
    color: COLORS.blue['500'],
  },
});
