module.exports = {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        aspectRatio: {
            auto: 'auto',
            square: '1 / 1',
            video: '16 / 9',
            1: '1',
            2: '2',
            3: '3',
            4: '4',
            5: '5',
            6: '6',
            7: '7',
            8: '8',
            9: '9',
            10: '10',
            11: '11',
            12: '12',
            13: '13',
            14: '14',
            15: '15',
            16: '16'
        },
        screens: {
            sm: '400px',
            md: '640px',
            lg: '1024px',
            xl: '1281px',
            xxl: '1368px',
            xlHDP: '1600px',
            xlFHD: '1920px',
            xl2k: '2560px',
            xl4k: '3840px'
        },
        colors: {
            current: 'currentColor',
            transparent: 'transparent',

            black: '#000',
            white: '#fff',
            boldBlack: '#000',
            colorActive: '#D4E2FC',

            magenta: {
                50: '#F9F1F7',
                100: '#F2DDEB',
                200: '#E2B4D3',
                300: '#CE7EB3',
                400: '#BF569C',
                500: '#914176',
                600: '#72335D',
                700: '#4C223E'
                // 800: '#623110',
                // 900: '#311808',
            },

            brown: {
                50: '#F6F0EA',
                100: '#EBE0DB',
                200: '#D2BBB0',
                300: '#B18977',
                400: '#99644C',
                500: '#744C3A',
                600: '#5C3C2E',
                700: '#3D281E'
                // 800: '#623110',
                // 900: '#311808',
            },

            gray: {
                25: '#FAFAFA',
                50: '#F6F6F6',
                100: '#EEEEEE',
                200: '#E2E2E2',
                300: '#CBCBCB',
                400: '#AFAFAF',
                500: '#757575',
                600: '#545454',
                700: '#333333',
                800: '#1F1F1F',
                900: '#141414'
            },

            platinum: {
                50: '#F4FAFB',
                100: '#EBF5F7',
                200: '#CCDFE5',
                300: '#A1BDCA',
                400: '#8FA3AD',
                500: '#6C7C83',
                600: '#556268',
                700: '#394145',
                800: '#142328'
                // 900: '#27282A',
            },

            red: {
                50: '#FFEFED',
                100: '#FED7D2',
                200: '#F1998E',
                300: '#E85C4A',
                400: '#E11900',
                500: '#AB1300',
                600: '#870F00',
                700: '#5A0A00'
                // 800: '#5D221B',
                // 900: '#2E110E',
            },

            yellow: {
                50: '#FFFAF0',
                100: '#FFF2D9',
                200: '#FFE3AC',
                300: '#FFCF70',
                400: '#FFC043',
                500: '#BC8B2C',
                600: '#996F00',
                700: '#674D1B'
                // 800: '#5D221B',
                // 900: '#2E110E',
            },

            lime: {
                50: '#F2F7ED',
                100: '#E0ECD2',
                200: '#BCD69D',
                300: '#8BB956',
                400: '#67A421',
                500: '#4E7C19',
                600: '#3D6213',
                700: '#29410D'
                // 800: '#5D221B',
                // 900: '#2E110E',
            },

            blue: {
                25: '#F5F8FE',
                50: '#EFF3FE',
                100: '#D4E2FC',
                200: '#A0BFF8',
                300: '#5B91F5',
                400: '#276EF1',
                500: '#1E54B7',
                600: '#174291',
                700: '#102C60'
                // 800: '#122D62',
                // 900: '#091631',
            },

            cobalt: {
                50: '#EBEDFA',
                100: '#D2D7F0',
                200: '#949CE3',
                300: '#535FCF',
                400: '#0E1FC1',
                500: '#0A1899',
                600: '#081270',
                700: '#050C4D'
                // 800: '#122D62',
                // 900: '#091631',
            },

            green: {
                50: '#E6F2ED',
                100: '#ADDEC9',
                200: '#66D19E',
                300: '#06C167',
                400: '#048848',
                500: '#03703C',
                600: '#03582F',
                700: '#10462D'
                // 800: '#094B35',
                // 900: '#05251A',
            },

            teal: {
                50: '#EDF5F7',
                100: '#D2E8EC',
                200: '#9DCDD6',
                300: '#56A9B9',
                400: '#218EA4',
                500: '#196B7C',
                600: '#135562',
                700: '#0D3841'
                // 800: '#094B35',
                // 900: '#05251A',
            },

            indigo: {
                50: '#EBEAFC',
                100: '#D7D5F8',
                200: '#AFABF1',
                300: '#8880EB',
                400: '#6056E4',
                500: '#382CDD',
                600: '#2D23B1',
                700: '#221A85',
                800: '#161258',
                900: '#0B092C'
            },

            purple: {
                50: '#F4F1FA',
                100: '#E3DDF2',
                200: '#C1B5E3',
                300: '#957FCE',
                400: '#7356BF',
                500: '#574191',
                600: '#453473',
                700: '#2E224C'
                // 800: '#341059',
                // 900: '#1A082C',
            },

            orange: {
                50: '#FFF3EF',
                100: '#FFE1D6',
                200: '#FABDA5',
                300: '#FA9269',
                400: '#FF6937',
                500: '#C14F29 ',
                600: '#9A3F21',
                700: '#672A16'
                // 800: '#623110',
                // 900: '#311808',
            }
        },
        spacing: {
            px: '1px',
            px: '1px',
            0: '0px',
            0.5: '0.125rem',
            1: '0.25rem',
            1.5: '0.375rem',
            2: '0.5rem',
            2.5: '0.625rem',
            3: '0.75rem',
            3.5: '0.875rem',
            4: '1rem',
            5: '1.25rem',
            6: '1.5rem',
            7: '1.75rem',
            8: '2rem',
            9: '2.25rem',
            10: '2.5rem',
            11: '2.75rem',
            12: '3rem',
            14: '3.5rem',
            16: '4rem',
            20: '5rem',
            24: '6rem',
            28: '7rem',
            32: '8rem',
            36: '9rem',
            40: '10rem',
            44: '11rem',
            48: '12rem',
            52: '13rem',
            56: '14rem',
            60: '15rem',
            64: '16rem',
            72: '18rem',
            80: '20rem',
            96: '24rem',
            112: '28rem',
            128: '32rem',
            144: '36rem'
        },
        backgroundColor: (theme) => ({
            ...theme('colors'),
            body: '#F1F5FB',
            bgGray: 'rgba(236, 237, 239, 1)',
            bgActive: '#D4E2FC',
            bgBlue: '#EEF3FE'
        }),
        backgroundImage: {
            none: 'none',
            'gradient-to-t': 'linear-gradient(to top, var(--tw-gradient-stops))',
            'gradient-to-tr': 'linear-gradient(to top right, var(--tw-gradient-stops))',
            'gradient-to-r': 'linear-gradient(to right, var(--tw-gradient-stops))',
            'gradient-to-br': 'linear-gradient(to bottom right, var(--tw-gradient-stops))',
            'gradient-to-b': 'linear-gradient(to bottom, var(--tw-gradient-stops))',
            'gradient-to-bl': 'linear-gradient(to bottom left, var(--tw-gradient-stops))',
            'gradient-to-l': 'linear-gradient(to left, var(--tw-gradient-stops))',
            'gradient-to-tl': 'linear-gradient(to top left, var(--tw-gradient-stops))'
        },
        backgroundOpacity: (theme) => theme('opacity'),
        backgroundPosition: {
            bottom: 'bottom',
            center: 'center',
            left: 'left',
            'left-bottom': 'left bottom',
            'left-top': 'left top',
            right: 'right',
            'right-bottom': 'right bottom',
            'right-top': 'right top',
            top: 'top'
        },
        backgroundSize: {
            auto: 'auto',
            cover: 'cover',
            contain: 'contain'
        },
        borderColor: (theme) => ({
            ...theme('colors'),
            DEFAULT: '#E1E4E8'
        }),
        borderRadius: {
            none: '0',
            sm: '0.125rem',
            DEFAULT: '0.25rem',
            md: '0.375rem',
            lg: '0.5rem',
            xl: '0.75rem',
            '2xl': '1rem',
            '3xl': '1.5rem',
            full: '9999px'
        },
        borderWidth: {
            DEFAULT: '1px',
            0: '0',
            2: '2px',
            4: '4px',
            8: '8px'
        },
        boxShadow: {
            sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
            DEFAULT: '0px 4px 8px -4px #15181C14',
            md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
            lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
            xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
            '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
            inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
            none: 'none'
        },
        container: {},
        cursor: {
            auto: 'auto',
            DEFAULT: 'default',
            pointer: 'pointer',
            wait: 'wait',
            text: 'text',
            move: 'move',
            'not-allowed': 'not-allowed'
        },
        fill: {
            current: 'currentColor'
        },
        flex: {
            1: '1 1 0%',
            auto: '1 1 auto',
            initial: '0 1 auto',
            none: 'none'
        },
        flexGrow: {
            0: '0',
            DEFAULT: '1'
        },
        flexShrink: {
            0: '0',
            DEFAULT: '1'
        },
        fontFamily: {
            body: '"DM Sans", ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
            heading:
                '"DM Sans", ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
            sans: '"DM Sans", ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
            serif: 'ui-serif, Georgia, Cambria, "Times New Roman", Times, serif',
            mono: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace'
        },
        fontSize: {
            lsm: ['10px', { lineHeight: '14px' }],
            lxs: ['12px', { lineHeight: '14px' }],
            lmd: ['14px', { lineHeight: '16px' }],
            '2lmd': ['14px', { lineHeight: '18px' }],
            llg: ['16px', { lineHeight: '20px' }],
            lxl: ['18px', { lineHeight: '24px' }],
            '3xs': ['12px', { lineHeight: '20px' }],
            sm: ['10px', { lineHeight: '16px' }],
            xs: ['12px', { lineHeight: '16px' }],
            md: ['14px', { lineHeight: '20px' }],
            lgm: ['16px', { lineHeight: '20px' }],
            lg: ['16px', { lineHeight: '24px' }],
            xl: ['20px', { lineHeight: '28px' }],
            '2xl': ['24px', { lineHeight: '32px' }],
            '3xl': ['28px', { lineHeight: '36px' }],
            '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
            '5xl': ['3rem', { lineHeight: '1.16' }],
            '6xl': ['3.75rem', { lineHeight: '1' }],
            '7xl': ['4.5rem', { lineHeight: '1' }],
            '8xl': ['6rem', { lineHeight: '1' }],
            '9xl': ['8rem', { lineHeight: '1' }]
        },
        fontWeight: {
            thin: '100',
            extralight: '200',
            light: '300',
            normal: '400',
            medium: '500',
            semibold: '600',
            bold: '700',
            extrabold: '800',
            black: '900'
        },
        height: (theme) => ({
            auto: 'auto',
            ...theme('spacing'),
            full: '100%',
            screen: '100vh'
        }),
        inset: (theme, { negative }) => ({
            auto: 'auto',
            ...theme('spacing'),
            ...negative(theme('spacing')),
            '1/2': '50%',
            '1/3': '33.333333%',
            '2/3': '66.666667%',
            '1/4': '25%',
            '2/4': '50%',
            '3/4': '75%',
            full: '100%',
            '-1/2': '-50%',
            '-1/3': '-33.333333%',
            '-2/3': '-66.666667%',
            '-1/4': '-25%',
            '-2/4': '-50%',
            '-3/4': '-75%',
            '-full': '-100%'
        }),
        letterSpacing: {
            tighter: '-0.05em',
            tight: '-0.025em',
            normal: '0',
            wide: '0.025em',
            wider: '0.05em',
            widest: '0.1em'
        },
        lineHeight: {
            none: '1',
            tight: '1.25',
            snug: '1.375',
            normal: '1.5',
            relaxed: '1.625',
            loose: '2'
        },
        listStyleType: {
            none: 'none',
            disc: 'disc',
            decimal: 'decimal'
        },
        margin: (theme, { negative }) => ({
            auto: 'auto',
            ...theme('spacing'),
            ...negative(theme('spacing'))
        }),
        maxHeight: {
            full: '100%',
            screen: '100vh'
        },
        maxWidth: {
            none: 'none',
            xs: '20rem',
            sm: '24rem',
            md: '28rem',
            lg: '32rem',
            xl: '36rem',
            '2xl': '42rem',
            '3xl': '48rem',
            '4xl': '56rem',
            '5xl': '64rem',
            '6xl': '72rem',
            '7xl': '80rem',
            full: '100%',
            min: 'min-content',
            max: 'max-content',
            prose: '65ch'
        },
        minHeight: {
            0: '0',
            full: '100%',
            screen: '100vh'
        },
        minWidth: {
            0: '0',
            full: '100%'
        },
        objectPosition: {
            bottom: 'bottom',
            center: 'center',
            left: 'left',
            'left-bottom': 'left bottom',
            'left-top': 'left top',
            right: 'right',
            'right-bottom': 'right bottom',
            'right-top': 'right top',
            top: 'top'
        },
        opacity: {
            0: '0',
            5: '0.05',
            10: '0.1',
            20: '0.2',
            25: '0.25',
            30: '0.3',
            40: '0.4',
            50: '0.5',
            60: '0.6',
            70: '0.7',
            75: '0.75',
            80: '0.8',
            90: '0.8',
            95: '0.95',
            100: '1'
        },
        order: {
            first: '-9999',
            last: '9999',
            none: '0',
            1: '1',
            2: '2',
            3: '3',
            4: '4',
            5: '5',
            6: '6',
            7: '7',
            8: '8',
            9: '9',
            10: '10',
            11: '11',
            12: '12'
        },
        padding: (theme) => theme('spacing'),
        placeholderColor: (theme) => theme('colors'),
        stroke: {
            current: 'currentColor'
        },
        textColor: (theme) => ({
            ...theme('colors'),
            body: '#15181C',
            textColorGray: '#757575',
            textColorBlue: '#276EF1',
            textColorBlack: '#000000',
            textColorRed: '#EB7567',
            primary: 'rgba(20, 20, 20, 1)'
        }),
        width: (theme) => ({
            auto: 'auto',
            ...theme('spacing'),
            '1/2': '50%',
            '1/3': '33.333333%',
            '2/3': '66.666667%',
            '1/4': '25%',
            '2/4': '50%',
            '3/4': '75%',
            '1/5': '20%',
            '2/5': '40%',
            '3/5': '60%',
            '4/5': '80%',
            '1/6': '16.666667%',
            '2/6': '33.333333%',
            '3/6': '50%',
            '4/6': '66.666667%',
            '5/6': '83.333333%',
            '1/12': '8.333333%',
            '2/12': '16.666667%',
            '3/12': '25%',
            '4/12': '33.333333%',
            '5/12': '41.666667%',
            '6/12': '50%',
            '7/12': '58.333333%',
            '8/12': '66.666667%',
            '9/12': '75%',
            '10/12': '83.333333%',
            '11/12': '91.666667%',
            full: '100%',
            screen: '100vw'
        }),
        // boxShadow: {
        //     sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
        //     DEFAULT: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
        //     md: '0 0px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
        //     lg: '0 0px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
        //     xl: '0 0px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
        //     '2xl': '0 0px 50px -12px rgb(0 0 0 / 0.25)',
        //     inner: 'inset 0 2px 4px 0 rgb(0 0 0 / 0.05)',
        //     none: 'none',
        // },
        zIndex: {
            auto: 'auto',
            0: '0',
            10: '10',
            20: '20',
            30: '30',
            40: '40',
            50: '50'
        }
    },
    corePlugins: {
        aspectRatio: true
    },
    plugins: [
        // require('@tailwindcss/line-clamp'),
        require('autoprefixer'),
        //   require('@tailwindcss/aspect-ratio'),
        ({ addVariant }) => {
            [
                // Positional
                ['first', ':first-child'],
                ['last', ':last-child'],
                ['only', ':only-child'],
                ['odd', ':nth-child(odd)'],
                ['even', ':nth-child(even)'],
                'first-of-type',
                'last-of-type',
                'only-of-type',

                // State
                'visited',
                'target',
                ['open', '[open]'],

                // Forms
                'default',
                'checked',
                'indeterminate',
                'placeholder-shown',
                'autofill',
                'required',
                'valid',
                'invalid',
                'in-range',
                'out-of-range',
                'read-only',

                // Content
                'empty',

                // Interactive
                'focus-within',
                'hover',
                'focus',
                'focus-visible',
                'active',
                'disabled'
            ]
                .map((variant) => (Array.isArray(variant) ? variant : [variant, `:${variant}`]))
                .forEach(([variantName, result]) => {
                    addVariant(`group2-${variantName}`, [
                        `:merge(.group2)${result} &:not(.group2 .group2 *)`,
                        `.group2 :merge(.group2)${result} &:not(.group2 .group2 .group2 *)`,
                        `.group2 .group2 :merge(.group2)${result} &`
                    ]);
                });
        }
    ]
};
