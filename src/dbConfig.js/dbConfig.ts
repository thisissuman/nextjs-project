import mongoose from "mongoose";

export async function connect() {
  try {
    mongoose.connect(process.env.MONGO_URI!);
    const connection = mongoose.connection;
    connection.on("connected", () => {
      console.log("Mongo DB connected susscessfully");
    });
    connection.on("error", (err) => {
      console.log(
        "Mongo DB connectione error, makue sure its running successfully" + err
      );
      process.exit();
    });
  } catch (error) {
    console.log("Something went wrong");
    console.log(error);
  }
}
