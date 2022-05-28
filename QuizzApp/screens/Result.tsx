import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Result = () => {
    return (
        <View>
            <View>
                <Text>Result</Text>
            </View>
            <View style={styles.bannerContainer}>
                <Image
                    source={{
                        uri: 'https://cdni.iconscout.com/illustration/premium/thumb/boy-participating-in-online-education-quiz-4762294-3963980.png'
                    }}
                    style={styles.banner}
                    resizeMode='contain'
                />
            </View>
            <View>
                <TouchableOpacity>
                    <Text>Home</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Result

const styles = StyleSheet.create({
    bannerContainer: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    banner: {
        height: 300,
        width: 300,
    }
})