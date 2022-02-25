import { HTTP } from "../http-common";

export default {
  login(credentials) {
    return HTTP.post("/login", credentials).then((response) => response.data);
  },
  signUp(credentials) {
    return HTTP.post("/sign-up", credentials).then(
      (response) => response.data
    );
  },
  getSecretContent() {
    return HTTP.get("/secret-route").then((response) => response.data);
  },
};
