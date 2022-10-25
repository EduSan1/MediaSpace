import React, { useEffect, useState } from "react"
import { Text, View, StyleSheet, Dimensions, ScrollView,Image, ToastAndroid } from "react-native"
import api from "../../../service";
import { ListProjectCard } from "../../components/utils/ListProjectCard";
import { CategoryButton } from "../../components/utils/CategoryButton";
import { LoginButton } from "../../components/utils/LoginButton";

export const ListProject = ()=> {

    const [categories, setCategories] = useState([])
    const [projects, setProjects] = useState ([])

    const findSubCategories = () => {}
    
    useEffect(() => {
        api.get("/category").then((res: any)=>{
            setCategories(res.data)
        })

        api.get("/project").then((res: any) => {
            setProjects(res.data.data)
        })
    }, [])

    return(
        <>
        <ScrollView>

        <View style={styles.container}>
        <Image style={styles.image} source={require("../../../assets/img/boostad.png")}/>
       
        </View>
        
        <View style={styles.category}>
        {
            categories.map((category: any) =>
                <CategoryButton category={category.name} icon={category.icon} id={category.id} key={category.id} action={() => console.log("")} setSubCategories={findSubCategories} />
                )
        }
        </View>

        <View style={styles.card}>
            {
                projects.map((project:any)=>{
                    return <ListProjectCard key={project.id} user={project.user} id={project.id} name={project.name} description={project.description} value={project.value} image={project.images[0].url} categories={project.categories}/>
                })
            }
        </View>

        </ScrollView>

        </>
    )

}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#212345',
        width: Dimensions.get('window').width,
        height:Dimensions.get('window').height * 0.3,
        alignItems: 'center',
        justifyContent:'center'
        
    },
    card:{
        width: Dimensions.get('window').width ,
        height:Dimensions.get('window').height ,
        flexDirection:'row',
        flexWrap:'wrap',
        display:'flex',
        justifyContent:'space-around',
        alignContent:'space-around',
        paddingTop: 10,
        
        
    },
    category:{
        width: Dimensions.get('window').width * 0.5  ,
    },
    image: {
        alignItems: "center",
        width: Dimensions.get("window").width * 1,
        height: Dimensions.get("window").width * 0.6,
    },
    text: {
       fontSize: 20,
       fontWeight:'bold'
    },
    text1: {
        fontSize: 12
    }
})