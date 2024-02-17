const saveLocalSession = (hash: string) => {
  let tokens = hash.split("&");
  const access_token = tokens[0].split("=")[1];
  const refresh_token = tokens[4].split("=")[1];
  const expiresIn = tokens[2].split("=")[1];
  localStorage.setItem(
    "session",
    JSON.stringify({ access_token, refresh_token, expiresIn })
  );
};

export default saveLocalSession;
