import {
    SearchOutlined,
    HomeOutlined,
    ShoppingCartOutlined,
    UserOutlined,
    BarChartOutlined,
    LogoutOutlined,
    FileTextOutlined
} from '@ant-design/icons';
import { Badge, Input } from 'antd';
import { Link } from 'react-router-dom'

function header() {
    return (
        <div className="border-b mb-5">
            <header className='py-4 px-6 flex justify-between gap-8'>
                <div className='logo'>
                    <Link to={'/'}></Link>
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
                    <Link to={"/"} className='menu-link flex flex-col hover:text-[#40a9ff] transition-all'>
                        <HomeOutlined />
                        <span className='md:text-xl text-[10px]'>Ana Sayfa</span>
                    </Link>
                    {/* BASKET */}
                    <Badge count={1} className='md:flex hidden'>
                        <Link to={"/cart"} className='menu-link flex flex-col hover:text-[#40a9ff] transition-all'>
                            <ShoppingCartOutlined />
                            <span className='md:text-xl text-[10px]'>Sepet</span>
                        </Link>
                    </Badge>
                    {/* Invoice */}
                        <Link to={"/invoice"} className='menu-link flex flex-col hover:text-[#40a9ff] transition-all'>
                            <FileTextOutlined />
                            <span className='md:text-xl text-[10px]'>Faturalar</span>
                        </Link>
                    {/* CUSTOMER */}
                    <Link to={"/customers"} className='menu-link flex flex-col hover:text-[#40a9ff] transition-all'>
                        <UserOutlined />
                        <span className='md:text-xl text-[10px]'>M????teriler</span>
                    </Link>
                    {/* STATS */}
                    <Link to={"/statistics"} className='menu-link flex flex-col hover:text-[#40a9ff] transition-all'>
                        <BarChartOutlined />
                        <span className='md:text-xl text-[10px]'>??statiskler</span>
                    </Link>
                    {/* EXIT */}
                    <a href='{"/"}' className='menu-link flex flex-col hover:text-[#40a9ff] transition-all'>
                        <LogoutOutlined />
                        <span className='md:text-xl text-[10px]'>????k????</span>
                    </a>
                </div>

                {/* BASKET for mobile view on top right corner */}
                <Badge count={1} className='md:hidden flex justify-center items-center'>
                    <Link to={"/cart"} className='menu-link flex flex-col hover:text-[#40a9ff] transition-all'>
                        <ShoppingCartOutlined />
                        <span className='md:text-xl text-[10px]'>Sepet</span>
                    </Link>
                </Badge>
            </header>
        </div>
    )
}

export default header