import React, { useEffect, useState } from 'react'

import { useParams } from 'react-router-dom'
import axios from 'axios'
import Card from '../components/Card'


const ExplorePage = () => {

  const params = useParams()
  const [pageNo , setPageNo]= useState(1)
  const [data ,setData]=useState([])

  const [totalPageNo, setTotalPageNo] = useState(0)


  // console.log("params", params)



  const fetchData =async()=>{
    try {
      const response = await axios.get(`/discover/${params.explore}`,{
        params: {
          page : pageNo
        }
      })
        
      setData((prev)=>{
        return[
          ...prev,
          ...response.data.results,
        ]
      })
      setTotalPageNo(response.data.total_pages)

        // console.log("totalpage",response.data.total_pages)
    
      console.log("explore data", response.data.results)
    } catch (error) {
      console.log("error", error)
    }
  }
  const handleScroll = ()=>{
    if((window.innerHeight + window.scrollY) >= document.body.offsetHeight){
      setPageNo(prev => prev +1)
    }
  }
  useEffect(()=>{
    fetchData()
  },[pageNo])

  useEffect(()=>{
    window.addEventListener('scroll',handleScroll)
  },[])


  return (
    <div className='pt-16'>
      <div className='container mx-auto'>

      <h2 className='text-lg font-semibold my-2 lg:text-xl'>Popular {params.explore} show </h2>
      <div>
        {
          data.map((exploreData,index)=>{
            <div>
              <Card data={exploreData} key={exploreData.id+"exploresection"}/>
            </div>
          })
        }
      </div>
      </div>
    </div>
  )
}

export default ExplorePage