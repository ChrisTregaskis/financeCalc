"use strict";

var loanASlider = document.getElementById('loan-amount-slider');
var loanAOutput = document.getElementById('loan-amount-text');
var expectedSSlider = document.getElementById('expected-salary-slider');
var expectedSOutput = document.getElementById('expected-salary-text');
var ppmSlider = document.getElementById('ppm-slider');
var ppmOutput = document.getElementById('ppm-text');
var errorLA = false;
var errorES = false;
$(document).ready(function () {
  var loanAmount = $('#loanAmount');
  var expectedSalary = $('#expectedSalary');
  var percentagePaidMonthly = $('#percentagePaidMonthly');
  var infoBoxScrollHeight = document.getElementById('info-box').scrollHeight;
  var infoBox = $('.info-box'); //When hovering/using range sliders, change colours of displayed values

  $('#loan-amount-slider').hover(function () {
    loanAmount.css('background-color', '#3498db');
    loanAmount.css('color', '#ecf0f1');
    loanAmount.css('transition', 'color 0.4s, background-color 0.4s');
  }, function () {
    loanAmount.css('background-color', 'transparent');
    loanAmount.css('color', '#000');
    loanAmount.css('transition', 'color 0.4s, background-color 0.4s');
  });
  $('#expected-salary-slider').hover(function () {
    expectedSalary.css('background-color', '#3498db');
    expectedSalary.css('color', '#ecf0f1');
    expectedSalary.css('transition', 'color 0.4s, background-color 0.4s');
  }, function () {
    expectedSalary.css('background-color', 'transparent');
    expectedSalary.css('color', '#000');
    expectedSalary.css('transition', 'color 0.4s, background-color 0.4s');
  });
  $('#ppm-slider').hover(function () {
    percentagePaidMonthly.css('background-color', '#3498db');
    percentagePaidMonthly.css('color', '#ecf0f1');
    percentagePaidMonthly.css('transition', 'color 0.4s, background-color 0.4s');
  }, function () {
    percentagePaidMonthly.css('background-color', 'transparent');
    percentagePaidMonthly.css('color', '#000');
    percentagePaidMonthly.css('transition', 'color 0.4s, background-color 0.4s');
  });
  $('#loanAmount').hover(function () {
    loanAmount.css('background-color', '#e67e22');
    loanAmount.css('border-color', 'transparent');
    loanAmount.css('color', '#ecf0f1');
    loanAmount.css('transition', 'color 0.4s, background-color 0.4s, border-color 0.4s');
  }, function () {
    loanAmount.css('background-color', 'transparent');
    loanAmount.css('border-color', '#3498db');
    loanAmount.css('color', '#000');
    loanAmount.css('transition', 'color 0.4s, background-color 0.4s, border-color 0.4s');
  });
  $('#expectedSalary').hover(function () {
    expectedSalary.css('background-color', '#e67e22');
    expectedSalary.css('border-color', 'transparent');
    expectedSalary.css('color', '#ecf0f1');
    expectedSalary.css('transition', 'color 0.4s, background-color 0.4s, border-color 0.4s');
  }, function () {
    expectedSalary.css('background-color', 'transparent');
    expectedSalary.css('border-color', '#3498db');
    expectedSalary.css('color', '#000');
    expectedSalary.css('transition', 'color 0.4s, background-color 0.4s, border-color 0.4s');
  }); //Display custom input value boxes

  $('#loanAmount').click(function () {
    $('.custom-la-input-box').animate({
      height: '50px',
      opacity: '1',
      margin: '10px auto'
    }, 500);
  });
  $('#customLABtn').click(function () {
    if (errorLA === false) {
      $('.custom-la-input-box').animate({
        height: '0',
        opacity: '0',
        margin: '0'
      }, 500);
    }
  });
  $('#customLABtnCancel').click(function () {
    $('.custom-la-input-box').animate({
      height: '0',
      opacity: '0',
      margin: '0'
    }, 500);
  });
  $('#expectedSalary').click(function () {
    $('.custom-es-input-box').animate({
      height: '50px',
      opacity: '1',
      margin: '10px auto'
    }, 500);
  });
  $('#customESBtn').click(function () {
    if (errorES === false) {
      $('.custom-es-input-box').animate({
        height: '0',
        opacity: '0',
        margin: '0'
      }, 500);
    }
  });
  $('#customESBtnCancel').click(function () {
    $('.custom-es-input-box').animate({
      height: '0',
      opacity: '0',
      margin: '0'
    }, 500);
  }); //Display info-box

  $('#question-mark').click(function () {
    infoBox.animate({
      height: infoBoxScrollHeight,
      opacity: '1'
    }, 500);
    infoBox.animate({
      margin: '30px auto'
    }, 500);
  });
  $('.upfront-fee').click(function () {
    infoBox.animate({
      height: infoBoxScrollHeight,
      opacity: '1'
    }, 500);
    infoBox.animate({
      margin: '30px auto'
    }, 500);
  });
  $('#close-box-icon').click(function () {
    infoBox.animate({
      height: '0',
      opacity: '0'
    }, 1000);
    infoBox.animate({
      margin: '0'
    }, 500);
  }); //Change container to container-fluid depending on screen width

  checkSize();
  $(window).resize(checkSize);
}); //Calc box display values

