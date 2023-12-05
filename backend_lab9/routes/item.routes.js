    const itemController = require("../controller/item.controller")
    const router = require("express").Router();

    const express = require('express')
    // Create a new item
    router.post("/", itemController.create);

    // Retrieve all items
    router.get("/", itemController.findAll);

    // Retrieve a single items with id
    router.get("/:id", itemController.findOne);

    // Update a items with id
    router.put("/:id", itemController.update);

    // Delete a items with id
    router.delete("/:id", itemController.delete);

    module.exports = router;
