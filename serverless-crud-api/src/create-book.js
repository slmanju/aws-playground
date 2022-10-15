"use strict";

import { PutCommand } from "@aws-sdk/lib-dynamodb";
import { v4 as uuidv4 } from 'uuid';

import { response } from "./utils.js";
import { ddbDocClient } from "./database.js";

export const handler = async (event) => {
  try {
    const body = JSON.parse(event.body);
    const params = {
      TableName: "serverless-crud-table",
      Item: {
        bookId: uuidv4(),
        title: body.title,
        body: body.body
      }
    };
    const data = await ddbDocClient.send(new PutCommand(params));
    return response(200, { message: "Book saved", book: params.Item });
  } catch (err) {
    console.log("Error", err);
    return response(500, { message: err.message });
  }
}
