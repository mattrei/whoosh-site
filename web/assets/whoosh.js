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
const mobileNav = document.querySelector('#mobileNav');
const eventsList = document.querySelector('#eventsList');
if( toggleNavButton ){
    toggleNavButton.addEventListener('click', function(){
        mobileNav.classList.toggle('hidden');
    });
}

const showUpcomingEventsButton = document.querySelector('#showUpcomingEvents');
const showPastEventsButton = document.querySelector('#showPastEvents');

if( showUpcomingEventsButton && showPastEventsButton ){
    showUpcomingEventsButton.addEventListener('click', function(){
        showUpcomingEventsButton.classList.add('bg-blue', 'text-white');
        showUpcomingEventsButton.classList.remove('bg-transparent', 'text-blue');

        showPastEventsButton.classList.remove('bg-blue', 'text-white');
        showPastEventsButton.classList.add('bg-transparent', 'text-blue');

        eventsList.dataset.show = "upcoming";
    });

    showPastEventsButton.addEventListener('click', function (){
        showUpcomingEventsButton.classList.remove('bg-blue', 'text-white');
        showUpcomingEventsButton.classList.add('bg-transparent', 'text-blue');

        showPastEventsButton.classList.add('bg-blue', 'text-white');
        showPastEventsButton.classList.remove('bg-transparent', 'text-blue');

        eventsList.dataset.show = "past";
    })
}