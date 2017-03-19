/* Toggle button content */
function toggleExtraOptionsBtn() {
    var button = $('#btn-extra-options');
    button.on('click', function() {
        if (button.html() == '+ Add More Criteria') {
            button.html('- Hide Extra Criteria');
        } else {
            button.html('+ Add More Criteria');
        }
    });
}


/* Get params passed from index.html */
function getParams() {
    if (location.search.substring(1)) {
        var parameters = location.search.substring(1).split("&");
        var temp = parameters[0].split("=");
        propertyParam = unescape(temp[1]);
        temp = parameters[1].split("=");
        loanamountParam = unescape(temp[1]);
        temp = parameters[2].split("=");
        purposeParam = unescape(temp[1]);
        temp = parameters[3].split("=");
        countyParam = unescape(temp[1]);
        console.log(countyParam);


        document.getElementById('propertyvalue').value = String(propertyParam);
        document.getElementById('loanamount').value = String(loanamountParam);
        document.getElementById('loanpurpose').value = String(purposeParam);
        document.getElementById('county').value = String(countyParam);

        $('#getquote').click();
    }
}


/* Top button to go up the page */
function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}
// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Chrome, Safari and Opera
    document.documentElement.scrollTop = 0; // For IE and Firefox
}


/* Monthly Payment, Property Tax and Insurance calculator */
function calPTI(salesPrice, monthlyPayment) {
    if (salesPrice) {
        var salesPrice = Number(salesPrice);
        var propertyTax = salesPrice * 0.0125;
        var insurance = salesPrice * 0.002;
    }
}


/*** Determine if borrower is qualified for loan
**********************************************/
function qualify() {
    $('#qualify').on('click', function() {
        var monthlyIncome = Number($('#monthlyincome').val());
        var monthlyMortgagePayment = Number($('#mortgagepayment').val());
        var propertyTax = Number($('#propertytax').val());
        var homeInsurance = Number($('#insurance').val());
        var hoa = Number($('#hoa').val());
        var creditcardPayment = Number($('#creditcardpayment').val());
        var studentloanPayment = Number($('#studentloanpayment').val());
        var autoloanPayment = Number($('#autoloanpayment').val());
        var otherPayment = Number($('#otherpayment').val());

        var totalIncome = monthlyIncome;
        var formmatedTotalIncome = "$" + Number(totalIncome.toFixed(2)).toLocaleString();

        var totalDebt = monthlyMortgagePayment + propertyTax/12 + homeInsurance/12 + hoa + creditcardPayment +
                        studentloanPayment + autoloanPayment + otherPayment;
        var formattedTotalDebt = "$" + Number(totalDebt.toFixed(2)).toLocaleString();

        var dti = (totalDebt / totalIncome) * 100;
        var formattedDti = dti.toFixed(2) + "%";

        var qualified = "Congratulations! Your Debt-to-Income ratio is " + formattedDti + " and you are qualified for this loan.";
        var disqualified = "You are not qualified for this loan. Your Debt-to-Income ratio is currently higher than 45%." +
                            " Please contact us for more details.";
        var other = "We could not determine your qualification based on the information. " +
        "Please check if you entered all information correctly.";

        $('#totalincome').text(formmatedTotalIncome);
        $('#totaldebt').text(formattedTotalDebt);
        $('#dti').text(formattedDti);
        if (dti <= 45) {
            $('#result').css({color: "green"});
            $('#result').text(qualified);
        } else if (dti > 45) {
            $('#result').css({color: "red"});
            $('#result').text(disqualified);
        } else {
            $('#result').css({color: "red"});
            $('#result').text(other);
        }
    });
}
