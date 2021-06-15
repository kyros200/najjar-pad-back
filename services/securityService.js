const Pad = require("../models/Pad");

getSecurityByPath = async (path) => {
  let currentPad = await getPadByPath(path);

  console.log(currentPad);

  return {
    havePassword: currentPad ? !!currentPad.pass : false,
    readOnly: currentPad ? !!currentPad.read_only : false,
  }
}

checkPass = async (pass, path) => {
  let currentPad = await getPadByPath(path);

  return currentPad.pass === pass;
}

getPadByPath = async (path) => {
  let currentPad;
  let error = false;

  for(i = 0 ; i < path.length ; i++) {
    currentPad = await Pad.query()
    .where(
      {
        name: `${path[i]}`,
        id_pad_father: currentPad ? currentPad.id_pad : null,
      }
    ).first();

    if(currentPad === undefined && i !== path.length - 1) {
      error = `The Pad with the name "${path[i]}" was empty, please create it first.`;
      break;
    }
  }

  if(error){
    return error;
  } else {
    return currentPad;
  }
}

module.exports = { getSecurityByPath, checkPass };
