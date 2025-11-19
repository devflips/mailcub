const axios = require("axios");
axios.defaults.headers.post["Content-Type"] = "application/json";

async function invokeApi({
  path,
  method = "GET",
  headers = {},
  queryParams = {},
  postData = {},
}) {
  const reqObj = {
    method,
    url: path,
    headers: {...headers},
    params: queryParams,
    data: postData,
  };

  let results;

  try {
    // console.log("axios requestOBJ ==> ", reqObj);
    results = await axios(reqObj);
    // console.log(results, "API results");
    return results.data;
  } catch (error) {
    // console.error(error);

    if (error.response && error.response.status === 401) {
      // alert(reqObj.url)
      // localStorage.clear();
      // window.location.reload();
    }

    const errorMessage =
      error.response?.data?.message ||
      "" ||
      error.response?.statusText ||
      "Something went wrong";

    return {
      code: error.response?.status || 500,
      message: errorMessage,
    };
  }
}

module.exports = invokeApi;
