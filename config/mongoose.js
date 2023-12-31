// mongodb connection
const mongoose = require("mongoose");
async function db() {
  mongoose.set("strictQuery", true);
  await mongoose.connect(
    "mongodb+srv://ernileshpatil098:rQHVVwUaZS7BPi1Y@cluster0.omo5kfv.mongodb.net/placement-cell?retryWrites=true&w=majority"
  );
  console.log("connection Successfull !! ");
}
db().catch((error) => console.log("connection not successfull !!"));
