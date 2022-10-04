import React, { useState } from 'react';
import { CheckBox, Icon } from '@rneui/themed';
import { StyleSheet, Dimensions, View, Text } from 'react-native';

type CheckboxComponentProps = {};

interface ILoginCheckBox {
  check: string
  value: string
  title: string
  setCheck: (value: string) => void
}

export const CheckboxComponent = ({ check, value, title, setCheck }: ILoginCheckBox) => {

  return (

    <CheckBox
      title={title}
      checkedIcon="dot-circle-o"
      uncheckedIcon="circle-o"
      checked={check === value ? true : false}
      onPress={() => setCheck(value)}
    />

  );
};