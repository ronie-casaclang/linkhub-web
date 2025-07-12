// Invalid Message
function invalidMessage(type, msg){
    switch (type){
        case "verify": 
            failedMsg.style.backgroundColor = "rgba(255, 208, 1, 0.3)"; 
            failedMsg.style.color = "black"; 
            break;
        case "failed": 
            failedMsg.style.backgroundColor = "rgba(255, 0, 0, 0.2)";
            failedMsg.style.color = "rgb(215, 0, 0)";
            break;
    }
    failedMsg.innerText = msg;
    failedMsg.style.visibility = 'visible';
}