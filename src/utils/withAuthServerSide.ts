import { GetServerSidePropsContext } from 'next';
// import { parse } from 'cookie';
import { parse } from 'cookie';
import axios from 'axios';

export const getAccessToken = async (refreshToken: string) => {
  try {
    const response = await axios.get('http://localhost:3001/refresh', {
      withCredentials: true,
      headers: {
        "Authorization": `Bearer ${refreshToken}`
      }
    });
    if (response.status === 200) {
      return response.data;
    }
  }catch (err) {
    // console.log({deuRUim: err})
    return undefined;
  }
}

export const withAuthServerSide = async (context: GetServerSidePropsContext) => {
  const cookies = context.req.headers.cookie;
  const cookieToken = parse(cookies || '').Refresh;
  console.log({cookieToken: cookieToken});
  const authenticationToken = await getAccessToken(cookieToken);
  console.log({qqTaAcontecendo: authenticationToken});

  if (!cookieToken || !authenticationToken) {
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
