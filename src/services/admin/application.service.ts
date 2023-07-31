import { User } from "@pages/admin";
import axios from "axios";
import { mockedPoolData } from "@/utils/mock-ups/talent-pool-mocked-data";


export async function getFileFromDb(fileId: string, accessToken: string) {
  try {
    const response = await axios.get(`http://localhost:3001/file/${fileId}`, {
      responseType: 'blob',
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    });
    const blobURL = URL.createObjectURL(response.data);
    window.open(blobURL, '_blank');
  } catch (error) {
    console.error(error);
  }
}

export async function fetchUsersData(accessToken: string): Promise<Array<User>> {
  try {
    const response = await axios.get<User[]>('http://localhost:3001/talentpool', {
      headers: {Authorization: `Bearer ${accessToken}`}
    });
    // return mockedPoolData;
    return response.data;
  } catch (error) {
    console.error("Failed to fetch user data: ", error);
    throw new Error("Failed to fetch user data");
  }
};
