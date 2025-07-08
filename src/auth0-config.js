export const auth0Config = {
  domain: process.env.REACT_APP_AUTH0_DOMAIN || "dev-m71z1z5w3vgzg8av.us.auth0.com",
  clientId: process.env.REACT_APP_AUTH0_CLIENT_ID || "HVEGDlyPsEzRFswZljTujJxLCnVgp5wx",
  authorizationParams: {
    redirect_uri: window.location.origin,
    audience: process.env.REACT_APP_AUTH0_AUDIENCE,
    scope: "openid profile email",
  },
};
