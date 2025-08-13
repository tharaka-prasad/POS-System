import { usePage } from "@inertiajs/react";
import FlashAlerts from "../Components/elements/alerts/FlashAlerts";

import { Flash, PageProps } from "@/types";
import Header from "@/Components/shared/Header";
import Footer from "@/Components/shared/Footer";

export default function AppLayout(
    {
        children,
        isFooter = true,
        isHeader = true

    }: {
        children: React.ReactNode,
        isFooter?: boolean,
        isHeader?: boolean,
    }) {
    const appName = import.meta.env.VITE_APP_NAME || "CROWN-CRM";
    const pageProps = usePage().props;
    const { flash, auth } = usePage<PageProps>().props;

    return (
        <div className="bg-white ">
            {/* Header */}
            {isHeader && <Header />}

            {/* Main content with padding-top instead of negative margin */}
            <main className="pt-20">
                {children}
            </main>

            {/* Footer */}
            {isFooter && <Footer />}

            {/* Flash messages */}
            <FlashAlerts flash={flash as Flash} />
        </div>
    );
}
