import React, { useRef } from "react"
import  {View, StyleSheet, Dimensions, ScrollView, Animated, ImageStore, useWindowDimensions, SafeAreaView, Image} from "react-native"



export const ScrollImage = () =>{



    return(
        <>
     

                <ScrollView 
                style={styles.container}
                horizontal={true}>
          

                <View style={styles.imageView}></View>
                <View style={styles.imageView2}></View>
                <View style={styles.imageView3}></View>

                </ScrollView>

            
        
        </>
    )

}

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#546789',
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height ,
        
    },
    imageView:{
        backgroundColor: '#212677',
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height *0.4
    },
    imageView2:{
        backgroundColor: '#765633',
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height *0.4
    },
    imageView3:{
        backgroundColor: '#787873',
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height *0.4
    }
})