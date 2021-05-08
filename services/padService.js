const Pad = require("../models/Pad");
const K = require("../database/KnexConnection");

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

getDirectChildrenOfPad = async (pad_father) => {
  if (!pad_father || typeof pad_father === "string") return [];

  const children = await Pad.query().where({id_pad_father: pad_father.id_pad});

  return children.map(c => c.name);
}

savePad = async (pad, path) => {
  const name = path.pop();
  const pad_father = await getPadByPath(path);

  let id;
  if(pad.id_pad) {
    id = await K("pad").where({id_pad: pad.id_pad}).update({markdown: pad.markdown});
    if(id === 1) {
      id = "update: success"
    } else {
      id = "update: failed"
    }
  } else {
    id = await K("pad").insert({name: name, markdown: pad.markdown, id_pad_father: pad_father ? pad_father.id_pad : null});
  }

  return id;
}

module.exports = { getPadByPath, getDirectChildrenOfPad, savePad };
