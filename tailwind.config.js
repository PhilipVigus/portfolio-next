module.exports = {
    content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                sans: ['VT323', 'sans-serif']
            },
            lineHeight: {
                char: '1em'
            },
            letterSpacing: {
                char: '0rem'
            },
            gridTemplateColumns: {
                'repeat-auto-fill': 'repeat(auto-fill, minmax(1ch, 1fr))'
            },
            gridTemplateRows: {
                'repeat-auto-fill': 'repeat(auto-fill, minmax(1em, 1fr))'
            }
        }
    }
};
