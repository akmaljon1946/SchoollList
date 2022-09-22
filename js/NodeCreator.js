
function nodeCreator ({ firstname, lastname, group, gender }, counter) {
  let template = document.getElementById('template');
  let newTemplate = template.content.cloneNode(true);

  newTemplate.querySelector(".number").textContent = counter;
  newTemplate.querySelector(".firstname").textContent = firstname;
  newTemplate.querySelector(".lastname").textContent = lastname;
  newTemplate.querySelector(".group").textContent = group;
  newTemplate.querySelector(".gender").textContent = gender;

  return newTemplate;
}

export default nodeCreator;