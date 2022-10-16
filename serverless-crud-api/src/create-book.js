"use strict";

import { PutCommand } from "@aws-sdk/lib-dynamodb";
import { v4 as uuidv4 } from "uuid";

import { response } from "./utils.js";
import { ddbDocClient, CRUD_TABLE_NAME } from "./database.js";

export const handler = async (event) => {
  try {
    const book = JSON.parse(event.body);
    const params = {
      TableName: CRUD_TABLE_NAME,
      Item: {
        bookId: uuidv4(),
        title: book.title,
        author: book.author,
      },
    };
    const data = await ddbDocClient.send(new PutCommand(params));
    return response(201, { message: "Book saved", book: params.Item });
  } catch (err) {
    console.log("Error", err);
    return response(500, { message: err.message });
  }
};
