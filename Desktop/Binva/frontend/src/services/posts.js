import axios from "axios";

export const getAllPosts = async (searchKeyword = "", page = 1, limit = 10) => {
  try {
    const { data, headers } = await axios.get(
      `/api/v1/article/getallarticle/?searchKeyword=${searchKeyword}&page=${page}&limit=${limit}`
    );
    return { data, headers };
  } catch (error) {
    if (error.response && error.response.data.message)
      throw new Error(error.response.data.message);
    throw new Error(error.message);
  }
};

//get all vendors
export const getAllVendors = async () => {
  try {
    const { data, headers } = await axios.get(
      `https://binva.onrender.com/api/v1/getmerchants/`
    );
    return { data, headers };
  } catch (error) {
    if (error.response && error.response.data.message)
      throw new Error(error.response.data.message);
    throw new Error(error.message);
  }
};

//get all transaction as Merchant (Both Fraud and not fraud)
export const getAllTransactionByMerchantId = async (token) => {
  try {
    const config = {
      headers: {
          Authorization: `Bearer ${token}`,   
      },
  }
    const { data, headers } = await axios.get(
      `https://binva.onrender.com/api/v1/gettransaction/merchant`,config
    );
    return { data, headers };
  } catch (error) {
    if (error.response && error.response.data.message)
      throw new Error(error.response.data.message);
    throw new Error(error.message);
  }
};

//get all fraudulent transactions as Merchant
export const getAllFraudTransactionByMerchantId = async (token) => {
  try {
    const config = {
      headers: {
          Authorization: `Bearer ${token}`,   
      },
  }
    const { data, headers } = await axios.get(
      `https://binva.onrender.com/api/v1/gettransaction/fraud`,config
    );
    return { data, headers };
  } catch (error) {
    if (error.response && error.response.data.message)
      throw new Error(error.response.data.message);
    throw new Error(error.message);
  }
};

//get all Successful transactions as Merchant
export const getAllSuccessTransactionByMerchantId = async (token) => {
  try {
    const config = {
      headers: {
          Authorization: `Bearer ${token}`,   
      },
  }
    const { data, headers } = await axios.get(
      `https://binva.onrender.com/api/v1/gettransaction/success`,config
    );
    return { data, headers };
  } catch (error) {
    if (error.response && error.response.data.message)
      throw new Error(error.response.data.message);
    throw new Error(error.message);
  }
};

//get all transaction as Admin (Both Fraud and not fraud as well as all merchants)
export const getAllTransactionByAdmin = async (token) => {
  try {
    const config = {
      headers: {
          Authorization: `Bearer ${token}`,   
      },
  }
    const { data, headers } = await axios.get(
      `https://binva.onrender.com/api/v1/gettransactions`,config
    );
    return { data, headers };
  } catch (error) {
    if (error.response && error.response.data.message)
      throw new Error(error.response.data.message);
    throw new Error(error.message);
  }
};

//display live fraudlent transactions
export const getAllFraudLive = async () => {
  try {
    const { data, headers } = await axios.get(
      `https://binva.onrender.com/api/v1/gettransaction/fraud/live`
    );
    return { data, headers };
  } catch (error) {
    if (error.response && error.response.data.message)
      throw new Error(error.response.data.message);
    throw new Error(error.message);
  }
};

export const getSinglePost = async ({id}) => {
  try {
    const { data } = await axios.get(
      `/api/v1/articles/${id}`
    );
    return data;
  } catch (error) {
    if (error.response && error.response.data.message)
      throw new Error(error.response.data.message);
    throw new Error(error.message);
  }
};

export const createNewPost = async ({ image, title, content, token}) => {
  try {
    const config = {
      headers: {
          Authorization: `Bearer ${token}`,
         'Content-Type': 'multipart/form-data',
         
         
      },
  }
    const { data } = await axios.post(
      `http://localhost:5001/api/v1/createarticle`,
      {
        image, title, content, token
      }, config
    );
    return data;
  } catch (error) {
    if (error.response && error.response.data.message)
      throw new Error(error.response.data.message);
    throw new Error(error.message);
  }
};

export const deletePost = async ({articleId, token}) => {
  try {
    const config = {
      headers: {
          Authorization: `Bearer ${token}`,
      },
  }
    const { data } = await axios.delete(
      `/api/v1/deletearticle/${articleId}`,
       config
    );
    return data;
  } catch (error) {
    if (error.response && error.response.data.message)
      throw new Error(error.response.data.message);
    throw new Error(error.message);
  }
};

export const updatePost = async ({id, newTitle, content, token}) => {
  try {
    const config = {
      headers: {
          Authorization: `Bearer ${token}`, 
      },
  }
    const { data } = await axios.put(
      `/api/v1/updatebyarticle/${id}`,
      {
        newTitle, id, content, token
      }, config
    );
    return data;
  } catch (error) {
    if (error.response && error.response.data.message)
      throw new Error(error.response.data.message);
    throw new Error(error.message);
  }
};