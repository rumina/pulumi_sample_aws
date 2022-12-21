# Demo Pulumi AWS

This demo creates three resources in aws amazon
- S3 Bucket (pulumi-demo-bucket) and inside add a index.html
- A Cluster (pulumi-demo-cluster)
- A Repository (pulumi-demo-repository)

## Install Pulumi

```
brew install pulumi/tap/pulumi
```

## Config AWS console  

Add amazon aws user keys:

```
export AWS_ACCESS_KEY_ID=<YOUR_ACCESS_KEY_ID> 
export AWS_SECRET_ACCESS_KEY=<YOUR_SECRET_ACCESS_KEY>
```

## Execute to create resources

```
pulumi up
```

When the process ends, check in AWS for the creation of resources.

- ECS: https://eu-central-1.console.aws.amazon.com/ecs/v2/clusters?region=eu-central-1
- ECR: https://eu-central-1.console.aws.amazon.com/ecr/repositories?region=eu-central-1
- S3: https://s3.console.aws.amazon.com/s3/buckets?region=eu-central-1

Next execute pulumi destroy and check that everithing was deleted.

## Execute to destroy resources

```
pulumi destroy
```

## Execute to create new pulumi project

```
pulumi new <NAME_PROJECT>
```

After that, it will ask the language that you want to use.

## Reference links  
- https://www.pulumi.com/docs/get-started/aws/begin/