loanAOutput.innerText = loanASlider.value;

loanASlider.oninput = function () {
  loanAOutput.innerText = this.value;
};

expectedSOutput.innerText = expectedSSlider.value;

expectedSSlider.oninput = function () {
  expectedSOutput.innerText = this.value;
};

ppmOutput.innerText = ppmSlider.value;

ppmSlider.oninput = function () {
  ppmOutput.innerText = this.value;
}; //Manage custom inputs


document.getElementById('customLABtn').addEventListener('click', function () {
  var customInputLA = document.getElementById('customLAInput').value;
  loanASlider.value = customInputLA;

  if (customInputLA > 8000 || customInputLA < 1 || '') {
    document.getElementById('errorLA').innerHTML = '<p>Error! Please select an amount equal or below £8000</p>';
    errorLA = true;
  } else if (customInputLA <= 8000) {
    errorLA = false;
    document.getElementById('errorLA').innerHTML = '';
    loanAOutput.innerText = loanASlider.value;

    loanASlider.oninput = function () {
      loanAOutput.innerText = this.value;
    };
  }
});
document.getElementById('customESBtn').addEventListener('click', function () {
  var customInputES = document.getElementById('customESInput').value;
  expectedSSlider.value = customInputES;

  if (customInputES > 80000 || customInputES < 17000 || '') {
    document.getElementById('errorES').innerHTML = '<p>Error! Please select an estimated salary between £17k and £80k</p>';
    errorES = true;
  } else if (customInputES <= 80000) {
    errorES = false;
    document.getElementById('errorES').innerHTML = '';
    expectedSOutput.innerText = expectedSSlider.value;

    expectedSSlider.oninput = function () {
      expectedSOutput.innerText = this.value;
    };
  }
}); //Calc & display results process on submit

document.getElementById('form').addEventListener('submit', function (e) {
  e.preventDefault();
  document.getElementById('table-headers').classList.remove('hidden');
  var loanInputValue = parseInt(loanASlider.value);
  var expectedInputValue = parseInt(expectedSSlider.value);
  var ppmInputValue = getPercentage(parseInt(ppmSlider.value));
  var monthlyRepayments = parseFloat(generateMRepayment(expectedInputValue, ppmInputValue)).toFixed(2);
  document.getElementById('monthly-repayment').innerText = monthlyRepayments;
  var totalLoanRequested = feeRequiredCheck(loanInputValue);
  document.getElementById('total-borrowed').innerText = totalLoanRequested;
  var upFrontAdminFee = parseInt(upFrontFee(totalLoanRequested));
  document.getElementById('upfront-admin-fee').innerText = upFrontAdminFee;
  var totalFee = parseInt(generateTotalFee(loanInputValue, upFrontAdminFee));
  document.getElementById('total-fees').innerText = totalFee;
  var totalMonths = generateTotalMonths(totalLoanRequested, monthlyRepayments);
  document.getElementById('total-months').innerText = totalMonths;
  var schedule = generateSchedule(monthlyRepayments, totalLoanRequested);
  fetch('hand.hbs').then(function (handData) {
    return handData.text();
  }).then(function (handData) {
    var hbsTemplate = Handlebars.compile(handData);
    var displaySchedule = hbsTemplate(schedule);
    document.getElementById('tbody').innerHTML = displaySchedule;
  });
  $('.count').each(function () {
    $(this).prop('Counter', 0).animate({
      Counter: $(this).text()
    }, {
      duration: 1000,
      easing: 'swing',
      step: function step(now) {
        $(this).text(Math.ceil(now));
      }
    });
  });
});