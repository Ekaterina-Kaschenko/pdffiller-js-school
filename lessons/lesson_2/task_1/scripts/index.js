var button = document.getElementsByClassName('button')[0];
var table = document.getElementsByClassName('table')[0];

function createTableRow(user) {
  var tableRow = document.createElement('tr')

  var userName = document.createElement('td');
  userName.className = 'name';
  userName.textContent = user.fullName;

  var userBirthday = document.createElement('td');
  userBirthday.className = 'birthday';
  userBirthday.textContent = user.birthday;

  var userCity = document.createElement('td');
  userCity.className = 'city';
  userCity.textContent = user.city;

  tableRow.appendChild(userName)
  tableRow.appendChild(userBirthday)
  tableRow.appendChild(userCity)

  table.appendChild(tableRow)
}

button.addEventListener('click', function() {
  table.classList.remove('hidden');
  var fullName = prompt('Как вас зовут?', 'ФИО');
  var birthday = prompt('Ваша дата рождения?', '20/10/1992');
  var city = prompt('Где вы живете?', 'Город');

  var user = {
    fullName,
    birthday,
    city
  }

  createTableRow(user);
})