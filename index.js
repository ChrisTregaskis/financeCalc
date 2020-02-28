const loanASlider = document.getElementById('loan-amount-slider');
const loanAOutput = document.getElementById('loan-amount-text');
const expectedSSlider = document.getElementById('expected-salary-slider');
const expectedSOutput = document.getElementById('expected-salary-text');
const expectedSSliderMobile = document.getElementById('expected-salary-slider-mobile');
const expectedSOutputMobile = document.getElementById('expected-salary-text-mobile');
const ppmSlider = document.getElementById('ppm-slider');
const ppmOutput = document.getElementById('ppm-text');

//Call hover effect on display when hovering/using ranger slider
$(document).ready(function() {
    let loanAmount = $('#loanAmount');
    let expectedSalary = $('#expectedSalary');
    let expectedSalaryMobile = $('#expectedSalaryMobile');
    let percentagePaidMonthly = $('#percentagePaidMonthly');

    $('#loan-amount-slider').hover(function(){
        loanAmount.css('background-color', '#3498db');
        loanAmount.css('color', '#ecf0f1');
        loanAmount.css('transition', 'color 0.4s, background-color 0.4s');
    }, function () {
        loanAmount.css('background-color', 'transparent');
        loanAmount.css('color', '#000');
        loanAmount.css('transition', 'color 0.4s, background-color 0.4s');
    });

    $('#expected-salary-slider').hover(function(){
        expectedSalary.css('background-color', '#3498db');
        expectedSalary.css('color', '#ecf0f1');
        expectedSalary.css('transition', 'color 0.4s, background-color 0.4s');
    }, function () {
        expectedSalary.css('background-color', 'transparent');
        expectedSalary.css('color', '#000');
        expectedSalary.css('transition', 'color 0.4s, background-color 0.4s');
    });

    $('#expected-salary-slider-mobile').hover(function(){
        expectedSalaryMobile.css('background-color', '#3498db');
        expectedSalaryMobile.css('color', '#ecf0f1');
        expectedSalaryMobile.css('transition', 'color 0.6s, background-color 0.6s');
    }, function () {
        expectedSalaryMobile.css('background-color', 'transparent');
        expectedSalaryMobile.css('color', '#000');
        expectedSalaryMobile.css('transition', 'color 0.6s, background-color 0.6s');
    });

    $('#ppm-slider').hover(function(){
        percentagePaidMonthly.css('background-color', '#3498db');
        percentagePaidMonthly.css('color', '#ecf0f1');
        percentagePaidMonthly.css('transition', 'color 0.4s, background-color 0.4s');
    }, function () {
        percentagePaidMonthly.css('background-color', 'transparent');
        percentagePaidMonthly.css('color', '#000');
        percentagePaidMonthly.css('transition', 'color 0.4s, background-color 0.4s');
    });

});

//Loan amount display
loanAOutput.innerText = loanASlider.value;
loanASlider.oninput = function() {
    loanAOutput.innerText = this.value;
};

//Expected salary display desk & mobile
expectedSOutput.innerText = expectedSSlider.value;
expectedSSlider.oninput = function() {
    expectedSOutput.innerText = this.value;
};

expectedSOutputMobile.innerText = expectedSSliderMobile.value;
expectedSSliderMobile.oninput = function() {
    expectedSOutputMobile.innerText = this.value;
};

//Percentage paid per-month display
ppmOutput.innerText = ppmSlider.value;
ppmSlider.oninput = function() {
    ppmOutput.innerText = this.value;
};

//Calc & display process on submit
document.getElementById('form').addEventListener('submit', (e) => {
    e.preventDefault()
    document.getElementById('table-headers').classList.remove('hidden')
    const loanInputValue = parseInt(loanASlider.value);
    const expectedInputValue = parseInt(expectedSSlider.value);
    const ppmInputValue = getPercentage(parseInt(ppmSlider.value));

    //Monthly repayments
    var monthlyRepayments = parseFloat(generateMRepayment(expectedInputValue, ppmInputValue)).toFixed(2);
    document.getElementById('monthly-repayment').innerText = '£' + monthlyRepayments;
    //Total borrowed
    var totalLoanRequested = feeRequiredCheck(loanInputValue);
    document.getElementById('total-borrowed').innerText = '£' + totalLoanRequested;
    //Upfront admin fee
    var upFrontAdminFee = upFrontFee(totalLoanRequested);
    document.getElementById('upfront-admin-fee').innerText = '£' + upFrontAdminFee;
    //Total fees
    var totalFee = parseFloat(generateTotalFee(loanInputValue, upFrontAdminFee)).toFixed(0);
    document.getElementById('total-fees').innerText = '£' + totalFee;
    //Total months
    var totalMonths = generateTotalMonths(totalLoanRequested, monthlyRepayments);
    document.getElementById('total-months').innerText = totalMonths;

    let schedule = generateSchedule(monthlyRepayments, totalLoanRequested);

    //Fetch handlebars. Display schedule on FE
    fetch('hand.hbs')
        .then((handData) => {
            return handData.text()
        })
        .then((handData) => {
            let hbsTemplate = Handlebars.compile(handData);

            var displaySchedule = hbsTemplate(schedule)
            document.getElementById('tbody').innerHTML = displaySchedule
        })
});



