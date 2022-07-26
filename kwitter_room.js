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
document.getElementById("user_name2").innerHTML = "welcome " + user_name;

function addRoom() {
    room_name = document.getElementById("room_name").value;

    firebase.database().ref("/").child(room_name).update({
        purpose: "adding room name"
    });
    localStorage.setItem("room_name", room_name);

    window.location = "kwitter_page.html";
}

function getData() {
    firebase.database().ref("/").on('value', function(snapshot) {
        document.getElementById("output").innerHTML = "";
        snapshot.forEach(function(childSnapshot) {
            childKey = childSnapshot.key;
            Room_names = childKey;
            //Start code
            console.log("Room Name - " + Room_names);
            row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoom(this.id)' >#" + Room_names + "</div> <hr>";
            document.getElementById("output").innerHTML += row;
            //End code
        });
    });
}
getData();

function redirectToRoom(name) {
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "index.html";
}