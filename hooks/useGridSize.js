import { useEffect, useState } from 'react';

const useGridSize = () => {
    const [gridSize, setGridSize] = useState({ columns: 0, rows: 0 });

    useEffect(() => {
        const calculateGridSize = () => {
            console.log('useGridSize');
            // Get the screen dimensions
            const screenWidth = window.innerWidth;
            const screenHeight = window.innerHeight;

            // Create a temporary element to measure the width of '1ch' and the height of '1em'
            const tempElement = document.createElement('div');
            tempElement.style.fontSize = '1em'; // Adjust if your body font size is different
            tempElement.style.fontFamily = 'VT323, sans-serif'; // Adjust to match your configuration
            tempElement.style.position = 'absolute';
            tempElement.style.visibility = 'hidden';
            tempElement.style.whiteSpace = 'nowrap';

            // Append character to measure 'ch' and 'em'
            tempElement.innerHTML = 'M'; // Character to measure 'em'
            document.body.appendChild(tempElement);
            const charHeight = tempElement.offsetHeight;

            tempElement.innerHTML = '0'; // Character to measure 'ch'
            const charWidth = tempElement.offsetWidth;

            console.log('charWidth', charWidth);
            console.log('charHeight', charHeight);

            // Remove the temporary element
            document.body.removeChild(tempElement);

            // Calculate the total number of columns and rows
            const columns = Math.floor(screenWidth / charWidth);
            const rows = Math.floor(screenHeight / charHeight);

            setGridSize({ columns, rows });
        };

        calculateGridSize();

        // Recalculate on window resize
        window.addEventListener('resize', calculateGridSize);
        return () => window.removeEventListener('resize', calculateGridSize);
    }, []);

    return gridSize;
};

export default useGridSize;
