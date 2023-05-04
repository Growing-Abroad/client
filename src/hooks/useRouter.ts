import { EPagesNames } from "@/utils/enums/pagesNames.enum";
import { useRouter as useNextRouter } from "next/router"

export const useRouter = (before?: () => void) => {
    const router = useNextRouter()

    const pushTo = (page: EPagesNames) => async () => {
        before && before()
        router.push(`/${page}`);
    }
    
    return {
        pushTo
    }
}