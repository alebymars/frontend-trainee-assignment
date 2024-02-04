import { Result } from "antd";
import { Link, useRouteError } from "react-router-dom";
import { ErrorPage } from "../../types/error";

export const Error = () => {
    const { status, statusText } = useRouteError() as ErrorPage;

    return (
        <div>
            <Result
                status={status}
                title={status}
                subTitle={statusText}
                extra={<Link to={"/"}>Back Home</Link>}
            />
        </div>
    );
}