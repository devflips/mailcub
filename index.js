const invokeApi = require("./invoke_api");

const sendMail = async (body, key) => {
  try {
    const requestObj = {
      path: "https://api.mail.mailcub.com/api/send_email",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-sh-key": key,
      },
      postData: body,
    };

    const result = await invokeApi(requestObj);

    if (result.code !== 200) {
      const error = new Error(result.message || "Unknown error from Mailcub API");
      error.code = result.code;
      throw error;
    }

    return {
      code: result.code,
      message: result.message,
    };

  } catch (err) {
    throw {
      code: err.code || 500,
      message: err.message || "An unexpected error occurred while sending email."
    };
  }
};

module.exports = {
  sendMail,
};
 
