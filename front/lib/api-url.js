export default class {
  static getApiBaseUrl() {
    return process.server
      ? process.env.INTERNAL_API_URL
      : process.env.EXTERNAL_API_URL
  }
}
