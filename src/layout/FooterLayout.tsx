import { Layout } from "antd"

const footerStyle: React.CSSProperties = {
    textAlign: 'center',
    color: '#fff',
    backgroundColor: "#272b30",
};

export const FooterLayout = () => {
    return (
        <Layout.Footer style={footerStyle}>Footer</Layout.Footer>
    )
}