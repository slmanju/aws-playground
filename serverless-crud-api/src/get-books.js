"use strict";

import { ScanCommand } from "@aws-sdk/lib-dynamodb";

import { response } from "./utils.js";
import { ddbDocClient, CRUD_TABLE_NAME } from "./database.js";

export const handler = async (event) => {
  try {
    const params = {
      TableName: CRUD_TABLE_NAME
    };
    const data = await ddbDocClient.send(new ScanCommand(params));
    return response(200, data.Items);
  } catch (err) {
    console.log("Error", err);
    return response(500, { message: err.message });
  }
}
