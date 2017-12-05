var addButton = document.querySelector('#add-button')
var userInput = document.querySelector('#user-input')
var container = document.querySelector('#container')

addButton.addEventListener('click', addCard)

function addCard() {
  var activity = userInput.value
  if (activity.length > 30) {
    alert('Please enter a max 30 characters message')
  } else {
    var newCard = document.createElement('div')
    var newSpan = document.createElement('span')
    var newButton = document.createElement('button')
    newCard.className = 'activity'
    newButton.id = 'remove-button'
    container.appendChild(newCard)
    newCard.appendChild(newSpan)
    newSpan.innerHTML = activity
    newCard.appendChild(newButton)
    newButton.innerHTML = '-'
    deleteButton(newButton)
  }
}

function deleteButton(removeButton) {
  removeButton.addEventListener('click', function() {
    var containerParent = removeButton.parentNode.parentNode
    var child = removeButton.parentNode
    containerParent.removeChild(child)
  })
}
