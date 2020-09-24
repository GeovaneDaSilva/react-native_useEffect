import React, {useState, useEffect}from 'react';
import { StyleSheet, 
      View,
      Text,
      SafeAreaView,
      StatusBar,
      Button,
      
    } 

from 'react-native'
import colors from './src/utils/colors'
import Form from './src/components/Form'
import Footer from './src/components/Footer'
import ResultCalculation from './src/components/ResultCalculation';


export default function App() {


  const [capital, setCapital] = useState(null);
  const [interest, setInterest] = useState(null);
  const [months, setMonths ] = useState(null)
  const [total, setTotal ] = useState(null)
  const [errorMessage, setErrorMessage ] = useState('')

  useEffect( ()=>{

    if( capital && interest && months)
    
    calcular();

    else{

      reset();

    }
  
  }
  , [capital, interest, months])

  const calcular = ()=>{

    reset()
    console.log("capital ->", capital);
    console.log("interest ->", interest);
    console.log("months ->", months);

    if(!capital){
      setErrorMessage('Selecionar o capital')
    } else if(!interest){
      setErrorMessage('Adicionar o Jurus')
    } else if(! months){
      setErrorMessage('Selecionar a QTD de meses')
    }

    const i = interest / 100;
    const fee = capital / ((1 - Math.pow(i + 1, -months)) / i);
    console.log(fee.toFixed(2).replace(".", ","))

    setTotal({
      monthyFee: fee.toFixed(2).replace(".", ","),
      totalPayable: (fee * months).toFixed(2).replace(".", ",")
    })

  }

  reset = () => {
    setErrorMessage("")
    setTotal(null)
    
  }

  return (
<>
<StatusBar barStyle="light-content"></StatusBar>

<SafeAreaView style={styles.safeArea}>
  <Text style={styles.TexArea}>Empréstimo Pessoal</Text>
  <Form setCapital={setCapital} setInterest={setInterest} setMonths={setMonths}>

  </Form>
</SafeAreaView>

<ResultCalculation
 capital={capital}
 interest={interest}
 months={months}
 total={total}
 errorMessage={errorMessage}/>

<Footer calcular={calcular}></Footer>

</>

  )

  
  
}

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: colors.WARNING_COLOR,
    height: 200,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius:30,
    alignItems: "center",

  },

  TexArea: {
    marginTop: 15,
    fontSize: 25,
    fontWeight: "bold",
    color: colors.PRIMARY_COLOR_TEXT,
    textTransform: "uppercase"


  },

  

})