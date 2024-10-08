import { Metadata } from "next";

export const SITE_CONFIG: Metadata = {
    title: {
        // write a default title for astra a ai powered website builder suggest something unique and catchy don't use the same words of ai powered website builder give a unique name
        default: "ModAI - AI Moderation for Every Moment",
        template: `%s | ModAI`
    },
    description: "ModAI is an AI-powered moderation tool that ensures smooth and safe live streaming and video calls. Easily manage comments, mute users, and handle content—no technical skills required. Get started for free!",
    icons: {
        icon: [
            {
                url: "/icons/favicon.ico",
                href: "/icons/favicon.ico",
            }
        ]
    },
    openGraph: {
        title: "ModAI - AI Moderation for Every Moment",
        description: "ModAI is an AI-powered moderation tool that ensures smooth and safe live streaming and video calls. Easily manage comments, mute users, and handle content—no technical skills required. Start for free today!",
        images: [
            {
                url: "/assets/og-image.png",
            }
        ]
    },
    twitter: {
        card: "summary_large_image",
        
        title: "ModAI - AI Moderation for Every Moment",
        description: "ModAI is an AI-powered moderation tool that ensures smooth and safe live streaming and video calls. Easily manage comments, mute users, and handle content—no technical skills required. Start for free today!",
        images: [
            {
                url: "/assets/og-image.png",
            }
        ]
    },
    metadataBase: new URL("https://astra-app.vercel.app"),
};
