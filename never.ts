
function apiError(msg,code){
    throw {message:msg , apiCode:code}
}

apiError("Server side not working well" , 500);