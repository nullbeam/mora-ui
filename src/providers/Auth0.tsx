import { AppState, Auth0Provider } from '@auth0/auth0-react';
import { PropsWithChildren, useMemo } from 'react';

const domain = import.meta.env.VITE_AUTH0_DOMAIN as string;
const clientId = import.meta.env.VITE_AUTH0_CLIENT_ID as string;
const audience = import.meta.env.VITE_AUTH0_AUDIENCE as string | undefined;
const scope = (import.meta.env.VITE_AUTH0_SCOPES as string | undefined) ?? 'openid profile email';
const callbackPath = (import.meta.env.VITE_AUTH0_CALLBACK_PATH as string | undefined) ?? '/auth/callback';

export function Auth0AppProvider({ children }: PropsWithChildren) {
  const authorizationParams = useMemo(() => ({
    redirect_uri: `${window.location.origin}${callbackPath}`,
    ...(audience ? { audience } : {}),
    scope,
  }), [audience, scope, callbackPath]);

  const onRedirectCallback = (appState?: AppState) => {
    // window.history.replaceState({}, document.title, appState?.returnTo || '/');
    const returnTo = appState?.returnTo || '/';
    window.location.replace(returnTo);
  };

  return (
    <Auth0Provider domain={domain} clientId={clientId} authorizationParams={authorizationParams} onRedirectCallback={onRedirectCallback}>
      {children}
    </Auth0Provider>
  );
}