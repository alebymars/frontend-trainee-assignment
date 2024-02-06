import { Button } from "antd";
import { ReactNode } from "react";
import "./MyButton.css"

interface Props {
    text: string;
    loading: boolean;
    icon: ReactNode;
    onClick: () => void;
}

const MyButton = ({ onClick, loading, text, icon }: Props) => {
    return (
        <Button
            className="btnReverse"
            type="link"
            icon={icon}
            loading={loading}
            onClick={onClick}
        >
            {text}
        </Button>
    )
};

export default MyButton;
