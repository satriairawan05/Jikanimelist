const getAnimeResponse = async (resource, query) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/${resource}?${query}`);
  const anime = await response.json();
  return anime;
};

const getNestedAnimeResponse = async (resource, objectProperty) => {
  const response = await getAnimeResponse(resource);
  return response.data.flatMap((item) => item[objectProperty]);
};

const getGithubUser = async (username) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_GITHUB_API_URL}/${username}`);
  const user = await response.json();
  return user;
};

const reproduce = (data, gap) => {
  const first = ~~(Math.random() * (data.length - gap) + 1);
  const last = first + gap;

  const response = {
    data: data.slice(first, last),
  };

  return response;
};

const currentYear = new Date().getFullYear();

export { getAnimeResponse, getNestedAnimeResponse, getGithubUser, reproduce, currentYear, };
