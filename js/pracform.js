const temporaryYes = document.querySelector('#temporary-yes')
const temporaryNo = document.querySelector('#temporary-no')
const temporaryBlock = document.querySelector('#if-temporary')
const agreeCheckbox = document.querySelector("#agree-checkbox")
const submitBtn = document.querySelector(".submit-btn")
const specificClinic = document.querySelector("#other-disability")

temporaryBlock.style.display = 'none'

temporaryYes.addEventListener('change', () => {
    if (temporaryYes.checked) {
        temporaryBlock.style.display = 'block'
        specificClinic.required = 'true'
    }
})

temporaryNo.addEventListener('change', () => {
    if (temporaryNo.checked) {
        temporaryBlock.style.display = 'none'
        specificClinic.required = 'false'
    }
})


agreeCheckbox.addEventListener("change", function() {
    if (agreeCheckbox.checked) {
        submitBtn.disabled = false; // Enable the submit button
        document.querySelector('.confirmation p').innerHTML = ''
    } else {
        submitBtn.disabled = true;  // Disable the submit button
        document.querySelector('.confirmation p').innerHTML = '<span>X</span> Please agree detail'
    }
});

