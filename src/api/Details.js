import React,{useEffect} from 'react';
import { StyleSheet, Text, View, Image, Button, TouchableOpacity, Alert } from 'react-native';
import courses from './courses';
import { firebase } from '../../firebase/config';


const Details = ({ route, navigation }) => {
    const id = route.params.courseid;
    console.log(id);
    const selectedCourse = courses.find((element) => { return id === element.id })

    return (
        <View style={styles.container}>
            <View style={styles.course}>
                <View style={styles.card}>

                    <Image style={styles.imgdes} resizeMode="contain" source={{ uri: `${selectedCourse.img}` }} />
                    <View style={styles.flex}>
                        <Text style={{ textTransform: "uppercase", fontSize: 19, fontWeight: "bold" }}>{selectedCourse.title}</Text>
                        <Text style={{ marginTop: 13, lineHeight: 18, fontSize: 15 }}>{selectedCourse.description}</Text>
                        <Text style={{ marginTop: 10, fontSize: 18 }}>This Course Contains:</Text>
                        <Text style={{ marginTop: 5, fontSize: 18, color: "blue" }}>{selectedCourse.course1}</Text>
                        <Text style={{ marginTop: 5, fontSize: 18, color: "blue" }}>{selectedCourse.course2}</Text>

                        <Text style={{ marginTop: 5, fontSize: 18, color: "blue" }}>{selectedCourse.course3}</Text>
                        <Text style={{ marginTop: 5, fontSize: 18, fontWeight: "bold" }}>Price:{selectedCourse.price} only</Text>

                        <TouchableOpacity onPress={() => [navigation.navigate("Course"), Alert.alert(`You are enrolled to "${selectedCourse.title}" course`)]
                        } style={{ marginTop: 13, marginBottom: 19, borderWidth: 1, height: 40, width: 130, backgroundColor: "#519ced" }}>
                            <Text style={{ textAlign: "center", marginTop: 7, fontSize: 18, color: "white" }}>Join Now</Text>
                        </TouchableOpacity>
                    </View>


                </View>

            </View>

        </View>
    )

}
export default Details

const styles = StyleSheet.create({
    container: {
        // borderWidth:2,/
        marginTop: 30,
        paddingHorizontal: 30,
        marginBottom: 30
    },
    imgdes: {
        width: "100%",
        height: undefined,
        aspectRatio: 1,
        marginTop: -43,
    },
    course: {
        display: "flex",
        textAlign: "center",

    },
    flex: {
        display: "flex",
        alignItems: "center",

    },
    card: {
        //  borderWidth: 1,

        paddingHorizontal: 20,
        backgroundColor: "#dfe6e4",
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