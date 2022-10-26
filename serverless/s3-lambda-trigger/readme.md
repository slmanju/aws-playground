# AWS S3 Lambda Trigger

### Setup the project
```
mkdir s3-lambda-trigger
cd s3-lambda-trigger
serverless create --template aws-nodejs
npm init -y
npm install @aws-sdk/client-s3 --save
```

### References
https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-s3/index.html
https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-s3/classes/getobjectcommand.html
https://docs.aws.amazon.com/code-library/latest/ug/s3_example_s3_Scenario_GettingStarted_section.html
https://www.serverless.com/framework/docs/providers/aws/events/s3
https://serverless.pub/migrating-to-aws-sdk-v3/
https://github.com/aws/aws-sdk-js-v3/issues/1877
https://transang.me/modern-fetch-and-how-to-get-buffer-output-from-aws-sdk-v3-getobjectcommand/