import {
    StyleSheet
}from 'react-native'

export default StyleSheet.create({
    container:{
      backgroundColor:'#009069',
      flex:1
    },
    header:{
      backgroundColor:'#004084',
      height:70, 
      justifyContent:'center',
      padding:12
    },
    titulo:{
      color:'#FFFFFF', 
      fontSize:25, 
      fontWeight:'bold'
    },
    imagemView:{
      flexDirection:'row',
      justifyContent:'center',
      padding:40
    },
    imagemImage:{
      height:200,
      width:200 
    },
    botoesView:{
      flexDirection:'column',
      height:120,
      justifyContent:'space-between',
      padding:15
    }
  })