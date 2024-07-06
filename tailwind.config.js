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
            },
            gridColumnStart: (() => {
                const positions = {};
                for (let i = 1; i <= 100; i++) {
                    positions[i] = `${i}`;
                }
                return positions;
            })(),
            gridRowStart: (() => {
                const positions = {};
                for (let i = 1; i <= 100; i++) {
                    positions[i] = `${i}`;
                }
                return positions;
            })()
        }
    }
};