let contacts = JSON.parse(loadContacts()),
    string = '',
    contactsList = document.querySelector('.contacts-list');

for (let item of contacts) {
  string += `<li data-email="${item.email}" data-phone="${item.phone}"><strong>${item.name}</strong></li>`;
}

contactsList.innerHTML = string;


