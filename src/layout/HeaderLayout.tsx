import { Layout } from "antd"

const headerStyle: React.CSSProperties = {
    textAlign: 'center',
    color: '#fff',
    height: 64,
    paddingInline: 48,
    lineHeight: '64px',
    backgroundColor: "#272b30",
};

export const HeaderLayout = () => {
    return (
        <Layout.Header style={headerStyle}>Header</Layout.Header>
    )
}