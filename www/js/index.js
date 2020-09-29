document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
    document.getElementById('deviceready').classList.add('ready');

    document.getElementById("b_gfbmt").addEventListener("click", GetTokenFB);
    document.getElementById("b_gfbms").addEventListener("click", GetMessageFB);
    document.addEventListener("click", copy2buffer);
}

function GetTokenFB() {
  window.FirebasePlugin.getToken(function(fbmToken) {
      document.getElementById("FBMtoken").innerHTML = fbmToken;
      console.log(fbmToken);
  }, function(error) {
      console.error(error);
  });
}

function GetMessageFB() {
  try {
    window.FirebasePlugin.onMessageReceived(function (data) {
      var answer = JSON.stringify(data);
      document.getElementById("FBMcontent").innerHTML = answer;
      console.log(answer);
    });
  } catch (e) {
    console.log(e);
  }
}

function copy2buffer(e) {
  e = e || window.event;
  var target = e.target || e.srcElement;
  var id = target.getAttribute("id");

  if( id == "FBMtoken" || id == "FBMcontent") {
    // if (document.selection) {
    //   var range = document.body.createTextRange();
    //   range.moveToElementText(document.getElementById(id));
    //   range.select().createTextRange();
    //   // target.setSelectionRange(0, 99999);
    //   document.execCommand("copy");
    // } else if (window.getSelection) {
    //   var range = document.createRange();
    //   range.selectNode(document.getElementById(id));
    //   window.getSelection().addRange(range);
    //   document.execCommand("copy");
    // }
    cordova.plugins.clipboard.copy(target.innerText);
    alert("Text copied");
  }
}
