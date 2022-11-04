import React from "react"
import { Text, View, StyleSheet, Dimensions,Image, ScrollView, ToastAndroid, Pressable } from "react-native"
import api from "../../../../service";
import { CategoryButton } from "../CategoryButton";
import { CategoryCard } from "../CategoryCard";

interface IProject {
    id: string
    name: string,
    description: string
    value: number
    image: string 
    categories: any
    user: {
        first_name: string
        nickname: string
        profile_picture: string
    },
    navigation: any
}

export const ListProjectCard = ({ id, name, description, value, image, categories, user, navigation }: IProject) => {
    
    return (
        
        <Pressable onPress={() => navigation.navigate('Project', {projectId : id})}>
        <View style={styles.containerCard}  >
            
            
            <View style={styles.imagecontainer}>
                <Image style={{width: "100%", height: "100%", borderTopLeftRadius:10, borderTopRightRadius: 10}} source={{uri : image}}/>
            </View>
            
            <View style={styles.profile}>
            <Image style={{width: "15%", height: "100%", borderRadius: 100}} source={{uri : user.profile_picture}}/>          
                 <Text style={styles.nameArroba}> @{user.nickname}</Text>           
            </View>

            <View style={styles.describle}>
                <Text style={styles.nameProject}> {name}</Text>           
                <Text style={styles.description}> {description}</Text>           
            </View>
 
            <View style={styles.value}>
                <Text style={styles.description}> Valor estimado:</Text>           
                <Text style={styles.description}> {value}</Text>           
            </View>
            <View style={styles.category}>
            <CategoryCard category={categories[0].name} icon={categories[0].icon} key={categories[0].id} />
                {
                    categories[1] &&
                    <CategoryCard category={categories[1].name} icon={categories[1].icon} key={categories[1].id} />

                }
                {
                    categories.length > 2 ? <Text>...</Text> : null
                }
            </View>

        </View>
        </Pressable>


    )
}

const styles = StyleSheet.create({

    containerCard:{
        width: Dimensions.get('window').width * 0.45,
        height: Dimensions.get("window").height * 0.4,
        alignItems:'center',
        justifyContent: 'space-between',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#D3C5F8',
        // backgroundColor:"blue"
        marginBottom:20

    },

    imagecontainer:{
        width: Dimensions.get('window').width * 0.44 ,
        height: Dimensions.get("window").height * 0.15,
        borderTopStartRadius: 10,
        borderTopEndRadius: 10
        
    },
    profile:{
        width: Dimensions.get('window').width * 0.44 ,
        height: Dimensions.get("window").height * 0.035,
        display:'flex',
        flexDirection:'row',
        alignItems: 'center'
        
    },
    describle:{
        width: Dimensions.get('window').width * 0.44 ,
        height: Dimensions.get("window").height * 0.06,
        
    },
    value:{
        width: Dimensions.get('window').width * 0.44 ,
        height: Dimensions.get("window").height * 0.03,
        display:'flex',
        flexDirection:'row',
        paddingTop: 10
    },
    category:{
        width: Dimensions.get('window').width * 0.44 ,
        height: Dimensions.get("window").height * 0.03,
        borderBottomEndRadius: 10,
        borderBottomStartRadius: 10,
        display:'flex',
        flexDirection:'row',

    },
    nameArroba:{
        fontSize: 12
    },
    nameProject:{
        fontSize: 14,
        fontWeight:'bold'
    },
    description:{
        fontSize: 12,
    },
    
})