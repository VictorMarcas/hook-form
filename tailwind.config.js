module.exports = {
    mode: 'jit',
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            fontFamily: {
                'ibm-plex': ["'IBM Plex Mono'", "monospace"]
            }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}