

const { runtime } = chrome;

const port = runtime
    .connectNative('cakemakers.editor');

const { onMessage , onDisconnect } = port;


const { log } = console;


/*
    Incoming Msg From Port
*/

onMessage.addListener(({ type , data }, ... args ) => {

    printErrors();

    if([ 'log' , 'warn' , 'error' ].includes(type)){
        console[type](...data);
        return;
    }

    log(type ?? '',data);
});


onDisconnect.addListener(() => {

    printErrors();

    log(`Port Disconnected.`);
});



//  Send Test Msg

log('Bake the cakes!')
send('Bake the cakes!');


function send ( ... data ){
    port.postMessage({ data });
}


function printErrors(){

    const msg = runtime.lastError?.message;

    if(msg)
        log(msg);
}
