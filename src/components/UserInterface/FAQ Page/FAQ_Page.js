import React from 'react'
import { Routes , Route} from 'react-router-dom'
import HeaderChat from '../headerUser/HeaderChat'
import FoireAuxQuestion from './FoireAuxQuestion'
import FAQDetails from './FAQ details/FAQDetails'
function FAQ_Page() {

  return (
    <>
    <HeaderChat />
    <Routes>
      <Route path="/*" element={<FoireAuxQuestion />} /> 
      <Route path="/:id" element={<FAQDetails />} />
    </Routes>
    </>
  )
}

export default FAQ_Page