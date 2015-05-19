//radio_button_group_function=name of the funtion; radio_switches=what it effects


function radio_button_group_function(radio_button_groupname)
{

var radio_button_group_var = document.getElementsByName(groupname);

for(var i = 0; i < radio_button_group_var.length; i++) {
   if(radio_button_group_var[i].checked == true) {
       selected_option = radio_button_group_var[i].value;
   }
 }
return(selected_option);

}


//alert(Working?)
//alert("I am an alert box!");