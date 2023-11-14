console.clear();

//------------------------------------------------------------------------------
//IMPORTS HERE
//------------------------------------------------------------------------------

import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";
import Choices from "inquirer/lib/objects/choices.js";
import { json } from "stream/consumers";

//------------------------------------------------------------------------------
//CLASSES/CONSTRUCTORS/OOPs HERE
//-----------------------------------------------,-------------------------------

const stopTime = ()=>{
    return new Promise((res:any)=>{
        setTimeout(res,3500);
    })
};

const preDefinedMainMenu = {
    showClassMenu:      "showClassMenu",
    showStudentMenu:    "showStudentMenu",
    Bye:                "bye"
};

const preDefinedClassMenu = {
    showAllClass:      'showAllClass',
    addClass:       'addClass',
    removeClass:    'removeClass',
    returnToMain:   'returnToMain',
};

const preDefinedStudentMenu = {
    returnToMain: 'returnToMain',
    showStudent:'showStudent',
    addStudent: 'addStudent',
    removeStudent:'removeStudent',
    modifyStudent:'modifyStudent'
    
};

let smClasses = [
    {uqIdClassPk:  '2301',    classNo:  '1',    yearNo: '2023'},
  //  {uqIdClassPk:  '2302',    classNo:  '2',    yearNo: '2023'},
    {uqIdClassPk:  '2303',    classNo:  '3',    yearNo: '2023'},
  //  {uqIdClassPk:  '2304',    classNo:  '4',    yearNo: '2023'},
    {uqIdClassPk:  '2305',    classNo:  '5',    yearNo: '2023'}
];

let smStudents = [
    {uqIdStudentPk:'230101',   name:   'Hareem Shah',     uqIdClassFk:'2301'},
    {uqIdStudentPk:'230501',   name:   'Mia khalifa',     uqIdClassFk:'2305'},
    {uqIdStudentPk:'230301',   name:   'Sunny Leone',     uqIdClassFk:'2303'},
];

//------------------------------------------------------------------------------
//FUNCTIONS HERE
//------------------------------------------------------------------------------

async function welcomeFunc(welcomeMessage:string ) {
    let rainbowTitle = chalkAnimation.neon(chalk.blueBright("Welcome To "+ welcomeMessage +" App!\n\nCoded By Zeeshan Abbas\n"));
    await stopTime();
    rainbowTitle.stop();
};

function makeClassId(mClass:string,mYear:string)
{
    if(mClass.length==1)
    { 
        mClass = '0'+mClass;
    }
    return mYear.slice(-2) + mClass ;    
};

function newClassIdFunc(sClass:string,sYear:string)
{
    let makeId:string = makeClassId(sClass,sYear);    
    let PKstudentData:any = smStudents.filter((lsData) => lsData.uqIdClassFk == makeId).map((lsData) => lsData.uqIdStudentPk);
    let newId;
    if(PKstudentData.length == 0 )
    {
        newId = makeId + '00';
    }
    else
    {
        newId = PKstudentData.slice(-1);
    }
    return parseInt(newId) + 1;
}


////******MAIN MENU FUNC ************/

async function mainMenuFunc(){

    await inquirer.prompt([
        {
            type:   'list',
            name:   'option',
            message:'Select the main menu option',
            choices:[
                {
                    name:   "Show class menu",
                    value:  preDefinedMainMenu.showClassMenu
                },
                {
                    name:   "Show student menu",
                    value:  preDefinedMainMenu.showStudentMenu
                },
                {
                    name:   "Good Bye",
                    value:  preDefinedMainMenu.Bye
                }   
            ]   
        }
        
    ]).then((selected) => {
        if (selected.option == preDefinedMainMenu.showClassMenu)
        {
            showClassMenuFunc();
        }
        else if(selected.option == preDefinedMainMenu.showStudentMenu)
        {
            showStudentMenuFunc();
        }
        else
        {
            console.log(preDefinedMainMenu.Bye);
        }
    });

};

////******CLASS MENU FUNC ************/

async function showClassMenuFunc() {
        
    await inquirer.prompt([
        {
            type:   'list',
            name:   'classOption',
            message:'Select the class menu option',
            choices:[
                {
                    name:   'Show all classes',
                    value:  preDefinedClassMenu.showAllClass
                },
                {
                    name:   'Add a class',
                    value:  preDefinedClassMenu.addClass
                },
                {
                    name:   'Remove a class',
                    value:  preDefinedClassMenu.removeClass
                },
                {
                    name:   'Return to main menu',
                    value:  preDefinedClassMenu.returnToMain
                }
            ]
        }
    ]).then((selected) => {
        if (selected.classOption == preDefinedClassMenu.showAllClass)
        {
            showAllClassFunc();
            
        }
        else if (selected.classOption == preDefinedClassMenu.addClass)
        {
            addClassFunc();            
        }
        else if (selected.classOption == preDefinedClassMenu.removeClass)
        {
            removeClassFunc();
        }
        else
        {
            mainMenuFunc();
        }
    });
};

