import React, { useState } from 'react';

function OptionBox(props){
  const {isWithSearch, toggleSearch, isMultipleSelect, toggleMultiple} = props

  return (
    <div className="flex flex-row m-1 w-full border-2 border-inherit min-h-20">
      <div className="flex w-30">
        <label><input className="m-4" checked={isWithSearch} type='checkbox' onClick={toggleSearch}/>With Search</label>
      </div>
      <div className="flex w-30">
        <label><input className="m-4" checked={isMultipleSelect} type='checkbox' onClick={toggleMultiple}/>Multiple Select</label>
      </div>
    </div>
  )
}

export default OptionBox
