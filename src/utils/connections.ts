import mongoose from "mongoose";

mongoose.connect(
  "mongodb+srv://dev:1234@cluster0.j2wki.mongodb.net/typeGraphqlProject?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);
