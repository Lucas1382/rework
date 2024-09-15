const otherNameYes = document.querySelector("#other-name-yes")
const otherNameNo = document.querySelector("#other-name-no")
const otherNameBlock = document.querySelector("#if-other-name")
const otherNameSpecific = document.querySelector("#other-name")
const suspendYes= document.querySelector("#suspended-no")
const suspendedNo = document.querySelector("#suspended-yes")
const suspendedBlock = document.querySelector("#if-suspended")
const suspendedInputs = document.querySelectorAll("#if-suspended input")
const newApplication = document.querySelector('#new')
const renewalApplication = document.querySelector('#renewal')
const replacementApplication = document.querySelector('#replacement')
const replacementBlock = document.querySelector("#if-replace")
const replacementReason = document.querySelector('input[name="replace_reason"]')
const agreeCheckbox = document.querySelector("#agree-checkbox")
const submitBtn = document.querySelector(".submit-btn")


// Make sure all hidden div element is invisible by default
suspendedBlock.style.display = 'none'
replacementBlock.style.display = 'none'

// Turn on/off other name block
otherNameYes.addEventListener("change", () => {
    if(otherNameYes.checked) {
        otherNameBlock.style.display = 'block'
        otherNameSpecific.required = 'true'
    }
})

otherNameNo.addEventListener("change", () => {
    if(otherNameNo.checked) {
        otherNameBlock.style.display = 'none'
        otherNameSpecific.required = 'false'
    }
})



// Turn on/off replacement reason block
replacementApplication.addEventListener("change", () => { 
    if(replacementApplication.checked) {
        replacementBlock.style.display = 'block'
        replacementReason.required = 'true'
    }
})

newApplication.addEventListener("change", () => {
    if(newApplication.checked) {
        replacementBlock.style.display = 'none'
        replacementReason.required = 'false'
    }
})

renewalApplication.addEventListener("change", () => {
    if(renewalApplication.checked) {
        replacementBlock.style.display = 'none'
        replacementReason.required = 'false'
    }
})


// Turn on/off suspended 
suspendedNo.addEventListener("change", () => {
    if(suspendedNo.checked) {
        suspendedBlock.style.display = 'block'
        suspendedInputs.forEach(input => {
            input.required = 'true'
        })
    }
})

suspendYes.addEventListener("change", () => {
    if(suspendYes.checked) {
        suspendedBlock.style.display = 'none'
        suspendedInputs.forEach(input => {
            input.required = 'false'
        })
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



