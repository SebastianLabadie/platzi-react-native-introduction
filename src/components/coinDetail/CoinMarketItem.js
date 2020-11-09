import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { colors } from '../../res/colors'

export default function CoinMarketItem({item}) {
    return (
        <View style={styles.container} >
            <Text tyle={styles.nameTexts}>{item.name}</Text>
            <Text tyle={styles.priceTexts} >{item.price_usd}</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    container:{
        backgroundColor:'rgba(0,0,0,0.1)',
        borderColor:colors.zircon,
        borderWidth:1,
        padding:16,
        marginRight:8,
        alignItems:'center'
    },
    nameTexts:{
        color:"#fff",
        fontWeight:"bold",
    },  
    priceTexts:{
        color:colors.white
    }
})