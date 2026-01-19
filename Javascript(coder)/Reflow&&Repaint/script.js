//code 1
//performance.now()
 const t3 = performance.now()
for(let i=1; i<=100;i++){
    let para = document.createElement('p');
    para.textContent = "This is Para" + i;
    document.body.appendChild(para);
}
const t4 = performance.now();
console.log("total time talken by code 1"+(t4-t3));



//code 2
const t1 = performance.now()
let  mydiv = document.createElement('div');
for(let i=1; i<=100; i++){
        let para = document.createElement('p');
    para.textContent = "This is Para" + i;
    mydiv.appendChild(para);
}
document.body.appendChild(mydiv);

const t2 = performance.now();

 console.log("total time talken by code 2"+(t2-t1));


