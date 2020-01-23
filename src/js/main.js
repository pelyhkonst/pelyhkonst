let buttonStart = document.getElementById('start'),
    bugVal = document.querySelector('.budget-value'),
    dayBud = document.querySelector('.daybudget-value'),
    leValue = document.querySelector('.level-value'),
    expValue = document.querySelector('.expenses-value'),
    optValue = document.querySelector('.optionalexpenses-value'),
    incValue = document.querySelector('.income-value'),
    monthSaveValue = document.querySelector('.monthsavings-value'),
    yearSaveValue = document.querySelector('.yearsavings-value'),
    expItem = document.querySelectorAll('.expenses-item'),
    expButt0 = document.getElementsByTagName('button')[0],
    expButt1 = document.getElementsByTagName('button')[1],
    expButt2 = document.getElementsByTagName('button')[2],
    optExpItem = document.querySelectorAll('.optionalexpenses-item'),
    chooseIncome = document.querySelector('.choose-income'),
    chooseSum = document.querySelector('.choose-sum'),
    choosePer = document.querySelector('.choose-percent'),
    yearValue = document.querySelector('.year-value'),
    monthValue = document.querySelector('.month-value'),
    dayValue = document.querySelector('.day-value'),
    incValPetrich = document.getElementsByClassName('income-value')[0],
    expensBut = document.querySelector('.expenses-item-btn'),
    opExpensBut = document.querySelector('.optionalexpenses-btn'),
    countBugBtn = document.querySelector('.count-budget-btn'),
    checkSavings = document.getElementById('savings')


let money, time;



buttonStart.addEventListener('click', function () {
    money = +prompt('Ваш бюджет на месяц?');
    time = prompt('Введите дату в формате YYYY-MM-DD');

    while (isNaN(money) || money == '' || money == null){
        money = +prompt('Ваш бюджет на месяц (только число)?');
    }

    appData.budget = money;
    appData.timeData = time;
    bugVal.textContent = money.toFixed();
    yearValue.value = new Date(Date.parse(time)).getFullYear();
    monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
    dayValue.value = new Date(Date.parse(time)).getDate();

});

expensBut.addEventListener('click', function (event) {

    if (appData.budget != undefined){
    let sum = 0;

    for (i = 0; i < expItem.length; i++){
        let exp = expItem[i].value,
            cost = expItem[++i].value;

        if (exp != null && exp != '' && cost != null && cost != '') {
            appData.expenses[exp] = cost;
            sum += +cost;
        }else {
            alert('Ошибка')
            i--;
        }
    }
    expValue.textContent = sum;

    }else{

        expensBut.addEventListener('mouseover', function () {
            expensBut.style.cursor = 's-resize';
        })
        event.preventDefault();
    }
});


opExpensBut.addEventListener('click', function () {
    for (i = 0; i < optExpItem.length; i++){
        let oExp = optExpItem[i].value;
            appData.optionalExpenses[i] = oExp;
        optValue.textContent += appData.optionalExpenses[i] + ' ';
    }
});



countBugBtn.addEventListener('click', function () {

    if (appData.budget != undefined) {appData.dayBudget = ((appData.budget - expValue.textContent) / 30).toFixed();
        dayBud.textContent = appData.dayBudget;

        if (appData.dayBudget < 10){
            leValue.textContent = "У Вас очень скромый бюджет"
        } else if (appData.dayBudget > 10 && appData.dayBudget < 50){
            leValue.textContent = "У Вас средний бюджет"
        } else if (appData.dayBudget > 50 && appData.dayBudget < 200) {
            leValue.textContent = "У Вас хороший бюджет"
        } else {
            leValue.textContent = "У Вас большой бюджет"
        }
    }else{
        dayBud.textContent = "Произошла ошибка. Нажмите 'рассчитать' и введите данные";
    }

});

chooseIncome.addEventListener('input', function () {
    let profit = chooseIncome.value;
    appData.income = profit.split(',');
    incValue.textContent = appData.income;
});


checkSavings.addEventListener('click', function () {
    appData.savings = (appData.savings == true) ? false : true;
});

chooseSum.addEventListener('input', function () {
    if (appData.savings == true){
        let sum = +chooseSum.value,
            percent = +choosePer.value;

        appData.monthIncome = sum*percent/100/12;
        appData.yearIncome = sum*percent/100;

        monthSaveValue.textContent = appData.monthIncome.toFixed(1);
        yearSaveValue.textContent = appData.yearIncome.toFixed(1);
    }
});

choosePer.addEventListener('input', function () {
    if (appData.savings == true){
        let sum = +chooseSum.value,
            percent = +choosePer.value;

        appData.monthIncome = sum*percent/100/12;
        appData.yearIncome = sum*percent/100;

        monthSaveValue.textContent = appData.monthIncome.toFixed(1);
        yearSaveValue.textContent = appData.yearIncome.toFixed(1);
    }
});


let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
    

    // chooseExpenses: function () {
    //
    // },
    // chooseOptExpenses: function () {
    //
    // },
    // detectDayBudget: function () {
    //
    // },
    // detectLevel: function () {
    //
    // },
    // deposite: function () {
    //     if (appData.savings == true) {
    //         let save = +prompt('Ваши накопления?');
    //         let percent = prompt('Под какой процент годовой');
    //
    //         appData.monthIncome = save*percent/100/12
    //
    //     }
    // },
    // chooseIncome: function () {
    //     // let profit = prompt("Перечислите источники вашего дохода (через запятую)", '');
    //     // while ((typeof(profit) != "string") || profit == null || profit == ''){
    //     //     alert("Ошибка");
    //     //     profit = prompt("Перечислите источники вашего дохода (через запятую)", '');
    //     // }
    //     // appData.income = profit.split(',');
    //
    //     appData.income.push(prompt("Что-то еще?", ''));
    //     appData.income.sort();
    //
    //     appData.income.forEach(function (item, i, income) {
    //         i = i+1;
    //         alert("Способы дополнительного заработка: " + i +' - ' + item);
    //
    //     })
    // }
}

for (let key in appData){
    console.log("Наша программа включает в себя данные: " + key + " - " + appData[key]);
}


