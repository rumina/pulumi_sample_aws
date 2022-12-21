"use strict";
const pulumi = require("@pulumi/pulumi");
const aws = require("@pulumi/aws");
const awsx = require("@pulumi/awsx");

// Create an AWS resource (S3 Bucket)
const bucket = new aws.s3.Bucket("my-bucket", {
    website: {
        indexDocument: "index.html",
    },
});

// Create a Cluster for app
const foo = new aws.ecs.Cluster("pulumi_demo", {settings: [{
    name: "containerInsights",
    value: "enabled",
}]});

// Export the name of the bucket
exports.bucketName = bucket.id;

const bucketObject = new aws.s3.BucketObject("index.html", {
    acl: "public-read",
    contentType: "text/html",
    bucket: bucket,
    source: new pulumi.asset.FileAsset("index.html"),
});

exports.bucketEndpoint = pulumi.interpolate`http://${bucket.websiteEndpoint}`;

