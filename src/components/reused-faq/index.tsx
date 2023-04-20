import useAppContext from "@/hooks/useAppContext";
import FaqSection from "@pages/faq/components/FaqSection";
import TwoColorTitle from "../two-color-title";
import { GeneralFaqMockUp } from "./faq-mock-ups";


export default function ReusedFaq() {
    const { isMobile } = useAppContext();

    return (
        <>
            <TwoColorTitle
            as="h2" hasSpaceBtw
            text1="Frequently" text2="Asked Questions"
            wrapperStyles={{marginBottom: isMobile ? '-40px' : '-25px'}}
            styles={isMobile ? {
                display: 'flex',
                flexDirection: "column"
            } : undefined}
            />
            <FaqSection accordeons={GeneralFaqMockUp} />
        </>
    )
}
