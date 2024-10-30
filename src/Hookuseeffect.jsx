import { useEffect, useState } from "react"

function Hookuseeffect()
{
    let[data,setdata]=useState(0)
    let[info,setinfo]=useState(0)

useEffect(()=>{
    console.log("hello");
    let count=0
    let timee=setInterval(() => {
        count=count+1;
        console.log(count);

       
        // console.log("hook");
       
        
    }, 1000);
    return()=>{
        clearInterval(timee)
    }

    // function loaddata()
    // {
    //     console.log("first function");

    // }
    // function second()
    // {
    //     console.log("second function");
    // }


    // loaddata()
    // second()

    // window.document.title="Hook Useeffect " + data;

},[data,info])




    return(
        <>
        <h2>use effect</h2>
        <button onClick={()=>setdata(data+1)}>click{data}</button>
        <button onClick={()=>setinfo(info+1)}>click{info}</button>

        
        </>
    )
}
export default Hookuseeffect;