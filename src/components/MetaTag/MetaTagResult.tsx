import {
    Fragment,
    useContext,
    useState,
    useEffect,
} from 'react';
import {
    MetaTagContext,
    SiderbarContext,
} from "context";
import Dialog from "components/Dialog";
import { socialNetworkKing } from 'components/MetaTag/Preview';
import { SocialNetworkType } from 'types/socialnetwork.types';
import { MetaTagType } from 'types/metatag.type';

interface templateMetaTagType {
    open: boolean;
    onClose: () => void;
}

const templatesInitialState = {
    templates: [] as string[],
    open: false,
}

export default function MetaTagResult({
    open = templatesInitialState.open,
    onClose,
}: templateMetaTagType) {

    const { MetaTagField } = useContext(MetaTagContext);
    const { selectedSocialNetwork } = useContext(SiderbarContext);

    const [template, setTemplate] = useState(templatesInitialState.templates);

    const handleClose = () => {
        onClose();
    }

    useEffect(() => {
        const result = getTemplate(selectedSocialNetwork, MetaTagField);
        setTemplate(result);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [selectedSocialNetwork]);

    return (
        <Fragment>
            <Dialog open={open} title='Tus Meta Tags' onClose={handleClose}>
                <div style={{
                    border: '1px solid #fff',
                    padding: '15px',
                    backgroundColor: '#EBF1FA',
                    borderRadius: '8px',
                    overflow: 'auto',
                }}>
                    <code style={{ color: '#00193a', }}>
                        {
                            template.length === 0 ? 'Selecciona un red social' :
                                template.map((s, i) => {
                                    if (s) {
                                        let isComment = s.indexOf('<!--')
                                        return (
                                            <div key={i} style={{whiteSpace: 'nowrap', color: isComment ? '#0048ab' : '#00193a' }}>
                                                {s}
                                            </div>);
                                    }

                                    return <br key={i}/>;
                                })
                        }
                    </code>

                </div>
            </Dialog>
        </Fragment>
    )
}

const getTemplate = (socialNetwroks: SocialNetworkType[], metaTag: MetaTagType): string[] => {
    if (!socialNetwroks)
        return [];

    let templates: string[] = [];

    const title = metaTag.title || '';
    const description = metaTag.description || '';
    const url = metaTag.url || '';
    const image = metaTag.image || '';

    socialNetwroks.map(sn => {
        if (sn.name == socialNetworkKing.GOOGLE) {
            templates.push('<!-- Primary Meta Tags -->');
            templates.push(`<title>${title}</title>`);
            templates.push(`<meta name="title" content="${title}">`);
            templates.push(`<meta name="description" content="${description}">`);
            templates.push('');
        }
        else if (sn.name == socialNetworkKing.FACEBOOK || sn.name == socialNetworkKing.LINKEDIN || sn.name == socialNetworkKing.PINTEREST || sn.name == socialNetworkKing.SLACK) {
            templates.push('<!-- Open Graph / Facebook -->');
            templates.push('<meta property="og:type" content="website">');
            templates.push(`<meta property="og:url" content="${url}">`);
            templates.push(`<meta property="og:title" content="${title}">`);
            templates.push(`<meta property="og:description" content="${description}">`);
            templates.push(`<meta property="og:image" content="${image}">`);
            templates.push('');
        }
        else if (sn.name == socialNetworkKing.TWITTER) {
            templates.push('<!-- Twitter -->');
            templates.push('<meta property="twitter:card" content="summary_large_image">');
            templates.push(`<meta property="twitter:url" content="${url}">`);
            templates.push(`<meta property="twitter:title" content="${title}">`);
            templates.push(`<meta property="twitter:description" content="${description}">`);
            templates.push(`<meta property="twitter:image" content="${image}">`);
            templates.push('');
        }
    });

    return templates;
}
