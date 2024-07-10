import logo from './logo.svg';
import './App.css';
import DropDownSearch from './components/dropdownsearch/DropDownSearch'
import {DataItem} from './utils/dummy/DataItem'

function App() {
  return (
    <div className="App">
      <DropDownSearch dataItem={DataItem}/>
    </div>
  );
}

export default App;
