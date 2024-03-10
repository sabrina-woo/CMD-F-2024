import React from 'react'
import ViewBtn from './ViewBtn'
import { useState } from 'react';
import Comments from './Comments'


const Disorder = ({disorder}) => {
  const [showAdd, setShowAdd] = useState(false)

  return (
    <div>
        <h1>
            {disorder.name}
        </h1>
        <h2>
          </h2>
        <p>
            {disorder.text}
        </p>
        <div>
          {showAdd ? <Comments comments={disorder.comments}/> : ''}
        </div>
        <ViewBtn
        text={showAdd ? 'Hide Comments' : 'Show Comments'}
        onClick={() => setShowAdd(!showAdd)}>
        </ViewBtn>
    </div>
  )
}

export default Disorder
