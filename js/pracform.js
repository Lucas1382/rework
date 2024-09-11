const temporaryYes = document.querySelector('#temporary-yes')
const temporaryNo = document.querySelector('#temporary-no')
const temporaryBlock = document.querySelector('#if-temporary')

temporaryBlock.style.display = 'none'

temporaryYes.addEventListener('change', () => {
    if (temporaryYes.checked) {
        temporaryBlock.style.display = 'block'
    }
})

temporaryNo.addEventListener('change', () => {
    if (temporaryNo.checked) {
        temporaryBlock.style.display = 'none'
    }
})

document.getElementById('prac-form').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Are you sure?');
});
