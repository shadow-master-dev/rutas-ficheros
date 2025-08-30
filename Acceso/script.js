<script>
    function login() {
    var username = document.getElementById("uid").value;
    var password = document.getElementById("pass").value;
    
    google.script.run.withSuccessHandler(function(response) {
    
      if (response === "success") {
      document.getElementById("myid").click();
      } else {
        $("#RetMsg").removeClass("alert-danger").removeClass("alert-success").addClass("alert-danger");
        $("#RetMsg").html("Invalid User ID or Password");
        $("#RetMsg").show();
      }
      }).loginUser(username, password);
    }


  function ClearText()
  {
      $('#RetMsg').html("");
      $('#RetMsg').hide();
      $('#RetMsgReg').html("");
      $('#RetMsgReg').hide();
  }

  function OpenRegisterPage()
  {
        google.script.run.withSuccessHandler(ShowRegister).OpenPage("register");
  }

  function ShowRegister(data)
  {
    $('#DivLogin').hide();
    $('#DivRegister').html(data);
  }

  </script>
