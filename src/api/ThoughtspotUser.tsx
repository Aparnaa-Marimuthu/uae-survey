export type TSUser = {
  name: string;
  displayName?: string;
};

export const fetchCurrentUser = async (): Promise<TSUser> => {
  const res = await fetch(
    `${import.meta.env.VITE_TS_HOST}/callosum/v1/session/info`,
    {
      credentials: "include",
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch ThoughtSpot user");
  }

  const data = await res.json();

  return {
    name: data?.user?.name,
    displayName: data?.user?.display_name,
  };
};
