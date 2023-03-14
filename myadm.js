function NameValid()
            {
                
                Email=document.getElementById("Email").value;
                err1=document.getElementById("err1");
                pwd = document.getElementById("pwd").value;
                err2 = document.getElementById("err2");
                
                if(Email.length==0)
                {
                    err1.innerHTML="*Plz enter email";
                    err1.style.color="red";
                }
                else
                {
                    err1.innerHTML=" ";
                }
                if(pwd.length==0)
                {
                    err2.innerHTML="*Plz enter email";
                    err2.style.color="red";
                }
                else
                {
                    err2.innerHTML=" ";
                }
                
            }
function chkemail()
            {
                Email=document.getElementById("Email").value;
                err1=document.getElementById("err1");
                var reg;
                reg= /^[A-Za-z0-9](([_\.\-]?[a-zA-Z0-9]+)*)@([A-Za-z0-9]+)(([\.\-]?[a-zA-Z0-9]+)*)\.([A-Za-z]{2,3})$/;
                if(!reg.test(Email))
                {
                    err1.innerHTML="Invalid EmailID";
                    err1.style.color="red";
                }
                else
                {
                    err1.innerHTML=" ";
                }
            }
function passvalid() 
            {
                pwd = document.getElementById("pwd").value;
                err2 = document.getElementById("err2");

                var reg = /^([A-Za-z0-9@#]{8,15})$/;
                if (!reg.test(pwd)) 
                {
                    err2.innerHTML = "*Plz enter a valid Password.It should be contain Uppercase,lowercase,Number and (@,#)special character";
                    err2.style.color = "red";
                }
                else 
                {
                    err2.innerHTML = " ";
                }
            }
