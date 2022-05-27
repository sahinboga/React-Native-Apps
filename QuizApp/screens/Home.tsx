import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import Title from '../components/Title'

const Home = () => {
  return (
    <View>
      <Title/>
      <View style={styles.bannerContainer}>
        <Image 
          source={{
            uri:'https://cdni.iconscout.com/illustration/premium/thumb/boy-participating-in-online-education-quiz-4762294-3963980.png'
          }}
          style={styles.banner}
          resizeMode='contain'
        />
      </View>
      <TouchableOpacity>
        <Text>Start</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Home

const styles =StyleSheet.create({
  bannerContainer:{
    justifyContent:'center',
    alignItems:'center'
  },
  banner:{
    height:300,
    width:300,
  }
})