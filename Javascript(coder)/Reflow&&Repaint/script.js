//code 1
const t1 = performance.now();
for(let i=1; i<=100;i++){
    let para = document.createElement('p');
    para.textContent = "This is Para" + i;
    document.body.appendChild(para);
}
const t2 = performance.now();
console.log("total time talken by code 1"+(t2-t1));
