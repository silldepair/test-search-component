import { useState } from 'react';
import { BsSearch } from "react-icons/bs";

function DropDownBox(props){
  const {selectedOptions, setSelectedOption, dataItem, isWithSearch, isMultipleSelect} = props;
  const [textSearch, setTextSearch] = useState('')
  const [filteredOptions, setFilteredOptions] = useState([...dataItem])

  function handleChangeSearch(event){
    let textSearch = event.target.value;
    setTextSearch(textSearch)
    if(textSearch){
      filterOption(textSearch)
    }else{
      setFilteredOptions([...dataItem])
    }

  }

  function filterOption(text){
    let tmpArray = [];
    dataItem.forEach((item, i) => {
      if(item.label.includes(text)){
        tmpArray.push(item)
      }
    });
    setFilteredOptions(tmpArray);
  }

  function handleItemClick(item, event){
    console.log(item.value);
    if(!selectedOptions.includes(item)){
      if(!isMultipleSelect){
        setSelectedOption([item])
      }else if(isMultipleSelect){
        setSelectedOption([...selectedOptions,item])
      }
    }
    if(isMultipleSelect){
      event.stopPropagation();
    }
  }

  return (
    <div className="relative  z-40">
      <div className="absolute top-0 left-0 w-full bg-white">
        {isWithSearch && (
          <div className="flex flex-row">
            <div className="flex w-6 h-6 justify-center items-center bg-white">
              <BsSearch />
            </div>
            <input type="text" value={textSearch} onClick={(event)=>event.stopPropagation()} onChange={handleChangeSearch}
            className="flex grow border px-2"/>
          </div>
        )}
        <div className="flex flex-col max-h-36 overflow-auto box-border p-0 border-2">
          {filteredOptions.map((item, index)=>{
            if(selectedOptions.includes(item)){
              return null
            }
            if(textSearch){
              if(item.label.includes(textSearch)){
                let firstStrIndex = item.label.indexOf(textSearch);
                let lastStrIndex = firstStrIndex + textSearch.length;
                let strFirstSubstring = item.label.substring(0,firstStrIndex);
                let strLastSubstring = item.label.substring(lastStrIndex);
                return (
                  <button key={index} onClick={(event)=>handleItemClick(item, event)}
                    className="flex-1 px-2 py-1 border-b-2 border-inherit text-left">
                    {strFirstSubstring}<span className="bg-green-100">{textSearch}</span>{strLastSubstring}
                  </button>
                )
              }
            }
            return(
              <button key={index} onClick={(event)=>handleItemClick(item, event)}
                className="flex-1 px-2 py-1 border-b-2 border-inherit text-left">
                {item.label}
              </button>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default DropDownBox;
