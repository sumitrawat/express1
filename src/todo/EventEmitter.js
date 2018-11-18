const EventEmitter=require('events');
class CustomEmitter extends EventEmitter{}

const em1=new CustomEmitter();

em1.on('test2',()=>{
    if(this===CustomEmitter){
        console.log(`This is instance: ${this}`);
    }
    else{
        console.log(`dont know the instance ${this}`);
    }
});

for(let i=0;i<100;i++){
    em1.emit('test'+i);
}