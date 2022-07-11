function openPlayerConfig(event) {
  editedPlayer = +event.target.dataset.playerid;// '1' => 1
  playerConfigOverlayElement.style.display = 'block';
  backdropElement.style.display = 'block';
}

function closePlayerConfig() {
  playerConfigOverlayElement.style.display = 'none';
  backdropElement.style.display = 'none';
  formElement.firstElementChild.classList.remove('error');
  errorOutputElement.textContent = '';
  formElement.firstElementChild.lastElementChild.value = '';
}

function savePlayerConfig(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  const enteredPlayername = formData.get('playername').trim();//menghilangkan spasi yang berlebihan

  if(!enteredPlayername){ //enteredPlayername === ''
    event.target.firstElementChild.classList.add('error');
    errorOutputElement.textContent = 'Please enter a valid name !';
    return;
  }
  const updatePlayerDataElement = document.getElementById('player-' + editedPlayer + '-data');
  updatePlayerDataElement.children[1].textContent = enteredPlayername;//menempatkan nama pada plyaer
  
  players[editedPlayer - 1].name =enteredPlayername;

  closePlayerConfig()
}