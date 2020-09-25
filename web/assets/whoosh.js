setInterval(updateTime, 20000);

const dateAndTime = document.querySelector('#dateTime');
const months = ['Jän', 'Feb', 'Mär', 'Apr', 'Mai', 'Jun','Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dez'];
const days = ['So', 'Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa' ];
function updateTime(){

    if( dateAndTime ){
        var today = new Date();

        var date = months[ today.getMonth() ] + ' ' + today.getDate();
        var time =  today.getHours() + ":" + today.getMinutes();

        dateAndTime.innerHTML = days[today.getDay()] + '.  ' + date + '. |  ' + time;
    }
}

const toggleNavButton = document.querySelector('#navToggle');
const mainNav = document.querySelector('#mainNav')
if( toggleNavButton ){
    toggleNavButton.addEventListener('click', function(){
        mainNav.classList.toggle('hidden');
    });
}