import React, { useEffect, useState } from "react"
import { Text, View, StyleSheet, Dimensions, ScrollView,Image,ImageBackground } from "react-native"
import api from "../../../service";
import { ListProjectCard } from "../../components/utils/ListProjectCard";
import { CategoryButton } from "../../components/utils/CategoryButton";
import { BtnList } from "../../components/utils/BtnList";
import TabBar from "../../components/utils/TabBar";
import HeaderSearch from "../../components/utils/HeaderSearch";


interface IListProject {
    navigation: any
}

export const ListProject = ({ navigation }: IListProject)=> {

    const navigateTo = (screen: string) => {
        navigation.navigate(screen)
    }

    const [isLoad, setIsLoad] = useState(false)
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
        
        <TabBar currentScreen="ListProject" navigateTo={navigateTo} />
        <ScrollView>
        <HeaderSearch label={"Pesquisar..."} />
        <View style={styles.container}>
        <ImageBackground style={styles.image} resizeMode="cover"  source={require("../../../assets/img/boostad.png")}>

        <View style={styles.containerImageText}>
            <Text style={styles.textImage}>Impulsione sua espaçonave</Text>
            <Text style={styles.textImage2}>Deseja ter seu projeto exibido primeiro para os melhores prestadores da plataforma?</Text>
            <BtnList onPress={() => navigation.navigate('RegisterProject')} title="Criar projeto"/>
        </View>

        </ImageBackground>
       
        </View>
        
        <ScrollView 
            style={styles.category}
            horizontal>
                <View style={styles.containerTraco}>
                <View style={styles.traco1}></View>
                <View style={styles.traco2}></View>
                <View style={styles.traco3}></View>
                </View>
        {
            categories.map((category: any) =>
                <CategoryButton category={category.name} icon={category.icon} id={category.id} key={category.id} action={() => console.log("")} setSubCategories={findSubCategories} />
                )
        }
        </ScrollView>

        <View>
            <Text>Projetos</Text>
        </View>

        <View style={styles.card}>
            {
                projects.map((project:any)=>{
                    return <ListProjectCard key={project.id} user={project.user} id={project.id} name={project.name} description={project.description} value={project.value} image={project.images[0].url} categories={project.categories} navigation={navigation}/>
                })
            }
        </View>

        </ScrollView>

        </>
    )

}

const styles = StyleSheet.create({
    container:{
        width: Dimensions.get('window').width,
        height:Dimensions.get('window').height * 0.3,
        alignItems: 'center',
        justifyContent:'center',
    },
    card:{
        width: Dimensions.get('window').width ,
        height:Dimensions.get('window').height * 1.5 ,
        flexDirection:'row',
        flexWrap:'wrap',
        display:'flex',
        justifyContent:'space-around',
        paddingTop: 10,
        marginBottom: 10
        
        
    },
    category:{
        width: Dimensions.get('window').width ,
        flexDirection:'row',
        paddingTop: 20,
      
    },
    image: {
        
        width: Dimensions.get("window").width * 1,
        height: Dimensions.get("window").width * 0.55,
    },
    text: {
       fontSize: 20,
       fontWeight:'bold'
    },
    text1: {
        fontSize: 12
    },
    traco1: {
        width: Dimensions.get("window").width * 0.05,
        height: Dimensions.get("window").width * 0.01,
        backgroundColor:'#C6D2FF',
        borderRadius: 10
    },
    traco2: {
        width: Dimensions.get("window").width * 0.04,
        height: Dimensions.get("window").width * 0.01,
        backgroundColor:'#C6D2FF',
        borderRadius: 10
    },
    traco3: {
        width: Dimensions.get("window").width * 0.03,
        height: Dimensions.get("window").width * 0.01,
        backgroundColor:'#C6D2FF',
        borderRadius: 10
    },
    containerTraco:{
        width: Dimensions.get("window").width * 0.1,
        height: Dimensions.get("window").width * 0.1,
        paddingLeft: 5,
        paddingTop: 20,
        justifyContent: 'space-around',
        alignItems: 'flex-start',
    },
    containerImageText: {
        width: Dimensions.get("window").width * 0.59,
        height: Dimensions.get("window").height * 0.315,
        justifyContent:'center',
        display:'flex',
        alignItems: 'flex-start',
        // backgroundColor:"black",
        marginStart:20
    },
    textImage:{
        color:'#fff',
        fontSize: 14,
        fontWeight:'bold',
        marginBottom: 10
    },
    textImage2:{
        color:'#fff',
        fontSize: 12,
        marginBottom: 10
    }
})