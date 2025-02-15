export interface WebsiteData {
    id: string;
    name: string;
    theme: 'light' | 'dark';
    pages: {
        path: string;
        title: string;
        sections: {
            type: 'hero' | 'features' | 'contact';
            content: any;
            actions?: {
                label: string;
                type: 'link' | 'modal' | 'scroll';
                target: string;
            }[];
        }[];
    }[];
} 