import {
    Fragment,
    useContext,
    useEffect,
} from 'react';
import cheerio from "cheerio";
import { SearchMeta } from "components/UI/material-metatag";
import MetaTagContext from "context/MetaTag/MetaTagContext";
import { MetaTagType } from 'types/metatag.type';

export default function Search() {
    const { MetaTagField, setMetaTag, loadMetaTag } = useContext(MetaTagContext);

    const handleChange = (e: any) => setMetaTag(e.target.name as string, e.target.value as string);
    const handleKeyPress = async (e: any) => {
        if (e.charCode === 13 && MetaTagField?.url) {
            const result = await getMetaTag(MetaTagField);
            loadMetaTag(result);
        }
    }

    useEffect(() => {
        const onLoad = async () => {
            const result = await getMetaTag(MetaTagField);
            loadMetaTag(result);
        }
        onLoad();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <Fragment>
            <SearchMeta
                placeholder='Search...'
                name='url'
                value={MetaTagField?.url}
                inputProps={{ 'aria-label': 'search' }}
                onChange={handleChange}
                onKeyPress={handleKeyPress}
            />
        </Fragment>
    )
}

const getMetaTag = async (MetaTagField: MetaTagType) => {
    try {
        const result = await fetch(MetaTagField?.url || '');
        const html = await result.text();
        const $ = cheerio.load(html);

        const title = $('meta[property="og:title"]').attr('content') || $('title').text() || $('meta[name="title"]').attr('content') || '';
        const description = $('meta[property="og:description"]').attr('content') || $('meta[name="description"]').attr('content') || '';
        //const url = $('meta[property="og:url"]').attr('content') || '';
        const site_name = $('meta[property="og:site_name"]').attr('content') || '';
        const image = $('meta[property="og:image"]').attr('content') || $('meta[property="og:image:url"]').attr('content') || '/assets/metatagdetail.png';
        const icon = $('link[rel="icon"]').attr('href') || $('link[rel="shortcut icon"]').attr('href') || '';
        const keywords = $('meta[property="og:keywords"]').attr('content') || $('meta[name="keywords"]').attr('content') || '';

        const response: MetaTagType = {
            title: title,
            description: description,
            //url: url,
            site_name: site_name,
            image: image,
            icon: icon,
            keywords: keywords,
        };

        return response;

    } catch (error) {
        const response: MetaTagType = {};
        return response;
    }
}