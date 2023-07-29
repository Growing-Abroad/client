import { User } from "@pages/admin";
import axios from "axios";
import { mockedPoolData } from "@/utils/mock-ups/talent-pool-mocked-data";


export async function getFileFromDb(fileId: string) {
  try {
    const response = await axios.get(`http://localhost:3001/file/${fileId}`, {
      responseType: 'blob'
    });
    const blobURL = URL.createObjectURL(response.data);
    window.open(blobURL, '_blank');
  } catch (error) {
    console.error(error);
  }
}

export async function fetchUsersData(): Promise<Array<User>> {
  try {
    const response = await axios.get<User[]>('http://localhost:3001/talentpool');
    // return mockedPoolData;
    return response.data;
  } catch (error) {
    console.error("Failed to fetch user data: ", error);
    throw new Error("Failed to fetch user data");
  }
};
