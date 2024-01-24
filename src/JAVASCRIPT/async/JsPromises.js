const p1 = new Promise((resolve, reject)=>{
    setTimeout(()=>{resolve("promise resolved value p1")},[5000])
  })
  const p2 = new Promise((resolve, reject)=>{
    setTimeout(()=>{resolve("promise resolved value p2")},[10000])
  })
  async function getData(){
    const val =await p1;
    console.log("Namastey JS");
    console.log(val);
    const val2 =await p2;
    console.log("Namastey JS 2");
    console.log(val2);
  }
  getData();


// //practise and checked
// const p1 = new Promise((resolve, reject) => {
//     setTimeout(() => resolve({ message: "P1 is resolve" }), 3000)
// })
// const p2 = new Promise((resolve, reject) => {
//     setTimeout(() => resolve({ message: "P2 is resolve" }), 1000)
//     // setTimeout(() => reject({ message: "P2 is reject" }), 1000)
// })
// const p3 = new Promise((resolve, reject) => {
//     // setTimeout(() => resolve({ message: "P3 is resolve" }), 2000)
//     setTimeout(() => reject({ message: "P3 is reject" }), 2000)
// })
// //without catch unCaught error in console,means not handled
// //with catch it will be a caught error
// Promise.all([p1, p2, p3]).then(res=>console.log(res,"15")).catch(err=>console.error(err,"16"));
// Promise.allSettled([p1, p2, p3]).then(res=>console.log(res,"16")).catch(err=>console.error(err,"16"));