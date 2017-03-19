/* Mega Capital Funding Rate Sheet Tables
****************************************/

var tables = {
    agn30: [
        //Rate - 30 Days
        [5.125, 6.000], // 0
        [5.000, 5.625], // 1
        [4.875, 5.000], // 2
        [4.750, 4.750], // 3
        [4.625, 4.125], // 4
        [4.500, 3.500], // 5
        [4.375, 2.750], // 6
        [4.250, 2.000], // 7
        [4.125, 1.375], // 8
        [4.000, 0.625]  // 9
    ],

    agn20: [
        //Rate - 30 Days
        [4.750, 5.125],
        [4.625, 4.750],
        [4.500, 4.500],
        [4.375, 3.750],
        [4.250, 3.125],
        [4.125, 2.500],
        [4.000, 1.875],
        [3.875, 1.250],
        [3.750, 0.500],
        [3.625, -0.125]
    ],

    agn15: [
        //Rate - 30 Days
        [4.250, 4.750],
        [4.125, 4.250],
        [4.000, 3.875],
        [3.875, 3.375],
        [3.750, 3.000],
        [3.625, 2.500],
        [3.500, 2.125],
        [3.375, 1.625],
        [3.250, 1.250],
        [3.125, 0.000]
    ],

    agn10: [
        //Rate - 30 Days
        [4.000, 3.750],
        [3.875, 3.500],
        [3.750, 3.125],
        [3.625, 2.375],
        [3.500, 2.125],
        [3.375, 1.875],
        [3.250, 1.500],
        [3.125, 0.875],
        [3.000, 0.500],
        [2.875, 0.125]
    ],

    hb30: [
        //Rate - 30 Days
        [5.000, 4.625],
        [4.875, 4.375],
        [4.750, 3.625],
        [4.625, 3.125],
        [4.500, 2.500],
        [4.375, 2.000],
        [4.250, 1.500],
        [4.125, 0.875],
        [4.000, 0.125],
        [3.875, -0.625]
    ],

    hb15: [
        //Rate - 30 Days
        [4.125, 2.625],
        [4.000, 2.750],
        [3.875, 2.500],
        [3.750, 2.250],
        [3.625, 1.750],
        [3.500, 1.375],
        [3.375, 0.875],
        [3.250, 0.500],
        [3.125, -0.625],
        [3.000, -1.125]
    ]

}


/***********************
    Price Adjustments
******** * * * ********/

// LTV/FICO Adjustments: All products with Terms > 15 Years, Fixed & ARMS
var lvtScoreTable = {
    // LVT <= 60% | Table 0
    lessThan60:
    [
        /* Fico >= 740     | ID: 0 */ 0.00,
        /* Fico 720 - 739  | ID: 1 */ 0.00,
        /* Fico 700 - 719  | ID: 2 */ 0.00,
        /* Fico 680 - 699  | ID: 3 */ 0.00,
        /* Fico 660 - 679  | ID: 4 */ 0.00,
        /* Fico 640 - 659  | ID: 5 */ 0.50,
        /* Fico 620 - 639  | ID: 6 */ 0.50,
    ],

    // LVT 60.01 - 70 | Table 1
    lessThan70:
    [
        /* Fico >= 740     | ID: 0 */ 0.250,
        /* Fico 720 - 739  | ID: 1 */ 0.250,
        /* Fico 700 - 719  | ID: 2 */ 0.500,
        /* Fico 680 - 699  | ID: 3 */ 0.500,
        /* Fico 660 - 679  | ID: 4 */ 1.000,
        /* Fico 640 - 659  | ID: 5 */ 1.250,
        /* Fico 620 - 639  | ID: 6 */ 1.500,
    ],

    // LVT 70.01 - 75 | Table 2
    lessThan75:
    [
        /* Fico >= 740     | ID: 0 */ 0.250,
        /* Fico 720 - 739  | ID: 1 */ 0.500,
        /* Fico 700 - 719  | ID: 2 */ 1.000,
        /* Fico 680 - 699  | ID: 3 */ 1.250,
        /* Fico 660 - 679  | ID: 4 */ 2.250,
        /* Fico 640 - 659  | ID: 5 */ 2.750,
        /* Fico 620 - 639  | ID: 6 */ 3.000,
    ],

    // LVT 75.01 - 80 | Table 3
    lessThan80:
    [
        /* Fico >= 740     | ID: 0 */ 0.50,
        /* Fico 720 - 739  | ID: 1 */ 0.750,
        /* Fico 700 - 719  | ID: 2 */ 1.250,
        /* Fico 680 - 699  | ID: 3 */ 1.750,
        /* Fico 660 - 679  | ID: 4 */ 2.750,
        /* Fico 640 - 659  | ID: 5 */ 3.000,
        /* Fico 620 - 639  | ID: 6 */ 3.000,
    ],

    // LVT 80.01 - 85 | Table 4
    lessThan85:
    [
        /* Fico >= 740     | ID: 0 */ 0.250,
        /* Fico 720 - 739  | ID: 1 */ 0.500,
        /* Fico 700 - 719  | ID: 2 */ 1.000,
        /* Fico 680 - 699  | ID: 3 */ 1.500,
        /* Fico 660 - 679  | ID: 4 */ 2.750,
        /* Fico 640 - 659  | ID: 5 */ 3.250,
        /* Fico 620 - 639  | ID: 6 */ 3.250,
    ],

    // LVT 85.01 - 90 | Table 5
    lessThan90:
    [
        /* Fico >= 740     | ID: 0 */ 0.250,
        /* Fico 720 - 739  | ID: 1 */ 0.500,
        /* Fico 700 - 719  | ID: 2 */ 1.000,
        /* Fico 680 - 699  | ID: 3 */ 1.250,
        /* Fico 660 - 679  | ID: 4 */ 2.250,
        /* Fico 640 - 659  | ID: 5 */ 2.750,
        /* Fico 620 - 639  | ID: 6 */ 3.250,
    ],

    // LVT 90.01 - 95 | Table 6
    lessThan95:
    [
        /* Fico >= 740     | ID: 0 */ 0.250,
        /* Fico 720 - 739  | ID: 1 */ 0.500,
        /* Fico 700 - 719  | ID: 2 */ 1.000,
        /* Fico 680 - 699  | ID: 3 */ 1.250,
        /* Fico 660 - 679  | ID: 4 */ 2.250,
        /* Fico 640 - 659  | ID: 5 */ 2.750,
        /* Fico 620 - 639  | ID: 6 */ 3.250,
    ],

    // LVT 95.01 - 97 | Table 7
    lessThan97:
    [
        /* Fico >= 740     | ID: 0 */ 0.750,
        /* Fico 720 - 739  | ID: 1 */ 1.000,
        /* Fico 700 - 719  | ID: 2 */ 1.500,
        /* Fico 680 - 699  | ID: 3 */ 1.500,
        /* Fico 660 - 679  | ID: 4 */ 2.250,
        /* Fico 640 - 659  | ID: 5 */ 2.750,
        /* Fico 620 - 639  | ID: 6 */ 3.500,
    ]
}

