import axios from '../../axios/axios.instance';
export const Rating = async (pathId, rate) => {
  try {
    const data = await axios.put(`/accommodations/${pathId}/rate`, { rate });
    console.log(data.data.message)
  } catch (error) {
    // return error.response.data
    console.log(error.response.data.message)
  }
};