function AlertExternal() {
    alert('Hello !');
   }

   function ConfirmExternal() {
    if(confirm('Are you Sure ?')) {
        alert('Yes');
    }
    else {
        alert('No');
    }
   }

   function PromptExternal() {
    var Fname=prompt('Enter Your First Name : ');
    var Lname=prompt('Enter Your Last Name : ');
    alert(Fname + " " + Lname);
   } 
