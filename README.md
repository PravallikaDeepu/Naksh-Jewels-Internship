# 🛒 Geer Intern Assignment

## 📄 Project Info
- **Role**: Full Stack Web Development Intern  
- **Project**: E-commerce Platform inspired by [Geer.in](https://geer.in)  
- **Goal**: Build a responsive product listing page and backend APIs for product management  

---

## 📁 Folder Structure
geer-intern-assignment/
├── frontend/ → Next.js app (product listing page, routing, product detail)
│ ├── pages/ → Next.js pages directory
│ ├── components/ → Reusable UI components (optional)
│ └── public/ → Static files
└── backend/ → Node.js + Express server (only if using external backend)

---

## 🔧 Tech Stack Used
- **Frontend**: Next.js (React)
- **Routing**: react-router-dom
- **HTTP Requests**: axios
- **Backend**:
  - Option A: Next.js API Routes
  - Option B: Node.js + Express
- **Styling**: CSS / Bootstrap
- **Data Store**: In-memory array or local JSON file (no database)

---

## 🔹 Task 1 – Frontend (Product Page)
- ✅ Built using **Next.js**
- ✅ `/products` page created
- ✅ Displays for each product:
  - Product Image  
  - Product Name  
  - Product Price  
- ✅ Responsive layout (mobile-friendly)
- ✅ Data fetched from backend API
- ✅ UI styled using Bootstrap
- ✅ **Hover effect implemented** on product cards
- ✅ Clicking on the product image opens the **single product page**
- ✅ Single product page includes:
  - 🛒 Add to Cart button  
  - 🏠 Go to Home button (navigates to /products)  
  - 🗑️ Delete button (removes product)

### 🟡 Bonus Features (Optional)
- 🔍 Search / Filter box (e.g., by name or category)
- 📄 Single product page at `/products/[id]` showing detailed product view

---

## 🔹 Task 2 – Backend (API to Manage Products)

### Option A – Next.js API Routes (`/pages/api/products`)
- `GET /api/products` → Returns list of products  
- `POST /api/products` → Adds a new product (name, price, imageUrl)  
- `DELETE /api/products/:id` → Deletes product by ID  

### Option B – Node.js + Express (`/backend` folder)
- `GET /api/products` → Returns product list  
- `POST /api/products` → Adds a new product  
- `DELETE /api/products/:id` → Deletes product by ID  
- Uses in-memory array or local JSON file



---

## 🚀 How to Run the Project

### 🖥️ Frontend
```bash
cd frontend
npm install
npm run dev
Visit: http://localhost:3000/

🖥️ Backend (If using Express)
bash
Copy
Edit
cd backend
npm install
node server.js
API available at: http://localhost:8070/api/products



```
## 🌐 Deployed Links
- **Frontend Live URL**: [https://naksh-jewels-frontend.onrender.com](https://naksh-jewels-frontend.onrender.com)
- **Backend API Base URL**: [https://naksh-jewels-internship-1.onrender.com](https://naksh-jewels-internship-1.onrender.com)
---

## ⚠️ Important Note

- After clicking on a product or navigating to a new page, if the route does not load immediately, **please refresh the page once**.
- This issue occurs because platforms like **Render** may not support **client-side routing** (e.g., `react-router-dom` or Next.js dynamic routes) on the first direct load of nested URLs.
- Once refreshed, the navigation and routing will work as expected.

---
