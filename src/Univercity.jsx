import College from "./collage";


function  Univercity(props)
{
    return (
        <>
        <h1>Univercity component</h1>
        <h3>Univercity:-{props.info.univercity }</h3>
        <College clgInfo={props.info}/>
        
        </>
    )
}
export default Univercity;