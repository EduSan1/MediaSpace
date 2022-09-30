import React, { useState } from 'react';
import { CheckBox, Icon } from '@rneui/themed';
import { StyleSheet, Dimensions, View, Text } from 'react-native';

type CheckboxComponentProps = {};

export const CheckboxComponent: React.FunctionComponent<CheckboxComponentProps> = () => {
const [check1, setCheck1] = useState(false);
const [check2, setCheck2] = useState(false);
const [check3, setCheck3] = useState(false);

return (
  <>
  <View>
    <Text>Gênero</Text>
    <View style={styles.checkbox}>
    <CheckBox
      title="Masculino"
      checkedIcon="dot-circle-o"
      uncheckedIcon="circle-o"
      checked={check1}
      onPress={() => setCheck1(!check1)}
    />
    <CheckBox
      title="Feminino"
      checkedIcon="dot-circle-o"
      uncheckedIcon="circle-o"
      checked={check2}
      onPress={() => setCheck2(!check2)}
    />
    <CheckBox
      title="Outro"
      checkedIcon="dot-circle-o"
      uncheckedIcon="circle-o"
      checked={check3}
      onPress={() => setCheck3(!check3)}
    />
    </View>
    </View>
  </>
);
};

const styles = StyleSheet.create({
    checkbox:{
        width: Dimensions.get('window').width * 0.7,
        minHeight: Dimensions.get('window').height * 0.1 ,
        alignItems:'center',
        flexDirection:'row',
        justifyContent:'space-evenly',
        fontSize: 12
        

        
    }
})