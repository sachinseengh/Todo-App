
const Person={
    name:"sachin",
    last:"singh",
    
    profiles : ['he','hu'],
    Profile : ()=>{
        Person.profiles.map((items)=>console.log(items));
    }
}

export default function FirstComponent(){
    return(
        <div className="FirstComponent">First Component
        
        
        {Person.name}
        {Person.last}
        {Person.profiles[1]}
        {Person.Profile}
        </div>


    )
}