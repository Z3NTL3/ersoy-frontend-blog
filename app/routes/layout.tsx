import { type JSX } from "react"
import { Outlet } from "react-router";
import { Navbar } from "~/components/ui/navbar";

// first layout to be found in root.tsx
export default function SecondRootLayout(): JSX.Element {
    return (
        <>
            <Navbar />
            <Outlet />
        </>
    );
};