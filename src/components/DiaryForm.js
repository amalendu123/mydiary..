import React,{useState,useEffect} from 'react'
import { View } from './last';
const getdataFromLS=()=>{
    const data=localStorage.getItem('diarys');
    if(data){
        return JSON.parse(data)
    }
    else{
        return []
    }
}
function DiaryForm() {
    const [diarys,setDiary]=useState(getdataFromLS())
    const [text,setText]=useState("")
    const [date,setDate]=useState("")
    const [title,settitle]=useState("")
    

    const OnSubmit=(event)=>{
        event.preventDefault()
        let diary={
            date,
            title,
            text
        }
       setDiary([...diarys,diary]);
       setText('')
       settitle('')
       setDate('')

        useEffect(()=>{
            localStorage.setItem('diary',JSON.stringify(diarys))
        },[diarys])
    
    }
    
    
    return(
        <div>
        <div className="m-10 "> 

        <div className="text-white  box-border h-[33rem] w-full p-4 border-4 rounded-3xl flow-root ">
        <form onSubmit={OnSubmit}>
        <div className=" lg:flex lg:space-x-96 my-20 md:mx-10 sm:space-x-20 " id="box">
            <h1 className="text-white font-display ">Hi Diary,</h1>
        
            <input onChange={(event)=>setDate(event.target.value)} type="date" id="Date" className="text-black"></input>
            <button className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-full text-sm  dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 w-44 dark:hover:border-gray-600 dark:focus:ring-gray-700"><a href='#previous'>Previous Diary</a></button>

        </div>
        <div className="my-20 mx-20">
            <input type="text"  onChange={(event)=>settitle(event.target.value)}  id="Content" placeholder='enter the title ' className="block p-2.5   lg:w-96  text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 sm:w-16"></input>
        <textarea onChange={(event)=>setText(event.target.value)} id="message" rows="4" className="block p-2.5   w-full  text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 my-4" placeholder="Write your thoughts here..."></textarea>
    
        </div>
        <div className="lg:flex lg:space-x-120 lg:my-20 lg:mx-20  ">
            <button type='reset' className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 scale-100 hover:scale-200 ease-in duration-500">Clear</button>
            <button type='submit' className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 scale-100 hover:scale-200 ease-in duration-500">Submit</button>
       
        </div>
        </form>
        <div className='lg:my-20 my-10'>
        <h1 className='md:mt-50 text-white font-serif text-3xl lg:mt-3 ' id='previous'>PREVIOUS DIARYS<hr></hr> </h1>
        <div className="m-10"> 
        <div className="text-white  box-border h-auto w-auto p-4 border-4 rounded-3xl flow-root ">
            
            {diarys.length>0&&<>
            <div className='table-responsive'>
                <table className='table table-auto border-collapse border border-slate-500 border-separate border-spacing-2 w-full'>
                    <thead>
                        <tr>
                            <th className='border border-slate-600'>date</th>
                            <th className='border border-slate-600'>title</th>
                            <th className='border border-slate-600'>text</th>
                        </tr>
                    </thead>
                    <tbody>
                        <View diarys={diarys} />
                    </tbody>
                </table>
                </div></>}
            </div>
            </div>

            </div>
        
        
        </div>
        </div>
    </div>
    
    )
}
export default DiaryForm;