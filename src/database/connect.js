const mongoose = require("mongoose");

const connectToDataBase = async () => {
  await mongoose
    .connect(
      `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@todocorddb.epmvw6v.mongodb.net/?retryWrites=true&w=majority&appName=todocorddb`
    )
    .then(() => {
      console.log("Conexão com o banco de dados efetuada com sucesso!");
    })
    .catch((error) => {
      console.log(`Houve um erro na conexão com o banco de dados ${error}`);
    });
};


module.exports = connectToDataBase;