
const loanASlider = document.getElementById('loan-amount-slider');
const loanAOutput = document.getElementById('loan-amount-text');

const expectedSSlider = document.getElementById('expected-salary-slider');
const expectedSOutput = document.getElementById('expected-salary-text');

const ppmSlider = document.getElementById('ppm-slider');
const ppmOutput = document.getElementById('ppm-text');

const calculatorSubmit = document.getElementById('calc-submit');


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

document.getElementById('form').addEventListener('submit', function(e) {
    e.preventDefault()
    const loanInputValue = parseInt(loanASlider.value);
    const expectedInputValue = parseInt(expectedSSlider.value);
    const ppmInputValue = parseInt(ppmSlider.value);

    var sum = loanInputValue + expectedInputValue;
    console.log(sum)
});
