import React from "react"
import { Text, View, StyleSheet, Dimensions, ScrollView } from "react-native"

interface IProject {
    id: string
    name: string,
    description: string
    value: number
    image: [{ "url": string }]
    categories: any
    user: {
        first_name: string
        nickname: string
        profile_picture: string
    }
}

export const ListProject = ({ id, name, description, value, image, categories, user }: IProject) => {


    return (
        <>
       

        <View style={styles.container}></View>

        <View style={styles.scroll}>
        <View style={styles.containerCard}>
            
            
            <View style={styles.image}>
                {image}           
            </View>
            
            <View style={styles.profile}>
                {/* <Text> {user.profile_picture}</Text>           
                <Text> @{user.nickname}</Text>            */}
            </View>

            <View style={styles.describle}>
                <Text> {name}</Text>           
                <Text> {description}</Text>           
            </View>
 
            <View style={styles.value}>
                <Text> Valor estimado:</Text>           
                <Text> {value}</Text>           
            </View>
            <View style={styles.category}>
                       
            </View>

        </View>

        <View style={styles.containerCard}>
            
            
            <View>
                <Text> {image}</Text>           
            </View>
            
            <View>
                {/* <Text> {user.profile_picture}</Text>           
                <Text> @{user.nickname}</Text>            */}
            </View>

            <View>
                <Text> {name}</Text>           
                <Text> {description}</Text>           
            </View>
 
            <View>
                <Text> Valor estimado:</Text>           
                <Text> {value}</Text>           
            </View>

        </View>
        </View>

        </>
    )
}

const styles = StyleSheet.create({
    container:{
        width: Dimensions.get('window').width ,
        height: Dimensions.get("window").height * 0.35,
        alignItems:'center',
        justifyContent: 'center',
        backgroundColor: '#657832'
    },
    containerCard:{
        width: Dimensions.get('window').width * 0.45,
        height: Dimensions.get("window").height * 0.3,
        alignItems:'center',
        justifyContent: 'space-around',
        borderColor: '#B6565f',
        borderRadius: 10,
        borderWidth: 1,
        // backgroundColor:"blue"

    },
    scroll:{
        width: Dimensions.get('window').width ,
        height: Dimensions.get("window").height * 2,
        display: 'flex',
        flexDirection:'row',
        justifyContent:'space-around',
        paddingTop: 10
        
    },
    image:{
        backgroundColor:'#211983',
        width: Dimensions.get('window').width * 0.44 ,
        height: Dimensions.get("window").height * 0.12,
        
    },
    profile:{
        backgroundColor:'#767543',
        width: Dimensions.get('window').width * 0.44 ,
        height: Dimensions.get("window").height * 0.05,
    },
    describle:{
        backgroundColor:'#343564',
        width: Dimensions.get('window').width * 0.44 ,
        height: Dimensions.get("window").height * 0.05,
    },
    value:{
        backgroundColor:'#ffb345',
        width: Dimensions.get('window').width * 0.44 ,
        height: Dimensions.get("window").height * 0.03,
    },
    category:{
        backgroundColor:'#116544',
        // width: Dimensions.get('window').width * 0.44 ,
        // height: Dimensions.get("window").height * 0.03,
        width:"100%",
        height: "30%",

    }
})