function NameValid()
            {
                Name = document.getElementById("Name").value;
                err = document.getElementById("err");
                Email = document.getElementById("Email").value;
                err1 = document.getElementById("err1");
                pwd = document.getElementById("pwd").value;
                err2 = document.getElementById("err2");
                cpwd = document.getElementById("cpwd").value;
                err3 = document.getElementById("err3");
                mobno = document.getElementById("mobno").value;
                err4 = document.getElementById("err4");
                addr = document.getElementById("addr").value;
                err5 = document.getElementById("err5");
                city = document.getElementById("city").value;
                err6 = document.getElementById("err6");
                state = document.getElementById("state").value;
                err7 = document.getElementById("err7");
                pincode = document.getElementById("pincode").value;
                err8 = document.getElementById("err8");
                if (Name.length == 0) 
                {
                    err.innerHTML = "*Plz Enter Name";
                    err.style.color = "red";
                }
                else 
                {
                    err.innerHTML = " ";
                }
                if (Email.length == 0) 
                {
                    err1.innerHTML = "*Plz Enter Email";
                    err1.style.color = "red";
                }
                else 
                {
                    err1.innerHTML = " ";
                }
                if (mobno.length == 0) 
                {
                    err4.innerHTML = "*Plz Enter Mobile Number";
                    err4.style.color = "red";
                }
                else 
                {
                    err4.innerHTML = " ";
                }
                if (cpwd.length == 0) 
                {
                    err3.innerHTML = "*Plz Enter Confirm Password";
                    err3.style.color = "red";
                }
                else 
                {
                    err3.innerHTML = " ";
                }

                if (pwd.length == 0) 
                {
                    err2.innerHTML = "*Plz Enter Password";
                    err2.style.color = "red";
                }

                else 
                {
                    err2.innerHTML = " ";
                }
                if (addr.length == 0) 
                {
                    err5.innerHTML = "*Plz Enter Address";
                    err5.style.color = "red";
                }
                else 
                {
                    err5.innerHTML = " ";
                }
                if (city.length == 0) 
                {
                    err6.innerHTML = "*Plz Enter City name";
                    err6.style.color = "red";
                }
                else 
                {
                    err6.innerHTML = " ";
                }
                if (state.length == 0) 
                {
                    err7.innerHTML = "*Plz Enter State Name";
                    err7.style.color = "red";
                }
                else 
                {
                    err7.innerHTML = " ";
                }
                if (pincode.length == 0) 
                {
                    err8.innerHTML = "*Plz Enter Pincode";
                    err8.style.color = "red";
                }
                else 
                {
                    err8.innerHTML = " ";
                }


            }

function onlyalpha() 
            {
                Name = document.getElementById("Name").value;
                err = document.getElementById("err");
                var reg = /^[A-Za-z]*$/;
                if (!reg.test(Name)) 
                {
                    err.innerHTML = "*Plz Enter only Alphabets";
                    err.style.color = "red";
                }
                else 
                {
                    err.innerHTML = " ";
                }
            }
function chkemail()
             {
                Email = document.getElementById("Email").value;
                err1 = document.getElementById("err1");
                var reg;
                reg = /^[A-Za-z0-9](([_\.\-]?[a-zA-Z0-9]+)*)@([A-Za-z0-9]+)(([\.\-]?[a-zA-Z0-9]+)*)\.([A-Za-z]{2,3})$/;
                if (!reg.test(Email)) 
                {
                    err1.innerHTML = "Invalid EmailID";
                    err1.style.color = "red";
                }
                else 
                {
                    err1.innerHTML = " ";
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
function checkpwd() 
            {
                pwd = document.getElementById("pwd").value;

                cpwd = document.getElementById("cpwd").value;
                err3 = document.getElementById("err3");
                if (pwd != cpwd) 
                {
                    err3.innerHTML = "*Plz Re-Enter Correct Password";
                    err3.style.color = "red";
                }
                else 
                {
                    err3.innerHTML = " ";
                }
            }

function checkmob() 
            {
                mobno = document.getElementById("mobno").value;
                err4 = document.getElementById("err4");
                if (mobno.length == 0) 
                {
                    err4.innerHTML = "*Plz Enter Mobile Number";
                    err4.style.color = "red";
                }
                else if (isNaN(mobno))//is nan is builtin function-> is not a Number
                {
                    err4.innerHTML = "*Plz Enter Digits";
                    err4.style.color = "red";
                }
                else if (mobno.length < 10 || mobno.length > 10) 
                {
                    err4.innerHTML = "*Plz Enter 10-digit Mobile Number";
                    err4.style.color = "red";
                }

                else 
                {
                    err4.innerHTML = " ";
                }
            }
function chkpincode()
            {
                pincode = document.getElementById("pincode").value;
                err8 = document.getElementById("err8");
                if (pincode.length == 0) 
                {
                    err8.innerHTML = "*Plz Enter Pincode Number";
                    err8.style.color = "red";
                }
                else if (isNaN(pincode))//is nan is builtin function-> is not a Number
                {
                    err8.innerHTML = "*Plz Enter Digits";
                    err8.style.color = "red";
                }
                else if (pincode.length < 6 || pincode.length > 6) 
                {
                    err8.innerHTML = "*Plz Enter 6-digit Pincode Number";
                    err8.style.color = "red";
                }

                else 
                {
                    err4.innerHTML = " ";
                }
            }