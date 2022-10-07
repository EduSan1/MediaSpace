import React, { useState } from 'react';
import { CheckBox, Icon } from '@rneui/themed';
import { StyleSheet } from 'react-native';
import {} from 'react-native';

type CheckboxComponentProps = {};

interface ILoginCheckBox {
  title: string,
  id : string
}

export const CheckboxComponent = ({ title  }: ILoginCheckBox) => {

    const [check, setCheck] = useState(false)

  return (

    <CheckBox
      title={title}
      checkedIcon="dot-circle-o"
      uncheckedIcon="circle-o"
      uncheckedColor='#D3C5F8'
      checkedColor='#D3C5F8'
      size={18}
      checked={check}
      onPress={() => setCheck(!check)}
      textStyle={{ fontSize: 12 }}

    />

  );
};
const styles = StyleSheet.create({
    check:{
        fontSize:10,
        
    },
})