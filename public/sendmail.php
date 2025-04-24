<?php
// Check if the form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Collect form data and sanitize inputs
    $name = htmlspecialchars(trim($_POST['name']));
    $email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
    $number = htmlspecialchars(trim($_POST['number']));
    $date = htmlspecialchars(trim($_POST['date']));
    $service = htmlspecialchars(trim($_POST['service']));
    $health = htmlspecialchars(trim($_POST['health']));
    $branch = htmlspecialchars(trim($_POST['branch']));

    // Email details
    $to = "marigoldhospital2017@gmail.com"; // Replace with your email
    $subject = "New Appointment Request";
    $headers = "From: noreply@marigoldhospitals.com\r\n";
    $headers = "Reply-To: $email\r\n";
    $headers = "Content-Type: text/plain; charset=UTF-8\r\n";

    // Email message body
    $message = "You have received a new appointment request:\n\n";
    $message .= "Name: $name\n";
    $message .= "Email: $email\n";
    $message .= "Mobile Number: $number\n";
    
    $message .= "Date: $date\n";
    $message .= "Service: $service\n";
    $message .= "Health Package: $health\n";
    $message .= "Branch: $branch\n";

    // Send the email
    if (mail($to, $subject, $message, $headers)) {
        // Success message with home button
        echo "
        <div style='text-align: center; margin-top: 50px;'>
            <h2>Thank you! Your appointment request has been sent successfully.</h2>
            <a href='/' style='display: inline-block; margin-top: 20px; padding: 10px 20px; background-color: #007BFF; color: white; text-decoration: none; border-radius: 5px;'>Go to Home</a>
        </div>";
    } else {
        // Error message with home button
        echo "
        <div style='text-align: center; margin-top: 50px;'>
            <h2>Sorry, there was an error sending your request. Please try again.</h2>
            <a href='/' style='display: inline-block; margin-top: 20px; padding: 10px 20px; background-color: #FF0000; color: white; text-decoration: none; border-radius: 5px;'>Go to Home</a>
        </div>";
    }
} else {
    // If accessed directly, redirect to the form page
    header("Location: /");
    exit();
}
?>
