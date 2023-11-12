const BASE_URL = "http://localhost:8080";
const RESOURSE_URL = `${BASE_URL}/chairs`;

const baseRequest = async ({ urlPath = "", method = "GET", body = null }) => {
  try {
    const reqParams = {
      method,
      headers: {
        "Content-Type": "application/json",
      },
    };

    if (body) {
      reqParams.body = JSON.stringify(body);
    }

    return await fetch(`${RESOURSE_URL}${urlPath}`, reqParams);
  } catch (error) {
    console.error("HTTP ERROR: ", error);
    return error;
  }
};

// public functionality

export const getAllChairs = async () => {
  const rawResponse = await baseRequest({ method: "GET" });

  return await rawResponse.json();
};

export const postChairs = (body) =>
  baseRequest({
    method: "POST",
    body,
    headers: { "Content-Type": "application/json" },
  });

export const updateChair = (id, body) =>
  baseRequest({ urlPath: `/${id}`, method: "PUT", body });

export const deleteChair = (id) =>
  baseRequest({ urlPath: `/${id}`, method: "DELETE" });
