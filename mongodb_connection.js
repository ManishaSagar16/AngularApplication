const express = require('express') // importing express
const app = express();
var cors = require('cors'); 
const { MongoClient } = require('mongodb');


const bodyParser = require('body-parser');
const port = process.env.PORT ||3000; // PORT is a environment variable whihc will be set automatically while pushing the app on to a cloud
// else uses 7000 port


app.use(cors());0
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const test = require('assert');
   

it("Connecting to Mongodb", async function() {
    
    async function listDatabases(client) {
        const col = await client.db('test').collection('student_colls');

        var cursor     = await col.find().limit(1).sort({create_date:-1}).toArray();
console.log(cursor);
//console.log(cursor[0]);
console.log(cursor[0].sName)
console.log(cursor[0].sPhoneNumber)




propertiesReader = require('properties-reader');
properties = propertiesReader('/Users/manishasagar/Documents/Protractor_test/properties/application.properties');
 url=properties.get("Url")
 email= properties.get("email")
 email_value= properties.get("email_value") 
 name= properties.get("name")
 name_value= properties.get("name_value") 
 console.log("email is",email_value)


test.equal(cursor[0].sName , email_value, "testing sname")

//test.equal(cursor[1].name, name_value, "testing namevalue")
//displaying all the document records in the collection
//         const items = await col.find({}).toArray();
// console.log(items);
    }
        const uri = "mongodb://admin:admin@cluster0-shard-00-00-udrmi.mongodb.net:27017,cluster0-shard-00-01-udrmi.mongodb.net:27017,cluster0-shard-00-02-udrmi.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority/test";
const client = new MongoClient(uri, { useUnifiedTopology: true });

app.listen(port, () => console.log(`Listening on port ${port}`));

       
        try {
            // Connect to the MongoDB cluster
            await client.connect();
            // Make the appropriate DB calls
//properties file object creation, actual user input values
//1) name - retrieve record of fields 
//2)properties object - fetch all fields from properties file
//3) assert both the actual and retrieved data 
//4) console print
            await listDatabases(client);
           
        } catch (e) {
            console.error(e);
        } finally {
            await client.close();
        }
        

 });