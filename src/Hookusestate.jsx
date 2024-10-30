import { useState } from "react";

function Hookusestate() {
    let [data, setData] = useState(10)
    let [student, setstudent] = useState([{ name: "ram", age: 20, course: "java" },
    { name: "Shyam", age: 21, course: "PHP" },
    { name: "Shiv", age: 18, course: "FSD" },
    { name: "Radha", age: 19, course: "Desining" },
    { name: "krishna", age: 22, course: "UI/UX" },
    ])
    let [info, setInfo] = useState({ name: "Palak", age: 20 })
    let [record,setrecord]=useState([10,20,30,40,50,60])




    return (
        <>
            <h1>data={data}</h1>
            <button onClick={() => setData(data + 1)}>click</button>
            {/* <h2>student:-{student.name}</h2> */}
            <h3>name={info.name}</h3>
            <h3>age={info.age}</h3>
{record.map((val,index)=>{
    return(
        <h1>{val}</h1>
    )

})}

            <table border={1} align="center" style={{ fontSize: "30px", color: "blue", border: "2px solid black" }} cellPadding={10} cellSpacing={10} >
                <th> name</th>
                <th> age</th>
                <th>course</th>
                <th>change</th>
                {
                    student.map((val, index) => {
                        return (
                            <>
                                <tr>
                                    <td>{val.name}</td>
                                    <td>{val.age}</td>
                                    <td>{val.course}</td>
                                    <td><button style={{ padding: "10px 25px" }}>click</button></td>


                                </tr>



                            </>
                        )
                    })
                }
            </table>

        </>
    )
}
export default Hookusestate;