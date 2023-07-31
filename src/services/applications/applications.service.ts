import { toBase64 } from "@/utils/functions/to-base-64";
import { IFormFields } from "@pages/talent-pool/components/upload-cv-section";
import axios from "axios";


const newApplication = async (data: IFormFields) => {
    try {
        const headers = {
            'Content-Type': 'application/json'
        }
        const file64 = await toBase64(data.file?.[0]);
        const otherFile64 = await toBase64(data.otherFile?.[0]);
        const newData = {
            ...data, 
            file: file64, 
            otherFile: otherFile64
        };
        const body = JSON.stringify(newData);
        const response = await axios.post('https://api.growingabroad.de/talentpool', body, {headers});

        return response
        
    } catch (error) {
        throw error; 
    }
}

export default newApplication;
