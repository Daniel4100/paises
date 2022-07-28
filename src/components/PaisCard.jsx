import React, { useEffect, useState } from 'react'
import axios from "axios";

const PaisCard = ({namePais}) => {
    const [Pais, setPais] = useState()

  useEffect(() => {
    const URL = `https://restcountries.com/v2/name/${namePais}`
    axios.get(URL)
    .then(res => setPais(res.data[0]))
    .catch(err => console.log(err))
  }, [])


  return (
    <article>
        <img src={Pais?.flag} alt="" />
        <h2>{Pais?.name}</h2>
        <p>{Pais?.subregion}</p>
      </article>
  )
}

export default PaisCard