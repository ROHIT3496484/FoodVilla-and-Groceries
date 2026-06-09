# Project Link 🔗
 [https://food-villa-and-groceries.vercel.app/]

# Food Villa 🍴
   - A dynamic and responsive food delivery web application built using ReactJS, showcasing efficient design and functionality for modern web development.
   - Author: **Rohit Rana**

# 🍽️ FoodVilla - Key Features
- 🏠 Home Page
- 🍴 Displays a list of restaurants fetched from Swiggy’s API (proxied via backend)

-🔍 Real-time Search Bar to filter restaurants by name

- ⚡ Shimmer UI (Skeleton Loader) while data is being fetched

- ✅ Responsive grid layout for all screen sizes (Mobile, Tablet, Desktop)

# 🧭 Routing & Navigation
- 🔗 React Router DOM v6 used for page navigation

- 📄 Routes like /, /restaurant/:id, and /about

- 📦 Dynamic Route for individual restaurant menu details

# 🍛 Restaurant Menu Page
- 🍽️ Lists all menu items for a selected restaurant

- 💰 Displays pricing, item details, and availability

- 🎨 Clean and responsive design for the menu layout

# 🛒 Cart Functionality (Redux Toolkit)

- ➕ Add and remove items from cart

- 🔢 Increment/decrement quantity

- 💾 State managed globally using Redux Toolkit slice

- 🧹 Clear cart on checkout or manually

# 🥦 Grocery Store
- 🛒 Dedicated Grocery tab in the navbar

- 🍎 Browse grocery items with images, prices and descriptions

- 🗂️ Filter by category (Fruits & Vegetables, Dairy & Eggs, Staples, Beverages)

- ➕ Add grocery items straight to the cart

# 💳 Checkout & Payment
- 🧾 Cart shows the live order total

- 💳 Dummy payment flow with card form, processing state and success confirmation

# 📬 Contact
- Email: rohitrana349@gmail.com

- Phone: 8476802241



# Technologies Used 🛠️
  - 𝐑𝐞𝐚𝐜𝐭𝐉𝐒: For building the user interface.
  - 𝐏𝐚𝐫𝐜𝐞𝐥: For blazing-fast development and bundling.
  - 𝐓𝐚𝐢𝐥𝐰𝐢𝐧𝐝 𝐂𝐒𝐒: For styling and responsive design.
  - 𝐉𝐚𝐯𝐚𝐒𝐜𝐫𝐢𝐩𝐭 (𝐄𝐒𝟔): Core language for scripting.
  - 𝐀𝐏𝐈𝐬: Integration for fetching real-time data.

# Images 


# RESTAURANT PAGE
![Alt text](https://github.com/heyayush87/Food_Villa/blob/d04f673eb4b2c139fd88e6309ef391da11fa4509/Screenshot%202024-12-10%20193425.png)
![Alt text](https://github.com/heyayush87/Food_Villa/blob/4ba0d08a15c5fda346734cbf9e60460968f981bb/Screenshot%202024-12-10%20193402.png)



# MENU PAGE
  ![Alt text](https://github.com/heyayush87/Food_Villa/blob/693f1c8a83ca390dafc5075139625c79df72fc7b/Screenshot%202024-12-10%20193450.png)

  
  
#  MEU ITEMS
  ![Alt text](https://github.com/heyayush87/Food_Villa/blob/64f48ce45d36493b63d3eda7da039c01d2970bc7/Screenshot%202024-12-10%20193514.png)


# CART
  ![Alt text](https://github.com/heyayush87/Food_Villa/blob/f3cb11698c47161b9691f6773643ec9aa8fe12c7/Screenshot%202024-12-10%20193548.png)

  


 # Installation & Setup 📦

  1. ## Clone the Repository: 
     [https://github.com/ROHIT3496484/FoodVilla-and-Groceries.git/]
      cd FoodVilla-and-Groceries

  2. ## Install Dependencies: Ensure you have Node.js installed. Then run:
    - npm install

  3. ## Start the Development Server:
     - npm start
       
  ## Folder Structure 📁

       Food_Villa/
├── src/ \
│   ├── components/         Reusable React components\
│   ├── pages/              Page-level components\
│   ├── assets/             Images, icons, and other static assets\
│   ├── utils/              Utility functions and helpers\
│   └── App.js              Main App component\
├── public/                 Public files\
├── package.json            Project metadata and dependencies\
├── .gitignore              Files to ignore in Git\
└── README.md               Project documentation\


# Key Components 🧩

 1.𝐍𝐚𝐯𝐛𝐚𝐫: Interactive navigation menu.\
 2.𝐇𝐨𝐦𝐞 𝐏𝐚𝐠𝐞: Displays featured food items with search and filter options.\
 3.𝐅𝐨𝐨𝐝 𝐃𝐞𝐭𝐚𝐢𝐥𝐬: Showcases details of selected food items.\
 4.𝐂𝐚𝐫𝐭: Handles the addition and management of selected food items.\
 5.𝐀𝐏𝐈 𝐈𝐧𝐭𝐞𝐠𝐫𝐚𝐭𝐢𝐨𝐧: Fetches food data dynamically from an external source.\
