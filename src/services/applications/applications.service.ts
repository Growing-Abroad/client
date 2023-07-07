import { toBase64 } from "@/utils/functions/to-base-64";
import { IFormFields } from "@pages/jobs/components/upload-cv-section";
import axios from "axios";


const newApplication = async (data: IFormFields) => {
    try {
        const headers = {
            'Content-Type': 'application/json'
        }
        const file64 = await toBase64(data.file?.[0]);
        console.log({file64})

        const otherFile64 = await toBase64(data.otherFile?.[0]);
        console.log({otherFile64})

        const newData = {
            ...data, 
            file: file64, 
            otherFile: otherFile64
        };
        console.log(newData)
        const body = JSON.stringify(newData);
        const response = await axios.post('http://localhost:3001/applications', body, {headers});

        return response
        
    } catch (error) {
        return {error};
    }
}

export default newApplication;