var cashOutRefiTable = {
    // LVT <= 60% | Table 0
    lessThan60:
    [
        /* Fico >= 740     | ID: 0 */ 0.375,
        /* Fico 720 - 739  | ID: 1 */ 0.375,
        /* Fico 700 - 719  | ID: 2 */ 0.375,
        /* Fico 680 - 699  | ID: 3 */ 0.375,
        /* Fico 660 - 679  | ID: 4 */ 0.625,
        /* Fico 640 - 659  | ID: 5 */ 0.625,
        /* Fico 620 - 639  | ID: 6 */ 0.625,
    ],

    // LVT <= 70% | Table 1
    lessThan70:
    [
        /* Fico >= 740     | ID: 0 */ 0.625,
        /* Fico 720 - 739  | ID: 1 */ 1.000,
        /* Fico 700 - 719  | ID: 2 */ 1.000,
        /* Fico 680 - 699  | ID: 3 */ 1.125,
        /* Fico 660 - 679  | ID: 4 */ 1.125,
        /* Fico 640 - 659  | ID: 5 */ 1.625,
        /* Fico 620 - 639  | ID: 6 */ 1.625,
    ],

    // LVT <= 75% | Table 2
    lessThan75:
    [
        /* Fico >= 740     | ID: 0 */ 0.625,
        /* Fico 720 - 739  | ID: 1 */ 1.000,
        /* Fico 700 - 719  | ID: 2 */ 1.000,
        /* Fico 680 - 699  | ID: 3 */ 1.125,
        /* Fico 660 - 679  | ID: 4 */ 1.125,
        /* Fico 640 - 659  | ID: 5 */ 1.625,
        /* Fico 620 - 639  | ID: 6 */ 1.625,
    ],

    // LVT <= 80% | Table 3
    lessThan80:
    [
        /* Fico >= 740     | ID: 0 */ 0.875,
        /* Fico 720 - 739  | ID: 1 */ 1.125,
        /* Fico 700 - 719  | ID: 2 */ 1.125,
        /* Fico 680 - 699  | ID: 3 */ 1.750,
        /* Fico 660 - 679  | ID: 4 */ 1.875,
        /* Fico 640 - 659  | ID: 5 */ 2.625,
        /* Fico 620 - 639  | ID: 6 */ 3.125,
    ],
}

