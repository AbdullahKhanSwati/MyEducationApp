import { StyleSheet, Text, View, Image, Button, FlatList ,TouchableOpacity} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Details from './api/Details';


import courses from './api/courses';
const Course = ({navigation}) => {
  
    
    const courseCard = ({item}) => {
    

        return (
            <View style={styles.container}>
                <View style={styles.course}>
                    <View style={styles.card}>

                        <Image style={styles.imgdes} resizeMode="contain" source={{uri:`${item.img}`}} />
                        <View style={styles.flex}>
                        <Text style={{textTransform:"uppercase",fontSize:19 ,fontWeight:"bold"}}>{item.title}</Text>
                        <Text style={{marginTop:13,lineHeight:18,fontSize:15}}>{item.description}</Text>
                        <TouchableOpacity onPress={()=> navigation.navigate("Details",{
                            courseid : item.id,
                        })} style={{marginTop:13,marginBottom:19 , borderWidth:1,height:40,width:130,backgroundColor:"#519ced"}}>
                            <Text style={{textAlign:"center",marginTop:7,fontSize:18,color:"white"}}>Course Details</Text>
                        </TouchableOpacity>
                        </View>
                        

                    </View>

                </View>

            </View>
        )
    }
    return (
        <>
            <View>


                <FlatList
                    keyExtractor={(item) => item.id}
                    data={courses}
                    renderItem={courseCard}
                />
            </View>
        </>
    )

}
export default Course;

const styles = StyleSheet.create({
    container: {
        // borderWidth:2,/
        marginTop: 30,
        paddingHorizontal: 30,
        marginBottom:30
    },
    imgdes: {
        width: "100%",
        height: undefined,
        aspectRatio: 1,
        marginTop: -43,
    },
    course:{
        display:"flex",
        textAlign:"center",
        
    },
    flex:{
        display:"flex",
        alignItems:"center",
     
    },
    card:{
        //  borderWidth: 1,
        
         paddingHorizontal:20 ,
         backgroundColor:"#dfe6e4",
         shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 6,
},
shadowOpacity: 0.39,
shadowRadius: 8.30,

elevation: 13,
    }


})