/*
    Copyright (c) 2021 JDK.FHWS@gmail.com
*/


const { runtime } = chrome;

const port = runtime.connectNative('cakemakers.editor');

const { onMessage , onDisconnect } = port;


/*
    Incoming Msg From Port
*/

onMessage.addListener(({ type , data },...args) => {

  printErrors();

  if([ 'log' , 'warn' , 'error' ].includes(type))
    console[type](...data);
  else
    console.log(type ?? '',data);
});


/*
    Port Disconnects
*/

onDisconnect.addListener(() => {

  printErrors();

  log(`Port Disconnected.`);

});



// Send Test Msg

console.log('Bake the cakes!')
send('Bake the cakes!');


/*
    Send Wrapper
*/

function send(...args){
  port.postMessage({
    data: args
  });
}


/*
    Output Errors
*/

function printErrors(){

  const msg = runtime.lastError?.message;

  if(msg)
    log(msg);
}


/*
    Log
*/

function log(...args){
  console.log(...args);
}