var lpmiTable = {
    // LTV >= 95.01
    ltvGreaterThan95: {
        cover35: [
            /* Fico >= 800 | ID: 0 */ 2.5,
            /* Fico >= 780 | ID: 1 */ 2.5,
            /* Fico >= 760 | ID: 2 */ 2.5,
            /* Fico >= 740 | ID: 3 */ 3.5,
            /* Fico >= 720 | ID: 4 */ 4.375,
            /* Fico >= 700 | ID: 5 */ 5.250,
            /* Fico >= 680 | ID: 6 */ 6.375,
            /* Fico >= 660 | ID: 7 */ 8.500,
            /* Fico >= 640 | ID: 8 */ 9.125,
            /* Fico >= 620 | ID: 9 */ 9.750
        ],
        cover25: [
            /* Fico >= 800 | ID: 0 */ 2.0,
            /* Fico >= 780 | ID: 1 */ 2.0,
            /* Fico >= 760 | ID: 2 */ 2.0,
            /* Fico >= 740 | ID: 3 */ 2.625,
            /* Fico >= 720 | ID: 4 */ 3.250,
            /* Fico >= 700 | ID: 5 */ 3.875,
            /* Fico >= 680 | ID: 6 */ 4.750,
            /* Fico >= 660 | ID: 7 */ 6.250,
            /* Fico >= 640 | ID: 8 */ 6.750,
            /* Fico >= 620 | ID: 9 */ 7.250
        ]
    },

    ltvGreaterThan90: {
        cover30: [
            /* Fico >= 800 | ID: 0 */ 1.875,
            /* Fico >= 780 | ID: 1 */ 1.875,
            /* Fico >= 760 | ID: 2 */ 1.875,
            /* Fico >= 740 | ID: 3 */ 2.625,
            /* Fico >= 720 | ID: 4 */ 3.250,
            /* Fico >= 700 | ID: 5 */ 3.875,
            /* Fico >= 680 | ID: 6 */ 4.750,
            /* Fico >= 660 | ID: 7 */ 6.125,
            /* Fico >= 640 | ID: 8 */ 6.5,
            /* Fico >= 620 | ID: 9 */ 6.875
        ],
        cover25: [
            /* Fico >= 800 | ID: 0 */ 1.625,
            /* Fico >= 780 | ID: 1 */ 1.625,
            /* Fico >= 760 | ID: 2 */ 1.625,
            /* Fico >= 740 | ID: 3 */ 2.250,
            /* Fico >= 720 | ID: 4 */ 2.750,
            /* Fico >= 700 | ID: 5 */ 3.250,
            /* Fico >= 680 | ID: 6 */ 4.000,
            /* Fico >= 660 | ID: 7 */ 5.250,
            /* Fico >= 640 | ID: 8 */ 5.500,
            /* Fico >= 620 | ID: 9 */ 5.875
        ]
    },

    ltvGreaterThan85: {
        cover25: [
            /* Fico >= 800 | ID: 0 */ 1.375,
            /* Fico >= 780 | ID: 1 */ 1.375,
            /* Fico >= 760 | ID: 2 */ 1.375,
            /* Fico >= 740 | ID: 3 */ 2.000,
            /* Fico >= 720 | ID: 4 */ 2.5,
            /* Fico >= 700 | ID: 5 */ 3.000,
            /* Fico >= 680 | ID: 6 */ 3.625,
            /* Fico >= 660 | ID: 7 */ 4.875,
            /* Fico >= 640 | ID: 8 */ 5.000,
            /* Fico >= 620 | ID: 9 */ 5.250
        ]
    },

    ltvGreaterThan80: {
        cover12: [
            /* Fico >= 800 | ID: 0 */ 0.750,
            /* Fico >= 780 | ID: 1 */ 0.750,
            /* Fico >= 760 | ID: 2 */ 0.750,
            /* Fico >= 740 | ID: 3 */ 0.875,
            /* Fico >= 720 | ID: 4 */ 1.000,
            /* Fico >= 700 | ID: 5 */ 1.250,
            /* Fico >= 680 | ID: 6 */ 1.375,
            /* Fico >= 660 | ID: 7 */ 1.875,
            /* Fico >= 640 | ID: 8 */ 2.000,
            /* Fico >= 620 | ID: 9 */ 2.250
        ]
    }

}

var lpmiPriceAdjustmentsTable = {
    // <= 25 Years Amortization
    lessThan25YTerm: [
        /* Fico >= 760 | ID: 0 */ -0.125,
        /* Fico >= 740 | ID: 1 */ -0.125,
        /* Fico >= 720 | ID: 2 */ -0.125,
        /* Fico >= 700 | ID: 3 */ -0.250,
        /* Fico >= 680 | ID: 4 */ -0.250,
        /* Fico >= 660 | ID: 5 */ -0.375,
        /* Fico >= 640 | ID: 6 */ -0.375,
        /* Fico >= 620 | ID: 7 */ -0.375
    ],

    // Rate/Term Refinance
    refinance: [
        /* Fico >= 760 | ID: 0 */ 0.250,
        /* Fico >= 740 | ID: 1 */ 0.250,
        /* Fico >= 720 | ID: 2 */ 0.375,
        /* Fico >= 700 | ID: 3 */ 0.500,
        /* Fico >= 680 | ID: 4 */ 0.625,
        /* Fico >= 660 | ID: 5 */ 0.750,
        /* Fico >= 640 | ID: 6 */ 0.875,
        /* Fico >= 620 | ID: 7 */ 1.125
    ],

    // Second Home
    secondHome: [
        /* Fico >= 760 | ID: 0 */ 0.375,
        /* Fico >= 740 | ID: 1 */ 0.500,
        /* Fico >= 720 | ID: 2 */ 0.500,
        /* Fico >= 700 | ID: 3 */ 0.625,
        /* Fico >= 680 | ID: 4 */ 0.750,
        /* Fico >= 660 | ID: 5 */ 1.250,
        /* Fico >= 640 | ID: 6 */ 1.375,
        /* Fico >= 620 | ID: 7 */ 1.375
    ],

    // Investment Property
    investmentProperty: [
        /* Fico >= 760 | ID: 0 */ 1.125,
        /* Fico >= 740 | ID: 1 */ 1.250,
        /* Fico >= 720 | ID: 2 */ 1.375,
        /* Fico >= 700 | ID: 3 */ 0,
        /* Fico >= 680 | ID: 4 */ 0,
        /* Fico >= 660 | ID: 5 */ 0,
        /* Fico >= 640 | ID: 6 */ 0,
        /* Fico >= 620 | ID: 7 */ 0
    ],

    // Loan Amount > $650K
    loanGt650: [
        /* Fico >= 760 | ID: 0 */ 0.625,
        /* Fico >= 740 | ID: 1 */ 0.750,
        /* Fico >= 720 | ID: 2 */ 0.750,
        /* Fico >= 700 | ID: 3 */ 1.000,
        /* Fico >= 680 | ID: 4 */ 1.250,
        /* Fico >= 660 | ID: 5 */ 1.500,
        /* Fico >= 640 | ID: 6 */ 1.875,
        /* Fico >= 620 | ID: 7 */ 2.125
    ]

}

