# Demo Pulumi AWS

This demo creates two resources in aws amazon
- S3 Bucket (my-bucket) and inside add a index.html
- A Cluster (pulumi_demo)

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

