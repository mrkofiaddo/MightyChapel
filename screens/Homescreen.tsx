import React from "react";
import { View, Text, Image , StyleSheet} from "react-native";

const Homescreen = ()=>{
    return (
        <View>
            {/*viedo component*/}
            <View>
            {/*thumbnai*/}
            <Image style={styles.Thumbnail} source={require('./../assets/images/IMG_5443.jpeg')}/>
            {/*Title row*/}
            <View>
                <Text>snvlsjnf</Text>
            </View>
            </View>
        </View>
    )
}




const styles= StyleSheet.create({
    Thumbnail: {
        width: '100%',
        aspectRatio: 16/9,
    }
})

export default Homescreen;