import { ReactNode } from 'react';
import { Result } from 'antd';
import { ResultStatusType } from 'antd/es/result';
import "./MyResult.css"


interface Props {
    status: ResultStatusType;
    title: string | number;
    subTitle: string;
    extra: ReactNode;
}

const MyResult = ({ status, title, subTitle, extra }: Props) => {
    return <Result
        status={status}
        title={title}
        subTitle={subTitle}
        extra={extra}
    />
};

export default MyResult;
