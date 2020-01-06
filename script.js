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
    savings: true

}

chooseExpenses ();

function chooseExpenses (){
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

}

function chooseOptExpenses(){
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
}
chooseOptExpenses();

detectDayBudget();
function detectDayBudget () {
    appData.dayBudget = (appData.budget / 30).toFixed();

}

detectLevel();
function detectLevel() {
    if (appData.dayBudget < 10){
        alert("У Вас очень скромый бюджет")
    } else if (appData.dayBudget > 10 && appData.dayBudget < 50){
        alert("У Вас средний бюджет")
    } else if (appData.dayBudget > 50 && appData.dayBudget < 200) {
        alert("У Вас хороший бюджет")
    } else {
        alert("У Вас большой бюджет")
    }

}



deposite();
function deposite() {

    if (appData.savings == true) {
        let save = +prompt('Ваши накопления?');
        let percent = prompt('Под какой процент годовой');

        appData.monthIncome = save*percent/100/12

    }



}
alert("Месячный доход от процентов: " + appData.monthIncome);






























