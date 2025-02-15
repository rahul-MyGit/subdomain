import { getWebsiteData } from '@/actions/website';
import Hero from '@/components/sections/Hero';
import Features from '@/components/sections/Features';
import Contact from '@/components/sections/Contact';

const SectionComponents = {
    hero: Hero,
    features: Features,
    contact: Contact,
};

export default async function WebsitePage({
    params
}: {
    params: Promise<{ web: string }>
}) {
    const { web } = await params;
    const websiteData = await getWebsiteData(web);

    if (!websiteData) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <h1 className="text-2xl">Website not found</h1>
            </div>
        );
    }

    const homePage = websiteData.pages.find(page => page.path === '/');

    if (!homePage) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <h1 className="text-2xl">Page not found</h1>
            </div>
        );
    }

    return (
        <div className={websiteData.theme === 'dark' ? 'dark' : ''}>
            <main>
                {homePage.sections.map((section, index) => {
                    const Component = SectionComponents[section.type as keyof typeof SectionComponents];
                    return Component ? (
                        <Component 
                            key={index} 
                            content={section.content}
                            actions={section.actions}
                        />
                    ) : null;
                })}
            </main>
        </div>
    );
}
