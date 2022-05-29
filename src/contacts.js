const contacts = document.getElementsByClassName("contacts")[0];
const stickyHeader = document.getElementsByClassName("stickyHeader")[0];

function addContacts(displayNumber, start) {
  const fragment = document.createDocumentFragment();

  for (let i = 0; i < displayNumber; i++) {
    const child = document.createElement("div");
    child.textContent = start + i;
    child.classList.add("contact");
    fragment.appendChild(child);
  }

  contacts.appendChild(fragment);
}

contacts.addEventListener("scroll", (e) => {
  const items = Array.from(contacts.getElementsByClassName("contact"));

  const itemOffsets = items.map((item) => item.offsetTop);
  let topItemIndex = itemOffsets.findIndex(
      (offset) => contacts.scrollTop - offset <= -18
  );
  //Условие подгрузки новых контактов
  if(topItemIndex + 20 > itemOffsets.length){
    addContacts(20, itemOffsets.length);
  }

  if (topItemIndex !== -1) {
    stickyHeader.textContent = items[topItemIndex].textContent;
  }
});

addContacts(40, 0);