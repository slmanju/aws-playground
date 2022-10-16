"use strict";

import { DeleteCommand } from "@aws-sdk/lib-dynamodb";

import { response } from "./utils.js";
import { ddbDocClient, CRUD_TABLE_NAME } from "./database.js";

export const handler = async (event) => {
  try {
    const bookId = event.pathParameters.id;
    const params = {
      TableName: CRUD_TABLE_NAME,
      Key: {
        bookId,
      },
    };
    const data = await ddbDocClient.send(new DeleteCommand(params));
    return response(204, { message: `Book is deleted for ${bookId}` });
  } catch (err) {
    console.log("Error", err);
    return response(500, { message: err.message });
  }
};
