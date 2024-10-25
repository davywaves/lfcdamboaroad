// Sample events data
const events = [
    { name: 'Sunday Service', date: 'October 27, 2024' },
    { name: 'Mid-Week Service', date: 'October 23, 2024' },
    {  name: 'Covenant Hour of Prayer', date: 'October 21st- October 26th, 2024' }
    
];

// Display events dynamically
const eventList = document.getElementById('event-list');
events.forEach(event => {
    const li = document.createElement('li');
    li.textContent = `${event.name} - ${event.date}`;
    eventList.appendChild(li);
});

// Form submission handling
const contactForm = document.getElementById('contact-form');
const formStatus = document.getElementById('form-status');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        formStatus.textContent = 'Thank you for reaching out! We will get back to you soon.';
        contactForm.reset();
    } else {
        formStatus.textContent = 'Please fill in all fields.';
    }
});
