import React from "react"
import { Text, View, StyleSheet, Dimensions,Image, ScrollView, ToastAndroid } from "react-native"
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
    }
}

export const ListProjectCard = ({ id, name, description, value, image, categories, user }: IProject) => {
    
    return (
        
        <View style={styles.containerCard}  >
            
            
            <View style={styles.imagecontainer}>
                <Image style={{width: "100%", height: "100%", borderTopLeftRadius:10, borderTopRightRadius: 10}} source={{uri : image}}/>
            </View>
            
            <View style={styles.profile}>
                <Text> {user.profile_picture}</Text>            
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
                    categories.length > 2 ? <p>...</p> : null
                }
            </View>

        </View>


    )
}

const styles = StyleSheet.create({

    containerCard:{
        width: Dimensions.get('window').width * 0.45,
        height: Dimensions.get("window").height * 0.3,
        alignItems:'center',
        justifyContent: 'space-around',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#D3C5F8'
        // backgroundColor:"blue"

    },

    imagecontainer:{
        width: Dimensions.get('window').width * 0.44 ,
        height: Dimensions.get("window").height * 0.13,
        borderTopStartRadius: 10,
        borderTopEndRadius: 10
        
    },
    profile:{
        width: Dimensions.get('window').width * 0.44 ,
        height: Dimensions.get("window").height * 0.025,
        display:'flex',
        flexDirection:'row',
        alignItems: 'center'
        
    },
    describle:{
        width: Dimensions.get('window').width * 0.44 ,
        height: Dimensions.get("window").height * 0.05,
    },
    value:{
        width: Dimensions.get('window').width * 0.44 ,
        height: Dimensions.get("window").height * 0.03,
        display:'flex',
        flexDirection:'row',
    },
    category:{
        width: Dimensions.get('window').width * 0.44 ,
        height: Dimensions.get("window").height * 0.03,
        borderBottomEndRadius: 10,
        borderBottomStartRadius: 10

    },
    nameArroba:{
        fontSize: 10
    },
    nameProject:{
        fontSize: 12,
        fontWeight:'bold'
    },
    description:{
        fontSize: 12,
    },
    
})