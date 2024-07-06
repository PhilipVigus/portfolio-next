'use client';

import '../../styles/main.css';
import useGridSize from '../../hooks/useGridSize';

export default function Page() {
    const { columns, rows } = useGridSize();
    console.log(columns, rows);
    return (
        <div className="min-h-screen">
            <div
                className="min-h-screen grid grid-cols-repeat-auto-fill grid-rows-repeat-auto-fill leading-char tracking-char">
                <div className="col-start-55 row-start-31 col-span-1 row-span-1">D</div>

                <div className="interlaced"></div>
                <div className="glare"></div>
            </div>
        </div>
    );
}