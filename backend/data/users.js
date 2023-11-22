import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin User",
    email: "admin@email.com",
    password: bcrypt.hashSync("123456", 12),
    isAdmin: true,
    cartItems: [],
  },
  {
    name: "John Doe",
    email: "john@email.com",
    password: bcrypt.hashSync("123456", 12),
    isAdmin: false,
    cartItems: [],
  },
  {
    name: "Jane Doe",
    email: "jane@email.com",
    password: bcrypt.hashSync("123456", 12),
    isAdmin: false,
    cartItems: [],
  },
];

export default users;
