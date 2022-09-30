import {ApiEndPoints} from '../constants';
import BaseService from '../helpers/baseService';

class AccountService extends BaseService {
  constructor(tokenService) {
    super(); //to run parent constructor
    this.http = this.getHttpClient(tokenService);
  }

  getProfile = () => this.http.get(ApiEndPoints.GetProfile);

  setProfile = data => this.http.patch(ApiEndPoints.SetProfile, data);

  getPhotos = () => this.http.get(ApiEndPoints.GetPhotos);

  setPhotos = data =>
    this.http.post(ApiEndPoints.SetPhotos, data, {
      'Content-Type': 'multipart/form-data',
    });

  deletePhotos = data => this.http.del(ApiEndPoints.DeletePhotos, data);

  getAllInterests = () => this.http.get(ApiEndPoints.GetAllInterests);

  getInterests = () => this.http.get(ApiEndPoints.GetInterests);

  setInterests = data => this.http.put(ApiEndPoints.SetInterests, data);

  getAllQuestions = () => this.http.get(ApiEndPoints.GetAllQuestions);

  getQuestionnaire = () => this.http.get(ApiEndPoints.GetQuestionnaire);

  setQuestionnaire = data =>
    this.http.post(ApiEndPoints.SetQuestionnaire, data);
}

export default AccountService;
