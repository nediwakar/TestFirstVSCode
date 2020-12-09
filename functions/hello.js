exports.handler = function(context, event, callback) {
    //let twiml = new Twilio.twiml.MessagingResponse();
    let responseobj={
      "actions": [
        {
          "say": "Hello, good bye!"
        },
        {
          "remember": {
            "order_status": "delivered"
          }
        },
        {
          "listen": true
        }
      ]
    }
    //twiml.message('Hello World');
    console.log(responseobj);
    callback(null, responseobj);
  };
