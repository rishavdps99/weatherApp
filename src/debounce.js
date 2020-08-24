// debouncing in js
let counter=0;
const getData=()=>{
    // calls an api and gets data
    console.log("fetching data",counter++);
}



const dosomemagic=function(fn,delay){
    let timer;
    return function(){
   let context=this,
   args=arguments;
   clearTimeout(timer);
   timer= setTimeout(()=>{
    fn.apply(context,args);
   },delay)
    } 
}  


const betterfunction=dosomemagic(getData,300);