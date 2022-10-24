import React,{useState} from "react"
import {Text, StyleSheet, Dimensions, Pressable} from "react-native"

interface ISubcategoryButton {
    id: string
    setSubCategories : (action : boolean) => void
    subcategory: string
}

export const SubcategoryButton =({id, subcategory, setSubCategories}: ISubcategoryButton)=>{

    const [isSelected, setIsSelected] = useState(false)

    const onSelected = () => {
        setIsSelected(!isSelected)
        setSubCategories(isSelected ? true : false )
    }

    return(
        <Pressable onPress={() => onSelected()} style={isSelected ? styles.categorySelected : styles.category }>
            <Text style={isSelected ? styles.btnTextSelected : styles.btnText}>{subcategory}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    category: {
        paddingHorizontal:Dimensions.get('window').width * 0.07,
        margin:Dimensions.get('window').width * 0.02,
        height: Dimensions.get('window').height * 0.06,
        backgroundColor: "#C6D2FF",
        borderRadius: 100,
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },
    btnTextSelected: {
        textAlign: "center",
        fontSize: Dimensions.get("window").width * 0.045,
        fontWeight: '300',
        color: "#FFF",

    },
    categorySelected: {
        paddingHorizontal:Dimensions.get('window').width * 0.07,
        margin:Dimensions.get('window').width * 0.02,
        height: Dimensions.get('window').height * 0.06,
        backgroundColor: "#75A5FF",
        borderRadius: 100,
        display: "flex",
        alignItems: "center",
        justifyContent: "center"

    },
    btnText: {
        textAlign: "center",
        fontSize: Dimensions.get("window").width * 0.045,
        fontWeight: '300',
        color: "#000",

    }
});