import React from 'react'; 

import { StyleSheet, Text, View ,Image ,Button} from 'react-native';
import Menu from './Menu';
 const Home = ()=>{
    return (
        <>
        <View style={styles.container}>
        
            
          <Image 
         style={{width:320,height:260, paddingRight:20,borderRadius:20,marginTop:80}}
        //  resizeMode="contain"
          source={require("../assets/homepic.jpg")}
          />
          
          
       <View style={styles.flex}>
     <Text style={{fontSize:26,}}>WELCOME TO</Text>
     <Text style={{fontSize:26,color:"#8fadf7",fontWeight:"bold"}}>OUR COACHING ACADEMY</Text>
     </View>
         
         
    <Text style={{marginTop:-80,fontSize:18,lineHeight:25,textAlign:"center",}}>Finding that perfect color is easier than you think. Use our color picker to discover beautiful colors and harmonies with Hex color codes and</Text>
    
   
        <View style={{paddingBottom:20, textTransform:"uppercase",borderColor:"gray" ,borderLeftWidth:0,
        borderTopWidth:1 , borderBottomWidth:1, paddingTop: 20 ,backgroundColor:"#e9ebe8"}}>
          <Menu  />
        </View>

        
        </View>

        </>
      );
    }
    export default Home;
    
    const styles = StyleSheet.create({
      container: {
       display:"flex",
      // marginTop:30,
      height:"100%",
      paddingHorizontal:20,
      textAlign:"center",
      justifyContent:"space-between",
    //  borderRadius:1,
    //  borderWidth:1,
    //  borderColor:"black"
      
    
      },
    
      flex:{
        display:"flex",
        marginTop:-40,
        
        alignItems:"center",
        // borderRadius:1,
        // borderWidth:1,
        // borderColor:"black"
      }
    });