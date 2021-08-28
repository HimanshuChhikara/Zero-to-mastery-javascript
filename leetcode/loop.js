function getName() {
    var currentTimeInSeconds=Math.floor(Date.now()/1000);
    // console.log(currentTimeInSeconds);
    // console.time(time1);
    let a = 10;
    let b = 10;

    return a + ' ' + b;
    // var currentTimeInSeconds=Math.floor(Date.now()/1000);

    console.log(`Execution TIme is ==  ${start} - ${end}`);
    
}

console.timeStamp(getName() + ' - ' + 'Time');