import React, { useState } from 'react';
import DropDownBox from "./DropDownBox"
import { BsChevronDown, BsDashSquareFill } from "react-icons/bs";
import OptionBox from "./OptionBox"

function DropDownSearch(props){
  const {dataItem} = props;
  const [selectedOptions, setSelectedOption] = useState([])
  const [toggleOption, settoggleOption] = useState(false)
  const [isWithSearch, setIsWithSearch] = useState(true)
  const [isMultipleSelect, setIsMultipleSelect] = useState(true)

  function handleRemoveItem(item){
    if(selectedOptions.includes(item)){
      let tmpArray = [...selectedOptions]
      var indexToRemove = tmpArray.indexOf(item);
      if (indexToRemove !== -1) {
        tmpArray.splice(indexToRemove, 1);
        setSelectedOption([...tmpArray])
      }
    }
  }

  function handleDropDownClick(){
    console.log('dropdownclicked');
    settoggleOption(!toggleOption);
  }

  function toggleSearch(){
    setIsWithSearch(!isWithSearch)
  }

  function toggleMultiple(){
    setIsMultipleSelect(!isMultipleSelect)
  }

  return(
    <div className="flex flex-col px-3 py-3 ">
      <div className="flex flex-row">
        <div className="flex flex-col w-28 m-1 items-center justify-start ">
          <label className="w-28 h-8 ">
            Label :
          </label>
        </div>
        <div className="flex flex-col grow m-1 ">
          <div onClick={handleDropDownClick}
          className="flex flex-row max-h-72 overflow-auto min-h-4 border-2 border-inherit">
            <div className="flex flex-row grow max-h-72 overflow-auto flex-wrap min-h-4">
              {selectedOptions.map((item,index)=>{
                return(
                  <div key={index} className="flex flex-row bg-green-100 mr-1 h-9 border-2 px-1 py-1 border-green-300 rounded ">
                    <div className="h-6">
                      <p>{item.label}</p>
                    </div>

                    <div onClick={()=>handleRemoveItem(item)} className="flex flex-col w-6 justify-center items-center">
                      <BsDashSquareFill />
                    </div>
                  </div>
                )
              })}
            </div>
            <div className="flex w-6 h-6 justify-center items-center bg-white">
              <BsChevronDown />
            </div>
          </div>
          {toggleOption && (
            <DropDownBox dataItem={dataItem} selectedOptions={selectedOptions}
            setSelectedOption={setSelectedOption} isWithSearch={isWithSearch}
            isMultipleSelect={isMultipleSelect}/>
          )}
        </div>
      </div>
      <div>
        <OptionBox
        isWithSearch={isWithSearch}
        toggleSearch={toggleSearch}
        isMultipleSelect={isMultipleSelect}
        toggleMultiple={toggleMultiple}/>
      </div>
    </div>
  )
}

export default DropDownSearch;
