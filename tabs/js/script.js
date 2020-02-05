window.addEventListener('DOMContentLoaded', function () {

    'use strict';

    let tab = document.querySelectorAll('.info-header-tab'),
        info = document.querySelector('.info-header'),
        tabContent = document.querySelectorAll('.info-tabcontent');


    function hideTabContent(a) {
        for (let i = a; i < tabContent.length; i++){
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        }
    }

    hideTabContent(1);

    function showTabContent(b) {
        if (tabContent[b].classList.contains('hide')){
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
        }
    }
    
    info.addEventListener('click', function (event) {
        let target = event.target;
        if (target && target.classList.contains('info-header-tab')){
            for(let i = 0; i < tab.length; i++){
                if (target == tab[i]){
                    hideTabContent(0);
                    showTabContent(i);
                    break;
                }
            }
        }
    })


    // TIMER
    
    let deadline = '2020-02-04'; // дата окончания акции
    
    function getTimeRemaining(endtime) {
        let dt = Date.parse(endtime) - Date.parse(new Date()), // осталось времени в милисекундах
            seconds = Math.floor((dt/1000) % 60), // получаем секунды
            minutes = Math.floor((dt/1000/60) % 60), // минуты
            hours = Math.floor((dt/(1000*60*60))); // часы

        // возвращаем объект с остатком времени, часами, минутами, секундами
        return {
            'total' : dt,
            'hours' : hours,
            'minutes' : minutes,
            'seconds' : seconds
        };
        
    }

    // функция ПОДСТАНОВКИ оставщегося времени (так же получения элементов и интервал обновления)
    function  setClock(id, endtime) { // endtime - это deadline
        let timer = document.getElementById(id), // получили  блок с таймером
            hours = timer.querySelector('.hours'), // часы таймера
            minutes = timer.querySelector('.minutes'), // минуты таймера
            seconds = timer.querySelector('.seconds'), // секунды таймера
            timeInterval = setInterval(updateClock, 1000); // ТАЙМЕР ОБНОВЛЕНИЯ: каждую секунду запускать функцию updateClock

        // обновление счетчика времени
        function updateClock() {
            let t = getTimeRemaining(endtime); // в переменнуб получаем объект функции getTimeRemaining

            function addZero(num){ // добавляем к однозначным цифрам нуль спереди
                if (num <= 9){
                    return '0' + num;
                } else return num;
            }

            hours.textContent = addZero(t.hours); // прописываем в элементы таймера данные объекта
            minutes.textContent = addZero(t.minutes);
            seconds.textContent = addZero(t.seconds);

            if  (t.total <= 0) {
                clearInterval(timeInterval);// условие останавливающее таймер
                hours.textContent = '00'; // прописываем в элементы таймера данные объекта
                minutes.textContent = '00';
                seconds.textContent = '00';
            }



        }
    }

    setClock('timer', deadline); // запускаем счетчик (функцию ПОДСТАНОВКИ времени)

});






























