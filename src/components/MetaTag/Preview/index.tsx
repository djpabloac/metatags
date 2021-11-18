import BaseTag from "components/MetaTag/Preview/BaseTag";
import GoogleTag from 'components/MetaTag/Preview/GoogleTag';
import FacebookTag from 'components/MetaTag/Preview/FacebookTag';
import TwitterTag from 'components/MetaTag/Preview/TwitterTag';
import LinkedinTag from 'components/MetaTag/Preview/Linkedin';
import PinterestTag from 'components/MetaTag/Preview/Pinterest';
import SlackTag from 'components/MetaTag/Preview/Slack';

export {
    BaseTag,
    GoogleTag,
    FacebookTag,
    TwitterTag,
    LinkedinTag,
    PinterestTag,
    SlackTag,
};

export enum socialNetworkKing {
    GOOGLE = 'Google',
    FACEBOOK = 'Facebook',
    TWITTER = 'Twitter',
    LINKEDIN = 'Linkedin',
    PINTEREST = 'Pinterest',
    SLACK = 'Slack',
}