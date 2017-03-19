function validateInputs() {
    $.validator.setDefaults({
         highlight: function(element) {
             $(element).closest('.form-group').addClass('has-error');
         },
         unhighlight: function(element) {
             $(element).closest('.form-group').removeClass('has-error');
         },
         errorElement: 'span',
         errorClass: 'help-block',
         errorPlacement: function(error, element) {
             if(element.parent('.input-group').length) {
                 error.insertAfter(element.parent());
             } else {
                 error.insertAfter(element);
             }
         }
     });

     $.validator.addMethod("alphanumeric", function(value, element) {
        return this.optional(element) || /^[a-zA-Z0-9]+$/.test(value);
    });

     $('form').validate({
         rules: {
             propertyvalue: {
                 required: true
             },
             loanamount: {
                 required: true
             },
             zipcode: {
                 digits: true,
                 maxlength: 5
             },
             numberofyears: {
                 required: true
             },
             address: {
                 required: true
             },
             firstname: {
                 required: true
             },
             lastname: {
                 required: true
             },
             phone: {
                 required: true
             },
             email: {
                 required: true,
                 email: true
             },
             ss: {
                 required: true
             },
             dob: {
                 required: true
             },
             brstreet: {
                 required: true
             },
             brzipcode: {
                 required: true
             },
             bryears: {
                 required: true
             },
            employername: {
                required: true
            },
            position: {
                required: true
            },
            employerstreet: {
                required: true
            },
            startdate: {
                required: true
            },
            pretaxincome: {
                required: true,
            },
            yearsinprofession: {
                required: true
            },
            county: {
                required: true
            }
         }
     });
}

function validateInputs2() {
    $.validator.setDefaults({
         highlight: function(element) {
             $(element).closest('.form-group').addClass('has-error');
         },
         unhighlight: function(element) {
             $(element).closest('.form-group').removeClass('has-error');
         },
         errorElement: 'span',
         errorClass: 'help-block',
         errorPlacement: function(error, element) {
             if(element.parent('.input-group').length) {
                 error.insertAfter(element.parent());
             } else {
                 error.insertAfter(element);
             }
         }
     });

     $.validator.addMethod("alphanumeric", function(value, element) {
        return this.optional(element) || /^[a-zA-Z0-9]+$/.test(value);
    });

     $('form').validate({
         rules: {
             firstname: {
                 required: true,
                 alphanumeric: true
             },
             lastname: {
                 required: true,
                 alphanumeric: true
             },
             phone: {
                 required: true
             },
             email: {
                 required: true,
                 email: true
             },
             message: {
                 required: true
             }
         }
     });
}
