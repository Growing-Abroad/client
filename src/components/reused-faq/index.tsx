import useAppContext from "@/hooks/useAppContext";
import FaqSection from "@pages/faq/components/FaqSection";
import TwoColorTitle from "../two-color-title";
import { GeneralFaqMockUp, FaqCoaching } from "./faq-mock-ups";

interface IReusedFaqProps {
    pageType?: string
}

export default function ReusedFaq({pageType="any"}: IReusedFaqProps) {
    const { isMobile } = useAppContext();

    return (
        <>
            <TwoColorTitle
            as="h2" hasSpaceBtw
            text1="Frequently" text2="Asked Questions"
            wrapperStyles={{marginBottom: isMobile ? '' : ''}}
            styles={isMobile ? {
                display: 'flex',
                flexDirection: "column"
            } : undefined}
            />
            <FaqSection accordeons={pageType === "coaching" ? FaqCoaching : GeneralFaqMockUp} />
        </>
    )
}
