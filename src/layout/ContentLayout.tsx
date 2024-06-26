import { Layout } from "antd"
import { FooterLayout } from "./FooterLayout";
import { Outlet, useLocation } from "react-router-dom";
import Home from "../screens/Home";

const contentStyle: React.CSSProperties = {
    overflow: "auto",
    backgroundColor: "#1c1e22"
};

export const ContentLayout = () => {

    const { pathname } = useLocation();

    return (
        <>
            <Layout.Content style={contentStyle}>
                {pathname === "/" ? <Home /> : <Outlet />}
            </Layout.Content>
        </>
    )
}