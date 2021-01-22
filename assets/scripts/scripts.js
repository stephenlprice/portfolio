const $emailForm = $("#emailForm");
const $sendEmail = $("#sendEmail");
const $firstN = $("#inputFirstName");
const $lastN = $("#inputLastName");
const $email = $("#inputEmail");
const $message = $("#inputMessage");

$sendEmail.on("mouseover", function(event) {
    event.preventDefault();
    let firstName = $firstN.val().trim();
    let lastName = $lastN.val().trim();
    let email = $email.val().trim();
    let message = $message.val();
    let dateTime = dayjs().format('dddd, MMMM D, YYYY, hh:mm A');

    let action = "mailto:inquire.stelloprint@protonmail.com?subject=Inquiry from: " + 
    firstName + ", " + lastName + " (" + email + ")" + " on: " + dateTime +  "&body=" + message;

    $emailForm.attr("action", action);
});

