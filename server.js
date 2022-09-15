//Import App Express
const { app } = require('./app')

//Import Database - utils
const { db } = require('./Utils/database')

const startServer = async () => {
  try {
    //Authenticate Database Connection
    await db.authenticate()

    //Synced Database Connection
    await db.sync()

    //Set Express Server 
    const PORT = 5000

    app.listen(PORT, () => {
      console.log('!<-Express Server Running->!');
    });
  } catch (err) {
    console.log(err)
  }
};

startServer();