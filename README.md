# The Roy Store – React Frontend Clone

A modern e-commerce frontend built using React, Redux Toolkit, Material UI (MUI), and Tailwind CSS.  
The application fetches product-style images from the Pexels Stock Image API.

---

## Installation and Setup

### 1. Clone the repository

```bash
git clone https://github.com/work-Himanshu/e-commerce-web
cd souled-store-clone
```

### 2. Install dependencies

```bash
npm install
```

### 3. Create the environment file

Create a `.env` file in the root:

```bash
touch .env
```

Add the following inside:

```
VITE_PEXELS_API_KEY=your_pexels_api_key
```

Get your API key from:  
https://www.pexels.com/api/

### 4. Run the development server

```bash
npm run dev
```

---

## Features

- Responsive UI
- Redux Toolkit state management
- MUI + Tailwind hybrid styling
- Search using Pexels API
- Category-based product browsing
- Product details page
- Clean modern folder structure

---

## Example Code

### API Client

```javascript
import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://api.pexels.com/v1",
  headers: {
    Authorization: import.meta.env.VITE_PEXELS_API_KEY,
  },
});

export const fetchProducts = async (query) => {
  const response = await apiClient.get(`/search?query=${query}&per_page=30`);
  return response.data.photos;
};
```

### Redux Slice

```javascript
import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
  name: "products",
  initialState: {
    list: [],
    loading: false,
  },
  reducers: {
    setProducts: (state, action) => {
      state.list = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const { setProducts, setLoading } = productSlice.actions;
export default productSlice.reducer;
```

---

## Screenshots

These are a few Images of the App


[Home Page](Home.png)
[SideBar](SideBar.png)
[Cart](Cart.png)
[Catalog](Catalog.png)
[Product Detail](ProductDetail.png)
[Search](Search.png)


---

## Future Improvements

- Infinite scroll
- Cart system
- Authentication
- Backend integration

---

