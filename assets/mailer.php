<?php

    // Only process POST reqeusts.
    if ($_SERVER['REQUEST_METHOD'] == 'POST') {

        $config = require('../config/config.php');

        $name = strip_tags(trim($_POST['name']));
        $name = str_replace(array('\r','\n'), array(' ',' '), $name);
        $email = filter_var(trim($_POST['email']), FILTER_SANITIZE_EMAIL);
        $message = trim($_POST['message']);
        $captcha = $_POST['g-recaptcha-response'];

        $captchaResult = json_decode(file_get_contents('https://www.google.com/recaptcha/api/siteverify?secret="' . $config['captchaSecretKey'] . '"&response=' . $captcha . '&remoteip=' . $_SERVER["REMOTE_ADDR"]));

        // Check that data was sent to the mailer.
        if (empty($name) || empty($message) || !filter_var($email, FILTER_VALIDATE_EMAIL) || !$captchaResult->success) {
            // Set a 400 (bad request) response code and exit.
            http_response_code(400);
            echo 'Oops! There was a problem with your submission. Please complete the form and try again.';
            exit;
        }

        $recipient = 'management@arcadian.band';
        $subject = "Website message from $name";

        $emailContent = "Name: $name\n";
        $emailContent .= "Email: $email\n\n";
        $emailContent .= "Message:\n$message\n";

        // Build the email headers.
        $headers = 'From: webmaster@arcadian.band' . "\r\n" . 'Reply-To:'. $email . "\r\n";

        // Send the email.
        if (mail($recipient, $subject, $emailContent, $headers)) {
            http_response_code(200);
            echo 'Thank you! Your message has been sent.';

        } else {
            http_response_code(500);
            echo 'Oops! Something went wrong and we couldn\'t send your message.';
        }

    } else {
        http_response_code(403);
        echo 'There was a problem with your submission, please try again.';
    }

?>
