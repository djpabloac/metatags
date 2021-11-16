import { SidebarType } from "types/socialnetwork.types";

export const data: SidebarType[] = [
    {
        _id: '1',
        caption: 'Channels',
        socialNetwork: [
            { _id: '1', name: 'Google', logo: '/assets/social/google.svg', disabled: false, },
            { _id: '2', name: 'Facebook', logo: '/assets/social/facebook.svg', disabled: false, },
            { _id: '3', name: 'Twitter', logo: '/assets/social/twitter.svg', disabled: false, },
            { _id: '4', name: 'Linkedin', logo: '/assets/social/linkedin.svg', disabled: true, },
            { _id: '5', name: 'Pinterest', logo: '/assets/social/pinterest.svg', disabled: true, },
            { _id: '6', name: 'Slack', logo: '/assets/social/slack.svg', disabled: true, },
        ]
    },
];