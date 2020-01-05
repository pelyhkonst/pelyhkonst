let money = prompt('Ваш бюджет на месяц?');
let time = prompt('Введите дату в формате YYYY-MM-DD');



let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false

}

let exp = prompt('Введите обязательную статью расходов');
let expCost = prompt('Во сколько это обойдется?')
let exp2 = prompt('Введите обязательную статью расходов');
let expCost2 = prompt('Во сколько это обойдется?')

appData.expenses.exp = expCost;
appData.expenses.exp2 = expCost2;

let dayBudget = (money / 30);
alert(dayBudget);

