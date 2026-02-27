import './App.css';
import TextForm from './components/TextForm';
import { useState } from 'react';

function App() {
  const [mode,setMode]=useState('light'); //wheater dark mode is enabled or not 
  const toggleMode=()=>{
    if(mode==='light'){
        setMode('dark');
        document.body.style.backgroundColor='black';
        document.body.style.color = 'white';
    }
    else{
      setMode('light');
       document.body.style.backgroundColor='white';
       document.body.style.color = 'black';
    }
    
 }
  return (
    <>
      <div className="container">
        <TextForm heading="Enter the text to analyze below." mode={mode}  toggleMode={toggleMode}/>
      </div>
    </>
  );
}

export default App;