async function showAllClassFunc() {
    if(smClasses.length > 0)
    {
        console.log(smClasses);
    }
    else
    {
        console.log(chalk.redBright('No class is available'));
    }
    await showClassMenuFunc();
};

async function addClassFunc() {
    await inquirer.prompt([
        {
            type:   'input',
            name:   'classYear',
            message:'Enter the class year',
            validate(value){
                if (!isNaN(value))
                {
                    if(value.length != 4 )
                    {
                        return chalk.bgRedBright('Enter year format yyyy.');
                    }                                  
                    else
                    {
                        return true;
                    }
                }
                else
                {
                    return chalk.bgRedBright('Must enter number input.');
                }
            } 
        },
        {
            type:   'input',
            name:   'classNo',
            message:'Enter the class number ',
            validate(value){
                if (!isNaN(value))
                {
                    if(value.length == 0 )
                    {
                        return chalk.bgRedBright('Must enter atleast 1 digit.');
                    }                                  
                    else
                    {
                        return true;
                    }
                }
                else
                {
                    return chalk.bgRedBright('Must enter number input.');
                }
            } 
        }
    ]).then((selected) =>
    {
        let newClassNo =  smClasses.find((val)=> val.classNo == selected.classNo && val.yearNo == selected.classYear);

        if (newClassNo == undefined)
        {

            let newClassId = makeClassId(selected.classYear,selected.classNo) ;
            const newObj = { uqIdClassPk: newClassId.toString().substring(0,4),    classNo:  selected.classNo,    yearNo: selected.classYear };
            console.log(newObj);
            smClasses.push(newObj);
            console.log(chalk.bgGreenBright('\nClass added.\n'));
        }
        else
        {
            console.log(chalk.bgRedBright('\nYou cannot add already added class.\n'));
        }
    });
    await showClassMenuFunc();
};

async function removeClassFunc() {
    await inquirer.prompt([
        {
            type:   'list',
            name:   'classYear',
            message:'Select the class year',
            choices: [...new Set(smClasses.map((choice) => choice.yearNo))]
        },
        {
            type:   'list',
            name:   'classNo',
            message: 'Select the class number',
            choices: (getAns) => { 
                return  smClasses.filter((choice) => choice.yearNo == getAns.classYear ).map((choice) => choice.classNo); 
            } 
        },
        {
            type:   'confirm',
            name:   'confirm',
            message:'Are you sure that you want to remove class?'
        }
    ]).then((selected) =>
    {
       
        if (selected.confirm == true)
        {
            let removeClassNo =  smClasses.findIndex((val)=> val.classNo == selected.classNo && val.yearNo == selected.classYear);
            smClasses.splice(removeClassNo,1);
            console.log(chalk.bgGreenBright('\nClass is removed.\n'));     
        }
        else
        {
            console.log(chalk.bgRedBright('\nYou have cancelled the confirmation.\n'));
        }        
    });
    await showClassMenuFunc();
};

////******STUDENT MENU FUNC ************/

async function showStudentMenuFunc() {
    await inquirer.prompt([
        {
            type:   'list',
            name:   'studentOption',
            message:'Select the student menu option',
            choices:[
                {
                    name:'Show the students in a class',
                    value: preDefinedStudentMenu.showStudent
                },
                {
                    name:'Add the student',
                    value: preDefinedStudentMenu.addStudent
                },
                {
                    name:'Remove the student',
                    value: preDefinedStudentMenu.removeStudent
                },
                {
                    name:'Modify the student',
                    value: preDefinedStudentMenu.modifyStudent
                },
                {
                    name:'Return to main menu',
                    value: preDefinedStudentMenu.returnToMain
                }
            ]
        }
    ]).then((selected) => {
        if(selected.studentOption == preDefinedStudentMenu.showStudent)
        {
            showStudentFunc();
        }
        else if(selected.studentOption == preDefinedStudentMenu.addStudent)
        {
            addStudentFunc();
        }
        else if(selected.studentOption == preDefinedStudentMenu.removeStudent)
        {
            removeStudentFunc();
        }
        else if(selected.studentOption == preDefinedStudentMenu.modifyStudent)
        {
            modifyStudentFunc();
        }
        else
        {
            mainMenuFunc();
        }
    });
};

async function showStudentFunc(){
    await inquirer.prompt([
        {
            type:   'list',
            name:   'classYear',
            message:'Select the year',
            choices: [...new Set(smClasses.map((chose) => chose.yearNo))]
        },
        {
            type:   'list',
            name:   'classNo',
            message:'Select the class',
            choices: (getAns) => { 
                return  smClasses.filter((choice) => choice.yearNo == getAns.classYear ).map((choice) => choice.classNo); 
            } 
        }
    ]).then ((selected) => {
        let classId:any;
        if(selected.classNo.length==1)
        { 
            classId = '0'+ selected.classNo;
        }
        classId = selected.classYear.substring(2,4) +classId;
        const message = smStudents.filter((dataValue) => dataValue.uqIdClassFk == classId);
        if(message.length > 0)
        { console.log(message); }
        else
        { console.log(chalk.bgRedBright('\nNo student/s found.\n')); }
    });

    showStudentMenuFunc();
};

