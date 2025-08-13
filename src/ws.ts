
let socket:WebSocket|null=null;

const WS_URL =
  import.meta.env.VITE_WS_URL || "ws://localhost:8081";

export function ConnectWebSocket(){
    socket=new WebSocket(WS_URL);
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