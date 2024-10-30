import State from "./State";

function City(props)
{


    return(
        <>
        <h1>City Component</h1>
        <h3>city:-{props.Record.city}</h3>
        <State stRecord={props.Record}/>
        </>
    )
}
export default City;