"use strict";

import { S3Client, GetObjectCommand } from "@aws-sdk/client-s3";
import { streamToString } from "./utils.js";

const s3client = new S3Client({ region: process.env.REGION });

export const handler = async (event) => {
  const s3Record = event.Records[0].s3;
  const params = {
    Bucket: s3Record.bucket.name,
    Key: s3Record.object.key,
  };
  const { Body } = await s3client.send(new GetObjectCommand(params));
  const json = await streamToString(Body);

  console.log("Uploaded JSON File :: ", JSON.parse(json));

  return;
};
