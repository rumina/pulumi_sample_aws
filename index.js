"use strict";
const pulumi = require("@pulumi/pulumi");
const aws = require("@pulumi/aws");


// Create an AWS resource (S3 Bucket)
const bucket = new aws.s3.Bucket("pulumi-demo-bucket", {
    website: {
        indexDocument: "index.html",
    },
});

// Export the name of the bucket
exports.bucketName = bucket.id;

// Create a Repo 
const repository = new aws.ecr.Repository("pulumi-demo-repository", {});

// Export the name of the Repo
exports.repositoryName = repository.id;

// Create a Cluster for app
const cluster = new aws.ecs.Cluster("pulumi-demo-cluster", {settings: [{
    name: "containerInsights",
    value: "enabled",
}]});

// Export the name of the Cluster
exports.clusterName = cluster.id;

const bucketObject = new aws.s3.BucketObject("index.html", {
    acl: "public-read",
    contentType: "text/html",
    bucket: bucket,
    source: new pulumi.asset.FileAsset("index.html"),
});

exports.bucketEndpoint = pulumi.interpolate`http://${bucket.websiteEndpoint}`;

