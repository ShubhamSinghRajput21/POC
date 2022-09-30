import { ApiEndPoints } from "../constants";
import BaseService from '../helpers/baseService';

class AuthService extends BaseService {
  constructor(tokenService) {
    super(); //to run parent constructor
    this.http = this.getHttpClient(tokenService, isPrivate=false);
  }

  getOtp = (data) => this.http.post(ApiEndPoints.GetOtp, data);

  verifyOtp = (data) => this.http.post(ApiEndPoints.VerifyOtp, data);
}

export default AuthService;
