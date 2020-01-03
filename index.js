// prevent default submit
const handleFormSubmit = evt => {
    evt.preventDefault()
    
    // Call our function to get form data
    const data = {}
    
    // print form data to screen
    const dataContainer = document.getElementsByClassName('results_display')[0]
    
    //JSON.Stringify to make output valid
    dataContainer.textContent = JSON.stringify(data, null, "")
}

// Attach an event listener
const form = document.getElementsByClassName('contact-form')[0]
form.addEventListener('submit', handleFormSubmit)

