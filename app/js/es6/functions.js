//Change full number to decimal to represent percentage for calculator
function getPercentage(input) {
    return input / 100
}

//Generate monthly repayment figure
function generateMRepayment(estimatedSalary, percentagePerMonth) {
    return (estimatedSalary * percentagePerMonth) / 12;
}

//Add fees if loanAmount greater than 80% (6400) and again if greater than 90% (7200)
function feeRequiredCheck(loanRequest) {
    let validatedLoanRequest;
    if (loanRequest >= 6400 && loanRequest < 7200) {
        validatedLoanRequest = loanRequest + 500
    } else if (loanRequest >= 7200) {
        validatedLoanRequest = loanRequest + 1000
    } else {
        validatedLoanRequest = loanRequest
    }
    return validatedLoanRequest
}

//Calculate upfront fee based on 5% of total borrowed
function upFrontFee(totalBorrowed) {
    return totalBorrowed * 0.05
}

//Generate fees together for display total fees
function generateTotalFee(loanRequest, upFrontAdminFee) {
    let loanIncrease, totalFeeReturned;
    if (loanRequest >= 6400 && loanRequest < 7200) {
        loanIncrease = 500
    } else if (loanRequest >= 7200) {
        loanIncrease = 1000
    } else {
        loanIncrease = 0
    }
    totalFeeReturned = upFrontAdminFee + loanIncrease;
    return totalFeeReturned
}

//Generate total months it will take to pay, round up to highest every time
function generateTotalMonths(totalLoanRequested, monthlyRepayment) {
    return Math.ceil(totalLoanRequested / monthlyRepayment)
}

//Generate schedule from dynamic input and fill obj arr
function generateSchedule(monthlyPayment, requiredLoanRequested) {
    let month = 0;
    let paidThisMonth;
    let scheduleObject = {
        schedule: []
    };

    while (requiredLoanRequested > 0) {

        let monthlyPaymentFigure = {
            "month": "",
            "balance": "",
            "paid-this-month": ""
        };

        if (requiredLoanRequested < monthlyPayment) {
            paidThisMonth = requiredLoanRequested;
            month++;
            requiredLoanRequested = 0
        } else {
            requiredLoanRequested = requiredLoanRequested - monthlyPayment;
            month++;
            paidThisMonth = monthlyPayment;
        }

        //Generate monthly payment figure object then push into schedule obj arr
        monthlyPaymentFigure.month = month;
        monthlyPaymentFigure.balance = parseFloat(requiredLoanRequested).toFixed(2);
        monthlyPaymentFigure["paid-this-month"] = parseFloat(paidThisMonth).toFixed(2);
        scheduleObject.schedule.push(monthlyPaymentFigure)

    }
    return scheduleObject
}

//Resize container when device width less than 767px
function checkSize() {
    let container = document.getElementById('container')
    if ($(".calc-input-display").css('width') === '130px') {
        container.classList.add('container-fluid');
        container.classList.remove('container');
    } else {
        container.classList.add('container');
        container.classList.remove('container-fluid');
    }
}





















