// import React, { useState } from 'react'
// import { LC, N, SC, UC } from '../Data/PassChar'

// function Pss() {
//     let [uppercae,setUppercase]=useState(false)
//     let [lowercae,setLowercase]=useState(false)
//     let [specialchar,setSpecialCHAr]=useState(false)
//     let [number,setNumber]=useState(false)
    
// const Charcol=()=>{
//    let CharSet =""
    
// if(uppercae|| lowercae|| specialchar|| number){
// if(uppercae)  CharSet +=UC
// if(lowercae) CharSet +=LC
// if(specialchar) CharSet +=SC
// if(number) CharSet +=N
// console.log(CharSet)
// }else{
// alert(" Helo khan baba")
    
// }
// //  {(w)? " ": ""}
// //  (uppercae)?  CharSet +=UC:""
// //  (uppercae)?  CharSet +=LC:""
// //  (uppercae)?  CharSet +=SC:""
// //  (uppercae)?  CharSet +=N:""

// // :
// //  " please select any check box"

// } 
//   return (
// <>

// <div>

// <div className='bg-blue-600 h-[100vh] w-[100%] flex place-items-center justify-center '>

// <div className='bg-white h-[400px] w-[500px] border-2 border-red-600 '>
//     <h1 className='text-4xl mb-1'>Random Password Generator</h1>
// <input className='mt-3 w-[70%] ml-3 p-3 bg-gray-300 text-white' type="text" readOnly /> <button className= 'p-3 cursor-pointer w-[20%] bg-gray-600 text-white'>Copy</button>
// <div className='flex content-between '>
// <label className='mt-4 w-[80%] ml-2'>Password length</label> 
// <input type="number" className=' mt-3 w-[15%] bg-red-200 mr-2 p-2' max={10} min={1}/>
// </div>
// <div className='flex palce-content-between mt-1'> 
// <label className=' w-[90%] ml-2' checked ={uppercae} onChange={()=>setUppercase (!uppercae)}>UpeerCase</label> <input className='mr-2' type="Checkbox" /> 
// </div>
// <div className='flex palce-content-between mt-1'> 
// <label className=' w-[90%] ml-2' checked ={lowercae} onChange={()=>setLowercase(!lowercae)}>LowerCase</label> <input className='mr-2' type="Checkbox" /> 
// </div>
// <div className='flex palce-content-between mt-1'> 
// <label className=' w-[90%] ml-2' checked ={specialchar} onChange={()=>setSpecialCHAr(!specialchar)} >Special Char</label> <input className='mr-2' type="Checkbox" /> 
// </div>
// <div className='flex palce-content-between mt-1'> 
// <label className=' w-[90%] ml-2 ' checked ={number} onChange={()=>setNumber(!number)}>Numbers</label> <input className='mr-2' type="Checkbox" /> 
// </div>
// <div className='bottom-0 flex justify-center '>
// <button onClick={Charcol} className='bg-red-300 mt-10 w-[80%] p-2 text-2xl rounded-sm'>Generate Random Password</button>
// </div>
// </div>
// </div>
// </div>
// </>
//   )
// }
// export default Pss