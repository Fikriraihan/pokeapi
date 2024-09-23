import express from "express";
import cors from "cors";
import pokemonRoutes from "./routes/pokemon";

const app = express();
const port = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());

app.use("/api/pokemon", pokemonRoutes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
