import { StyleSheet, Text, View, Image, Button, FlatList ,TouchableOpacity} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Details from './api/Details';
import stdApi from './api/stdApi'

import courses from './api/courses';
const Userdata = ({navigation}) => {
  
    
    const courseCard = ({item}) => {
    

        return (
            <View style={styles.container}>
                <View style={styles.course}>
                    <View style={styles.card}>

                        <Image style={styles.imgdes} resizeMode="contain" source={{uri:`${item.img}`}} />
                        <View style={styles.flex}>
                            <View style={{display:"flex",flexDirection:"row"}}>

                            <Text style={{textTransform:"uppercase",fontSize:23,fontWeight:"bold",marginTop:10,color:"white"}}
                        >Bio-Data</Text>
                        <Text style={{left:130,fontWeight:"bold",fontSize:20,top:9,color:"white"}}>#0{`${item.id}`}</Text>
                            </View>
                        
                        <Text style={{marginTop:13,lineHeight:18,fontSize:15,color:"white"}}>Name : {`${item.name}`}</Text>
                        <Text style={{marginTop:13,lineHeight:18,fontSize:15,color:"white"}}>Email : {`${item.email}`}</Text>
                        <Text style={{marginTop:13,lineHeight:18,fontSize:15,color:"white"}}>Mobile : {`${item.mobile}`}</Text>
                      
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
                    data={stdApi}
                    renderItem={courseCard}
                />
            </View>
        </>
    )

}
export default Userdata;

const styles = StyleSheet.create({
    container: {
        // borderWidth:2,/
        marginTop: 70,
        paddingHorizontal: 30,
        marginBottom:30,
        // borderWidth:1
    },
    imgdes: {
        width: "100%",
        height: undefined,
        aspectRatio: 1,
        marginTop: -50,
        // borderWidth:1

    },
    course:{
        display:"flex",
        textAlign:"center",
        // borderWidth:1

        
    },
    flex:{
        display:"flex",
        // alignItems:"center",
        // borderWidth:1,
        top:-26,
        paddingHorizontal:10,
        paddingVertical:20,

     
    },
    card:{
        //  borderWidth: 1,
        // borderWidth:1,
        
         
         backgroundColor:"black",
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