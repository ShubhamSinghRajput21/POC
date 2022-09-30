class TokenService {
  constructor(accessToken) {
    this.accessToken = accessToken;
  }

  getAccessToken = () => this.accessToken;

  hasSession = () => !!this.accessToken;

  getAuthHeader = () => `Bearer ${this.getAccessToken()}`;
}

export default TokenService;
