export const getAllData = async () => {
  const responce = await fetch(
    `${process.env.REACT_APP_API}/getaAllVideos`,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  const videoData = await responce.json();
  return videoData
};
