<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <link rel="stylesheet" type="text/css" href="main.css">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.9.0/p5.js"></script>
    <script src="sketch.js"></script>
</head>
<body>
<!--    <iframe src="http://5.45.79.15/input/?"></iframe>-->
<?php
    include('simple_html_dom.php');
    //$html = file_get_html('http://5.45.79.15/input/?');
    $context = stream_context_create(array(
        'http' => array('ignore_errors' => true),
    ));

    $result = file_get_contents('http://5.45.79.15/input/?', false, $context);
    echo $result;
?>
  <!-- The core Firebase JS SDK is always required and must be listed first -->
<!--<script src="https://www.gstatic.com/firebasejs/7.3.0/firebase-app.js"></script>-->
<!--<script src="https://www.gstatic.com/firebasejs/3.1.0/firebase-database.js"></script>-->

<!--&lt;!&ndash; TODO: Add SDKs for Firebase products that you want to use-->
<!--     https://firebase.google.com/docs/web/setup#available-libraries &ndash;&gt;-->

<!--<script>-->
<!--  // Your web app's Firebase configuration-->
<!--  var firebaseConfig = {-->
<!--    apiKey: "AIzaSyD5LsdmErW4XS4nAViYE6M4mCttmE23bb8",-->
<!--    authDomain: "interactivesignalling-61766.firebaseapp.com",-->
<!--    databaseURL: "https://interactivesignalling-61766.firebaseio.com",-->
<!--    projectId: "interactivesignalling-61766",-->
<!--    storageBucket: "interactivesignalling-61766.appspot.com",-->
<!--    messagingSenderId: "33240356669",-->
<!--    appId: "1:33240356669:web:22e1a3b76d9e07c5c51754"-->
<!--  };-->
<!--  // Initialize Firebase-->
<!--  firebase.initializeApp(firebaseConfig);-->
<!--  var returnedData;-->


<!--  var admin = require("firebase-admin");-->

<!--  const database = firebase.database();-->

<!--  var ref = firebase.database().ref('/');-->

<!--  ref.on('value', function(data){-->
<!--    console.log("test");-->
<!--    console.log(data.val());-->
<!--  }, function (errorObject) {-->
<!--  console.log("The read failed: " + errorObject.code);-->
<!--});-->
<!--</script>-->
</body>
</html>