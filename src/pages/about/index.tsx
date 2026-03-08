import MainWebsiteLayout from "@/layout/MainWebsiteLayout"
import About from "./About"
import Founder from "./Founder"
import Experience from "./Experience"

type Props = {}

function AboutPage({}: Props) {
    return (
        <MainWebsiteLayout>
            <Founder />
            <About />
            <Experience />
        </MainWebsiteLayout>
    )
}

export default AboutPage
