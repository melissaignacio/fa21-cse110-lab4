
setInterval(new_time,1000);

function new_time(){
    let d = new Date();
    let time = d.toLocaleTimeString();
    console.log(time);
}