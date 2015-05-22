//radio_button_group_function=name of the funtion; radio_switches=what it effects

//function     name(name of parameter 1, name of parameter 2) {code to be excecuted}
function radio_button_group_function(radio_button_groupname)
{

var radio_button_group_var = document.getElementsByName(radio_button_groupname);

for(var i = 0; i < radio_button_group_var.length; i++) {
   if(radio_button_group_var[i].checked == true) {
       selected_option = radio_button_group_var[i].value;
   }
 }
return(selected_option);

}

// function check() {
//     alert(document.getElementById("disability_status").checked);
// localStorage.setItem("disability_status", document.getElementById("disability_status").checked);
// }

//alert(Working?)
//alert("I am an alert box!");