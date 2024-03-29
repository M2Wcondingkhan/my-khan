// import React, { useState } from 'react'

// function WM() {
//     let [city,setCity] = useState("")
//     const GetCity=(event)=>{
//         // console.log(city)

//         fetch(`https://api.open-meteo.com/v1/forecast?latitude= ${city} 52.52&longitude=13.41&hourly=temperature_2m`)
// .then((res)=>res.json())
// .then((finalRES)=>{
//     console.log(finalRES)
// })



// event.preventDefault()
// setCity(" ")

        
//     }
//   return (
//     <>
// <div className='bg-blue-600 w-[100%] h-[110vh]'>
//     <div className='max-w[1320px] mx-auto'>
//         <h1 className='text-[40px] font-bold text-white'>Simple Weather  App</h1>
//         <form onSubmit={GetCity}>
//             <input type="text" value={city} onChange={(e)=>setCity(e.target.value)} className='w-[300px] h-[40px] pl-3 mr-2' placeholder='City Name' />
//             <button className='bg-gray-400 text-white h-[40px] font-bold text-[17px] p-2'>Submit</button>
//         </form>
//         <div className=' w-[400px] h-[400px] mx-auto bg-slate-300 shadow-lg  rounded-md mt-[40px] p-[25px]'>
//             <h2 className='text-[40px] font-bold  mb-2 p-1 rounded-md'>Multan</h2>
//             <span className='text-[30px] font-bold bg-red-600 p-1 rounded-md  text-white'>Pakistan</span>
//             <h2 className='text-[35px] mt-4 font-bold'>17.09c</h2>
//             <img src="" alt="" />
//             <p>Fog</p>
//         <h1 className='mb-4 text-center mt-[118px] text-[25px] font-bold'>WAQAS AHMAD KHAN</h1>

//         </div>
//     </div>

// </div>

//     </>
//   )
// }

// export default WM