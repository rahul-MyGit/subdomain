import { WebsiteData } from '@/types/website';

export const websiteData: WebsiteData[] = [
    {
        id: 'restaurant-1',
        name: "Mario's Italian",
        theme: 'light',
        pages: [
            {
                path: '/',
                title: 'Home',
                sections: [
                    {
                        type: 'hero',
                        content: {
                            heading: "Welcome to Mario's Italian",
                            subheading: "Authentic Italian Cuisine",
                            image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5"
                        },
                        actions: [
                            {
                                label: "View Menu",
                                type: "modal",
                                target: "menu"
                            },
                            {
                                label: "Book Table",
                                type: "scroll",
                                target: "contact"
                            }
                        ]
                    },
                    {
                        type: 'features',
                        content: {
                            items: [
                                { title: 'Fresh Pasta', description: 'Made daily' },
                                { title: 'Wood-fired Pizza', description: 'Traditional recipe' },
                                { title: 'Fine Wines', description: 'Italian selection' }
                            ]
                        },
                        actions: [
                            {
                                label: "Learn More",
                                type: "link",
                                target: "/specialties"
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        id: 'cafe-1',
        name: "Morning Brew",
        theme: 'dark',
        pages: [
            {
                path: '/',
                title: 'Home',
                sections: [
                    {
                        type: 'hero',
                        content: {
                            heading: "Morning Brew Café",
                            subheading: "Start your day right",
                            image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085"
                        },
                        actions: [
                            {
                                label: "Order Online",
                                type: "modal",
                                target: "order"
                            }
                        ]
                    },
                    {
                        type: 'contact',
                        content: {
                            address: "123 Coffee Street",
                            phone: "555-0123",
                            email: "hello@morningbrew.com"
                        },
                        actions: [
                            {
                                label: "Get Directions",
                                type: "link",
                                target: "https://maps.google.com"
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        id: 'gym-1',
        name: "PowerFit Gym",
        theme: 'dark',
        pages: [
            {
                path: '/',
                title: 'Home',
                sections: [
                    {
                        type: 'hero',
                        content: {
                            heading: "Transform Your Life",
                            subheading: "Join PowerFit Today",
                            image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48"
                        },
                        actions: [
                            {
                                label: "Start Free Trial",
                                type: "modal",
                                target: "trial"
                            }
                        ]
                    },
                    {
                        type: 'features',
                        content: {
                            items: [
                                { title: '24/7 Access', description: 'Train any time' },
                                { title: 'Expert Trainers', description: 'Personal guidance' },
                                { title: 'Modern Equipment', description: 'Latest gear' }
                            ]
                        },
                        actions: [
                            {
                                label: "View Membership Plans",
                                type: "modal",
                                target: "plans"
                            }
                        ]
                    }
                ]
            }
        ]
    }
]; 