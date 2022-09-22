import nodeCreator from "./NodeCreator.js";

function render (where, data) {
  let newFragment = document.createDocumentFragment();
  data.forEach((user, index) => {
    let newTr = nodeCreator(user, index + 1);
    newFragment.append(newTr);
  });

  where.append(newFragment);
}

export default render;