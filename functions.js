//Change full number to decimal to represent percentage for calculator
function getPercentage(input) {
    return input / 100
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

//Add fees together for display total fees
function totalFee(loanRequest, ) {

}