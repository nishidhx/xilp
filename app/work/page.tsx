import { Container } from "@/components/common/container";
import { ExperienceCard } from "@/components/experience/Experience-card";


export default function Work() {
    return <Container className="mt-30">
        <div className="">
            <h1 className="text-2xl font-bold">Work Experience</h1>
            <p className="text-secondary">My contributions and experience across multiple companies and positions.</p>
        </div>
        
            <div className="flex mt-10">
                <ExperienceCard />
            </div>
    </Container>
}