function getInterestRate(termOfLoan) {
    var term = termOfLoan;
    var list = [];

    if (term === 30) {
        if (highBalance()) {
            for (var i=0; i < tables.hb30.length; i++) {
            list.push(tables.hb30[i][0]);
        }
        return list;
        } else {
            for (var i=0; i < tables.agn30.length; i++) {
                list.push(tables.agn30[i][0]);
            }
        return list;
        }
    } else if (term === 20) {
        for (var i=0; i < tables.agn20.length; i++) {
            list.push(tables.agn20[i][0]);
        }
        return list;
    } else if (term === 15) {
        if (highBalance()) {
            for (var i=0; i < tables.hb15.length; i++) {
            list.push(tables.hb15[i][0]);
        }
        return list;
        } else {
        for (var i=0; i < tables.agn15.length; i++) {
            list.push(tables.agn15[i][0]);
        }
        return list;
        }
    } else if (term === 10) {
        for (var i=0; i < tables.agn10.length; i++) {
            list.push(tables.agn10[i][0]);
        }
        return list;
    } else {
        alert("Could not get the rate you requested");
    }
}

function calculatePriceAdjusters() {

    var resultArray = [];
    var propertyType = $('#propertytype').val();
    var creditScoreFico = Number($('#creditscore').val());
    var termOfLoan = Number($('#numberofyears').val());

    var loanAmt = Number($('#loanamount').val());
    var propAmt = Number($('#propertyvalue').val());
    var ltv = (loanAmt/propAmt).toFixed(2) * 100;

    // Loan Amt Adjuster
    var loanAmtAdjustedRate;
    if (loanAmt < 100000) {
        loanAmtAdjustedRate = 0.750;
    } else if ((loanAmt >= 100000) && (loanAmt < 150000)) {
        loanAmtAdjustedRate = 0.250;
    } else {
        loanAmtAdjustedRate = 0;
    }
    resultArray.push(loanAmtAdjustedRate);

    // Condo Adjuster
    var condoAdjustedRate;
    if (((propertyType === "condo") || (propertyType === "townhouse")) && (termOfLoan > 15) && (ltv > 75)) {
        condoAdjustedRate = 0.750;
    } else {
        condoAdjustedRate = 0;
    }
    resultArray.push(condoAdjustedRate);

    // NOO Adjuster
    var occupancy = $('#occupancy').val();
    var nooAdjustedRate;
    if ((occupancy === 'noo') && (ltv < 75)) {
        nooAdjustedRate = 2.125;
    } else if ((occupancy === 'noo') && (ltv <= 80)) {
        nooAdjustedRate = 3.375;
    } else if ((occupancy === 'noo') && (ltv <= 85)) {
        nooAdjustedRate = 4.125;
    } else {
        nooAdjustedRate = 0;
    }
    resultArray.push(nooAdjustedRate);

    // No Impound Adjuster
    var impound = $('#impound').val();
    var impoundAdjustedRate;
    if (impound === 'n') {
        impoundAdjustedRate = 0.125;
    } else {
        impoundAdjustedRate = 0;
    }
    resultArray.push(impoundAdjustedRate);

    // 2-4 Units Adjuster
    var unitAdjustedRate;
    if ((propertyType === 'duplex') || (propertyType === 'triplex') || (propertyType === 'fourplex')) {
        unitAdjustedRate = 1.000;
    } else {
        unitAdjustedRate = 0;
    }
    resultArray.push(unitAdjustedRate);

    // LTV Adjuster
    var ltvAdjustedRate;
    if ((ltv >= 95.01) && (ltv <= 97)) {
        ltvAdjustedRate = 0.5;
    } else {
        ltvAdjustedRate = 0;
    }
    resultArray.push(ltvAdjustedRate);

    // High Balance Adjuster
    var hbAdjustedRate;
    var loanPurpose = $('#loanpurpose').val();
    if ((highBalance()) && (loanPurpose != 'cashout')) {
        hbAdjustedRate = 0.250;
    } else if ((highBalance()) && (loanPurpose === 'cashout')) {
        hbAdjustedRate = 1.000;
    } else {
        hbAdjustedRate = 0;
    }
    resultArray.push(hbAdjustedRate);

    // Lender Paid Mortgage Insurance Adjuster
    var lpmi = getLpmi(ltv, creditScoreFico);
    resultArray.push(lpmi);

    // If LTV > 80, Calculate LPMI Price Adjustments
    if (ltv > 80) {
        if (termOfLoan <= 25) {
            var rate1 = getLpmiRateAdjuster(creditScoreFico, lpmiPriceAdjustmentsTable.lessThan25YTerm);
            resultArray.push(rate1);
        }
        if (loanPurpose === 'refinance') {
            var rate2 = getLpmiRateAdjuster(creditScoreFico, lpmiPriceAdjustmentsTable.refinance);
            resultArray.push(rate2);
        }
        if (occupancy === 'secondhome') {
            var rate3 = getLpmiRateAdjuster(creditScoreFico, lpmiPriceAdjustmentsTable.secondHome);
            resultArray.push(rate3);
        }
        if (occupancy === 'noo') {
            var rate4 = getLpmiRateAdjuster(creditScoreFico, lpmiPriceAdjustmentsTable.investmentProperty);
            resultArray.push(rate4);
        }
        if (loanAmt > 650000) {
            var rate5 = getLpmiRateAdjuster(creditScoreFico, lpmiPriceAdjustmentsTable.loanGt650);
            resultArray.push(rate5);
        }
    }

    return resultArray;
}


