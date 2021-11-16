import { Fragment, useState } from 'react';
import { SearchMeta  } from "components/UI/material-metatag";
import { initialMetaTagField } from 'components/MetaTag/Preview';

export default function Search() {

    const [fieldSearch, setFieldSearch] = useState(initialMetaTagField.url);

    const handlerSearch = (e: any) => setFieldSearch(e.target.value);

    return (
        <Fragment>
            <SearchMeta
                placeholder='Search...'
                value={fieldSearch}
                inputProps={{ 'aria-label': 'search' }}
                onChange={handlerSearch}
            />
        </Fragment>
    )
}
