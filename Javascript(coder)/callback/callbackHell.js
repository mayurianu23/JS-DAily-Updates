//callback hell problem qwich is nested callbac k 
function getData(dataId,getNextData){
  setTimeout(()=>{
    console.log("data" ,dataId);
    if(getNextData){
        getNextData();
    }
  },2000)
}
k

getData(1,()=>{
    console.log("gettind data 2..");
    getData(2,()=>{
           console.log("gettind data 3..");
                getData(3,()=>{
               console.log("gettind data 4 ..");
                 getData(4);
    });
    });
});