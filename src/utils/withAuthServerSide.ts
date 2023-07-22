import { GetServerSidePropsContext } from 'next';
// import { parse } from 'cookie';
import { parse } from 'cookie';
import { verify } from 'jsonwebtoken';

export const withAuthServerSide = async (context: GetServerSidePropsContext) => {
  const cookies = context.req.headers.cookie;
  const cookieToken = parse(cookies || '').accessToken;
  console.log({cookieToken})
  // const isAuthenticated = await verifyRefreshToken(refreshToken);
  //TODO - use verification with JSONWEBTOKEN
  
  if (!cookieToken) {
    return {
      redirect: {
        destination: '/admin-login',
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
};
