export const handler = async function (event) {
  console.log("authorizer get called with", JSON.stringify(event));
  if (event.authorizationToken === "cat") {
    return {
      principalId: "poos",
      policyDocument: {
        Version: "2012-10-17",
        Statement: [
          {
            Action: "execute-api:Invoke",
            Effect: "Allow",
            Resource: event.methodArn,
          },
        ],
      },
    };
  }
  throw Error("Unauthorized");
};
