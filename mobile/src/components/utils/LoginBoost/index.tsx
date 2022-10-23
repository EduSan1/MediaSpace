import React, { useState } from 'react';
import { CheckBox, Icon } from '@rneui/themed';
import {} from 'react-native';

type CheckboxComponentProps = {};

interface ILoginBoost {
  check: string
  value: string
  setCheck: (value: string) => void
}

export const LoginBoost = ({ check, value, setCheck }: ILoginBoost) => {

  return (

    <CheckBox
      checkedIcon="dot-circle-o"
      uncheckedIcon="circle-o"
      uncheckedColor='#D3C5F8'
      checkedColor='#D3C5F8'
      size={18}
      checked={check === value ? true : false}
      onPress={() => setCheck(value)}
    />

  );
};
