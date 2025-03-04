import React from 'react'

const File = () => {
  return (
    <div>
      <div className='container'>
        <div className='add-container'>
          <div className='info-container'>
            <input type="text"
            name="name"
            placeholder='Name'
            value={""}
            onChange={()=>{

            }} />
          </div>
          <button className='add'>add</button>
        </div>
        <div className='searchh-table-container'></div>
      </div>
      
    </div>
  )
}

export default File
