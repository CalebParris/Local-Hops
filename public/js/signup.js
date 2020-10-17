$(document).ready(function() {
    var signUpForm = $("form.signup");
    var emailInput = $("input#email-input");
    var passwordInput = $("input#password-input");
    var ageInput = $("input[name = 'choice']");
    var ageVerifyForm = $("form.ageVerify");

    ageVerifyForm.on("submit", function(event){
        event.preventDefault();
        
        if (ageInput[0].checked === false && ageInput[1].checked === false){
            alert("Please select one of the options below");
        } else if (ageInput[0].checked){
            $("#signUp").removeClass("hide");
            $("#age").addClass("hide");
        } else if (ageInput[1].checked){
            alert("You must be 21 or older to create an account");
            window.location.replace("/");
        }
    });

  
    signUpForm.on("submit", function(event) {
      event.preventDefault();
      var userData = {
        email: emailInput.val().trim(),
        password: passwordInput.val().trim()
      };
  
      if (!userData.email || !userData.password) {
        return;
      }
      
      signUpUser(userData.email, userData.password);
      emailInput.val("");
      passwordInput.val("");
    });
  
    function signUpUser(email, password) {
      $.post("/api/signup", {
        email: email,
        password: password
      })
        .then(function(data) {
          window.location.replace("/profile");
        })
        .catch(handleLoginErr);
    }
  
    function handleLoginErr(err) {
      $("#alert .msg").text(err.responseJSON);
      $("#alert").fadeIn(500);
    }
  });