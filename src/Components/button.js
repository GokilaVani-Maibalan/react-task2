

export function Button({name,onclick,bgclr,clr}){
    return(
        <button className="button" style={{backgroundColor:bgclr,color:clr}}onClick={onclick}>{name}</button>
    )
}