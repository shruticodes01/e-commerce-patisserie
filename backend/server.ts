import fs from "node:fs/promises";
import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = 5000;

// Middleware
app.use(express.json());
app.use(express.static("public"));

// CORS headers
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  if (req.method === "OPTIONS") {
    return res.sendStatus(200);
  }
  next();
});

// 1. GET desserts (customer shop)
app.get("/api/desserts", async (req, res) => {
  try {
    const desserts = await fs.readFile("./data/desserts.json", "utf8");
    res.json(JSON.parse(desserts));
  } catch (error) {
    console.error("Error reading desserts.json:", error);
    res.status(500).json({ message: "Desserts not found" });
  }
});

// 2. POST orders (customer checkout)
app.post("/api/orders", async (req, res) => {
  console.log("✅ RUNNING NO-TRIM VALIDATION");
  console.log("→ req.body:", req.body);

  const orderData = req.body?.order;

  if (!orderData || !orderData.items) {
    return res.status(400).json({ message: "Missing order data." });
  }

  if (!Array.isArray(orderData.items) || orderData.items.length === 0) {
    return res.status(400).json({ message: "No items in order." });
  }

  const customer = orderData.customer;

  if (
    !customer ||
    !customer.email ||
    !customer.fullName ||
    !customer.street ||
    !customer["postal-code"] ||
    !customer.city
  ) {
    return res.status(400).json({ message: "Missing customer data." });
  }

  const newOrder = {
    ...orderData,
    id: (Math.random() * 1000).toString(),
    orderDate: new Date().toISOString(),
  };

  let allOrders: unknown[] = [];

  try {
    const orders = await fs.readFile("./data/orders.json", "utf8");
    allOrders = JSON.parse(orders);
  } catch (error) {
    console.error("Error reading orders.json:", error);
    allOrders = [];
  }

  allOrders.push(newOrder);

  try {
    await fs.writeFile(
      "./data/orders.json",
      JSON.stringify(allOrders, null, 2),
    );
    console.log("✅ Order written to orders.json:", newOrder.id);
    res.status(201).json({ message: "Order created!", orderId: newOrder.id });
  } catch (error) {
    console.error("Error writing orders.json:", error);
    res.status(500).json({ message: "Failed to save order" });
  }
});

// 404 handler
app.use((req, res) => {
  if (req.method === "OPTIONS") {
    return res.sendStatus(200);
  }
  res.status(404).json({ message: "Route not found" });
});

app.listen(PORT, () => {
  console.log(`🧁 Patisserie API: http://localhost:${PORT}`);
});
