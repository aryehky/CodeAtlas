# AWS

## Introduction
Amazon Web Services (AWS) is a comprehensive cloud computing platform provided by Amazon, offering a wide range of services including computing power, storage options, and networking capabilities.

## Getting Started

### Account Setup
1. Create an AWS Account at the [AWS Management Console](https://aws.amazon.com/console/)
2. Configure your account settings and security preferences

## Core Services

### EC2 (Elastic Compute Cloud)
Provides scalable virtual servers in the cloud.

#### Launching an EC2 Instance
1. Navigate to EC2 Dashboard
2. Click "Launch Instance"
3. Choose an Amazon Machine Image (AMI)
4. Select instance type and configure settings
5. Review and launch the instance

### S3 (Simple Storage Service)
Object storage service for storing and retrieving data.

```bash
# Create a bucket
aws s3 mb s3://my-bucket-name

# Upload a file
aws s3 cp myfile.txt s3://my-bucket-name/
```

### RDS (Relational Database Service)
Managed relational database service supporting multiple database engines.

#### Creating an RDS Instance
1. Navigate to RDS Dashboard
2. Click "Create database"
3. Choose database engine and configure settings
4. Launch database instance

### Lambda
Serverless compute service for running code without managing servers.

```javascript
exports.handler = async (event) => {
    return {
        statusCode: 200,
        body: JSON.stringify('Hello from Lambda!')
    };
};
```

### CloudFormation
Infrastructure as Code (IaC) service for AWS resource management.

```yaml
Resources:
  MyBucket:
    Type: AWS::S3::Bucket
    Properties:
      BucketName: my-bucket-name
```

## Identity and Access Management (IAM)

### User Management
Create and manage AWS users and their permissions:

1. Navigate to IAM Dashboard
2. Create users and assign permissions
3. Configure access policies
4. Manage security credentials

## Monitoring and Logging

### CloudWatch
Monitor AWS resources and applications:

1. Configure CloudWatch Dashboard
2. Set up alarms and metrics
3. Monitor resource utilization
4. Configure logging

## Command Line Interface

### AWS CLI Setup
```bash
# Install AWS CLI
aws configure

# Basic Commands
aws ec2 describe-instances
aws s3 ls
```

## Best Practices

### Security
1. Implement least privilege access
2. Enable Multi-Factor Authentication (MFA)
3. Regularly rotate access keys
4. Monitor and audit security logs

### Cost Management
1. Use cost allocation tags
2. Monitor resource usage
3. Implement auto-scaling policies
4. Clean up unused resources

## Additional Resources

### Documentation
- [AWS Documentation](https://docs.aws.amazon.com/)
- [AWS Well-Architected Framework](https://aws.amazon.com/architecture/well-architected/)
- [AWS Training and Certification](https://aws.amazon.com/training/)

### Tools and SDKs
- [AWS CLI Reference](https://awscli.amazonaws.com/v2/documentation/api/latest/index.html)
- [AWS SDKs](https://aws.amazon.com/tools/)
- [AWS CloudFormation Templates](https://aws.amazon.com/cloudformation/resources/templates/)
