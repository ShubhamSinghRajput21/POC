import {ApiEndPoints} from '../constants';
import BaseService from '../helpers/baseService';

class ActivityService extends BaseService {
  constructor(tokenService) {
    super(); //to run parent constructor
    this.http = this.getHttpClient(tokenService, (isPrivate = true));
  }

  getLikes = () => this.http.get(ApiEndPoints.GetLikes);
  getFeedback = () => this.http.get(ApiEndPoints.GetFeedback);
  getMatches = () => this.http.get(ApiEndPoints.GetMatches);
  setLikes = data => this.http.post(ApiEndPoints.SetLikes, data);
  like = data => this.http.post(ApiEndPoints.Like, data);
  dislike = data => this.http.post(ApiEndPoints.Dislike, data);
  getPlans = () => this.http.get(ApiEndPoints.GetPlans);
  setFeedback = data => this.http.post(ApiEndPoints.SetFeedback, data);
  getAppSettings = () => this.http.get(ApiEndPoints.GetAppSettings);
  setAppSettings = data => this.http.put(ApiEndPoints.SetAppSettings, data);
}

export default ActivityService;
