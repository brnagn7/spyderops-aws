// Initialize the Amazon Cognito credentials provider
CognitoCachingCredentialsProvider credentialsProvider = new CognitoCachingCredentialsProvider(
    getApplicationContext(),
    "ap-southeast-2:a4583000-5242-4ed3-aa79-666f85374c49", // Identity pool ID
    Regions.AP_SOUTHEAST_2 // Region
);

var poolData = {
	UserPoolId : 'ap-southeast-2_4PezXyBGX', // Your user pool id here
	ClientId : '4869rhfe3ro7ia5q7bar6mp8ep' // Your client id here
};
var userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);

var attributeList = [];

var dataEmail = {
	Name : 'Eddie',
	Value : 'brnagn7@gmail.com'
};

// var dataPhoneNumber = {
// 	Name : 'phone_number',
// 	Value : '+15555555555'
// };
var attributeEmail = new AmazonCognitoIdentity.CognitoUserAttribute(dataEmail);
//var attributePhoneNumber = new AmazonCognitoIdentity.CognitoUserAttribute(dataPhoneNumber);

attributeList.push(attributeEmail);
attributeList.push(attributePhoneNumber);

userPool.signUp('username', 'password', attributeList, null, function(err, result){
	if (err) {
		alert(err);
		return;
	}
	cognitoUser = result.user;
	console.log('user name is ' + cognitoUser.getUsername());
});
