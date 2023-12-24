import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import Filter from '../../components/MyComponents/Filter'
import MovieHeading from '../../components/MyComponents/MovieHeading'
import MovieCard from '../../components/MyComponents/MovieCard'
import axios from 'axios'




const index = () => {

const [Title,SetTitle]= useState("No Title")
const [utrl,setUrl]= useState("")

  useEffect(()=>{

    SetTitle("Coded Design")
    setUrl('https://www.hallozween.com.au/wp-content/uploads/2021/07/TERMINATOR_DARKFATE-20-scaled.jpg')
   
const FetchMovies= async()=>{

  const options = {
    method: 'GET',
    url: 'https://moviesdatabase.p.rapidapi.com/titles/x/upcoming',
    headers: {
      'X-RapidAPI-Key': 'YOUR OWN KEY GROM RAPID API',
      'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
    }
  };
  
  try {
    const response = await axios.request(options);
    console.log(response.data.results[0].primaryImage.url);

  SetTitle(response.data.results[0].titleText.text)
  setUrl(response.data.results[0].primaryImage.url)
  } catch (error) {
    console.error(error);
  }
}
  
// Uncomment the line beloww and add you own API KEY from Rapid API
// FetchMovies();
  },[])
  return (
    <View
    style={{
      backgroundColor:'black',
      flex:1,
      paddingHorizontal:20
    }}
    >
   <Filter/>

   <MovieHeading/>



   <MovieCard Title={Title} url={utrl}/>
    </View>
  )
}

export default index