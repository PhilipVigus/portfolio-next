import Link from 'next/link';

const navItems = [
    { link: '/', label: 'About' },
    { link: '/experience', label: 'Experience' },
    { link: '/stuff-ive-done', label: 'Stuff I\'ve Done' },
    { link: '/contact', label: 'Contact' }
];

export function Header() {
    return (
        <nav className="flex flex-wrap justify-end gap-4 pb-12">
            {!!navItems?.length && (
                <ul className="flex flex-wrap gap-x-4 gap-y-1">
                    {navItems.map((item, index) => (
                        <li key={index}>
                            <Link
                                href={item.link}
                                className="inline-block px-1.5 py-1 transition hover:opacity-80 sm:px-3 sm:py-2"
                            >
                                {item.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </nav>
    );
}
