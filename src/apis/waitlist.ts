import $ from "jquery";

const connectToBackend = async (email: string, username:string): Promise<Response> => {
  if (!email || !username)
    return Promise.reject(
      new Error("pass a username or a valid email address")
    );
  const userEmail = email;
  const userName = username;
  const apiKEY = process.env.REACT_APP_API_KEY;
  const apiURL = process.env.REACT_APP_API_URL;

  return $.ajax({
    url: `${apiURL}`,
    data: {
      email: userEmail,
      userName:userName
    },
    dataType: "json",
    headers: {
      "api-key": apiKEY
    },
    method: "GET",
  });
};

export default connectToBackend;
