import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import jwt from 'jsonwebtoken';


const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false}));
app.use(express.json());

dotenv.config();
const port = process.env.PORT || 5000;

/**app.get('/', (req, res) => {
   res.send('Hello! Welcome to Library Asset Management System(LAMS)');
});*/

//Register a User

app.post('/signin', verifyToken, (req, res)=>{
   //Mock User
   const user = {
      id: 0,
      name: 'Lihin',
      email: 'user@user.com'
   };

   jwt.sign(user, 'secretkey', (err, token)=>{
      res.json({ token });
   });
   jwt.verify(req.token, 'secretkey', (err, authData)=>{
      if(err){
         res.sendStatus(403)
      } else{
         message: 'Signed up successfully!', authData
      }
   })
});

const verifyToken=(req, res, next)=>{
   const bearerHeader = req.headers['authorization'];
   if(typeof bearerHeader !== 'undefined'){
      const bearer = bearerHeader.split(' ');
      const bearerToken = bearer[1]
      req.token = bearerToken;
      next();
   }else {
      res.sendStatus(403)
   };
};

// Mongoose options
const options = {
   useNewUrlParser: true,
   useCreateIndex: true,
   useUnifiedTopology: true,
};
 
 mongoose
   .connect(process.env.MONGODB_URL, options)
   .then(() => console.log(`Database connection established`))
   .catch((err) => console.error(`There was an error connecting to database, the err is ${err}`));

app.listen(port, () => {
   console.log(`Listening on port ${port}`)
});
//handle promise rejection


