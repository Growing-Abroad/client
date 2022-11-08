import { ComponentPropsWithoutRef } from "react"
import Footer from "../Footer"
import Header from "../Header"

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