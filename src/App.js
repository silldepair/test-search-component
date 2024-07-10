import logo from './logo.svg';
import './App.css';
import DropDownSearch from './components/dropdownsearch/DropDownSearch'
import {DataItem} from './utils/dummy/DataItem'

function App() {
  return (
    <div className="App">
      <div className="flex-1 w-2/4 mx-auto">
        <DropDownSearch dataItem={DataItem}/>
      </div>
    </div>
  );
}

export default App;
