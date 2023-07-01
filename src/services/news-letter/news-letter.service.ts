import * as T from "../types/sendNewsLetterTypes";

interface IsendNewsLetterServiceResponse {
  contacts: T.Contact[];
  contactList: T.ContactList;
}

interface IsendNewsLetterServiceProps {
  url: string
  data: {
    user: {
      name: string
      email: string
    },
    listId: number
  }
}

const signInNewsLetter = async ({ url, data }: IsendNewsLetterServiceProps): Promise<IsendNewsLetterServiceResponse | any> => {
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });

    if (!response.ok) {
      throw new Error('Error: ' + response.status);
    }

    const responseData = await response.json();
    
    return { responseData, response };
  } catch (error) {
    console.error('Error:', error);
    return { error };
  }
};

export default signInNewsLetter;

