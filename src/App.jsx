import { useEffect, useState } from 'react';
import './App.css';

import InputField from './components/InputField';
import Course from './components/Course'


function App() {
  const [data,setData] = useState();
  const [inputField,setInputField] = useState('');
  useEffect(() => {
    function fetchData(){
      console.log("fetching data")
        fetch('',{
        method:"GET",
        })
        .then(res => res.json())
        .then(({data}) => setData(data))
        .catch(error => console.log(error))
    }
    fetchData();
  },[])

  return (
    <div>
      <InputField inputField={inputField} setInputField={setInputField}/>
      {data && <Course data={data} filterString={inputField}/>}
    </div>
  );
}

export default App;
