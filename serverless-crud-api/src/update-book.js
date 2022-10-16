"use strict";

import { UpdateCommand } from "@aws-sdk/lib-dynamodb";

import { response } from "./utils.js";
import { ddbDocClient, CRUD_TABLE_NAME } from "./database.js";

export const handler = async (event) => {
  try {
    const bookId = event.pathParameters.id;
    const book = JSON.parse(event.body);
    const params = {
      TableName: CRUD_TABLE_NAME,
      Key: {
        bookId,
      },
      UpdateExpression: "set #title = :title, #author = :author",
      ExpressionAttributeNames: {
        "#title": "title",
        "#author": "author",
      },
      ExpressionAttributeValues: {
        ":title": book.title,
        ":author": book.author,
      },
      ConditionExpression: "attribute_exists(bookId)",
    };
    const data = await ddbDocClient.send(new UpdateCommand(params));
    return response(200, { message: `Book updated for ${bookId}` });
  } catch (err) {
    console.log("Error", err);
    return response(500, { message: err.message });
  }
};
