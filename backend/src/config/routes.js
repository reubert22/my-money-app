const express = require("express");
const BillingCycle = require("../api/billingCycle/billingCycleService");

module.exports = function(server) {
  // Here we define our default URL to use in all routes
  const router = express.Router();
  server.use("/api", router); // BillingCycle routes

  BillingCycle.register(router, "/billingCycles");
};
