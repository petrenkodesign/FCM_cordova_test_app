# Firebase Messaging Testing App
App for testing firebase messaging.  
FCM Firebase Cloud Messaging - free google cross-platform notification service.  
You can send message to multiple devices or for specific target, from web Firebase interface or use API.

# Plugins used by the project
- ```cordova plugin add cordova-plugin-firebasex``` - <a href="https://github.com/dpa99c/cordova-plugin-firebasex">https://github.com/dpa99c/cordova-plugin-firebasex</a>
- ```cordova plugin add cordova-plugin-androidx``` - <a href="https://github.com/dpa99c/cordova-plugin-androidx">https://github.com/dpa99c/cordova-plugin-androidx</a> this plugin is only needed if your project uses legacy ```cordova-android@8```, if you use ```cordova-android@9``` enable AndroidX by setting the following preference in your ```config.xml```: ```<preference name="AndroidXEnabled" value="true" />```
- ```cordova plugin add cordova-clipboard``` - <a href="https://github.com/ihadeed/cordova-clipboard">https://github.com/ihadeed/cordova-clipboard</a>

# Supported Mobile Platform Versions
- Android ```>= 4.1```
- iOS ```>= 10.0```

# Supported Cordova Versions
- cordova: ```>= 9```
- cordova-android: ```>= 9```
- cordova-ios: ```>= 6```

# Starting
For start add your app to <a href="https://console.firebase.google.com/u/0/">google firebase service</a>, generate config file - google-services.json and add it to your project in directory with config.xml.  

<img src="https://github.com/petrenkodesign/FCM_cordova_test_app/blob/master/manual/fm_project_add.gif" />  

Next execute ```cordova platform add android / ios``` command for adding platform which you want to use.  
Then execute ```cordova prepare android / ios```  for compile project.

You also can testing app:
- use ```cordova run android/ ios``` - if you want run app on emulator or testing device
- or ```cordova build android / ios``` - if you needed apk file


<b>You can use API for sending messages to devices.</b>

<img src="https://github.com/petrenkodesign/FCM_cordova_test_app/blob/master/manual/postman.jpg" />

Url for messaging API ```https://fcm.googleapis.com/fcm/send```  

Use this code in header of request:

```"Content-Type" : "application/json"```  
```"Authorization" : "key=<Firebase server key>"```

Firebase server key you can find in ```Firebase console -> Project setting -> Cloud Messaging -> Project credentials -> Server key```  

<img src="https://github.com/petrenkodesign/FCM_cordova_test_app/blob/master/manual/server_key.png" />

Use this code in body of request:

```
{
	"to": "<device token>",
	"notification": {
		"title": "This is test message",
		"body": "Check adding json data",
		"mutable_content": true,
		"sound": true
	},
	"data": {
		"ke1": "value1",
		"key2": "value2"
	}
}
```
```<device token>``` you can get in app when push on the "Get FCM Token" button

<img src="https://github.com/petrenkodesign/FCM_cordova_test_app/blob/master/manual/device_token.jpg" />
