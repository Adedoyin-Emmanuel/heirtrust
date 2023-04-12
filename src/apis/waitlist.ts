import $ from "jquery";

const connectToBackend = async (email: string): Promise<Response> => {
    
  if(!email) return Promise.reject(new Error("pass a valid email address to the function"))
  const userEmail = email;
  const apiKEY = process.env.REACT_APP_API_KEY;
  const apiURL = process.env.REACT_APP_API_URL;
  
  
  return $.ajax({
    url: `${apiURL}`,
    data: {
      email: userEmail,
    },
    dataType: "json",
    crossDomain: true,
    xhrFields: {
      withCredentials: true,
    },
    headers: {
      origin: "https://heirtrust.vercel.app",
      "api-key": apiKEY,
    },
    method: "GET",
  });
  
};

export default connectToBackend;
