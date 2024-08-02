const express = require("express");
const cors = require("cors"); // Importar o pacote cors
const port = 8080;
const taskModel = require("../models/task.model");
const app = express();

app.use(cors());
app.use(express.json());

app.listen(port, () => {
  console.log(`Servidor rodando sem problemas na porta ${port}`);
});

// rota de criação de task
app.post("/tasks", async (req, res) => {
  try {
    const task = await taskModel.create(req.body);
    res.status(201).json(task);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// rota para listar todas as tasks
app.get("/tasks", async (req, res) => {
  try {
    const task = await taskModel.find({});
    res.status(200).json(task);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// rota para listar task por id
app.get("/tasks/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const task = await taskModel.findById(id);
    res.status(200).json(task);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// rota para listar atualizar uma task por id
app.patch("/tasks/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const task = await taskModel.findByIdAndUpdate(id, req.body, { new: true });
    res.status(200).json(task);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// rota para listar deletar uma task por id
app.delete("/tasks/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const task = await taskModel.findByIdAndDelete(id);
    res.status(200).json(task);
  } catch (error) {
    res.status(500).send(error.message);
  }
});