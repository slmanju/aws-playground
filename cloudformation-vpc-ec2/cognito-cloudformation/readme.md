## Amazon Cognito

### Create the stack
```
aws cloudformation deploy --template-file ./cognito-cloudformation.yml --stack-name my-web-app-congnito --region us-east-1
```

### Delete the stack
```
aws cloudformation delete-stack --stack-name my-web-app-congnito --region us-east-1
```


https://my-web-app-aslkdjs2349slj.auth.us-east-1.amazoncognito.com/login?client_id=4mrs9vmob5vhts9r7s4272r1oc&response_type=code&scope=email+openid&redirect_uri=http%3A%2F%2Flocalhost%3A8585