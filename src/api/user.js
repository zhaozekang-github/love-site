import request from "../utils/request"

export default class User {
  static async login(params) {
    return request.post("/user/login", params)
  }

  static async register(username, password) {
    return request.post("/user/register", { username, password })
  }
}