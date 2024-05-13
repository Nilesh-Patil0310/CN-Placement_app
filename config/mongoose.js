// mongodb connection
const mongoose = require("mongoose");
async function db() {
  mongoose.set("strictQuery", true);
  await mongoose.connect(
    "mongodb+srv://Nilesh078:Nilesh078@placement-cell.svk5dx0.mongodb.net/?retryWrites=true&w=majority&appName=Placement-Cell"
  );
  console.log("db connection Successfull !! ");
}
db().catch((error) => console.log("connection not successfull !!"));
