
```
aws --region us-east-1 cloudformation create-stack --stack-name my-custom-stack --template-body file://cloudformation-vpc-ec2.yml
  
```

```
aws --region us-east-1 cloudformation update-stack  --stack-name my-custom-stack --template-body file://cloudformation-vpc-ec2.yml
```