export class validation {
  constructor() {
    this.name = $("#name");
    this.email = $("#email");
    this.phone = $("#phone");
    this.age = $("#age");
    this.password = $("#password");
    this.repassword = $("#repassword");
    this.submit = $("#submitBtn");
    this.name.keyup(() => { this.nameValidation(); this.submitValues(); })
    this.email.keyup(() => { this.emailValidation(); this.submitValues(); })
    this.phone.keyup(() => { this.phoneValidation(); this.submitValues(); })
    this.age.keyup(() => { this.ageValidation(); this.submitValues(); })
    this.password.keyup(() => { this.passwordValidation(); this.submitValues(); })
    this.repassword.keyup(() => { this.repasswordValidation(); this.submitValues(); })
    //     this.name.keyup(() => { this.nameValidation();  })
    // this.email.keyup(() => { this.emailValidation();  })
    // this.phone.keyup(() => { this.phoneValidation();  })
    // this.age.keyup(() => { this.ageValidation(); })
    // this.password.keyup(() => { this.passwordValidation();  })
    // this.repassword.keyup(() => { this.repasswordValidation(); })
    // this.updateSubmitBtn();
  }
  nameValidation() {
    let nameTest = /^(?!\s)[a-zA-Z ]+$/.test(this.name.val());
    if (nameTest == false) {
      $("#nameAlert").css("display", "block");
      return false;
    } else {
      $("#nameAlert").css("display", "none");
      return true;
    }
      
  }
  emailValidation() {
    let emailTest =
      /^(?!\s)(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(this.email.val());
    if (emailTest == false) {
      $("#EmailAlert").css("display", "block");
      return false;
    } else {
      $("#EmailAlert").css("display", "none");
      return true;
    }
  }
  phoneValidation() {
    let phoneTest = /^(?!\s)[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/.test(this.phone.val());
    if (phoneTest == false) {
      $("#phoneAlert").css("display", "block");
      return false;
    } else {
      $("#phoneAlert").css("display", "none");
      return true;
    }
  }
  ageValidation() {
    let ageTest = /^(?!\s)(0?[1-9]|[1-9][0-9]|[1][1-9][1-9]|200)$/.test(this.age.val());
    if (ageTest == false) {
      $("#ageAlert").css("display", "block");
      return false;
    } else {
      $("#ageAlert").css("display", "none");
      return true;
    }
  }
  passwordValidation() {
    let passwordTest = /^(?=.*\d)(?=.*[a-z])[0-9a-zA-Z]{8,}$/.test(this.password.val());
    if (passwordTest == false) {
      $("#passwordAlert").css("display", "block");
      return false;
    } else {
      $("#passwordAlert").css("display", "none");
      return true;
    }
  }
  repasswordValidation() {
    let repasswordTest = this.repassword.val() == this.password.val();
    if (repasswordTest == false) {
      $("#repasswordAlert").css("display", "block");
      return false;
    } else {
      $("#repasswordAlert").css("display", "none");
      return true;
    }
  }
  submitValues() {
    if (
      this.nameValidation() &&
      this.emailValidation() &&
      this.phoneValidation() &&
      this.ageValidation() &&
      this.passwordValidation() &&
      this.repasswordValidation()
    ) {
                this.submit.removeAttr("disabled", "");
      return true;
    }
    else {
      this.submit.attr("disabled", "disabled");
      return false
    }
  }

  // updateSubmitBtn() {
  //   if (this.submitValues() == true) {
  //     console.log("yessssss");
  //     this.submit.removeAttr("disabled", "");
  //   }
  //   else {
  //     console.log("noooooooooo");
  //     this.submit.attr("disabled", "disabled");
  //   }
  // }
}
