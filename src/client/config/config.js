// if (
//   window.environmentParams &&
//   Object.keys(window.environmentParams).length > 1
// ) {
//   window.environmentParams = window.environmentParams;
// } else {
//   window.environmentParams = {
//     _: [],
//     backendHostname: "localhost",
//     backendPort: 9000
//   };
// }

// const backendHostname = environmentParams.backendHostname
//   ? environmentParams.backendHostname
//   : window.location.hostname;

// const apiHostUrl =
//   "http://" + backendHostname + ":" + environmentParams.backendPort;

const apiHostUrl = "https://jsonplaceholder.typicode.com";

const config = {
  apiEndPoints: {
    getUsers: apiHostUrl + "/users"
  }
};

export default config;
