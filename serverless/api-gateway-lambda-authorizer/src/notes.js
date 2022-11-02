"use strict";

export const handler = async (event) => {
  console.log("notes get calles with", JSON.stringify(event));
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: "Go Lambda! Your function executed successfully!",
    }),
  };
};