function getQuoteResultTable() {
    $('#getquote').click(function() {
        $('#interesttable').show();

        var termOfLoan = Number($('#numberofyears').val());

        var rateList = getInterestRate(termOfLoan);
        var paymentList = [];

        var loanAmount = Number($("#loanamount").val());
        var propertyValue = Number($('#propertyvalue').val());
        var loanToValue = (loanAmount / propertyValue) * 100;
        var numberOfYears = Number($("#numberofyears").val());
        var numberOfMonths = numberOfYears * 12;

        // If LTV > 80 show LPMI section
        var lpmiInput = $('#lpmiInput');
        if (loanToValue > 80) {
            lpmiInput.show();
        } else if (loanToValue <= 80) {
            lpmiInput.hide();
        }

        for (var i=0; i < rateList.length; i++) {
            var rateOfInterest = rateList[i];
            var monthlyInterestRatio = (rateOfInterest/100)/12;
            var top = Math.pow((1+monthlyInterestRatio),numberOfMonths);
            var bottom = top -1;
            var sp = top / bottom;
            var emi = ((loanAmount * monthlyInterestRatio) * sp);

            paymentList.push(emi);
        }

        var detailDesc2 = "<thead><tr><th></th><th>Interest Rate</th><th>Closing Cost</th><th>APR</th>" +
        "<th>Payment</th><th>Apply</th><th>Qualification</th><th>Rates Updated</thead><tbody>";

        var orderNo = 1;
        for (var j=0; j<rateList.length; j++){

            var pickedTable = getTable();

            var rateOfInterest = rateList[j];
            var monthlyInterestRatio = (rateOfInterest/100)/12;

            var top = Math.pow((1+monthlyInterestRatio),numberOfMonths);
            var bottom = top -1;
            var sp = top / bottom;
            var emi = ((loanAmount * monthlyInterestRatio) * sp);
            var formatedEmi = Number(emi.toFixed(2)).toLocaleString();

            function getFinalAdjustedRate() {
                var creditScore = Number($('#creditscore').val());

                var initialRebateRate = calculateCC(rateOfInterest, pickedTable);
                var adjustedRebateRate = calPriceAdRate(loanToValue, creditScore, termOfLoan);

                var priceAdjustmentList = calculatePriceAdjusters();
                var totalRateAdjusters = 0;
                for (var i=0; i < priceAdjustmentList.length; i++) {
                    totalRateAdjusters += priceAdjustmentList[i];
                }

                var lenderFee = 1.75;
                var finalRebateRate = initialRebateRate - (adjustedRebateRate + totalRateAdjusters + lenderFee);
                var rebateAmount = finalRebateRate * loanAmount / 100;

                return rebateAmount;
            }

            var rebateAmountResult = getFinalAdjustedRate();

            // Calculate APR
            var adjustedBalance;
            if (rebateAmountResult < 0) {
                adjustedBalance = loanAmount - rebateAmountResult;
            } else {
                adjustedBalance = loanAmount + rebateAmountResult;
            }
            var adjustedEmi = (adjustedBalance * monthlyInterestRatio) * sp;
            var apr = (calculateAPR(loanAmount, numberOfMonths, rateOfInterest, rebateAmountResult) * 100).toFixed(2);

	        function calculateAPR(loanamount, numpayments, baseannualrate, costs){
    	    /*
    	    By Paul Cormier - Sep 10, 2010 - http://webmasterymadesimple.com
    	    loanamount  = the amount borrowed
    	    numpayments = number of monthly payments e.g. 30 years = 360
    	    baserate    = the base percentage rate of the loan. A 5.25% Annual Rate should be passed in as 0.0525 NOT 5.25
    	    costs       = the loan closing costs e.g. origination fee, broker fees, etc.
    	    */
        	    var rate =  (rateOfInterest/100) / 12;
        	    var totalmonthlypayment = ((adjustedBalance) * rate * Math.pow(1+rate,numberOfMonths)) / (Math.pow(1+rate, numberOfMonths)-1);
                var testrate = rate;
        	    var iteration = 1;
        	    var testresult = 0;
        	    //iterate until result = 0
        	    var testdiff = testrate;
        	    while (iteration <= 100) {
        	        testresult = ((testrate * Math.pow(1 + testrate, numberOfMonths)) / (Math.pow(1 + testrate, numberOfMonths) - 1)) - (totalmonthlypayment / loanAmount);
        	        if (Math.abs(testresult) < 0.0000001) break;
        	        if (testresult < 0) testrate += testdiff;
        	        else testrate -= testdiff;
        	        testdiff = testdiff / 2;
        	        iteration++;
        	    }
        	    testrate = testrate * 12;
        	    return testrate.toFixed(6);
	        }

            var formatedApr;
            if (rebateAmountResult < 0) {
                formatedApr = apr;
            } else {
                formatedApr = rateOfInterest;
            }
            // End APR

            var addClassRebate = "";
            if (rebateAmountResult > 0) {
                addClassRebate += "highlight-blue";
            } else if (rebateAmountResult < 0) {
                addClassRebate += "highlight-red";
            }

            var formattedRebateAmount = Number(rebateAmountResult.toFixed(2)).toLocaleString();

            detailDesc2 += "<tr><td>"+ orderNo +"</td><td>"+ "<a class='selectedLink'>"+ rateList[j] +
                            "%" +"</a></td><td class='"+ addClassRebate +"'>"+ "$" + formattedRebateAmount +"</td><td>" +
                            formatedApr + "%" +"</td>"+ "<td>"+ "$" +formatedEmi + "</td>" +
                            "<td><a href='loan-application.html' class='alert-link'>"+"Apply" +
                            "</a></td><td><a href='qualification.html?payment=" + emi.toFixed(2) + "&propertyvalue=" + propertyValue + "' class='qualified-link'>" +
                            "Am I Qualified"+"</a></td><td>"+ "Mar 10, 2017 at 10:00 AM" + "</td></tr>";

            orderNo++;
        }

        detailDesc2 += "</tbody>";
        $("#resultTable").html(detailDesc2);

        selectRate();

    });
}

