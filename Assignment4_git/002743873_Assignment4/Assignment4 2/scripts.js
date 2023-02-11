var form = document.getElementById("myForm");
            form.addEventListener("submit", submitted);
            form.addEventListener("reset",resetForm)

            var validZip = false;
            var validEmail = false;
            var validPhone = false;


            // regex checks variables
            var regExZip = /\d{6}$/;
            var regExEmail = /([\w\.]+)@northeastern.edu/;
            var regExPhone = /\d{3}-?\d{3}-\d{4}$/;

            var zipcode = document.getElementById("zipcode");
            zipcode.addEventListener("input", validate);

            var emailId = document.getElementById("emailId");
            emailId.addEventListener("input", validate);

            var phoneNumber = document.getElementById("phoneNumber");
            phoneNumber.addEventListener("input", validate);

            function validate(e) {
                console.log("validate");
                var value = e.target.value;
                console.log(value);
                var type = this.id;
                var em = "error_" + type;

                switch (type) {
                    case "zipcode":
                        if (!value.trim().match(regExZip)) {
                            document.getElementById(em).style.display = "block";
                            this.style.border = "2px solid red";
                            validZip = false;
                        }
                        else {
                            document.getElementById(em).style.display = "none";
                            this.style.border = "";
                            validZip = true;
                        }
                        break;

                    case "emailId":
                        if (!value.trim().match(regExEmail)) {
                            document.getElementById(em).style.display = "block";
                            this.style.border = "2px solid red";
                            validEmail = false;
                        }
                        else {
                            document.getElementById(em).style.display = "none";
                            this.style.border = "";
                            validEmail = true;
                        }
                        break;

                    case "phoneNumber":
                        if (!value.trim().match(regExPhone)) {
                            document.getElementById(em).style.display = "block";
                            this.style.border = "2px solid red";
                            validPhone = false;
                        }
                        else {
                            document.getElementById(em).style.display = "none";
                            this.style.border = "";
                            validPhone = true;
                        }
                        break;


                }


            }

        function getRadioButtons() {
        var opt=document.getElementById("menu");
        if(opt.options.selectedIndex==0){
            document.getElementById("radioButtons").style.display = "none";
            document.getElementById("selectedMeal").style.display = "none";
        }
        else{
        document.getElementById("radioButtons").style.display = "block";
        document.getElementById("selectedMeal").style.display = "none";
        var resetRadioButtons = document.getElementsByName("eat");
        for (var i = 0; i < resetRadioButtons.length; i++) {
          resetRadioButtons[i].checked = false;
        }
        }
      }

      function addTextBox() {
        var eat = document.getElementsByName("eat");
        for (var i = 0; i < eat.length; i++) {
          if (eat[i].checked) {
            document.getElementById("selectedMeal").style.display = "block";
          }
        }
      }

      var inputs = document.querySelectorAll('[name="source"]')
var radioForCheckboxes = document.getElementById('radio-for-checkboxes')
function checkCheckboxes () {
    var isAtLeastOneServiceSelected = false;
    for(var i = inputs.length-1; i >= 0; --i) {
        if (inputs[i].checked) isAtLeastOneCheckboxSelected = true;
    }
    radioForCheckboxes.checked = isAtLeastOneCheckboxSelected
}
for(var i = inputs.length-1; i >= 0; --i) {
    inputs[i].addEventListener('change', checkCheckboxes)
}

      function submitted(e) {
        e.preventDefault();
        console.log("submitted");
        if (validZip && validEmail && validPhone) {
          alert("Data Saved Successfully");
          populateTable();
          document.getElementById("reset").click();
          
        } else {
          alert("Please enter correct details");
        }
      }

      function populateTable(){
          var table=document.getElementById("dataTable");
          var clone1 = document.getElementById("extraRow").cloneNode(true); 
          var rowCount = table.rows.length;
          table.style.display="block";
          clone1.id = "neww";
          clone1.style.display = "table-row";
          clone1.children[0].innerText = document.querySelector('input[name="title"]:checked').value;
          clone1.children[1].innerText = document.getElementById("firstName").value;
          clone1.children[2].innerText = document.getElementById("lastName").value;
          clone1.children[3].innerText = document.getElementById("emailId").value;
          clone1.children[4].innerText = document.getElementById("phoneNumber").value;
          clone1.children[5].innerText = document.getElementById("streetAddress1").value;
          clone1.children[6].innerText = document.getElementById("streetAddress2").value;
          clone1.children[7].innerText = document.getElementById("city").value;
          clone1.children[8].innerText = document.getElementById("state").value;
          clone1.children[9].innerText = document.getElementById("zipcode").value;
          if(document.querySelectorAll('input[name="source"]:checked').length>1){
            var checkboxes = document.getElementsByName("source");
            var check = "";
  
            for (var i = 0; i < checkboxes.length; i++) {
                if (checkboxes[i].checked) {
                    check += checkboxes[i].value 
                        + " ";
                }
            }
            clone1.children[10].innerText = check;
          }
          else{
          clone1.children[10].innerText = document.querySelector('input[name="source"]:checked').value;
          }
          var etemp = document.getElementById("menu");
          clone1.children[11].innerText = etemp.options[etemp.selectedIndex].value;
          clone1.children[12].innerText = document.querySelector('input[name="eat"]:checked').value;
          clone1.children[13].innerText = document.getElementById("selectedMeal").value;
          clone1.children[14].innerText = document.getElementById("comments").value;

          table.appendChild(clone1);
      }
      function resetForm(e){
        document.getElementById("radioButtons").style.display = "none";
        document.getElementById("selectedMeal").style.display = "none";
      }
      
