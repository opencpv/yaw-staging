const handlePageViewCounter = (post: any) => {
  const mutations = [
    {
      patch: {
        _id: post._id,
        set: {
          views: post.views ? post.views + 1 : 2, // Ensure post is defined
        },
      },
    },
  ];

  fetch(
    `https://${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}.api.sanity.io/v2021-06-07/data/mutate/${process.env.NEXT_PUBLIC_SANITY_DATASET}`,
    {
      method: "post",
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_SANITY_API_TOKEN}`,
      },
      body: JSON.stringify({ mutations }),
    },
  )
    .then((response) => response.json())
    .then((result) => {
      null;
    })
    .catch((error) => {
      null;
    });
};

export default handlePageViewCounter;
