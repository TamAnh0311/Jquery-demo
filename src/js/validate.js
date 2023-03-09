export function isValidData() {
    let isValid = true;
    
    const openDiv = '<div id="name-error" class="error text-danger font-weight-light font-italic mt-1">';
    const closeDiv = '</div>';

    $('.error').remove();

    const nameElement = $('#name')
    if (nameElement.val() === '') {
        isValid = false;
        nameElement.after(openDiv + 'Task name erquired' + closeDiv)
    }

    return isValid;
}