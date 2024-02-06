import { Dropdown, MenuProps, Space } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import "../../screens/Home/home.css"

interface Props {
    title: string;
    items: MenuProps['items'];
    description: string;
    onClick: MenuProps['onClick'];
}


const MyDropdown = ({ onClick, items, title, description }: Props) => {
    return (
        <Dropdown
            menu={{ items, onClick }}
            trigger={['click', 'hover']}
            className="myDropdown"
        >
            <a onClick={(e) => {
                e.preventDefault()
            }}>
                <Space>
                    <p className='filterText'>
                        {title}: <span className="filterDescription">{description}</span>
                    </p>
                    <DownOutlined style={{ color: "#c2c2c2" }} />
                </Space>
            </a>
        </Dropdown>
    )
};

export default MyDropdown;
