import { Link, useRouteError } from "react-router-dom";
import { ErrorPage } from "../../types/error";
import MyResult from "../../components/MyResult";
import "./error.css"

export const Error = () => {
    const { status, statusText } = useRouteError() as ErrorPage;

    return (
        <div className="errorPageBlock">
            <MyResult
                status={status}
                title={status}
                subTitle={statusText}
                extra={
                    <Link className="btnBactToMainPage" to={"/"}>Вернуться на главную</Link>
                }
            />
        </div>
    )
}
