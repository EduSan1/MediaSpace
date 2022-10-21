import React, { useState } from 'react';
import { CheckBox, Icon } from '@rneui/themed';
import { StyleSheet } from 'react-native';
import { } from 'react-native';

interface ICheckboxComponentProps {
  title: string,
  id: string
  onClickFunction: (check: boolean) => void

}

export const CheckboxComponent = ({ title, id, onClickFunction }: ICheckboxComponentProps) => {

  const [check, setCheck] = useState(false)

  const onClickAction = () => {
    setCheck(!check)
    onClickFunction(check)
  }

  return (

    <CheckBox
      title={title}
      checkedIcon="dot-circle-o"
      uncheckedIcon="circle-o"
      uncheckedColor='#D3C5F8'
      checkedColor='#D3C5F8'
      size={18}
      checked={check}
      onPress={() => onClickAction()}
      textStyle={{ fontSize: 12 }}

    />

  );
};
const styles = StyleSheet.create({
  check: {
    fontSize: 10,

  },
})