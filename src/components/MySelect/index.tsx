import { Select, SelectProps } from 'antd';

interface Props {
    style?: React.CSSProperties;
    options: object[];
    handleChange: (value: string | string[]) => void;
}

const MySelect = ({ style, handleChange, options }: Props) => {

    return (
        <Select
            size={"middle"}
            defaultValue="Jack"
            variant='outlined'
            onChange={handleChange}
            style={style}
            filterOption
            options={options}
            optionRender={(e) => (
                <div>
                    {e.label}
                </div>
            )}
        />
    )
};

export default MySelect;
