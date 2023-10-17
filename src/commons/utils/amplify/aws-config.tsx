import awsExports from './aws-constants';

export const amplifyConfig = {
  aws_cognito_region: awsExports.REGION,
  aws_user_pools_id: awsExports.USER_POOL_ID,
  aws_user_pools_web_client_id: awsExports.USER_POOL_APP_CLIENT_ID,
  Auth: {
    identityPoolId: awsExports.IDENTITY_POOL_ID,
    region: awsExports.REGION,
  },
  API: {
    endpoints: [
      {
        name: awsExports.API_NAME,
        endpoint: awsExports.API_URL,
      },
    ],
  },
  Storage: {
    AWSS3: {
      bucket: awsExports.BUCKET_NAME,
      region: awsExports.REGION,
    },
  },
};
