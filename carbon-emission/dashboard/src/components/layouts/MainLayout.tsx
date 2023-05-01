import { Suspense } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { Layout, Menu, theme } from 'antd';

import Loader from '../Loader'

//LOCAL DATA
import routes from '../../data/routes';


const MainLayout = () => {
    const {
        token: { colorBgContainer },
    } = theme.useToken();

    return (
        <Layout>
            <Layout.Sider className='main_sidebar' theme="light" collapsible breakpoint='lg'>
                <div className="nav_logo" >
                    <img src="/logo.png" alt="code19" />
                </div>
                <Menu
                    theme="light"
                    mode="inline"
                    selectable={false}
                    style={{ height: '100%' }}
                    items={routes.map((route) => ({
                        key: route.key,
                        icon: <i className={route.icon_name}></i>,
                        label: <NavLink to={route.path} className={({ isActive }) => isActive ? 'active' : ''}>
                            <span>{route.name}</span>
                        </NavLink>
                    }))}
                >
                </Menu>
            </Layout.Sider>

            <Layout>
                <Layout.Header style={{ backgroundColor: colorBgContainer, padding: 0 }}>
                    <div >
                        This is header
                    </div>
                </Layout.Header>
                <Layout.Content style={{
                    margin: 16,
                    minHeight: 280
                }}>
                    <div style={{ height: 'calc(100vh - 112px)', overflowY: 'auto', overflowX: 'hidden' }}>
                        <Suspense fallback={<Loader />}>
                            <Outlet />
                        </Suspense>
                    </div>
                </Layout.Content>
            </Layout>
        </Layout>
    )
}

export default MainLayout