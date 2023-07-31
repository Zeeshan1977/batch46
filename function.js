"use strict";
//q22: Intentional Error: If you haven’t received an array index error in one of your programs yet, 
//try to make one happen. Change an index in one of your programs
//to produce an index error. Make sure you correct the error before closing the program.
let think = {
    mountain: { name: ['MountEverst', 'K-2', 'NangaParbat'] },
    River: { Rivername: ['Indues', 'Nile', 'Dajla'] },
    Country: { Countryname: ['Pakistan', 'Iran', 'Afghanistan'] },
};
console.log(think);
console.log(think.mountain);
console.log(think.River);
console.log(think.Country);
console.log(think.mountain.name[0]);
console.log(think.River.Rivername[1]);
console.log(think.Country.Countryname[2]);
