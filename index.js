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
    var monthlyRepayments = generateMRepayment(expectedInputValue, ppmInputValue);

    //Total borrowed
    var totalLoanRequested = feeRequiredCheck(loanInputValue);

    //Upfront admin fee
    var upFrontAdminFee = upFrontFee(totalLoanRequested);

    //Total fees
    var totalFee = generateTotalFee(loanInputValue, upFrontAdminFee);

    //Total months
    var totalMonths = generateTotalMonths(totalLoanRequested, monthlyRepayments);

});




