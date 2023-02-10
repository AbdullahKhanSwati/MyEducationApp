import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, View , TouchableOpacity ,Button, Alert} from 'react-native';
import Checkbox from 'expo-checkbox';


const Contact =({navigation})=> {



  const[agree,setagree] = useState(false);
  const[name,setname]=useState("");
  const[sub,setsub]=useState(false);
  const[mail,setmail]=useState("");
  const[mob,setmob]=useState("");

const zero = ()=>{
  setname("");
  setmail("");
  setmob("");
  setagree(false);
  setsub(false);
}
  const onSubmit = ()=>{
if (!name && !mail && !mob) {
  Alert.alert("Please enter all the field")
}
else{
  navigation.navigate("Home");
  Alert.alert(`Thank you ${name}`)
}

  }

  
  return (
    
    <View style={styles.container}>
      <Text style={styles.txt}>Level Up Your Knowledge</Text>
      
      <Text style={styles.simtxt}>you can contact us on our facebook page "Abdullah khan"</Text>
    
    <View>
<Text style={{fontSize:16}}>Enter your name</Text>
<TextInput style={styles.inputs} value={name}  onChangeText={(myname)=>setname(myname)}/>
    </View>


    <View>
<Text style={{fontSize:16}}>Enter your Email</Text>
<TextInput style={styles.inputs} value={mail}  onChangeText={(mymail)=>setmail(mymail)}/>
    </View>

    <View>
<Text style={{fontSize:16}}>Enter your Mobile</Text>
<TextInput style={styles.inputs} value={mob} keyboardType='numeric' onChangeText={(mymob)=>setmob(mymob)}/>
    </View>

    <View>
<Text style={{fontSize:16}}>How can we help you?</Text>
<TextInput style={styles.txtarea} value={mob} keyboardType='numeric' onChangeText={(mymob)=>setmob(mymob)}/>
    </View>




<View>
<Checkbox  
value={agree}
onValueChange={()=> setagree(!agree)}
color={agree ? "blue" : undefined}
/>
<Text style={{marginLeft:30,marginTop:-19}}>I have agreed wth the TC</Text>
</View>



<View style={styles.btn}><Button   title="Click Me"  disabled={!agree}   onPress={onSubmit} />
    
 

  
</View>

    </View>
  );
}
export default Contact;

const styles = StyleSheet.create({
  txt: {

fontSize:25,
fontWeight:"bold",

    backgroundColor: '#fff',
    
  },
  container:{
    marginLeft:30,
    marginRight:30,
    marginTop:50,
    // borderWidth:1,
  },
  simtxt:{
  marginTop:10,
  marginBottom:30,
  fontSize:16,

  },
  inputs:{
borderWidth:1,
borderRadius:2,
borderColor:"black",
marginTop:10,
marginBottom:16,
height:40,


  },
  btn:{
    borderWidth:1,
borderRadius:2,
borderColor:"black",
marginTop:20,
marginLeft:30,
marginRight:30,
marginBottom:30,


  },
  txtarea:{
    borderWidth:1,
borderRadius:2,
borderColor:"black",
marginTop:10,
marginBottom:16,
height:70,
  }
});
