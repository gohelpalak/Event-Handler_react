import Student from "./Student";

function College(props)
{
    return(
        <>
        <h1>College componenet</h1>
        <h3>College:-{props.clgInfo.college}</h3>
        <Student stdInfo={props.clgInfo}/>
        </>
    )
}
export default College;