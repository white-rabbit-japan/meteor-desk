DeskAPI = DeskAPI || {};

var directRequest = Npm.require("request");
var oauth = Npm.require("oauth-1.0a");

DeskAPI = function(){

  var self = this;

  var request = Meteor.wrapAsync(directRequest, self);

  function token(){
    return {
      public: Meteor.settings.desk.token,
      secret: Meteor.settings.desk.tokenSecret
    };
  }

  var oauth = OAuth({
    consumer: {
      public: Meteor.settings.desk.key,
      secret: Meteor.settings.desk.secret
    },
    signature_method: 'HMAC-SHA1'
  });



  self.getCases = function(){
    var requestData = {
      url: 'https://yoursite.desk.com/api/v2/cases',
      method: 'GET'
    };

    var result = request({
      url: requestData.url,
      method: requestData.method,
      form: oauth.authorize(requestData, token())
    });

    return result;
  }
}

