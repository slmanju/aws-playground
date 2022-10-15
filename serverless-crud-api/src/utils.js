export const response = (statusCode, data) => {
  return {
    statusCode,
    body: JSON.stringify(data)
  }
}