export default function Footer() {
    const date = new Date();

    const footerNavigation = {
        company: [
            { name: "Home", href: "/" },
            { name: "About Us", href: "/about" },
            { name: "Contact Us", href: "/contact" },
        ],
        OtherLinks: [
            { name: "Terms of Service", href: "/terms-of-service" },
            { name: "Privacy Policy", href: "/privacy-policy" },
        ],
        social: [
            {
                name: "Facebook",
                href: "#",
                icon: (props: any) => (
                    <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
                        <path
                            fillRule="evenodd"
                            d="M22 12c0-5.523-4.477-10-10-10S2 6.477..."
                            clipRule="evenodd"
                        />
                    </svg>
                ),
            },
            {
                name: "LinkedIn",
                href: "#",
                icon: (props: any) => (
                    <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
                        <path
                            fillRule="evenodd"
                            d="M 6 3 C 4.35 3 3 4.35..."
                            clipRule="evenodd"
                        />
                    </svg>
                ),
            },
        ],
    };

    return (
        <footer className="px-6 pb-6 bg-white">
            <div className="p-10 lg:p-24 bg-gray-800 rounded-xl text-white">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-10">
                        <div>
                            <h3 className="text-lg font-semibold">Company</h3>
                            <ul className="mt-4 space-y-2">
                                {footerNavigation.company.map((item) => (
                                    <li key={item.name}>
                                        <a href={item.href} className="text-gray-300 hover:text-white">
                                            {item.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold">Other Links</h3>
                            <ul className="mt-4 space-y-2">
                                {footerNavigation.OtherLinks.map((item) => (
                                    <li key={item.name}>
                                        <a href={item.href} className="text-gray-300 hover:text-white">
                                            {item.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row justify-between items-center border-t border-gray-700 pt-6">
                        <p className="text-sm text-gray-400">
                            &copy; {date.getFullYear()} Crown CRM. All rights reserved.
                        </p>
                        <div className="flex space-x-4 mt-4 md:mt-0">
                            {footerNavigation.social.map((item) => (
                                <a key={item.name} href={item.href} className="hover:text-white">
                                    <item.icon className="w-5 h-5" />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
