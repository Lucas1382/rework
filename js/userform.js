const suspendYes= document.querySelector("#suspended-no")
const suspendedNo = document.querySelector("#suspended-yes")
const suspendedBlock = document.querySelector("#if-suspended")
const newApplication = document.querySelector('#new')
const renewalApplication = document.querySelector('#renewal')
const replacementApplication = document.querySelector('#replacement')
const replacementBlock = document.querySelector("#if-replace")
const temporaryYes = document.getElementById("temporary-yes")
const temporaryNo = document.querySelector("#temporary-no")
const temporaryBlock = document.querySelector("#if-temporapy")


document.getElementById('userform').reset();
suspendedBlock.style.display = 'none'
replacementBlock.style.display = 'none'

suspendedNo.addEventListener("change", () => {
    if(suspendedNo.checked) {
        suspendedBlock.style.display = 'block'
    }
})

suspendYes.addEventListener("change", () => {
    if(suspendYes.checked) {
        suspendedBlock.style.display = 'none'
    }
})




replacementApplication.addEventListener("change", () => {
    if(replacementApplication.checked) {
        replacementBlock.style.display = 'block'
    }
})

newApplication.addEventListener("change", () => {
    if(newApplication.checked) {
        replacementBlock.style.display = 'none'
    }
})

renewalApplication.addEventListener("change", () => {
    if(renewalApplication.checked) {
        replacementBlock.style.display = 'none'
    }
})
document.getElementById('userform').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Are you sure?');
});



