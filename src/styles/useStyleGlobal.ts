
const classes = {
    subHeaderGlobal: {
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize: '11px',
        color: '#18283E',
    }
} as const;

export const classesGlobal = {
    marginLayoutNavGlobal: {
        margin: '0 24px',
    },
    subHeaderGlobal: {...classes.subHeaderGlobal},
    subHeaderWithSpaceGlobal: {
        ...classes.subHeaderGlobal,
        pb: '2em',
    },
    captionGlobal: {
        color: '#A3B3CA',
        fontSize: '14px',
        letterSpacing: '0.015em',
    },
    transitionGlobal: {
        transition: 'all 375ms cubic-bezier(0.8, 0, 0.2, 1)',
    },
    previewMetaTagHeadGoogle: {
        margin: '0.5em 0 1em',
    },
    previewMetaTagHead: {
        // mb: '0.5em',
        // mt: '0.5em',
        margin: '1.75em 0 1em',
    },
    palette: {
        avatar: {
            bgcolorActive: '#2A81FB',
            bgcolorDisabled: '#A3B3CA',
        },
        link: {
            colorActive: '#18283E',
            colorDisabled: '#A3B3CA',
        },
    }
} as const;

