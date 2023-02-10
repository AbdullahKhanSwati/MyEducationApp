import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,Image ,Button} from 'react-native';
import Home from './src/Home';
import About from './src/About';
import Contact from './src/Contact';
import Course from './src/Course';
import Userdata from './src/Userdata';
import Details from './src/api/Details';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// import {
//   useFonts,
//   JosefinSans_400Regular,
//   JosefinSans_500Medium,
// } from "@expo-google-fonts/josefin-sans";


export default function App() {
 
  return <NavigationContainer>
 <stack.Navigator>

<stack.Screen name='Home' component={Home}   options = {{
  headerShown:false,
 
  
}
} />

<stack.Screen name='Contact' component={Contact}  options = {{
  
  headerTitleStyle:{
    fontSize:25,
    
  },
  headerTitleAlign:"center",
  
}
}/>

<stack.Screen name='Course' component={Course}  options = {{
  
  headerTitleStyle:{
    fontSize:25,
  },
  headerTitleAlign:"center",
  headerTitle:"Courses"
}
}/>
<stack.Screen name='About' component={About}  options = {{
  
  headerTitleStyle:{
    fontSize:25,
  },
  headerTitleAlign:"center",
  headerTitle:"About us"
}
}/>



<stack.Screen name='Userdata' component={Userdata}  options = {{
  
  headerTitleStyle:{
    fontSize:25,
  
  },
  headerTitleAlign:"center",
  headerTitle:"Students Data"
}
}/>

<stack.Screen name='Details' component={Details}  options = {{
  
  headerTitleStyle:{
    fontSize:25,
  },
  headerTitleAlign:"center",
  headerTitle:"Course Details"
}
}/>

 </stack.Navigator>
</NavigationContainer>
}
const stack  = createNativeStackNavigator();
const styles = StyleSheet.create({
  
});
