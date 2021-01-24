const express = require ('express');

const storage = require ('node-persist');

const cors = require ('cors');

const bodyParser = require('body-parser');

// const registrations = require('./registrations.json');

(async()=> {

    await storage.init({dir:'./data'});

//     for (let r of registrations) {

//         let x = r ;

//         await storage.setItem(`registration ${r.plate_number}` ,r);
//     }



 //})();

const server = express();

server.use(cors());
server.use(express.json());
server.use(bodyParser.json());


// GET handler to get the registrations array
server.get('/registrations', async (request, response) => {
    let registrations = await storage.valuesWithKeyMatch(/registration/);
    response.json(registrations)
});


server.listen(3000, () => {
    console.log(`The server has started listening on: http://localhost:3000/registrations`);
});


 })();