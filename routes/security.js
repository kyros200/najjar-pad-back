const express = require('express');
const securityService = require("../services/securityService");

let route = express.Router();

route.get('*', async (req, res) => {
    let path = req.params[0].split("/").filter(p => p !== "");

    const security = await securityService.getSecurityByPath(path);

    const finalResult = {
        success: typeof security === "string" ? false : true,
        data: security || null,
    }

    res.status(200).json(finalResult);
});

route.post('*', async (req, res) => {
    let path = req.params[0].split("/").filter(p => p !== "");

    const pass = await securityService.checkPass(req.body.pass, path);

    res.status(200).json({success: pass});
});

module.exports = route;
