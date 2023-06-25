import { IContactUsForm, IContactUsServerResponse } from "@/models/contact-us.model";



const sendContactUsForm = async (data: IContactUsForm): Promise<IContactUsServerResponse> => {
    try {
      const response = await fetch('http://localhost:3001/contact-growing-abroad', {
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
      console.error('Error: ', error);
      return { error };
    }
  };
  
  export default sendContactUsForm;
  