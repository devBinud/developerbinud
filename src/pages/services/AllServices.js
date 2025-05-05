import React from 'react'
import Services from "../../components/services/Services.js"
import WhatWeOffer from '../../components/whatweoffer/WhatWeOffer.js'

const AllServices = () => {
  return (
    <div className='pt-15'>
      <WhatWeOffer/>
        <Services/>
    </div>
  )
}

export default AllServices