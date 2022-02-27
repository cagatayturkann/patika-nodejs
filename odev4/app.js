const fs =require('fs');
//Creating json file and adding data
// fs.writeFile('employees.json','{"name": "Employee 1 Name", "salary": 2000}',(err)=>{
//     if(err) console.log('Failed!');
//     console.log('File Created!');
// })

//Reading the json file
// fs.readFile('employees.json','UTF8',(err,data)=>{
//     if(err) console.log('Failed!');
//     console.log(data);
// });

//Updating json file 
// fs.appendFile('employees.json','\n{"name": "John Doe", "salary": 33000}',(err)=>{
//     if(err) console.log('Failed!')
//     console.log('File Updated!')
// })

//Deleting json file
fs.unlink('employees.json',(err)=>{
    if(err) console.log('Failed!')
    console.log('File Deleted!')
})