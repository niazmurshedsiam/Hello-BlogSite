const express = require('express');
const app = express()
const port = 5000;
const cors=require('cors')
const objectId = require('mongodb').ObjectID


require('dotenv').config()
app.use(cors())
app.use(express.json())

const { MongoClient } = require('mongodb');
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.ez7qy.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });


client.connect(err => {

    const blogCollection = client.db("HelloSite").collection("services");
    console.log(err);

    app.post('/addBlog',(req,res)=>{

        blogCollection.insertOne(req.body)
        .then((result)=>{
            console.log(result.insertedCount);
            if(result){
                res.send(result.insertedCount >0)
            }
        })

    })

     app.get('/blogsAll',(req,res)=>{

        blogCollection.find({})
        .toArray((err,documents)=>{
            res.send(documents)
        })
    })
   
    app.get('/blogs',(req,res)=>{

        const search = req.query.search;

        blogCollection.find({title:{$regex:search}})
        .toArray((err,documents)=>{
            res.send(documents)        })
    })

   

    app.delete('/delete/:id',(req,res)=>{

        console.log(req.params.id);
        blogCollection.deleteOne({_id:objectId(req.params.id)})

        .then( (result)=>{
            console.log(result);
            if(result){
                res.send(result.deletedCount > 0)
            }
        })
        
    })

});



app.get('/', (req, res) => {

    res.send("hello site")
})

app.listen(process.env.PORT || port )





