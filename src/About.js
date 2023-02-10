import { StyleSheet,Text,View,Image ,Button, TouchableOpacity, Linking} from 'react-native';

const About = ()=>{
return(
    <>
<View style={styles.container}>

<View style={styles.view1}><Text style={{textTransform:"uppercase",textAlign:"center",fontWeight:"bold",fontSize:19}}>Abdullah Khan Swati</Text>
<Text style={{textAlign:"center",marginTop:12,fontSize:16}}>2 Years of experience as a Web Developer</Text>
<View style={{alignItems:"center",marginTop:30}}>
<Image style={{width:150,height:150,borderRadius:70}}
resizeMode="contain"
source={require("../assets/profile3.jpg")}

    />

</View>

<View style={styles.abst}>
<Text style={{textTransform:"uppercase",fontWeight:"bold",fontSize:19,color:"white"}}>ABOUT ME</Text>
<Text style={{marginTop:13,lineHeight:20,fontSize:16,color:"white"}}>Communication--it is a fundamental part of our everyday lives. It characterizes who we are, what we do, and how we relate to others in society. It is a very powerful tool   --it is a fundamental part of our everyday  everyday lives.lives. It</Text>
</View>

</View>
    
 <View style={styles.view2}><Text style={{textTransform:"uppercase",textAlign:"center",fontWeight:"bold",fontSize:16}}>Follow me on social network</Text>

 <View style={styles.myflex}>
 <TouchableOpacity onPress={()=> Linking.openURL("https://www.facebook.com/profile.php?id=100016112560491")}>

 <Image style={{width:50,height:50}}
resizeMode="contain"
source={require("../assets/insta.png")}

    />
    </TouchableOpacity>

    <TouchableOpacity onPress={()=> Linking.openURL("https://www.facebook.com/profile.php?id=100016112560491")}>
    <Image style={{width:50,height:50}}
resizeMode="contain"
source={require("../assets/fb.jpg")}

    />
    </TouchableOpacity>

    <TouchableOpacity onPress={()=> Linking.openURL("https://www.facebook.com/profile.php?id=100016112560491")}>
    <Image style={{width:50,height:50}}
resizeMode="contain"
source={require("../assets/snap.png")}

    />
    </TouchableOpacity>

 </View>
 
 </View>   

 <View style={styles.view3}></View>

</View>
</>
)

}
export default About
const styles = StyleSheet.create({
container:{

    display:"flex",
    // borderWidth:1,
    alignItems:"center",
    justifyContent:"space-around",
    height:"100%",

},
view1:{
    // borderWidth:1
},
view2:{
    // borderWidth:1
},
view3:{
    // borderWidth:1
},
abst:{
    // borderWidth:1,
    alignItems:"center",
    marginTop:25,
    padding:20,
    backgroundColor:"#3b70c4",

},
myflex:{
    display:"flex",
    flexDirection:"row",
    justifyContent:"space-evenly",
    marginTop:13
}
})