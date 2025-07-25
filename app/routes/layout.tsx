import { type JSX } from "react"
import { Outlet } from "react-router";
import { Navbar } from "~/components/ui/navbar";

// first layout to be found in root.tsx
export default function RootLayout(): JSX.Element {
    return (
        <>
            <Navbar>
                <div className="mt-20"></div>
                <Outlet/>
            </Navbar>
        </>
    );
};