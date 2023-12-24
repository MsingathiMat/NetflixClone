import { View, Text } from 'react-native'
import React from 'react'

const MovieHeading = () => {
  return (
    <View style={{

        marginVertical:20
    }}>
      <Text
      style={{

        color:'white',
        fontSize:20
      }}
      >Continue Watching</Text>
      <Text  style={{

color:'gray',
fontSize:18
}}>Seaon 3 | 15+ |  2024</Text>
    </View>
  )
}

export default MovieHeading