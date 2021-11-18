import { MetaTagType } from 'types/metatag.type';

export enum MetaTagActionKind {
    LOAD_METATAG = 'LOAD_METATAG',
    SET_METATAG = 'SET_METATAG',
}

export interface MetaTagPropertyType {
    property: string;
    value: string;
}

export interface MetaTagAction {
    type: MetaTagActionKind;
    payload: MetaTagType | MetaTagPropertyType | string;
}

export default function MetaTagReducer(state: MetaTagType, action: MetaTagAction): MetaTagType {
    switch (action.type) {
        case MetaTagActionKind.LOAD_METATAG:
            const payload = action.payload as MetaTagType;
            return {
                ...state,
                ...payload,
                titleLength: payload.title ? payload.title.length : 0,
                descriptionLength: payload.description ? payload.description.length : 0,
                getUrlEmpty: () => state.url ? state.url.replace('https://', '').replace('http://', '') : '',
            };
        case MetaTagActionKind.SET_METATAG:
            const fieldProperty = action.payload as MetaTagPropertyType;
            return {
                ...state,
                [fieldProperty.property]: fieldProperty.value,
                [`${fieldProperty.property}Length`]: fieldProperty.value ? fieldProperty.value.length : 0,
                getUrlEmpty: () => fieldProperty.property === 'url' ? fieldProperty.value.replace('https://', '').replace('http://', '') : state.url || '',
            };
        default:
            return state;
    }
}