const { Router } = require("express");
const {
    getAllAccounts,
    createAccount,
} = require("../controller/account.controller")

const accountRouter = Router()

accountRouter.get("/", getAllAccounts).post("/", createAccount);

module.exports = { accountRouter };
