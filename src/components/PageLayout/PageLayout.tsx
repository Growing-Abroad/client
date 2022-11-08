import { ComponentPropsWithoutRef } from "react"
import Footer from "@components/Footer"
import Header from "@components/Header"

function PageLayout(props: ComponentPropsWithoutRef<'body'>) {
    const {children} = props
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    )
}

export default PageLayout