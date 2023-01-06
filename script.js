var login = false;
var frames = 0;


//Keeps track of the frames that have gone by
function timeKeeping()  {
    for (var i = 0; i >= 0; i++)   {

        //Counts up number of frames
        frames = frames + 1;

        //Displays the number of frames that have gone by in console
        console.log(String(frames));
    }
}

//Sends an alert to the user to let them know that they should sign in
function loginAlert()   {
    if (login = false && frames >= 1000)   {
        
        //Alerts user aproximately 10 seconds in
        alert("Please login to continue");
    }
}

timeKeeping();
loginAlert();