function calculateCC (interestRate, table) {
    var interestRateCC = interestRate;
    var searchTable = table;

    for (var i=0; i < table.length; i++) {
        var rebateRate;
        if (interestRateCC == searchTable[i][0]) {
            rebateRate = searchTable[i][1];
            return rebateRate;
        }
    }
}

function calPriceAdRate(lvt, score, term) {
    var lvt1 = lvt;
    var score1 = score;
    var terma = term;
    var purpose = $('#loanpurpose').val();

    if ((terma > 15) && (purpose !== 'cashout')) {
        if (lvt1 >= 95.01) {
            var getRated = getAdjRateAllProducts(lvtScoreTable.lessThan97, score1);
            return getRated;
        } else if (lvt1 >= 90.01) {
            var getRated = getAdjRateAllProducts(lvtScoreTable.lessThan95, score1);
            return getRated;
        } else if (lvt1 >= 85.01) {
            var getRated = getAdjRateAllProducts(lvtScoreTable.lessThan90, score1);
            return getRated;
        } else if (lvt1 >= 80.01) {
            var getRated = getAdjRateAllProducts(lvtScoreTable.lessThan85, score1);
            return getRated;
        } else if (lvt1 >= 75.01) {
            var getRated = getAdjRateAllProducts(lvtScoreTable.lessThan80, score1);
            return getRated;
        } else if (lvt1 >= 70.01) {
            var getRated = getAdjRateAllProducts(lvtScoreTable.lessThan75, score1);
            return getRated;
        } else if (lvt1 >= 60.01) {
            var getRated = getAdjRateAllProducts(lvtScoreTable.lessThan70, score1);
            return getRated;
        } else if (lvt1 <= 60.00) {
            var getRated = getAdjRateAllProducts(lvtScoreTable.lessThan60, score1);
            return getRated;
        }
    } else if (purpose === 'cashout') {
        if (lvt1 >= 75.01) {
            var getRated = getAdjRateAllProducts(cashOutRefiTable.lessThan80, score1);
            return getRated;
        } else if (lvt1 >= 70.01) {
            var getRated = getAdjRateAllProducts(cashOutRefiTable.lessThan75, score1);
            return getRated;
        } else if (lvt1 >= 60.01) {
            var getRated = getAdjRateAllProducts(cashOutRefiTable.lessThan70, score1);
            return getRated;
        } else if (lvt1 <= 60.00) {
            var getRated = getAdjRateAllProducts(cashOutRefiTable.lessThan60, score1);
            return getRated;
        }
    } else {
        var getRated = 0;
        return getRated;
    }
}

