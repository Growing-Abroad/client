import { User } from "@pages/admin";
import axios from "axios";
import { mockedPoolData } from "@/utils/mock-ups/talent-pool-mocked-data";


export async function getFileFromDb(userId: string) {
  try {
      const response = await axios.get(`http://localhost:3001/file/${userId}`);
      console.log({response})
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
