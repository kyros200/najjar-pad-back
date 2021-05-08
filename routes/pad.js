const express = require('express');
const padService = require("../services/padService");

let route = express.Router();

route.get('*', async (req, res) => {
  let path = req.params[0].split("/").filter(p => p !== "");

  const pad = await padService.getPadByPath(path);

  const children = await padService.getDirectChildrenOfPad(pad);

  const finalResult = {
    success: typeof pad === "string" ? false : true,
    data: pad || null,
    children: children
  }

  res.status(200).json(finalResult);
});

route.post('*', async (req, res) => {
  let path = req.params[0].split("/").filter(p => p !== "");

  const id = await padService.savePad(req.body, path);

  res.json(id);
});

module.exports = route;
