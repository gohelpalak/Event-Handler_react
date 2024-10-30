import City from "./city"
import Hookuseeffect from "./Hookuseeffect"
import Hookusestate from "./Hookusestate"
// import Banner from "./pages/sidebar/Banner/Banner"
// import Sidebar from "./pages/sidebar/Sidebar"
import Univercity from "./Univercity"

function App() {
  // let data={
  //   city:"Surat",
  //   state:"Gujarat",
  //   country:"India",
  // }


  let data={
    univercity:"Bhakt Kavi Narsih Maheta Univercity",
    college:"PKM College of Tech. And B.ed",
    student:"gohel palak",
  
  }



  // let arr=[10,20,30,10]
  // let arr2=[50,60,70,80,90,100];
  // let newarr=arr.concat(arr2)
  // let newarr=[50,0,70,...arr,20,30,5000,...arr2,10,20,23000]
  // console.log(newarr);

  // let[x,y,...z]=[...arr]
  // console.log(x,y,z);

  return (
    <>
    <h1>App component</h1> 
    <Univercity info={data}/>
    <Hookusestate/>
   <Hookuseeffect/> 
    <div style={{display:"flex"}}>
    {/* <Sidebar/> */}
    {/* <Banner/> */}

    </div>
    {/* <City Record={data}/> */}

    {/* <ul>

    {
      arr.map((val,index)=>{
        return(
          <li key={index}>{val}</li>


        )
      })
    }
    </ul> */}

 
    </>
  )
}

export default App
