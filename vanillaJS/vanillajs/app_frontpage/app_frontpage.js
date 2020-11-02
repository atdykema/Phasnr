function onSignIn(googleUser){
    var profile = googleUser.getBasicProfile()
    console.log('User is ' + JSON.stringify(profile));

    var name = document.querySelector('#content');
    name.innerText = profile.getName(); 

    var image = document.createElement('img');
    image.setAttribute('src', profile.getImageUrl())
    name.append(image)
}

function signOut(){
    gapi.auth2.getAuthInstance().signOut().then((function() {}))
        console.log("user signed out");
    var name = document.querySelector('#content');
    name.innerText = null;
    
}