export const createGetRequest = async (options = {}) => {
    const data = await fetch(options.url + options.method, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        }
      })
    const response = await data.json();
    return response;
    };

export const createPostRequest = async (options = {}) => {
    const data = await fetch(options.url + options.method, {
       method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        },
        body: options.body,
      })
    const response = await data.json();
    return response;
    }
  
