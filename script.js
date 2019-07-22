const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');
console.log('Hold shift and choise. ')
console.log(checkboxes);
let lastChecked;

function handleCheck(e) {

    let inBetween = false;
    if (e.shiftKey && this.checked) {
        checkboxes.forEach(checkbox => {
            console.log(checkbox);
            if (checkbox === this || checkbox === lastChecked) {
                inBetween = !inBetween;
                console.log('Starting to check them before');
            }

            if (inBetween) {
                checkbox.checked = true;
            }
        });
    }
    lastChecked = this;
}

checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck));
