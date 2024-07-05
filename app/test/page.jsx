import '../../styles/main.css';

export default function Page() {

    return (
        <div className="min-h-screen">
            <div
                className="min-h-screen grid grid-cols-repeat-auto-fill grid-rows-repeat-auto-fill leading-char tracking-char">
                <div className="col-start-1 row-start-1 col-span-1 row-span-1">D</div>
                <div className="col-start-2 row-start-2 col-span-7 row-span-1">ABCDEFG</div>
                <div className="col-start-2 row-start-3 col-span-7 row-span-1">-------</div>

                <div className="interlaced"></div>
                <div className="glare"></div>
            </div>
        </div>
    );
}