import { View, Text, ScrollView } from 'react-native'
import React from 'react'

const Filter = () => {
  return (
    <View style={{

        width:'100%',
        height:50,
      
        justifyContent:'center',
        marginTop:20
    }}>
   <ScrollView
   horizontal
   style={{

 
   }}
   >

   <Text style={{

color:'white',
fontSize:20,
fontWeight:'bold',
marginRight:30

}}>Trending</Text>

<Text style={{

color:'gray',
fontSize:20,
marginRight:30

}}>Trending</Text>

<Text style={{

color:'gray',
fontSize:20,
marginRight:30


}}>Trending</Text>

<Text style={{

color:'gray',
fontSize:20,


}}>Trending</Text>

   </ScrollView>
    </View>
  )
}

export default Filter