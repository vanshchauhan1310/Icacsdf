import React from 'react'
import MasterHead from '../Compoenent/MasterHead/MasterHead'
import EventDetail from '../Compoenent/Event-Details/EventDetail'
import About from '../Compoenent/About-Event/About'
import Objective from '../Compoenent/Objective/Objective'
import ConferenceTopic from '../Compoenent/ConferenceTopic/ConferenceTopic'


const HomePage = () => {
  return (
    <>
    <MasterHead />
     <EventDetail />
    <About />
    <Objective />
    <ConferenceTopic/>
    
    
    </>
  )
}

export default HomePage