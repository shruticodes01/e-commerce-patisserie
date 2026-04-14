import fs from "node:fs/promises";
import express, { Request, Response, NextFunction } from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = 5000;

// Middleware
app.use(express.json());
app.use(cors());
app.use(express.static("public"));

// CORS
app.use((req: Request, res: Response, next: NextFunction) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
});

// 🧁 BAKERY ROUTES

// 1. GET products (customer shop)
app.get("/api/desserts", async (req: Request, res: Response) => {
  try {
    const desserts = await fs.readFile("./data/desserts.json", "utf8");
    res.json(JSON.parse(desserts));
  } catch {
    res.status(500).json({ message: "Desserts not found" });
  }
});
// app.get("/api/products", async (req: Request, res: Response) => {
//   try {
//     const products = await fs.readFile("./data/products.json", "utf8");
//     res.json(JSON.parse(products));
//   } catch {
//     res.status(500).json({ message: "Products not found" });
//   }
// });

// 2. POST orders (customer checkout)
app.post("/api/orders", async (req: Request, res: Response) => {
  const orderData = req.body.order;

  // Customer validation
  if (
    orderData === null ||
    orderData.items === null ||
    orderData.items.length === 0
  ) {
    return res.status(400).json({ message: "Missing data." });
  }

  if (
    orderData.customer.email === null ||
    !orderData.customer.email.includes("@") ||
    orderData.customer.name === null ||
    orderData.customer.name.trim() === "" ||
    orderData.customer.street === null ||
    orderData.customer.street.trim() === "" ||
    orderData.customer["postal-code"] === null ||
    orderData.customer["postal-code"].trim() === "" ||
    orderData.customer.city === null ||
    orderData.customer.city.trim() === ""
  ) {
    return res.status(400).json({
      message: "Missing data: Email, name, street, postal code or city.",
    });
  }

  // Save order
  const newOrder = {
    ...orderData,
    id: (Math.random() * 1000).toString(),
    orderDate: new Date().toISOString(),
  };

  try {
    const orders = await fs.readFile("./data/orders.json", "utf8");
    const allOrders = JSON.parse(orders);
    allOrders.push(newOrder);
    await fs.writeFile(
      "./data/orders.json",
      JSON.stringify(allOrders, null, 2),
    );
    res.status(201).json({ message: "Order created!", orderId: newOrder.id });
  } catch {
    res.status(500).json({ message: "Failed to save order" });
  }
});

// 3. GET orders (admin view all orders)
app.get("/api/orders", async (req: Request, res: Response) => {
  try {
    const orders = await fs.readFile("./data/orders.json", "utf8");
    res.json(JSON.parse(orders));
  } catch {
    res.status(500).json({ message: "Orders not found" });
  }
});

// 404 handler
app.use((req: Request, res: Response) => {
  if (req.method === "OPTIONS") {
    return res.sendStatus(200);
  }
  res.status(404).json({ message: "Route not found" });
});

app.listen(PORT, () => {
  console.log(`🧁 Patisserie API: http://localhost:${PORT}`);
});

// const app = express();
// const PORT = 5000;

// app.use(express.json());
// app.use(cors());
// app.use(express.static("public"));

// // Manual CORS
// app.use((req: Request, res: Response, next: NextFunction) => {
//   res.setHeader("Access-Control-Allow-Origin", "*");
//   res.setHeader("Access-Control-Allow-Methods", "GET, POST");
//   res.setHeader("Access-Control-Allow-Headers", "Content-Type");
//   next();
// });

// // Desserts
// app.get("/api/desserts", async (req: Request, res: Response) => {
//   try {
//     const desserts = await fs.readFile("./data/desserts.json", "utf8");
//     res.json(JSON.parse(desserts));
//   } catch {
//     res.status(500).json({ message: "Desserts not found" });
//   }
// });

// // Orders (validation logic)
// app.post("/api/orders", async (req: Request, res: Response) => {
//   const orderData = req.body.order;

//   // validation
//   if (
//     orderData === null ||
//     orderData.items === null ||
//     orderData.items.length === 0
//   ) {
//     return res.status(400).json({ message: "Missing data." });
//   }

//   if (
//     orderData.customer.email === null ||
//     !orderData.customer.email.includes("@") ||
//     orderData.customer.name === null ||
//     orderData.customer.name.trim() === "" ||
//     orderData.customer.street === null ||
//     orderData.customer.street.trim() === "" ||
//     orderData.customer["postal-code"] === null ||
//     orderData.customer["postal-code"].trim() === "" ||
//     orderData.customer.city === null ||
//     orderData.customer.city.trim() === ""
//   ) {
//     return res.status(400).json({
//       message:
//         "Missing data: Email, name, street, postal code or city is missing.",
//     });
//   }

//   // order saving logic
//   const newOrder = {
//     ...orderData,
//     id: (Math.random() * 1000).toString(),
//   };

//   try {
//     const orders = await fs.readFile("./data/orders.json", "utf8");
//     const allOrders = JSON.parse(orders);
//     allOrders.push(newOrder);
//     await fs.writeFile("./data/orders.json", JSON.stringify(allOrders));
//     res.status(201).json({ message: "Order created!" });
//   } catch {
//     res.status(500).json({ message: "Failed to save order" });
//   }
// });

// // 404 handler
// app.use((req: Request, res: Response) => {
//   if (req.method === "OPTIONS") {
//     return res.sendStatus(200);
//   }
//   res.status(404).json({ message: "Not found" });
// });

// app.listen(PORT, () => {
//   console.log(`Bakery API on http://localhost:${PORT}`);
// });
