import HeroSection from "@/components/home/HeroSection"
import SubjectsSection from "@/components/home/SubjectsSection"
import ToolsSection from "@/components/home/ToolsSection"
import DeliveryMethods from "@/components/home/DeliveryMethods"
import CTASection from "@/components/home/CTASection"
import StudentStories from "@/components/home/StudentStories";
import About from "@/components/home/About";

const Page = () => {
    return (
        <main className="max-w-7xl mx-auto px-4 md:px-8 py-8">
            <HeroSection />
            <About />
            <DeliveryMethods />
            <SubjectsSection />
            <ToolsSection />
            <StudentStories />
            <CTASection />
        </main>
    )
}

export default Page