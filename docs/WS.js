import{J as t}from"./vendor.js";class o{constructor(o){this.config=t(o,{host:"127.0.0.1",port:8888,protocol:"ws"});var{scene:n}=o;n&&(this.scene=n),this.socket=void 0,this.tryConnectWaitTimeBase=500,this.tryConnectWaittime=500,this.tryConnect=this.tryConnect.bind(this),this.tryConnect()}tryConnect(){var{host:t,port:o,protocol:n}=this.config,{scene:e={}}=this;if(!this.socket)try{var s="".concat(n,"://").concat(t,":").concat(o);this.socket=new WebSocket(s),this.socket&&(null!=e&&e.onOpen?this.socket.onopen=function(){return e.onOpen(...arguments)}:this.socket.onopen=function(){},null!=e&&e.onMessage&&(this.socket.onmessage=function(){return e.onMessage(...arguments)}),null!=e&&e.onClose?this.socket.onclose=function(){return e.onClose(...arguments)}:this.socket.onclose=function(){},this.socket.onerror=function(){for(var t=arguments.length,o=new Array(t),n=0;n<t;n++)o[n]=arguments[n];e.onError&&e.onError(...o)})}catch(t){this.socket=void 0,setTimeout(this.tryConnect,this.tryConnectWaittime),this.tryConnectWaittime+=this.tryConnectWaitTimeBase}}send(t){1===this.socket.readyState&&this.socket.send(t)}close(){setTimeout((()=>this.tryConnect()),500)}}export{o as WS};
