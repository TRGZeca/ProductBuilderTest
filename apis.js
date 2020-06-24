const axios = require('axios');
const toCSV = require('json-2-csv');


const getApis = async () => {

    
    try{
        const response = await axios.get('https://api.publicapis.org/entries'); 
        const data = await response.data;
        
        data.entries.forEach(element => {
            toCSV.json2csv(element,(err,csv)=>{
                if(err) console.log(err);

                console.log(csv);
            })
        });
    }
    catch(err){console.log(err)}
}


getApis();