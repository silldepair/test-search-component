import React, { useState } from 'react';

function DropDownSearch(props){
  const [textSearch, setTextSearch] = useState('')
  const [filteredOptions, setFilteredOptions] = useState([])
  const [selectedOptions, setSelectedOption] = useState([])

  function handleChangeSearch(event){
    let textSearch = event.target.value;
    setTextSearch(textSearch)
    if(textSearch){
      filterOption(textSearch)
    }else{
      setFilteredOptions([])
    }

  }

  function filterOption(text){
    let tmpArray = [];
    props.dataItem.forEach((item, i) => {
      if(item.label.includes(text)){
        tmpArray.push(item)
      }
    });
    setFilteredOptions(tmpArray);
  }

  function handleItemClick(item){
    console.log(item.value);
    if(!selectedOptions.includes(item)){
      setSelectedOption([...selectedOptions,item])
    }
  }

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
  }

  return(
    <div className="flex flex-row px-3 py-3 bg-red-100">
      <div className="flex w-24 m-3 bg-orange-300">
        <label>
          Label :
        </label>
      </div>
      <div className="flex flex-col grow m-3 bg-orange-300">
        <div onClick={handleDropDownClick}
        className="flex flex-row max-h-72 overflow-auto flex-wrap min-h-11 border-2 border-inherit w-full">
          {selectedOptions.map((item,index)=>{
            return(
              <div key={index} className="flex flex-row border-2 px-2 py-1 border-inherit bg-yellow-100">
                <div>
                  <p>{item.label}</p>
                </div>
                
                <div onClick={()=>handleRemoveItem(item)} className="p-2">
                  <p>X</p>
                </div>
              </div>
            )
          })}
        </div>
        <input type="text" value={textSearch} onChange={handleChangeSearch}
        className="border px-2"/>
        <div className="flex flex-col max-h-36 overflow-auto box-border p-0 border-2 bg-green-100">
          {filteredOptions.map((item, index)=>{
            return(
              <button key={index} onClick={()=>handleItemClick(item)}
                className="flex-1 px-2 py-1 bg-blue-100 text-left">
                {item.label}
              </button>
            )
          })}
        </div>
      </div>

    </div>
  )
}

export default DropDownSearch;
