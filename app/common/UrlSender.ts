import WebSocket from 'ws';

const urlSenderWs = new WebSocket('ws://localhost:8765');
export default urlSenderWs;
