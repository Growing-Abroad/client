import { IContactUsForm, IContactUsServerResponse } from "@/models/contact-us.model";



const sendContactUsForm = async (data: IContactUsForm): Promise<IContactUsServerResponse> => {
    try {
      const response = await fetch('https://api.growingabroad.de/contact-growing-abroad', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
      });
  
      if (!response.ok) {
        throw new Error('Error: '+JSON.stringify({response},null,2));
      }
  
      const responseData = await response.json();
      
      return { responseData, response };
    } catch (error) {
      console.error(error);
      return { error};
    }
  };
  
  export default sendContactUsForm;
  