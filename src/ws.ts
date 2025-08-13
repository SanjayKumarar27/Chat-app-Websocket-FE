
let socket:WebSocket|null=null;

export function ConnectWebSocket(){
    socket=new WebSocket("wss://chat-app-websocket-be.onrender.com");
    socket.onopen=()=>{
        console.log("Conneted to server")
    }
    socket.onclose=()=>{
        console.log("Connection disconnected");
    }
    socket.onerror=(event)=>{
        console.log("Connection "+event);
    }

    return socket;
}

export function getSocket(){
    return socket;
}