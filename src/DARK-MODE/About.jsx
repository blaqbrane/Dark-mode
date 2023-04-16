import React from 'react'
import moment from 'moment'
const About = ({title,date,length,snippet}) => {
  return (
    <div className='p-5 capitalize'>
        <h1 className='text-[purple]'>{title}</h1>
        <div>
            <span className='text-[gray] mr-2'>{moment(date).format('dddd Do, YYYY')}</span>
            <span>{length} min read</span>
        </div>
        <h4>{snippet}</h4>
    </div>
  )
}

export default About