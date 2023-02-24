import {
    SearchOutlined,
    HomeOutlined,
    ShoppingCartOutlined,
    UserOutlined,
    BarChartOutlined,
    LogoutOutlined
} from '@ant-design/icons';
import { Avatar, Badge, Input } from 'antd';

function header() {
    return (
        <div className="border-b mb-5">
            <header className='py-4 px-6 flex justify-between gap-8'>
                <div className='logo'>
                    <a href='/'></a>
                    <h2 className='text-2xl font-bold md:text-4xl'>LOGO</h2>
                </div>
                <div className="header-search flex-1 flex justify-center">
                    <Input
                        size="large"
                        placeholder="large size"
                        prefix={<SearchOutlined />}
                        className='rounded-xl max-w-[800px]'
                    />
                </div>
                <div className="menu-links flex justify-between items-center gap-4 md:static fixed z-50 bottom-0 
                md:w-auto w-screen md:bg-transparent bg-white left-0 md:border-t-0 border-t md:px-0 px-4 py-1 " >
                    {/* HOME */}
                    <a href='{"/"}' className='menu-link flex flex-col hover:text-[#40a9ff] transition-all'>
                        <HomeOutlined />
                        <span className='md:text-xl text-[10px]'>Ana Sayfa</span>
                    </a>
                    {/* BASKET */}
                    <Badge count={1} className='md:flex hidden'>
                        <a href='{"/"}' className='menu-link flex flex-col hover:text-[#40a9ff] transition-all'>
                            <ShoppingCartOutlined />
                            <span className='md:text-xl text-[10px]'>Sepet</span>
                        </a>
                    </Badge>
                    {/* CUSTOMER */}
                    <a href='{"/"}' className='menu-link flex flex-col hover:text-[#40a9ff] transition-all'>
                        <UserOutlined />
                        <span className='md:text-xl text-[10px]'>Müşteriler</span>
                    </a>
                    {/* STATS */}
                    <a href='{"/"}' className='menu-link flex flex-col hover:text-[#40a9ff] transition-all'>
                        <BarChartOutlined />
                        <span className='md:text-xl text-[10px]'>İstatiskler</span>
                    </a>
                    {/* EXIT */}
                    <a href='{"/"}' className='menu-link flex flex-col hover:text-[#40a9ff] transition-all'>
                        <LogoutOutlined />
                        <span className='md:text-xl text-[10px]'>Çıkış</span>
                    </a>
                </div>

                {/* BASKET for mobile view on top right corner */}
                <Badge count={1} className='md:hidden flex justify-center items-center'>
                    <a href='{"/"}' className='menu-link flex flex-col hover:text-[#40a9ff] transition-all'>
                        <ShoppingCartOutlined />
                        <span className='md:text-xl text-[10px]'>Sepet</span>
                    </a>
                </Badge>
            </header>
        </div>
    )
}

export default header