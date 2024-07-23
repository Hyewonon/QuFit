import Header from '@components/common/Header';
import { Outlet, useLocation } from 'react-router-dom';

const Layout = ({ hasHeader }: { hasHeader: boolean }) => {
    const location = useLocation();
    const isLocation = location.pathname;

    const background = isLocation === '/main' ? 'bg-mainPageBg' : 'bg-chatPageBg';

    return (
        <div className={`flex flex-col items-center justify-center w-screen h-screen bg-cover px-14 ${background}`}>
            {hasHeader && <Header />}
            <div className="w-full aspect-layout effect-layout border-b-4 border-x-2 border-lightPurple-4 rounded-b-[2.75rem] relative">
                <Outlet />
                <div className="z-0 w-full h-full rounded-b-[2.75rem] bg-whitePink opacity-20" />
            </div>
        </div>
    );
};

export default Layout;
