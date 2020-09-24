import React from 'react'
import { StyleSheet, View,  TextInput} from 'react-native'
import  colors  from '../utils/colors'
import RNPickerSelect from 'react-native-picker-select';

export default function Form( props){
    const { setCapital, setInterest, setMonths} = props;
 console.log(props);




    const pickerStyle = {
        inputIOS: {
            color: 'white',
            paddingTop: 13,
            paddingHorizontal: 10,
            paddingBottom: 12,
        },
        inputAndroid: {
            color: 'white',
        },
        placeholderColor: 'white',
        underline: { borderTopWidth: 0 },
        icon: {
            position: 'absolute',
            backgroundColor: 'transparent',
            borderTopWidth: 5,
            borderTopColor: '#00000099',
            borderRightWidth: 5,
            borderRightColor: 'transparent',
            borderLeftWidth: 5,
            borderLeftColor: 'transparent',
            width: 0,
            height: 0,
            top: 20,
            right: 15,
        },
    };
    
    
    let surcusales = [{ label: '3 meses', value: 3 },
    { label: '6 meses', value: 6 },
    { label: '9 meses', value: 9 },
    { label: '12 meses', value: 12 },
    { label: '24 meses', value: 24 },]

    
    return (

        

        <>
        <View style={styles.Form}>
            <View style={styles.viewInput}>

            <TextInput style={styles.input}
             placeholder="Quantidade" 
             keyboardType="numeric" 
             onChange={(e)=> setCapital(e.nativeEvent.text)}
              />
            <TextInput style={[styles.input, styles.input2]}
            placeholder="Juros %" keyboardType="numeric" 
            onChange={(e)=> setInterest(e.nativeEvent.text)}
             />
             

            </View>

            <RNPickerSelect
            placeholder = {{
                label:'Selecionar QTD meses',
                value: null
            }}
            style={picketSelectStyles}
            onValueChange={(value) => setMonths(value)}
            items={ surcusales }
        />

        </View>


        </>
        
    )

}


const styles = StyleSheet.create({

    Form : {

        position: 'absolute',
        bottom: -90,
        width: '85%',
        paddingHorizontal: 50,
        borderRadius: 30,
        height: 180,
        justifyContent: 'center',
        backgroundColor: colors.PRIMARY_COLOR_DARK,
        
    },

    viewInput:{
        flexDirection: 'row',

    },
    input:{

        height: 50,
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: colors.PRYMARY_COLOR,
        borderRadius: 5,
        width: '60%',
        marginRight: 5,
        marginLeft: -5,
        marginBottom: 10,
        color: '#000',
        paddingHorizontal: 10,

    },

    input2: {
        marginLeft: 5,
        width: '40%'
            


    }
})

const picketSelectStyles = StyleSheet.create({

  inputIOS: {

        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: 'grey',
        borderRadius: 4,
        marginRight: -5,
        marginLeft: -5,
        marginBottom: -5,
        color: '#000',
        paddingHorizontal: 10,
        paddingVertical: 12,
        fontSize: 16,
        paddingRight: 30.



  }

})