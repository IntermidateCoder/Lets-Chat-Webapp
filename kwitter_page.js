var firebaseConfig = {
    apiKey: "AIzaSyBf_4MyvY0XTBCAiZa0_MfB_PEOGq_UoJY",
    authDomain: "practice-activity-67587.firebaseapp.com",
    databaseURL: "https://practice-activity-67587-default-rtdb.firebaseio.com",
    projectId: "practice-activity-67587",
    storageBucket: "practice-activity-67587.appspot.com",
    messagingSenderId: "1056137119556",
    appId: "1:1056137119556:web:7a4bd259d01652be1df911"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");

function send() {
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
        name: user_name,
        message: msg,
        likes: 0
    });
    document.getElementById("msg").value = "";
}

function getData() {
    firebase.database().ref("/" + room_name).on('value', function(snapshot) {
        document.getElementById("output").innerHTML = "";
        snapshot.forEach(function(childSnapshot) {
            childKey = childSnapshot.key;
            childData = childSnapshot.val();
            if (childKey != "purpose") {
                firebase_message_id = childKey;
                message_data = childData;
                //Start code

                //End code
            }
        });
    });
}
getData();

function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "index.html";
}