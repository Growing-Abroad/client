import * as T from "../types/sendNewsLetterTypes";

interface IsendNewsLetterServiceResponse {
  contacts: T.Contact[];
  contactList: T.ContactList;
}

type SetShowToast = React.Dispatch<React.SetStateAction<boolean>>;

interface IsendNewsLetterServiceProps {
  url: string
  data: {
    user: {
      name: string
      email: string
    },
    listId: number
  }
  setShowToast: SetShowToast
}

const signInNewsLetter = async ({ url, data, setShowToast }: IsendNewsLetterServiceProps): Promise<IsendNewsLetterServiceResponse | any> => {
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });

    if (!response.ok) {
      setShowToast(true)
      throw new Error('Error: ' + response.status);
    }

    const responseData = await response.json();
    setShowToast(false)
    
    return { responseData, response };
  } catch (error) {
    setShowToast(true)
    console.error('Error:', error);
    return { error };
  }
};

export default signInNewsLetter;

