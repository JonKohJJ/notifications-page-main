


// get ALL notifications
let allNotifications = document.getElementsByClassName('notification');

// get notificaiton position
let notificationValue = document.getElementById('notificationValue');

var unreadNotification = 0;
// update notification value
function updateNotificationValue(){
    for (let i=0; i<allNotifications.length; i++){
        if (allNotifications[i].classList[1] == "unread"){
            unreadNotification++;
        }
    }
    notificationValue.innerHTML = unreadNotification;
}
updateNotificationValue();


let reddots = document.getElementsByClassName('reddot');
let markAllRead = document.getElementsByClassName('markAll')[0];
markAllRead.addEventListener('click', function(){

    if(reddots.length == unreadNotification){

        for (let i=0; i<allNotifications.length; i++){
            if (allNotifications[i].classList[1] == "unread"){
                allNotifications[i].classList.remove('unread');
                reddots[i].classList.add('hide');
                unreadNotification--;
            }
        }
        updateNotificationValue();
    }

});