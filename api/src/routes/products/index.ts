import { Router } from "express";

//products endpoint
const router = Router();
//Its nothing but a way to group multiple endpoints of similar type together

router.get("/", (req, res) => {
  res.send("List of Products...");
});

router.get("/:id", (req, res) => {
  console.log("Request", req.params);
  res.send("A Product");
});

router.post("/", (req, res) => {
  res.send("New product created !");
});

export default router;
