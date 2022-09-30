const JSON_MIME_TYPE = 'application/json';

// A wrapper for the fetch API.
class Http {
  constructor(tokenService, baseUrl, isPrivate) {
    this.tokenService = tokenService;
    this.baseUrl = baseUrl;
    this.headers = {accept: JSON_MIME_TYPE};
    this.isPrivate = isPrivate;
  }

  getUrl: (url: ?string) => string = (url = '') => `${this.baseUrl}${url}`;

  getSearchParams: (params: ?any) => string = (params) => {
    if (!params) {
      return '';
    }
    const searchParams = new URLSearchParams();
    Object.entries(params)
      .filter(([key, value]) => value !== undefined && value !== null)
      .forEach(([key, value]) => {
        if (value instanceof Array) {
          value.map(item=>{
            searchParams.append(key, item);
          })
        } else {
          searchParams.append(key, value);
        }
      });
    return `?${searchParams.toString()}`;
  };

  tryGetJson = async (resp) => {
    return new Promise((resolve) => {
      if (resp) {
        resp.json().then(json => resolve(json)).catch(() => resolve(null))
      } else {
        resolve(null)
      }
    })
  }

  processResponse: (Response) => any = async (response) => {
    const result = await this.tryGetJson(response);
    if (response.ok) {
      return result;
    }
    const error = new Error(result?.title || response?.statusText);
    error.status = response.status;
    error.response = result;
    throw error;
  };

  // getJsonPatch = (data) =>
  //   Object.entries(data).map(([key, value]) => ({
  //     value,
  //     op: 'add',
  //     path: `/${key}`,
  //   }));

  setHeader = (key, value) => {
    this.headers[key] = value;
  };

  get: (url: string, params: ?any) => any = async (url, params) => {
    const response = await fetch(
      `${this.getUrl(url)}${this.getSearchParams(params)}`,
      {
        headers: {
          ...((this.isPrivate) &&{authorization: this.tokenService.getAuthHeader()}),
          ...this.headers,
        },
      },
    );
    return this.processResponse(response);
  };

  post = async (url, body,headers) => {
    const response = await fetch(this.getUrl(url), {
      method: 'post',
      body: JSON.stringify(body),
      headers: {
        ...((this.isPrivate) &&{authorization: this.tokenService.getAuthHeader()}),
        'content-type': JSON_MIME_TYPE,
        ...this.headers,
        ...headers
      },
    });
    return this.processResponse(response);
  };

  put = async (url, body) => {
    const response = await fetch(this.getUrl(url), {
      method: 'put',
      body: JSON.stringify(body),
      headers: {
        'content-type': JSON_MIME_TYPE,
        ...((this.isPrivate) &&{authorization: this.tokenService.getAuthHeader()}),
        ...this.headers,
      },
    });
    return this.processResponse(response);
  };

  patch = async (url, data) => {
    const response = await fetch(this.getUrl(url), {
      method: 'PATCH',
      body: JSON.stringify(data),
      headers: {
        'content-type': JSON_MIME_TYPE,
        ...((this.isPrivate) &&{authorization: this.tokenService.getAuthHeader()}),
        ...this.headers,
      },
    });
    return this.processResponse(response);
  };

  del = async (url, body) => {
    const response = await fetch(this.getUrl(url), {
      method: 'delete',
      body: JSON.stringify(body),
      headers: {
        'content-type': JSON_MIME_TYPE,
        ...((this.isPrivate) &&{authorization: this.tokenService.getAuthHeader()}),
        ...this.headers,
      },
    });
    return this.processResponse(response);
  };

}

export default Http;
