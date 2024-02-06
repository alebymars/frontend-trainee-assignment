import { Spin } from 'antd';

interface Props {
    spinning: boolean;
    fullscreen: boolean;
}

const MySpin = ({ spinning, fullscreen }: Props) => {
    return <Spin spinning={spinning} fullscreen={fullscreen} />
};

export default MySpin;
