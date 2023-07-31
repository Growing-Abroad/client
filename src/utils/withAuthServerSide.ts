import { GetServerSidePropsContext } from 'next';
// import { parse } from 'cookie';
import { parse } from 'cookie';
import axios from 'axios';
import cookie from 'js-cookie';

export const getAccessToken = async (refreshToken: string) => {
  try {
    const response = await axios.get('https://api.growingabroad.de/refresh', {
      withCredentials: true,
      headers: {
        "Authorization": `Bearer ${refreshToken}`
      }
    });
    if (response.status === 200) {
      return response.data;
    }
  }catch (err) {
    return undefined;
  }
}

export const withAuthServerSide = async (context: GetServerSidePropsContext) => {
  const cookies = context.req.headers.cookie;

  const accessToken = parse(cookies || '').AccessToken;
  if (accessToken) {
    cookie.remove('AccessToken');
    return {
      props: {
        authenticationToken: accessToken
      },
    };
  } 

  const refreshToken = parse(cookies || '').Refresh;


  const authenticationToken = await getAccessToken(refreshToken);

  if (!refreshToken || !authenticationToken) {
    return {
      redirect: {
        destination: '/admin-login',
        permanent: false,
      },
    };
  }

  return {
    props: {
      authenticationToken
    },
  };
};
