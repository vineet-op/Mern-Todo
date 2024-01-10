const mongoose = require("mongoose");

// mongodb+srv://kirags123:8qPEa8KTKBEh2bss@cluster0.f3qlbuo.mongodb.net/todos
// .env
//mongodb+srv://massleo100:OdynKdU7uyrsZXxj@cluster0.8kfxqqp.mongodb.net/

mongoose.connect(
  "mongodb+srv://massleo100:OdynKdU7uyrsZXxj@cluster0.8kfxqqp.mongodb.net/"
);
const todoSchema = mongoose.Schema({
  title: String,
  description: String,
  completed: Boolean,
});

const todo = mongoose.model("todos", todoSchema);

module.exports = {
  todo,
};
