import React from 'react'
import colors from '../utils/colors'
import { StyleSheet, 
    View,
    Text,
    Button,
    TouchableOpacity,
  } 
  

from 'react-native'

export default function Footer(props){
 
    const {calcular} = props;

    return (
        <>
        
        <View style={styles.viewFooter}>
            <TouchableOpacity style = {styles.touch} onPress={calcular}>

            <View style = {styles.button}>
            <Text style = {styles.text}>CALCULAR</Text>

            </View>
        
            </TouchableOpacity>


        </View>

  
        </>
    )
}



const styles = StyleSheet.create({

    viewFooter:{
        position: "absolute",
        bottom: 0,
        justifyContent: 'center',
        alignItems: "center",
        width: "100%",
        backgroundColor: colors.WARNING_COLOR,
        height: 100,
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30


    },
    text: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: 18,

    },


    result: {
        marginTop: 100,
        height: 100,
        justifyContent: 'center',
    
        alignItems: "center",
    
      },
    
    
      container: {
        flex: 1,
        justifyContent: 'center',
        marginHorizontal: 16,
      },
      title: {
        textAlign: 'center',
        marginVertical: 8,
      },
      fixToText: {
        flexDirection: 'row',
        justifyContent: 'space-between',
      },
      button: {
        alignItems: "center",
        backgroundColor: colors.PRIMARY_COLOR_DARK,
        borderRadius: 25,
        paddingHorizontal: 10,
        paddingVertical: 5,
        height: 40,
        textAlign: 'center',
        justifyContent: 'center',

      },

      touch: {
          width: "70%",
          padding: 16,
          borderRadius: 20
      }
})
