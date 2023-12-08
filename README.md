# The Tropical Collection

Official Full Stack E-commerce Website for thetropicalcollection.com

See it in action at https://www.placeholder.com

Built by Wendy Wang, Amina Oluwo and Rivka Weingarten

## Features

- Full featured shopping cart
- Product pagination
- User profile with orders
- Admin product management
- Database seeder (products & users)

### API (http://localhost:5001/api)

| Method | Path                         | Purpose               |
| ------ | -----------------------------| --------------------- |
| GET    | /products                    | Products page         |
| GET    | /products/:id                | Specific Product page |
| POST   | /products/                   | Add Product           |
| PUT    | /products/:id                | Edit specific product |
| DELETE | /products/:id                | Delete a product      |
| GET    | /users                       | Users page            |
| GET    | /users/:id                   | Specific Users page   |
| POST   | /users/:id/cart/:productId   | Checkout cart         |
| POST   | /users                       | Add User              |
| POST   | /authentication              | auth email  login     |
| GET    | /authentication/profile      | get user  with auth   |
| GET    | /cart                        | get user's cart info  |
| PUT    | /cart/edit                   | edit cart             |
| DELETE | /cart/:id                    | delete cart item      |
| DELETE | /cart/                       | delete user cart items|



### App (http://localhost:3000)

| Path           | Component               | Purpose                                     |
| -------------- | ----------------------- | ------------------------------------------- |
| /              | `HomeScreen.js`         | Home page                                   |
| /products      | `ProductScreen.js`      | All Products page                           |
| /products/:id  | `EachProductScreen.js`  | Specific Product page                       |
| /products/new  | `AddNew .js`            | Add New Products page                       |
| /products/edit | `EditProduct.js`        | Edit A Product page                         |
| /cart          | `CartScreen.js`         | Cart Screen page (where products are added) |
| /login         | `LoginScreen`           | Log-In page                                 |
| /signup        | `SignUpScreen.js`       | Sign-Up page                                |
| /admin         | `AdminScreen.js`        | Administrator page                          |
| /payment       | `CreditCard.js`         | Payment page                                |
| /invoice       | `InvoiceScreen.js`      | Invoice page                                |
| /checkout/:id  | `CheckoutAddress.js`    | Checkout Page                               |
|  "*"           | `ErrorScreen.js`        | Error Page                                  |

## References

- https://react-bootstrap.netlify.app/docs/components/cards/
- https://stackoverflow.com/questions/59174763how-to-add-product-to-shopping-cart-with-nodejs-express-and-mongoose
