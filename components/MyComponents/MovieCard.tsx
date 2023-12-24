import { View, Text, Image } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';

import { MaterialIcons } from '@expo/vector-icons';


const MovieCard = ({Title, url}:{Title:string, url:string}) => {
  
  
    return (
   <View style={{


    flex:1,
    flexDirection:'row',
    gap:20,
    marginTop:20
   }}
   
   
   >




    <View>

    <Image resizeMode='contain' style={{

width:160,
height:300,
borderRadius:20

}}   source={{ uri: url }}/>

    </View>

    <View style={{

marginVertical:20
}}>
<Text
style={{

color:'white',
fontSize:25
}}
>{Title}</Text>

<View style={{

    flexDirection:'row',
    gap:10,
    marginTop:20
}}>

<Ionicons name="star" size={18} color="yellow" />
<Ionicons name="star" size={18} color="yellow" />
<Ionicons name="star" size={18} color="yellow" />
<Ionicons name="star" size={18} color="gray" />
<Text  style={{

color:'gray',
fontSize:12
}}>150 Reviews</Text>
</View>
<Text  style={{

color:'gray',
fontSize:18
}}>Seaon 3 | 15+ |  2024</Text>

<View style={{
    flexDirection:'row',
    gap:5
}}>

<Ionicons name="ios-eye" size={24} color="white" />
<Text  style={{

color:'gray',
fontSize:18
}}>15M</Text>


<Ionicons name="heart-sharp" size={24} color="white" />
<Text  style={{

color:'gray',
fontSize:18
}}>15M</Text>


<MaterialIcons name="file-download" size={24} color="white" />
<Text  style={{

color:'gray',
fontSize:18
}}>15M</Text>
</View>

<Text  style={{

color:'white',
fontSize:18,

marginTop:10
}}>A film, also called a movie or a motion picture, is a series of still</Text>
</View>



<View>


</View>
  
   </View>
  )
}

export default MovieCard