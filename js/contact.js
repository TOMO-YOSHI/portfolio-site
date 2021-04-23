import '../style.css';
import "babel-polyfill";

// PageTransitionAnimation ****************************************
import {  pageSlideTransitionAnimationWithArguments } from './pageTransition/pageTransitionAnimation.js';

pageSlideTransitionAnimationWithArguments("#go_to_works", "#contact_main", "./works.html", "slide_out_right");

// glovalNav ****************************************
import { globalNav } from './globalNav/globalNav.js';

globalNav("contact");

// Submit function ****************************************

const submitBtn = document.querySelector('#submitBtn')
const submitResultDiv = document.getElementById('submit_result_message_div')
const submitResultP = document.getElementById('submit_result_message_p')
const submitResultDetail = document.getElementById('submit_result_message_detail')

const onClickHandler = async(e) => {
    e.preventDefault();

    submitBtn.disabled = true
    submitBtn.textContent = 'Sending message...'

    const name = document.getElementById('name').value
    const companyName = document.getElementById('companyName').value
    const email = document.getElementById('email').value
    const message = document.getElementById('message').value

    if(!name || !companyName || !email || !message) {
        submitResultP.textContent =
            'Your message failed to be submitted.'
        submitResultDetail.textContent = 'Please fill out all fields before submitting.'
        submitResultDiv.style.display = 'flex'
        submitBtn.disabled = false
        submitBtn.textContent = 'Send'
        return
    }

    const serverRes = await fetch('http://localhost:8080/mail', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name,
            companyName,
            email,
            message
        })
    })
    .then(response => response.json())
    .catch(error => console.log(error))

    // if (true) {
    if (serverRes.success) {
        document.getElementById('name').value = ''
        document.getElementById('companyName').value = ''
        document.getElementById('email').value = ''
        document.getElementById('message').value = ''

        submitResultP.textContent = 'Your message successfully submitted.'
        submitResultDetail.textContent = `An automated email was sent to ${email}`
    } else {
        submitResultP.textContent = 
        'Your message failed to be submitted.'
        submitResultDetail.textContent = 'Please try it again or use another way to contact me.'
    }

    submitBtn.disabled = false
    submitBtn.textContent = 'Send'

    submitResultDiv.style.display = 'flex'

}

submitBtn.addEventListener('click', onClickHandler)
submitResultDiv.addEventListener('click', ()=>{
    submitResultDiv.style.display = 'none'
})
