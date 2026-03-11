import AssemblyAutomationSection from "@/components/AssemblyAutomationSection";

export const metadata = {
  title: "Assembly Automation Solutions | Micrologic Integrated Systems",
  description:
    "Micrologic delivers advanced assembly automation solutions including conveyors, robotic automation, rotary indexing and vision inspection systems.",
  keywords: [
    "assembly automation systems",
    "industrial automation",
    "robotic assembly automation",
    "vision inspection systems",
    "manufacturing automation"
  ],
  alternates: {
    canonical: "https://www.micrologicglobal.com/solutions/assembly-automation",
  },
  openGraph: {
    title: "Assembly Automation Solutions | Micrologic",
    description:
      "Advanced assembly automation systems including conveyors, robotics and vision inspection.",
    url: "https://www.micrologicglobal.com/solutions/assembly-automation",
    siteName: "Micrologic Integrated Systems",
    type: "website",
  },
};

export default function AssemblyAutomationPage() {
  return (
    <div>
      <AssemblyAutomationSection />
    </div>
  );
}