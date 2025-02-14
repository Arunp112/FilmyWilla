import React from 'react'

import { useParams } from 'react-router-dom'
import axios from 'axios'

const ExplorePage = () => {

  const params = useParams()
  console.log("params",params)


  const fetchData =async()=>{
    try {
      const response = await axios.get(`/discover/${params.explore}`)
      console.log("explore data", response)
    } catch (error) {
      console.log("error", error)
    }
  }
  return (
    <div>ExplorePage</div>
  )
}

export default ExplorePage