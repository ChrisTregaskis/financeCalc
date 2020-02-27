const loanASlider = document.getElementById('loan-amount-slider');
const loanAOutput = document.getElementById('loan-amount-text');
const expectedSSlider = document.getElementById('expected-salary-slider');
const expectedSOutput = document.getElementById('expected-salary-text');
const ppmSlider = document.getElementById('ppm-slider');
const ppmOutput = document.getElementById('ppm-text');

//Loan amount display
loanAOutput.innerText = loanASlider.value;
loanASlider.oninput = function() {
    loanAOutput.innerText = this.value;
};

//Expected salary display
expectedSOutput.innerText = expectedSSlider.value;
expectedSSlider.oninput = function() {
    expectedSOutput.innerText = this.value;
};

//Percentage paid per-month display
ppmOutput.innerText = ppmSlider.value;
ppmSlider.oninput = function() {
    ppmOutput.innerText = this.value;
};

//Calc process
document.getElementById('form').addEventListener('submit', (e) => {
    e.preventDefault()
    //Grab inputs from range slider
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

});




