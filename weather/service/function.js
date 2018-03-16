module.exports.getWeather = (event, context, callback) => {
    /*
    In serverless.yml we said that our function would be exported as
    `getWeather`.
    */
    
      const data = { temperature: 19.2 };
      /* Define some dummy data, for now. In the next post
         we'll replace this with a live call to the OpenWeatherMap API. */
    
    
      const response = {
        statusCode: 200,
        headers: {
          "Access-Control-Allow-Origin" : "*",
        },
        body: JSON.stringify(data)
        // JSON.stringify converts the JavaScript response object
        // into a JSON string, which is what our client is expecting.
      };
      /* Build a response object. Since our function
         is responding to an HTTP request, we should
         at least define the response status code, `statusCode`,
         and the response body, `body`. Because we'll
         be depending on CORS we also need to set
         the `Access-Control-Allow-Origin` header. */
    
    
      callback(null, response);
      /* We terminate the request by invoking the `callback` function
         given to us by Lambda. We're passing `null` as the first argument
         as our function has successfully executed. If our function
         fails to execute, then we'd pass a description of the
         error as our first argument. */
    };