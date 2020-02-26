
var loanASlider = document.getElementById('loan-amount-slider');
var loanAOutput = document.getElementById('loan-amount-text');
var expectedSSlider = document.getElementById('expected-salary-slider');
var expectedSOutput = document.getElementById('expected-salary-text');
var ppmSlider = document.getElementById('ppm-slider');
var ppmOutput = document.getElementById('ppm-text');


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
