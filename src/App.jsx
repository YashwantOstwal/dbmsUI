import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Info from './Info.jsx'
import OptionsButton from './OptionsButton.jsx'
import './App.css'

const queries = [
  "highest batting average",
  "most wickets",
  "fastest century",
  "most sixes",
  "highest strike rate",
  "best economy rate",
  "lowest team total",
  "most matches won",
  "most man-of-the-match",
  "longest partnership",
  "most sixes innings", 
  "best bowling figures", 
  "highest individual score",
  "most catches",
  "most runs season",
  "highest win percentage",
  "most hat-tricks" 
];

function App() {

  const [open,setOpen] = useState(false)
  const [searchedQuery,setSearchedQuery] = useState('')
  const [selectedQueries,setSelectedQueries] = useState([]);
  console.log(selectedQueries);
  const handleOpen = ()=>{
    setOpen((prevState)=>!prevState)
  }
  const handleQueries = (value)=>{
    setSelectedQueries([...selectedQueries,value])
    }
  const handleChange = (e)=>{
    e.target.value == ''?setOpen(false):setOpen(true);
    setSearchedQuery(e.target.value.toLowerCase());
  }
  return (
    <div className = 'container'>
      <div className = 'card'>
        <div className = 'item-1'>
          <div>
            <div className = 'info'>
              <Info/> Select atleast one query, you can add more or edit later
            </div>
            <div className = 'inputContainer'>
              <input type="text" id='inputBox' autoComplete='off' onChange = {handleChange}/>
              <label htmlFor="inputBox">
                Start typing to search queries (100+ available)
              </label>
              <button style = {{rotate: !open && '180deg'}} onClick = {handleOpen} className='dropdown'>
                <OptionsButton/>
              </button>
              {open && 
                <div className = 'options'>
                  {queries.filter((query)=>searchedQuery == ''?true:query.slice(0,searchedQuery.length) == searchedQuery).map((filteredQuery)=>
                    <button value = {filteredQuery} onClick = {(e)=>handleQueries(e.target.value)} className = 'query'>{filteredQuery}</button>
                  )}
                </div>
              }
            </div>
          </div>
          <div className = 'vishwa'></div>
        </div>
        <div className = 'item-2'>
          
        </div>
      </div>
    </div>
  );
}
export default App