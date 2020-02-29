const loanASlider = document.getElementById('loan-amount-slider');
const loanAOutput = document.getElementById('loan-amount-text');
const expectedSSlider = document.getElementById('expected-salary-slider');
const expectedSOutput = document.getElementById('expected-salary-text');
const expectedSSliderMobile = document.getElementById('expected-salary-slider-mobile');
const expectedSOutputMobile = document.getElementById('expected-salary-text-mobile');
const ppmSlider = document.getElementById('ppm-slider');
const ppmOutput = document.getElementById('ppm-text');

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

    $('.upfront-fee').click(function() {
        // document.getElementById('info-box').classList.add('mt-4');
        $('.info-box').animate({height: '200px', opacity: '1'}, 500);
        $('.info-box').animate({margin: '30px auto'}, 500);
    });

    $('#close-box-icon').click(function () {
        $('.info-box').animate({height: '0', opacity: '0'}, 1000);
        $('.info-box').animate({margin: '0'}, 500);
    });

});

//Calc Box Displays
loanAOutput.innerText = loanASlider.value;
loanASlider.oninput = function() {
    loanAOutput.innerText = this.value;
};

expectedSOutput.innerText = expectedSSlider.value;
expectedSSlider.oninput = function() {
    expectedSOutput.innerText = this.value;
};

expectedSOutputMobile.innerText = expectedSSliderMobile.value;
expectedSSliderMobile.oninput = function() {
    expectedSOutputMobile.innerText = this.value;
};

ppmOutput.innerText = ppmSlider.value;
ppmSlider.oninput = function() {
    ppmOutput.innerText = this.value;
};

//Calc & display results process on submit
document.getElementById('form').addEventListener('submit', (e) => {
    e.preventDefault();
    document.getElementById('table-headers').classList.remove('hidden');
    document.getElementById('table-headers-mobile').classList.remove('hidden');
    const loanInputValue = parseInt(loanASlider.value);
    const expectedInputValue = parseInt(expectedSSlider.value);
    const expectedInputValueMobile = parseInt(expectedSSliderMobile.value);
    const ppmInputValue = getPercentage(parseInt(ppmSlider.value));

    let monthlyRepayments = parseFloat(generateMRepayment(expectedInputValue, ppmInputValue)).toFixed(2);
    document.getElementById('monthly-repayment').innerText = '£' + monthlyRepayments;

    let monthlyRepaymentsMobile = parseFloat(generateMRepayment(expectedInputValueMobile, ppmInputValue)).toFixed(2);
    document.getElementById('monthly-repayment-mobile').innerText = '£' + monthlyRepaymentsMobile;

    let totalLoanRequested = feeRequiredCheck(loanInputValue);
    document.getElementById('total-borrowed').innerText = '£' + totalLoanRequested;

    let upFrontAdminFee = upFrontFee(totalLoanRequested);
    document.getElementById('upfront-admin-fee').innerText = '£' + upFrontAdminFee;

    let totalFee = parseFloat(generateTotalFee(loanInputValue, upFrontAdminFee)).toFixed(0);
    document.getElementById('total-fees').innerText = '£' + totalFee;

    let totalMonths = generateTotalMonths(totalLoanRequested, monthlyRepayments);
    document.getElementById('total-months').innerText = totalMonths;

    let totalMonthsMobile = generateTotalMonths(totalLoanRequested, monthlyRepaymentsMobile);
    document.getElementById('total-months-mobile').innerText = totalMonthsMobile;

    let schedule = generateSchedule(monthlyRepayments, totalLoanRequested);

    let scheduleMobile = generateSchedule(monthlyRepaymentsMobile, totalLoanRequested);

    fetch('hand.hbs')
        .then((handData) => {
            return handData.text()
        })
        .then((handData) => {
            let hbsTemplate = Handlebars.compile(handData);

            let displaySchedule = hbsTemplate(schedule);
            document.getElementById('tbody').innerHTML = displaySchedule;

            let displaySceduleMobile = hbsTemplate(scheduleMobile);
            document.getElementById('tbody-mobile').innerHTML = displaySceduleMobile;
        })
});

