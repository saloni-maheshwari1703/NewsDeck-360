var arr = [];
function validate(){
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if(localStorage.getItem("itemsJson") == null){
        alert("login failed");
        return true;
    }
    else{
        arrStr = localStorage.getItem("itemsJson");
        arr = JSON.parse(arrStr);
        var i;
        for(i=0;i<arr.length;i++){
            if(username == arr[i][0] && password == arr[i][1]){
                alert("login successfull");
                return true;
            }
        }
        if(i==arr.length){
            alert("login failed");
            return true;
        }
    }
}

function addInfo(){
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let conform = document.getElementById("conform").value;
    if(password!=conform){
        alert("invalid");
        return true;
    }
    else{
        if(localStorage.getItem("itemsJson") == null){
            arr.push([username,password]);
            localStorage.setItem('itemsJson',JSON.stringify(arr));
        }
        else{
            arrStr = localStorage.getItem('itemsJson');
            arr = JSON.parse(arrStr);
            arr.push([username,password]);
            localStorage.setItem('itemsJson',JSON.stringify(arr));
        }
        alert("SignIn Successfull");
    }
}