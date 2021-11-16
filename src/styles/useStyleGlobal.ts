
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
    }
} as const;

