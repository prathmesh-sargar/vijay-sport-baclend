# Vijay Sport Backend (MERN - Product CRUD API)

This is a production-ready and beginner-friendly backend for your Vijay Sport e-commerce app.  
It provides complete Product CRUD operations so your frontend can create, read, update, and delete products easily.

---

## 🚀 Features

- Create a new product
- Get all products (with search, category filter, price filter, pagination)
- Get single product by ID
- Update product by ID
- Delete product by ID
- Health check endpoint
- Centralized error handling
- MongoDB schema validation
- API tests using Jest + Supertest + Mongo Memory Server

---

## 🧱 Tech Stack

- Node.js
- Express.js
- MongoDB + Mongoose
- Jest + Supertest (testing)

---

## 📁 Folder Structure

```bash
vijay-sport-baclend/
├── src/
│   ├── config/
│   │   └── db.js                 # MongoDB connection
│   ├── controllers/
│   │   └── productController.js  # Product business logic
│   ├── middleware/
│   │   └── errorHandler.js       # Global API error handling
│   ├── models/
│   │   └── Product.js            # Product schema/model
│   ├── routes/
│   │   └── productRoutes.js      # Product routes
│   ├── tests/
│   │   └── product.test.js       # CRUD test cases
│   ├── app.js                    # Express app configuration
│   └── server.js                 # App entry point
├── .env.example                  # Environment template
├── package.json
└── README.md
```

---

## ⚙️ Setup Instructions

### 1) Install dependencies

```bash
npm install
```

### 2) Configure environment variables

Create `.env` file from `.env.example`:

```bash
cp .env.example .env
```

Update values as needed:

```env
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/vijay_sport
```

### 3) Run server (development)

```bash
npm run dev
```

### 4) Run server (production)

```bash
npm start
```

---

## 🔌 API Endpoints

Base URL: `http://localhost:5000/api`

### Health

- `GET /health`

### Product CRUD

- `POST /products` → Create product
- `GET /products` → Get all products
- `GET /products/:id` → Get single product
- `PUT /products/:id` → Update product
- `DELETE /products/:id` → Delete product

---

## 🧪 How to test API quickly (Postman / Thunder Client)

### Create Product (POST `/api/products`)

```json
{
  "name": "Football Shoes X1",
  "description": "Comfortable and durable football shoes for all-weather training",
  "price": 2499,
  "brand": "Vijay Sport",
  "category": "Football",
  "stock": 30,
  "imageUrl": "https://example.com/shoes.png"
}
```

### Get All Products with filters

- `/api/products?search=shoe`
- `/api/products?category=Football`
- `/api/products?minPrice=500&maxPrice=3000`
- `/api/products?page=1&limit=10`

---

## ✅ Automated Testing

Run:

```bash
npm test
```

This runs CRUD integration tests against an in-memory MongoDB.

---

## 🔄 Backend Workflow (Simple)

1. `server.js` loads env and connects MongoDB.
2. `app.js` configures middlewares and routes.
3. Request reaches `productRoutes.js`.
4. Route calls controller in `productController.js`.
5. Controller performs DB operation through `Product` model.
6. Response is sent to frontend.
7. Errors go to `errorHandler.js`.

---

## 📌 Production Notes

- Add authentication/authorization before exposing admin routes publicly.
- Add request rate limiting and helmet for security hardening.
- Add logging and monitoring (Winston + cloud logs).
- Use managed MongoDB (MongoDB Atlas) and secure credentials.
- Validate API input further if business rules grow.

---

Your frontend team can now directly integrate these endpoints for full Product CRUD operations.
