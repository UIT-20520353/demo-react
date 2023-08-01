import axios from "axios";

export const API_KEY = "9eccdf8b08699a68030379102eeeffa7";

export const instanceAPI = axios.create({
  baseURL: "http://localhost:4000",
});

export async function getPosts() {
  try {
    const response = await instanceAPI.get("/posts", {
      params: {
        access_key: API_KEY,
      },
    });

    return response;
  } catch (error) {
    console.error(error);
    return [];
  }
}

export async function createPost(post) {
  try {
    const response = await instanceAPI.post("/posts", {
      ...post,
    });

    return response;
  } catch (error) {
    console.error(error);
  }
}

export async function deletePostById(id) {
  try {
    await instanceAPI.delete(`/posts/${id}`);
  } catch (error) {
    console.error(error);
  }
}

export async function getPostById(id) {
  try {
    const response = await instanceAPI.get(`/posts/${id}`);

    return response;
  } catch (error) {
    console.error(error);
  }
}

export async function updatePostById(id, title, detail, imgSource) {
  try {
    const response = await instanceAPI.patch(`/posts/${id}`, {
      title,
      description: detail,
      featuredImage: imgSource,
    });

    return response;
  } catch (error) {
    console.error(error);
    return null;
  }
}
