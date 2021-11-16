import GoogleTag from 'components/MetaTag/Preview/GoogleTag';
import FacebookTag from 'components/MetaTag/Preview/FacebookTag';
import TwitterTag from 'components/MetaTag/Preview/TwitterTag';

export {
    GoogleTag,
    FacebookTag,
    TwitterTag,
};

import { MetaTagType } from 'types/metatag.type';

export const initialMetaTagField: MetaTagType = {
    title: 'Meta Tags — Preview, Edit and Generate',
    description: 'With Meta Tags you can edit and experiment with your content then preview how your webpage will look on Google, Facebook, Twitter and more!',
    url: 'https://metatags.io',
};