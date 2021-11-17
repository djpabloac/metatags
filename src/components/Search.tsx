import {
    Fragment,
    useContext
} from 'react';
import { SearchMeta } from "components/UI/material-metatag";
import MetaTagContext from "context/MetaTag/MetaTagContext";

export default function Search() {
    const { MetaTagField, setMetaTag } = useContext(MetaTagContext);

    const handleChange = (e: any) => setMetaTag(e.target.name as string, e.target.value as string);

    return (
        <Fragment>
            <SearchMeta
                placeholder='Search...'
                name='url'
                value={MetaTagField?.url}
                inputProps={{ 'aria-label': 'search' }}
                onChange={handleChange}
            />
        </Fragment>
    )
}
