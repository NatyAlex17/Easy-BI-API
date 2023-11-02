# 🧠 BI Backend API

A lightweight and opinionated **Express.js API** that powers the BI dashboard frontend by delivering structured, chart-ready data and performing backend data transformation to minimize complexity on the frontend.

---

![Node.js](https://img.shields.io/badge/Node.js-18.x-339933?logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-4.18.2-black?logo=express&logoColor=white)
![CORS Enabled](https://img.shields.io/badge/CORS-enabled-blue)
![dotenv](https://img.shields.io/badge/dotenv-env%20config-8DD6F9)
![Deployable](https://img.shields.io/badge/Deploy-Railway-0B0D0E?logo=vercel&logoColor=white)

---

## 📖 About

This backend acts as the data layer for a dynamic BI dashboard system. It serves well-structured JSON responses tailored for charting libraries (like Recharts) and supports light data massaging operations—such as grouping, sorting, aggregation, and flattening—to ensure that the frontend can focus on rendering.

It’s designed for speed, simplicity, and alignment with UI layout expectations.

---

## 🔧 Core Features

- 🧩 **Chart-Ready Data**  
  Returns chart-specific data formats: line, bar, pie, tables, etc.

- 🧹 **Data Massaging Services**  
  Includes utilities to normalize and reshape datasets (e.g. flattening, aggregations, grouping by key).

- 🌐 **CORS-Enabled API**  
  Built-in CORS support allows integration with any frontend domain.

- ⚙️ **Configurable via .env**  
  Use `dotenv` for secure and environment-specific setup.

---

## 🛠️ Recommended Packages

While keeping dependencies lean, you may benefit from adding:

| Package        | Purpose                                         |
|----------------|-------------------------------------------------|
| `lodash`       | Functional utilities for manipulating objects and arrays (e.g., `groupBy`, `uniq`, etc.) |
| `joi` or `zod` | Input validation for request params or filters  |
| `morgan`       | HTTP request logging during development         |
| `helmet`       | Adds basic security headers to Express responses |
| `compression`  | Gzip response compression                       |
| `express-rate-limit` | Prevents API abuse or overuse             |

---

## ⚙️ Tech Stack

- **Runtime**: Node.js
- **Server**: Express.js
- **Config**: dotenv
- **Security**: CORS + optional Helmet
- **Utilities**: Lodash (optional), custom transformers

---

## 🚀 Getting Started

```bash
git clone https://github.com/yourusername/bi-backend.git
cd bi-backend

# Install dependencies
npm install

# Copy and configure environment variables
cp .env.example .env

# Run the server
npm start
