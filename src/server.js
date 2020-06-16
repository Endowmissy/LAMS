
import express from 'express';
const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: false}))

const port = PORT || 5000;

/**app.get('/', (req, res) => {
   res.send('Hello! Welcome to Library Asset Management System(LAMS)');
});*/


// Mongoose options
const options = {
   useNewUrlParser: true,
   useCreateIndex: true,
   useUnifiedTopology: true,
 };
 
 mongoose
   .connect(MONGODB_URL, options)
   .then(() => console.log(`Database connection established`))
   .catch((err) => console.error(`There was an error connecting to database, the err is ${err}`));

app.listen(port, () => {
   console.log(`Listening on port ${port}`)
});