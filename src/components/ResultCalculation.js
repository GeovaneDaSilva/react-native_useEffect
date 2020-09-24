import React, { Component } from 'react'
import { Text, View, StyleSheet, LogBox } from 'react-native'

export default function ResultCalculation(props){
    const {capital, interest, months, total, errorMessage} = props;

        console.log('Total2', total)
    return (
        

        <View style = {styles.content}>
        {total && (
            
            <View >
                
                <DataResult  title="Quantidade solicitada:" value={`$ ${capital}`}/>
                <DataResult  title="Jurus:" value={`% ${interest}`}/>
                <DataResult  title="Meses:" value={` ${months}`}/>
                <DataResult  title="Quantidade mensual:" value={total.monthyFee}/>
                <DataResult  title="Total a pagar:" value={total.totalPayable}/>


             </View>
        ) }

            <View >
                <Text style = {styles.error}>{errorMessage}</Text>
            </View>
        </View>
        
    )
}  

function DataResult(props){
    const {title, value } = props;

    return (
            <View style ={styles.data}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.title}>{value}</Text>
            </View>
    )

}


const styles = StyleSheet.create({
    error: {
        color: '#F00',
        fontWeight: 'bold',
        fontSize: 15
    },
    content: {
        marginTop: 100,
        alignItems:'center',
        paddingTop: 20,  


    },
    data:{
        justifyContent:'space-between',
        flexDirection: 'row',
       

    },
    title: {
        marginRight: '10%',
        marginLeft:'10%',
        fontSize: 16,
        marginBottom: 20,

        
    } ,
    value:{
        fontSize:17,
        marginBottom: 20,
    } 
})