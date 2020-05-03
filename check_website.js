const {exec} = require('child_process');
require('dotenv').config();

const executionID = Math.random().toFixed(5).split(".")[1];
function log(message) {
    console.log(`[${executionID}] ${message}`);
}

log("execution begins : " + Date().toString());

exec(`curl ${process.env.URL}`, (_err, stdout, _stderr) => {
    if (stdout.includes(process.env.SEARCH_STRING)) {
        log("URL still not available, exiting.");
    } else {
        log("URL UP!");
        
        // Initialize AWS SDK and SNS
        const AWS = require('aws-sdk');
        AWS.config.update({
            "accessKeyId": process.env.ACCESS_KEY_ID,
            "secretAccessKey": process.env.SECRET_ACCESS_KEY,
            "region": process.env.REGION
        });

        let sns = new AWS.SNS({
            apiVersion: "2010-03-31"
        });

        // Set up and publish text message
        var params = {
            Message: `Your website is up! : ${process.env.URL}`,
            PhoneNumber: process.env.PHONE,
        };

        sns.publish(params).promise().then(() => {
            log("Text sent!");
        });
    }
});