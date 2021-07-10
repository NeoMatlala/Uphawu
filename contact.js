// js code to avoid redirection to formspree page.
// will toggle error & success classes

var form = document.getElementById("my-form");
    
async function handleSubmit(event) {
  event.preventDefault();
  var status = document.getElementById("status");
  var data = new FormData(event.target);
  fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
        'Accept': 'application/json'
    }
  }).then(response => {
      status.classList.add('success')
    status.innerHTML = "Your message has successfully been sent to us! <br/> We will contact you as soon as possible.";
    form.reset()
  }).catch(error => {
    status.classList.add('error')
    status.innerHTML = "Oops! There was a problem submitting your form. Please try sending the message again. Ensure all details are correct this time around..."
  });
}
form.addEventListener("submit", handleSubmit)