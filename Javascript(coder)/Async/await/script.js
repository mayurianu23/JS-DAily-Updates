// async function getdata() {
//     setTimeout(function(){
//           console.log("hey");
          
//     },2000);
// } 
// getdata();


//Fetch API

async function getData() {
    //Get request  = async
    let res = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    
     //parse json - async
     let data = await res.json();
     console.log(data);
     
}
getData();