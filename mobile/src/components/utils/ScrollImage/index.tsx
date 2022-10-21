import React, { useRef } from "react"
import  {View, StyleSheet, Dimensions, ScrollView,} from "react-native"



export const ScrollImage = () =>{



    return(
        <>
     

                <ScrollView 
                style={styles.container}
                horizontal={true}
                pagingEnabled={true}>
          

                <View style={styles.imageView}></View>
                <View style={styles.imageView2}></View>
                <View style={styles.imageView3}></View>

                </ScrollView>

            
        
        </>
    )

}

const styles = StyleSheet.create({
    container:{
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height * 0.9,
        
    },
    imageView:{
        backgroundColor: '#212677',
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height 
    },
    imageView2:{
        backgroundColor: '#765633',
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height 
    },
    imageView3:{
        backgroundColor: '#787873',
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height 
    }
})