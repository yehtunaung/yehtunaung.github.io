

function sendMail(e) {
        e.preventDefault();

        const form = document.querySelector('form');
        const nameInput = document.getElementById('name').value;
        const emailInput = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;

        const serviceID = 'service_4gi8lln';
        const templateID = 'service_4gi8lln';
        const publicKey = 'VMHfmy8sD0beJuZfm';

        emailjs.init(publicKey);

        const inputData = {
            from_name: nameInput,
            user_email: emailInput,
            subject: subject,
            message: message,
        };

        emailjs.send(serviceID, templateID, inputData).then(
            () => {
                        form.reset();

                        swal({
                            title: "Good job!",
                            text: "You completed the registration!",
                            icon: "success",
                            timer: 5000,
                            buttons: false
                        }).then(() => {
                            location.reload();
                        });
            },
            (error) => {
                console.log('Error sending registration email:', error);
            }
        );
    }
    document.querySelector('form').addEventListener('submit', sendMail);