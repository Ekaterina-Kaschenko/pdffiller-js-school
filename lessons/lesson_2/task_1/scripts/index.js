var button = document.getElementsByClassName('button')[0];
var table = document.getElementsByClassName('table')[0];
var userName = document.getElementsByClassName('name')[0];
var userBirthday = document.getElementsByClassName('birthday')[0];
var userCity = document.getElementsByClassName('city')[0];


button.addEventListener('click', function() {
  var user = {};

  user.fullName = prompt('Как вас зовут?', 'ФИО');
  user.birthday = prompt('Ваша дата рождения?', '20/10/1992');
  user.city = prompt('Где вы живете?', 'Город');

  userName.textContent = user.fullName;
  userBirthday.textContent = user.birthday;
  userCity.textContent = user.city;

  table.classList.remove('hidden');
})