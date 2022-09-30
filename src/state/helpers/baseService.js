import React from "react";
import Http from "./http";
import Config from "react-native-config";

class BaseService {
  constructor(){
    this.BASE_URL = `${Config.BASE_URL}`;
  }
  
  getHttpClient = (tokenService, isPrivate=true)=>{  
    return new Http(
      tokenService,
      this.BASE_URL,
      isPrivate
    );
  }
}

export default BaseService;
