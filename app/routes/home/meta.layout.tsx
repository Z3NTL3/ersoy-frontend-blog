import { type JSX } from "react";
import { Outlet } from "react-router";

export default function HomeMetaLayout(): JSX.Element {
    return (
        <>
            <title>Blog — Anasayfa - Mehdi Ersoy</title>
            <meta name="description" content="Some meta shit here" />
            
            <Outlet/>
        </>
    );
};