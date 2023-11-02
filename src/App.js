import { Button } from 'react-bootstrap';
import './App.css';
import { useState } from 'react';
import * as math from 'mathjs';

function App() {

  let[value,setValue] = useState("")

  // Display content inside calculator screen
    const display = (num)=>{
      setValue(value += num)
    }

    const allclr = ()=>{
      setValue(value="")
    }

    const removeLast = ()=>{
      if (value) {
        setValue(value.slice(0,-1))
      }
    }

    const evalcal = ()=>{
      try {
        const result = math.evaluate(value)
        setValue(result);
    } catch (error) {
        console.log(error);   
        setValue("SYNTAX ERROR") 
    }
    }


  return (
    <div className='h-screen w-screen bg-sky-800 flex justify-center items-center'>
        <div className='w-full md:w-2/5 h-4/5 flex justify-center'>
          <div className='flex-col w-full'>
            <h1 className='text-center font-extrabold mt-5 mb-4' style={{color:'#3cdfff'}}>REACT CALCULATOR</h1>
            <input type="text" value={value} className='bg-gray-800 w-full h-16 rounded-lg text-white text-right text-2xl md:text-3xl px-3 outline-none' placeholder='0' readOnly/>
            <div className='mt-2 w-full h-14 md:h-16'>
            <Button className='w-1/4 h-full me-2' style={{backgroundColor:"#00C0F0",fontWeight:"bold"}} onClick={()=>allclr()}>AC</Button>
            <Button className='w-1/4 h-full me-2' style={{backgroundColor:"#00C0F0",fontWeight:"bold"}} onClick={()=>removeLast()}>del</Button>
            <Button className='w-1/4 h-full me-2.5' style={{backgroundColor:"#00C0F0",fontWeight:"bold"}} onClick={()=>display("%")}>%</Button>
            <Button className='w-1/6 md:w-1/5 h-full' style={{backgroundColor:"#005063",fontWeight:"bold"}} onClick={()=>display("÷")}>÷</Button>
            </div>
          <div className='mt-2 w-full h-14 md:h-16'>
            <Button className='w-1/4 h-full me-2' style={{backgroundColor:"#00C0F0",fontWeight:"bold"}} onClick={()=>display("7")}>7</Button>
            <Button className='w-1/4 h h-full me-2' style={{backgroundColor:"#00C0F0",fontWeight:"bold"}} onClick={()=>display("8")}>8</Button>
            <Button className='w-1/4 h-full me-2.5' style={{backgroundColor:"#00C0F0",fontWeight:"bold"}} onClick={()=>display("9")}>9</Button>
            <Button className='w-1/6 md:w-1/5 h-full' style={{backgroundColor:"#005063",fontWeight:"bold"}} onClick={()=>display("×")}>×</Button>
          </div>
          <div className='mt-2 w-full h-14 md:h-16'>
            <Button className='w-1/4 h-full me-2' style={{backgroundColor:"#00C0F0",fontWeight:"bold"}} onClick={()=>display("4")}>4</Button>
            <Button className='w-1/4 h-full me-2' style={{backgroundColor:"#00C0F0",fontWeight:"bold"}} onClick={()=>display("5")}>5</Button>
            <Button className='w-1/4 h-full me-2.5' style={{backgroundColor:"#00C0F0",fontWeight:"bold"}} onClick={()=>display("6")}>6</Button>
            <Button className='w-1/6 md:w-1/5 h-full' style={{backgroundColor:"#005063",fontWeight:"bold"}} onClick={()=>display("-")}>-</Button>
          </div>
          <div className='mt-2 w-full h-14 md:h-16'>
            <Button className='w-1/4 h-full me-2' style={{backgroundColor:"#00C0F0",fontWeight:"bold"}} onClick={()=>display("1")}>1</Button>
            <Button className='w-1/4 h-full me-2' style={{backgroundColor:"#00C0F0",fontWeight:"bold"}} onClick={()=>display("2")}>2</Button>
            <Button className='w-1/4 h-full me-2.5' style={{backgroundColor:"#00C0F0",fontWeight:"bold"}} onClick={()=>display("3")}>3</Button>
            <Button className='w-1/6 md:w-1/5 h-full' style={{backgroundColor:"#005063",fontWeight:"bold"}} onClick={()=>display("+")}>+</Button>
          </div>
          <div className='mt-2 w-full h-14 md:h-16'>
            <Button className='w-1/2 h-full me-3' style={{backgroundColor:"#00C0F0",fontWeight:"bold"}} onClick={()=>display("0")}>0</Button>
            <Button className='w-1/4 h-full me-2.5' style={{backgroundColor:"#00C0F0",fontWeight:"bold"}} onClick={()=>display(".")}>.</Button>
            <Button className='w-1/6 md:w-1/5 h-full' style={{backgroundColor:"#005063",fontWeight:"bold"}} onClick={()=>evalcal()}>=</Button>
          </div>
          </div>
        </div>
    </div>
  );
}

export default App;
