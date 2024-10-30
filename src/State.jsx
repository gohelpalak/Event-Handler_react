import Country from "./country";

function State(props)
{
    return(
        <>
        <h1>State Component</h1>
        <h3>State:-{props.stRecord.state}</h3>
        <Country conRecord={props.stRecord}/> 
        </>
    )
}
export default State;