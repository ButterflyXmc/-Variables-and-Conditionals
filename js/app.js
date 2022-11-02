let userAge = 10;

//the user is younger than 18 or not
if ((userAge < 18) || !(userAge < 18)){
    console.log("Welcome to my channel!");
}

let isSubscribed = true;

//the user is subscribed or not
if ((isSubscribed == true) || !(isSubscribed == true)){
    console.log("Welcome!")
}

//the user is younger than 18 and is subscribed/not subscribed

if ((isSubscribed == true) && (userAge < 18)){
    console.log("You are not old enough, please unsubscribe!");
} else if (isSubscribed == false){
    console.log("Not old enough!");
}

//the user is older than 18 and is subscribed/not subscribed

if ((isSubscribed == true) && (userAge > 18)){
    console.log("Let's get started!");
} else if (isSubscribed == false){
    console.log("Please subscribe!");
}