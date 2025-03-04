// const Razorpay = require("razorpay");

// var instance = new Razorpay({
//   key_id: process.env.RAZORPAY_KEY_ID,
//   key_secret: process.env.RAZORPAY_KEY_SECRET,
// });

// module.exports = instance;
// const Razorpay = require("razorpay");
// Instead, export a dummy object
const instance = {
  orders: {
    create: async () => ({}),
  },
};

module.exports = instance;
