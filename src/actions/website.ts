'use server'

import { websiteData } from '@/data/websites';
import { WebsiteData } from '@/types/website';

export async function getWebsiteData(subdomain: string): Promise<WebsiteData | null> {
    // In a real application, this would fetch from a database
    const website = websiteData.find(site => site.id === subdomain);
    return website || null;
} 