function getTable() {
    var searchTable;
    var term = Number($("#numberofyears").val());

    if (term === 30) {
        if (highBalance()) {
            return searchTable = tables.hb30;
        } else {
            return searchTable = tables.agn30;
        }
    } else if (term === 20) {
        return searchTable = tables.agn20;
    } else if (term === 15) {
        if (highBalance()) {
            return searchTable = tables.hb15;
        } else {
        return searchTable = tables.agn15;
        }
    } else if (term === 10) {
        return searchTable = tables.agn10;
    }
}

function getAdjRateAllProducts(table, score) {
    var searchTable = table;
    var ficoScore = score;

    if (ficoScore >= 740) {
        return searchTable[0];
    } else if (ficoScore >= 720) {
        return searchTable[1];
    } else if (ficoScore >= 700) {
        return searchTable[2];
    } else if (ficoScore >= 680) {
        return searchTable[3];
    } else if (ficoScore >= 660) {
        return searchTable[4];
    } else if (ficoScore >= 640) {
        return searchTable[5];
    } else if (ficoScore >= 620) {
        return searchTable[6];
    }
}

function selectRate () {
    var selectedRate = $('.selectedLink');
    selectedRate.on('click', function(e) {
        var rateInStringFormat = $(e.target).text();
        var rate = Number(rateInStringFormat.slice(0, -1));

        $('#summary-table').show();

        var loanAmount = Number($("#loanamount").val());
        var numberOfYears = Number($("#numberofyears").val());
        var numberOfMonths = numberOfYears * 12;
        var rateOfInterest = rate;
        var monthlyInterestRatio = (rateOfInterest/100)/12;

        $('#sum-amount').text("$" + loanAmount.toLocaleString());
        $('#sum-rate').text(rateOfInterest + "%");
        $('#sum-term').text(numberOfYears + " Years Fixed")

        var top = Math.pow((1+monthlyInterestRatio),numberOfMonths);
        var bottom = top -1;
        var sp = top / bottom;
        var emi = ((loanAmount * monthlyInterestRatio) * sp);
        var full = numberOfMonths * emi;
        var interest = full - loanAmount;
        var int_pge =  (interest / full) * 100;

        $("#tbl_int_pge").html(int_pge.toFixed(2)+" %");
        $("#tbl_loan_pge").html((100-int_pge.toFixed(2))+" %");

        var emi_str = emi.toFixed(2).toString().replace(/,/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        var loanAmount_str = loanAmount.toString().replace(/,/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        var full_str = full.toFixed(2).toString().replace(/,/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        var int_str = interest.toFixed(2).toString().replace(/,/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ",");

        var detailDesc = "<thead><tr class='success'><th>Payment No.</th><th>Begining Balance</th><th>Payment Amount</th><th>Principal</th><th>Interest</th><th>Ending Balance</th></thead><tbody>";
        var bb=parseInt(loanAmount);
        var int_dd =0;var pre_dd=0;var end_dd=0;
        for (var j=1; j<=numberOfMonths; j++){
            int_dd = bb * ((rateOfInterest/100)/12);
            pre_dd = emi.toFixed(2) - int_dd.toFixed(2);
            end_dd = bb - pre_dd.toFixed(2);
            detailDesc += "<tr><td>"+j+"</td><td>"+ "$"+Number(bb.toFixed(2)).toLocaleString()+"</td><td>"+ "$"+Number(emi.toFixed(2)).toLocaleString()+"</td><td>"+"$"+Number(pre_dd.toFixed(2)).toLocaleString()+"</td><td>"+"$"+Number(int_dd.toFixed(2)).toLocaleString()+"</td><td>"+"$"+Number(end_dd.toFixed(2)).toLocaleString()+"</td></tr>";
            bb = bb - pre_dd.toFixed(2);
        }
        detailDesc += "</tbody>";
        $("#illustrate").html(detailDesc);

    });

}

// If LTV > 80%, calculate Lender Paid Mortgage Insurance
function getLpmi(ltv, creditScore) {
    var LpmiRate;
    var ltvForCalculation = ltv;
    var creditScoreForCalculation = creditScore;
    var defaultCoverage = 25;

    if ((ltvForCalculation >= 95.01) && (defaultCoverage === 25)) {
        return LpmiRate = getRateForLpmiCalculation(lpmiTable.ltvGreaterThan95.cover25, creditScoreForCalculation);
    } else if ((ltvForCalculation >= 95.01) && (defaultCoverage === 35)) {
        return LpmiRate = getRateForLpmiCalculation(lpmiTable.ltvGreaterThan95.cover35, creditScoreForCalculation);
    } else if ((ltvForCalculation >= 90.01) && (defaultCoverage === 30)) {
        return LpmiRate = getRateForLpmiCalculation(lpmiTable.ltvGreaterThan90.cover30, creditScoreForCalculation);
    } else if ((ltvForCalculation >= 90.01) && (defaultCoverage === 25)) {
        return LpmiRate = getRateForLpmiCalculation(lpmiTable.ltvGreaterThan90.cover25, creditScoreForCalculation);
    } else if (ltvForCalculation >= 85.01) {
        return LpmiRate = getRateForLpmiCalculation(lpmiTable.ltvGreaterThan85.cover25, creditScoreForCalculation);
    } else if ((ltvForCalculation > 80) && (ltvForCalculation <= 85.0)) {
        return LpmiRate = getRateForLpmiCalculation(lpmiTable.ltvGreaterThan80.cover12, creditScoreForCalculation);
    } else {
        return LpmiRate = 0;
    }
}

function getRateForLpmiCalculation(table, creditScore) {
    var rateLpmi;
    var creditScoreLpmi = creditScore;
    var tableLpmi = table;
    if (creditScoreLpmi >= 800) {
        return tableLpmi[0];
    } else if (creditScoreLpmi >= 780) {
        return tableLpmi[1];
    } else if (creditScoreLpmi >= 760) {
        return tableLpmi[2];
    } else if (creditScoreLpmi >= 740) {
        return tableLpmi[3];
    } else if (creditScoreLpmi >= 720) {
        return tableLpmi[4];
    } else if (creditScoreLpmi >= 700) {
        return tableLpmi[5];
    } else if (creditScoreLpmi >= 680) {
        return tableLpmi[6];
    } else if (creditScoreLpmi >= 660) {
        return tableLpmi[7];
    } else if (creditScoreLpmi >= 640) {
        return tableLpmi[8];
    } else if (creditScoreLpmi >= 620) {
        return tableLpmi[9];
    }
}

function getLpmiRateAdjuster(creditscore, table) {
    var creditScoreLpmi = creditscore;
    var tableForLpmi = table;

    if (creditScoreLpmi >= 760) {
        return tableForLpmi[0];
    } else if (creditScoreLpmi >= 740) {
        return tableForLpmi[1];
    } else if (creditScoreLpmi >= 720) {
        return tableForLpmi[2];
    } else if (creditScoreLpmi >= 700) {
        return tableForLpmi[3];
    } else if (creditScoreLpmi >= 680) {
        return tableForLpmi[4];
    } else if (creditScoreLpmi >= 660) {
        return tableForLpmi[5];
    } else if (creditScoreLpmi >= 640) {
        return tableForLpmi[6];
    } else if (creditScoreLpmi >= 620) {
        return tableForLpmi[7];
    } else {
        return 0;
    }
}

// function getCounty() {
//     var zipcode = $('#zipcode').val();
//     var geocoder = new google.maps.Geocoder();
//     var county, city, response, result, adresses;
//
//     response = geocoder.geocode({'address': zipcode}, function(results, status) {
//         if (status === 'OK') {
//             county = results[0].address_components[2].long_name;
//             console.log("County found is: " + county);
//         }
//     });
// }

// function makeAjaxCall() {
//     $.ajax({
//         type: "GET",
//         url: "http://gomashup.com/json.php?fds=geo/usa/zipcode/92843",
//         dataType: "json",
//         jsoncallback: logme(),
//         success: function(result) {
//             console.log("i'm called success");
//             console.log("Reponse: " + result);
//         },
//         error: function(response) {
//             alert("Error: " + response);
//         }
//     });
//     function logme() {
//         console.log("result");
//     }
// }

function highBalance() {
    var balance = Number($('#loanamount').val());
    var type = $('#propertytype').val();
    var highBalance, oneUnitLimit, twoUnitLimit, threeUnitLimit, fourUnitLimit;
    var county = $('#county').val();

    if ((county === 'oc') || (county === 'la')) {
        oneUnitLimit = 636150;
        twoUnitLimit = 814500;
        threeUnitLimit = 984525;
        fourUnitLimit = 1223475;
    } else if ((county === 'rs') || (county === 'sb')) {
        oneUnitLimit = 424100;
        twoUnitLimit = 543000;
        threeUnitLimit = 656350;
        fourUnitLimit = 815650;
    } else if (county === 'sd') {
        oneUnitLimit = 612950;
        twoUnitLimit = 784700;
        threeUnitLimit = 948500;
        fourUnitLimit = 1178750;
    } else if (county === 'kern') {
        oneUnitLimit = 424100;
        twoUnitLimit = 543000;
        threeUnitLimit = 656350;
        fourUnitLimit = 815650;
    } else {
        oneUnitLimit = 999999999;
        twoUnitLimit = 999999999;
        threeUnitLimit = 999999999;
        fourUnitLimit = 999999999;
    }


    if (((type === "single") || (type === "condo") || (type="townhouse")) && (balance > oneUnitLimit)) {
        return true;
    } else if ((type === "duplex") && (balance > twoUnitLimit)) {
        return true;
    } else if ((type === "triplex") && (balance > threeUnitLimit)) {
        return true;
    } else if ((type === "fourplex") && (balance > fourUnitLimit)) {
        return true;
    } else {
        return false;
    }

}
