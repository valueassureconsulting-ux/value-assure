import MainWebsiteLayout from "@/layout/MainWebsiteLayout"
import About from "./About"
import Founder from "./Founder"
import Experience from "./Experience"
import Team from "./Team"

type Props = {}

function AboutPage({}: Props) {
    return (
        <MainWebsiteLayout>
            <Founder />
            <Team />
            <About />
            <Experience />
        </MainWebsiteLayout>
    )
}

export default AboutPage
