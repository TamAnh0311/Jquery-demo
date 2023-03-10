import { isValidData } from "../js/validate";
import { setEvent } from "../js/common";
import { login } from "../js/authApi";

$(document).ready(function () {

  console.log(1,localStorage)

  setEvent("#login-btn", "click", onLogin)
  
  async function onLogin() {
      if (isValidData()) {
        const payload = {
          email: $("#email").val(),
          password: $("#password").val(),
        };
        await login(payload);
        window.location.href = localStorage.getItem('currentURL')
      }
    }
})



