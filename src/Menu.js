import React ,{useState} from 'react';
import { StyleSheet, Text, View ,Image ,Button,TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';
 

const Menu = ()=>{
    const [mycolor,setcolor] = useState("#c0d1b8");
    const [home , sethome] = useState("");
    const [contact , setcontact] = useState("");
    const [data , setdata] = useState("");
    const [course , setcourse] = useState("");
    const [about , setabout] = useState("");
    

    const homeMethod= ()=>{
     sethome(mycolor);
     setcontact("#e9ebe8");
     setdata("#e9ebe8");
     setcourse("#e9ebe8");
     setabout("#e9ebe8");

    }
    const contactMethod = ()=>{
        sethome("#e9ebe8");
        setcontact(mycolor);
        setdata("#e9ebe8");
        setcourse("#e9ebe8");
     setabout("#e9ebe8");

    }
    const userMethod = ()=>{
        sethome("#e9ebe8");
        setcontact("#e9ebe8");
        setdata(mycolor);
        setcourse("#e9ebe8");
     setabout("#e9ebe8");

    }
    const courseMethod = ()=>{
        sethome("#e9ebe8");
        setcontact("#e9ebe8");
        setdata("#e9ebe8");
        setcourse(mycolor);
     setabout("#e9ebe8");

    }
    const aboutMethod = ()=>{

        sethome("#e9ebe8");
        setcontact("#e9ebe8");
        setdata("#e9ebe8");
        setcourse("#e9ebe8");
        setabout(mycolor);
    }

    const navigation = useNavigation();
return(
    <>
<View style={styles.cont}>
<TouchableOpacity style={{backgroundColor:`${contact}`, borderRadius:30,}} onPress={()=> [navigation.navigate("Contact"), contactMethod()]}>

    {/* <Text>Contact</Text> */}
    <Image
   source={require("../assets/contact.png")}
    />
</TouchableOpacity>
    
<TouchableOpacity style={{backgroundColor:`${course}`, borderRadius:30,}}  onPress={()=> [navigation.navigate("Course"),courseMethod()]}>

<Image
   source={require("../assets/course.png")}
    />
</TouchableOpacity>
    
<TouchableOpacity style={{backgroundColor:`${data}`, borderRadius:30,}}onPress={()=> [navigation.navigate("Userdata"),userMethod()]}>

<Image
   source={require("../assets/data.png")}
    />
</TouchableOpacity>
   
{/* <TouchableOpacity style={{backgroundColor:`${home}`, borderRadius:30,}} onPress={()=> [navigation.navigate("Home"), homeMethod()]}>

<Image
source={require("../assets/homeNew.png")}
    />
</TouchableOpacity> */}

<TouchableOpacity style={{backgroundColor:`${about}`, borderRadius:30,}} onPress={()=> [navigation.navigate("About"), aboutMethod()]}>

<Image
source={require("../assets/about.png")}
    />
</TouchableOpacity>

    </View>
</>
)

}
export default Menu

const styles = StyleSheet.create({
  cont:{
    display:"flex",
    flexDirection:"row",
    justifyContent:"space-evenly"
  },
  iconStyle:{
    // backgroundColor:`${mycolor}`,
    // borderRadius:30,

  }
});