async function addStudentFunc() {

    await inquirer.prompt([
        {
            type:   'input',
            name:   'studentName',
            message:'Enter the student name'
        },
        {
            type:   'list',
            name:   'studentYear',
            message:'Select the year',
            choices: [...new Set(smClasses.map((chose) => chose.yearNo))]
        },
        {
            type:   'list',
            name:   'studentClass',
            message:'Select the class',
            choices: (getAns) => { 
                return  smClasses.filter((choice) => choice.yearNo == getAns.studentYear ).map((choice) => choice.classNo); 
            }
        },
        {
            type:   'confirm',
            name:   'confirm',
            message:'Are you sure that you want to add student data?'
        }
    ]).then ((selected) =>{
        if (selected.confirm == true)
        {
            let newClassId:any = newClassIdFunc(selected.studentClass,selected.studentYear);
            const newObj = { uqIdStudentPk: newClassId.toString(),   name:   selected.studentName, uqIdClassFk: newClassId.toString().substring(0,4)};
            smStudents.push(newObj);
            console.log(newObj);
            console.log(chalk.bgGreenBright('New student is added succesffully.\n'));     
        }
        else
        {
            console.log(chalk.bgRedBright('You have cancelled the confirmation.\n'));
        }
    });
    showStudentMenuFunc();
};

async function removeStudentFunc() {
    if(smStudents.length > 0)
    {
        await inquirer.prompt([
            {
                type:   'list',
                name:   'classYear',
                message:'Select the class year',
                choices: [...new Set(smClasses.map((choice) => choice.yearNo))]
            },
            {
                type:   'list',
                name:   'classNo',
                message: 'Select the class number',
                choices: (getAns) => { 
                    return  smClasses.filter((choice) => choice.yearNo == getAns.classYear ).map((choice) => choice.classNo); 
                } 
            },
            {
                type:   'list',
                name:   'studentList',
                message: 'Select the student',
                choices: (getAns) => {
                    let classID:string = makeClassId(getAns.classNo,getAns.classYear);
                    return smStudents.filter((choice) => choice.uqIdClassFk == classID).map((choice)=> choice.name) 
                }
            },
            {
                type:   'confirm',
                name:   'confirm',
                message:'Are you sure that you want to remove student?'
            }
        ]).then((selected) =>
        {
        
            if (selected.confirm == true)
            {
                let removeClassNo =  smClasses.findIndex((val)=> val.classNo == selected.classNo && val.yearNo == selected.classYear);
                smClasses.splice(removeClassNo,1);
                console.log(chalk.bgGreenBright('\nStudent is removed.\n'));     
            }
            else
            {
                console.log(chalk.bgRedBright('\nYou have cancelled the confirmation.\n'));
            }        
        });
    }
    else
    {
        console.log(chalk.bgRedBright('\nYou have no student to remove.\n'));

    }
    await showStudentMenuFunc();
};

async function modifyStudentFunc() {
    await inquirer.prompt([
        {
            type:   'input',
            name:   'studentRollNo',
            message:'Enter the student roll number',
            validate(value){
               const student = smStudents.find((val)=> val.uqIdStudentPk == value);
               if(student || value == ('back') )
               {
                return true;
               }
               else 
               {
                return (chalk.bgRedBright('Student roll number not exist or Type **back** to return to previous menu.'));
               }
            }
        },
        {
            type:   'confirm',
            name:   'studentConfirm',
            message(value) {
                const student = smStudents.filter((val)=> val.uqIdStudentPk == value.studentRollNo).map((val)=> val.name);
                return ('Do you want to modify this student. ' + chalk.bgBlackBright(student)) ;
            },
            when(oa) {
               return oa.studentRollNo != 'back';
            }  
        },
        {
            type:   'input',
            name:   'studentNewName',
            message:'Enter the student new name',
            validate(value) {
                if(value.length <1)
                {
                    return chalk.bgRedBright('Must enter some character/s');
                }
                else
                {
                    return true;
                }
            }
        }
    ]).then((selected)=>{
        if(selected.studentConfirm == true)
        {
            const  smsIndex = smStudents.findIndex((val) => val.uqIdStudentPk == selected.studentRollNo);
            smStudents[smsIndex].name = selected.studentNewName;
            console.log(smStudents[smsIndex]);
            console.log(chalk.bgGreenBright('\nNew student is modified succesffully.\n'));     
        }
    });
    await showStudentMenuFunc();
};

//------------------------------------------------------------------------------
//MAIN HERE
//------------------------------------------------------------------------------

let appName:string = "Student Management System";
await welcomeFunc(appName);

await mainMenuFunc();