import { API } from 'aws-amplify';
import { amplifyConfig } from '../utils/amplify/aws-config';

// Typescript
import { UserForServiceProps } from '../utils/Interfaces/User.Interface';
import { UserIdType } from '../utils/Types/User.types';

export class UserService {
  static createOrConfirmUser = async (variables: UserForServiceProps) => {
    const apiName = amplifyConfig.API.endpoints[0].name;
    const path = '/production/users/create';

    const myInit = {
      body: {
        ...variables,
      },
    };

    const response = await API.post(apiName, path, myInit);
    return response;
  };

  static updateUser = async (variables: UserForServiceProps) => {
    const apiName = amplifyConfig.API.endpoints[0].name;
    const path = '/production/users/update';

    const myInit = {
      body: {
        ...variables,
      },
    };

    const response = await API.post(apiName, path, myInit);
    return response;
  };

  static getLoggedUser = async (variables: UserIdType) => {
    const apiName = amplifyConfig.API.endpoints[0].name;
    const path = '/production/users/get';

    const myInit = {
      queryStringParameters: {
        ...variables,
      },
    };

    const response = await API.get(apiName, path, myInit);
    return response;
  };
}
