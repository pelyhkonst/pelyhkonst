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
    incValPetrich = document.getElementsByClassName('income-value')[0]


let money, time;

start();

function start(){
    money = +prompt('Ваш бюджет на месяц?');
    time = prompt('Введите дату в формате YYYY-MM-DD');

    while (isNaN(money) || money == '' || money == null){
        money = +prompt('Ваш бюджет на месяц (только число)?');
    }
}

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true,
    chooseExpenses: function () {
        for (i = 0; i < 2; i++){
            let exp = prompt('Введите обязательную статью расходов'),
                cost = prompt('Во сколько это обойдется?');

            if (exp != null && exp != '' && cost != null && cost != '') {
                appData.expenses[exp] = cost;
            }else {
                alert('Ошибка')
                i--;
            }
        }
    },
    chooseOptExpenses: function () {
        for (i = 1; i < 4; i++){
            let oExp = prompt("Статья необязательных расходов?"),
                oCost = prompt("Сколько обходится?");

            if (oExp != null && oCost != null && oExp != '' && oCost != ''){
                appData.optionalExpenses[oExp] = oCost;
            } else {
                alert("Ошибка")
                i--;
            }
        }
    },
    detectDayBudget: function () {
        appData.dayBudget = (appData.budget / 30).toFixed();
    },
    detectLevel: function () {
        if (appData.dayBudget < 10){
            alert("У Вас очень скромый бюджет")
        } else if (appData.dayBudget > 10 && appData.dayBudget < 50){
            alert("У Вас средний бюджет")
        } else if (appData.dayBudget > 50 && appData.dayBudget < 200) {
            alert("У Вас хороший бюджет")
        } else {
            alert("У Вас большой бюджет")
        }
    },
    deposite: function () {
        if (appData.savings == true) {
            let save = +prompt('Ваши накопления?');
            let percent = prompt('Под какой процент годовой');

            appData.monthIncome = save*percent/100/12

        }
    },
    chooseIncome: function () {
        let profit = prompt("Перечислите источники вашего дохода (через запятую)", '');
        while ((typeof(profit) != "string") || profit == null || profit == ''){
            alert("Ошибка");
            profit = prompt("Перечислите источники вашего дохода (через запятую)", '');
        }
        appData.income = profit.split(',');
        appData.income.push(prompt("Что-то еще?", ''));
        appData.income.sort();

        appData.income.forEach(function (item, i, income) {
            i = i+1;
            alert("Способы дополнительного заработка: " + i +' - ' + item);

        })
    }
}

for (let key in appData){
    console.log("Наша программа включает в себя данные: " + key + " - " + appData[key]);
}




























