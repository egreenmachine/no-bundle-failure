
var fakeSdp = {type: "offer", sdp: "v=0\no=- 6474226815462815516 2 IN IP4 127.0.0.1\ns=-\nt=0 0\na=msid-semantic: WMS 9ZXCl4GSe6p7mTGRrAOVzGLSHOTbB9HV2SAp\nm=audio 50718 UDP/TLS/RTP/SAVPF 111 103 104 9 0 8 106 105 13 110 112 113 126\nc=IN IP4 199.7.173.75\na=rtcp-fb:111 transport-cc\na=ssrc:3235684954 cname:qBFPtO9XD1jR9HM9\na=ssrc:3235684954 msid:9ZXCl4GSe6p7mTGRrAOVzGLSHOTbB9HV2SAp bf3ddc34-0818-425a-a116-a4e8d04c2967\na=ssrc:3235684954 mslabel:9ZXCl4GSe6p7mTGRrAOVzGLSHOTbB9HV2SAp\na=ssrc:3235684954 label:bf3ddc34-0818-425a-a116-a4e8d04c2967\na=rtpmap:111 opus/48000/2\na=rtpmap:103 ISAC/16000\na=rtpmap:104 ISAC/32000\na=rtpmap:9 G722/8000\na=rtpmap:0 PCMU/8000\na=rtpmap:8 PCMA/8000\na=rtpmap:106 CN/32000\na=rtpmap:105 CN/16000\na=rtpmap:13 CN/8000\na=rtpmap:110 telephone-event/48000\na=rtpmap:112 telephone-event/32000\na=rtpmap:113 telephone-event/16000\na=rtpmap:126 telephone-event/8000\na=fmtp:111 minptime=10;useinbandfec=1\na=sendrecv\na=rtcp:50719\na=rtcp-mux\na=setup:actpass\na=fingerprint:sha-1 ED:F8:9E:AA:8E:8D:42:0D:64:D6:CB:DB:A3:1D:59:81:E8:E9:BB:57\na=ice-ufrag:CyQB7ErZ\na=ice-pwd:hhtB2vpuxvIzfoXwnS3bkMs5xl\na=candidate:4GE1lHR0w7KfWi1w 1 UDP 2130706431 199.7.173.75 50718 typ host\na=candidate:YA9NDq8m8OyeZHC1 1 UDP 2130706175 2620:104:2031::204b 50656 typ host\na=candidate:4GE1lHR0w7KfWi1w 2 UDP 2130706430 199.7.173.75 50719 typ host\na=candidate:YA9NDq8m8OyeZHC1 2 UDP 2130706174 2620:104:2031::204b 50657 typ host\n"}

var peerConnection1 = new RTCPeerConnection();
peerConnection1.setRemoteDescription(fakeSdp).then(function() {

  return navigator.mediaDevices.getUserMedia({audio:true, video: false});
}).then(function (stream) {
  stream.getTracks().forEach(function(track) {
    peerConnection1.addTrack(track, stream);
  })
  return peerConnection1.createAnswer();
}).then(function(sdp) {
  console.log(sdp.sdp);
  return peerConnection1.setLocalDescription(sdp);
}).then(function() {
  console.log("SUCCESS!");
}).catch(function(err) {
  console.log(err);
});
