

const { send , handle , listen } = require('native-msg');



//  Handle Incoming Messages

handle((msg) => {
  if(msg === 'Bake the cakes!')
    send(`The cakes have been baked!`);
});


//  Start Listening to STDIN

listen();
