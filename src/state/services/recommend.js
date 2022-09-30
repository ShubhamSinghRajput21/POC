import {ApiEndPoints} from '../constants';
import BaseService from '../helpers/baseService';

class RecommendService extends BaseService {
  constructor(tokenService) {
    super(); //to run parent constructor
    this.http = this.getHttpClient(tokenService, (isPrivate = true));
  }

  getRecommendations = (limit, offset) =>
    this.http.post(ApiEndPoints.GetRecommendations, {limit, offset});

  getProfileById = id => this.http.get(ApiEndPoints.GetProfileById(id));
}

export default RecommendService;
