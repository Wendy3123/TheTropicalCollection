# The Tropical Collection

Official Full Stack E-commerce Website for thetropicalcollection.com

See it in action at https://www.placeholder.com

Built by Wendy Wang, Amina Olu and Rivka Weingarten

## Features

- Full featured shopping cart
- Top products carousel
- Product pagination
- Product search feature
- User profile with orders
- Admin product management
- Admin user management
- Admin Order details page
- Mark orders as delivered option
- Database seeder (products & users)

### API (http://localhost:5001/api)

| Method | Path          | Purpose               |
| ------ | ------------- | --------------------- |
| GET    | /products     | Products page         |
| GET    | /products/:id | Specific Product page |
| GET    | /users        | Users page            |
| GET    | /users/:id    | Specific Users page   |

### App (http://localhost:3000)

| Path           | Component               | Purpose                                     |
| -------------- | ----------------------- | ------------------------------------------- |
| /              | `HomeScreen.js`         | Home page                                   |
| /products      | `ProductScreen.js`      | All Products page                           |
| /products/:id  | `EachProductScreen .js` | Specific Product page                       |
| /products/new  | `AddNew .js`            | Add New Products page                       |
| /products/edit | `EditProduct.js`        | Edit A Product page                         |
| /cart          | `CartScreen.js`         | Cart Screen page (where products are added) |
| /login         | `LoginScreen`           | Log-In page                                 |
| /signup        | `SignUpScreen.js`       | Sign-Up page                                |
| /admin         | `AdminScreen.js`        | Administrator page                          |
| /payment       | `CreditCard.js`         | Payment page                                |
| /invoice       | `InvoiceScreen.js`      | Invoice page                                |

## References

- https://react-bootstrap.netlify.app/docs/components/cards/
- https://redux-toolkit.js.org/rtk-query/overview
- https://stackoverflow.com/questions/59174763how-to-add-product-to-shopping-cart-with-nodejs-express-and-mongoose
