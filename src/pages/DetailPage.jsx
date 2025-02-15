import React from 'react'
import useFetchDetail from '../hooks/useFetchDetail'
import  { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

const DetailPage = () => {
const params = useParams()
const imageURL = useSelector((state) => state.movieData.imageURL);
const { data } = useFetchDetail(`/${params.detail}/${params.id}`)
const { data : castData }= useFetchDetail(`/${params.detail}/${params.id}/credits`)
console.log('params',data)
  return (
    <div>
      DetailPage
      <div className='w-full h-[450px]'>
      <img src={imageURL+data.backdrop_path
} alt="" />
      </div>

    </div>
  )
}

export default DetailPage