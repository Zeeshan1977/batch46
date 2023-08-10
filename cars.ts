function car1(Manufacturer:string, model:string, color:string, engine:number){ 
    let message =` ${Manufacturer}, ${model}, is my favourite car for its ${color} color and ${engine} cylinder performance.`;
    return message;
        }
    function car2(Manufacturer:string, model:string, color:string, engine:number){ 
        let message =` ${Manufacturer}, ${model}, is my favourite car for its ${color} color and ${engine} cylinder performance.`;
        
     
    return message;
    }
    
    const returnedMessage1= car1("Toyota","Yaris","White",6);
    const returnedMessage2= car2("Honda","Prelude", "Red",8);
    console.log(returnedMessage1);
    console.log(returnedMessage2);
