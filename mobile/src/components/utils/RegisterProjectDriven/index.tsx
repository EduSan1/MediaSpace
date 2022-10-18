import React, { useState } from "react"
import { View, Text, StyleSheet, Dimensions, Image } from "react-native"
import { LoginBoost } from "../LoginBoost"


export const RegisterProjectDriven = () => {

const [check, setCheck] = useState("")
    return(
        <>
        
        <View style={styles.titleChecked}>
                        <Text style={styles.textTitle}>Impulsionamento</Text>
                        <Text style={styles.textTitle2}>(recurso pago)</Text>
                        <Text style={styles.textTitle3}>Tenha um alcance maior com sua publicação.</Text>

        </View>
                    <View style={styles.checkBoost}>
                        <View style={styles.checkBoostView}>
                            <Text style={styles.titleCheck}>Padrão</Text>
                            <Text style={styles.subtitleCheck}>Gratuito</Text>
                            <Image style={styles.image} source={require("../../../../assets/img/ellipse.png")} />
                            <LoginBoost check={check} setCheck={setCheck}  value="G" />
                    </View>

                        <View style={styles.checkBoostView}>
                            <Text style={styles.titleCheck}>Impulsionado</Text>
                            <Text style={styles.subtitleCheck}>R$50</Text>
                            <Image style={styles.image} source={require("../../../../assets/img/ellipses.png")} />
                            <LoginBoost check={check} setCheck={setCheck} value="P" />
                        </View> 

                        <View style={styles.describleCheck}>
                            <Text style={styles.describleText}>Com a opção ‘’impulsionado‘’ você tem a sua publicação divulgada com um maior alcance, sendo anunciada nos primeiros resultados de exibição na plataforma. 
                            </Text>
                            <Text style={styles.describleText}>
                                Incluídos no impulsionamento:
                                Pagamento único (uma vez para cada publicação);
                                Maior visibilidade;
                                Destaque na exibição
                            </Text>
                        </View>

                    </View>
        </>
    )
}
const styles = StyleSheet.create({

    checkBoost:{
        width: Dimensions.get('window').width * 0.79,
        height: Dimensions.get("window").width * 0.7,
        justifyContent: 'space-between',
        display:'flex',
        flexWrap:'wrap',
        flexDirection:'row',  
    },
    checkBoostView:{
        width: Dimensions.get('window').width * 0.38,
        height: Dimensions.get("window").width * 0.7,
        borderWidth: 1,
        borderRadius: 10,
        borderColor:"#B275FF",
        alignItems: 'center',
        justifyContent:'center'
    },
    subtitleCheck:{
        fontSize: 26,
        color:"#808080",
        fontWeight:'300'
    },
    titleCheck:{
        fontSize: 14,
        fontWeight:'300'
    },
    image:{
        width: Dimensions.get('window').width * 0.25,
        height: Dimensions.get("window").width * 0.25,
    },
    describleCheck:{
        height: Dimensions.get("window").width * 0.2,
        alignItems: 'center',
        justifyContent:'center'
    },
    describleText:{
        fontSize: 10,
        fontWeight:'300'
    },
    titleChecked:{
        width: Dimensions.get('window').width * 0.8,
        height: Dimensions.get("window").width * 0.08,
        display:"flex",
        flexDirection:'row',
        alignItems:'center',
        flexWrap:'wrap'
    },
    textTitle:{
        fontSize: 20,
        paddingEnd: 5,
    },
    textTitle2:{
        fontSize: 20,
        color:'#ff6666',
    },
    textTitle3:{
        fontSize: 12,
        color:'#808080',
    }
})