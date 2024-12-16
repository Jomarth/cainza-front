import {Disclosure, DisclosureButton, DisclosurePanel} from '@headlessui/react'
import {Bars3Icon, XMarkIcon} from '@heroicons/react/24/outline'
import ItemNavbar from "./ItemNavbar.jsx";
import {itemsNavbar} from "../../contents/nav-items.js";
import {useAuth} from "../../context/AuthContext.jsx";
import {Link} from "react-router-dom";

const navigation = [
    {name: 'Ver obras', href: 'ver-obras', current: true},
    {name: 'Crear obra', href: 'crear-obras', current: false},
    {name: 'Ver reportes', href: 'ver-reportes', current: false},
    {name: 'Crear reporte', href: 'crear-reportes', current: false},
    {name: 'Ver ensayes', href: 'ver-ensayes', current: false},
    {name: 'Crear ensaye', href: 'crear-ensayes', current: false},
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Layout() {
    const {isAuthenticated, logout} = useAuth();

    return (
        <div className="w-screen text-white">
            <Disclosure as="nav" className="bg-blue-950">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex h-16 items-center justify-between">
                        <div className="flex items-center">
                            <div className="shrink-0">
                                <a className={'text-2xl font-bold'} href={'/'}>
                                    Calidad Integral de Zacatecas
                                </a>
                            </div>
                            <div className="hidden md:block">
                                <div className="ml-10 flex items-baseline space-x-4">

                                </div>
                            </div>
                        </div>
                        <div className="hidden md:block">
                            <div className="ml-4 flex items-center md:ml-6">
                                {
                                    itemsNavbar.map(item => {
                                        return (
                                            <ItemNavbar trigger={item.trigger} links={item.links} key={item.trigger}/>)
                                    })
                                }
                                {
                                    isAuthenticated ? <Link to={'/'} onClick={() => {
                                            logout()
                                        }}>Cerrar sesión</Link> :
                                        <Link to={'/login'}>Iniciar sesión</Link>
                                }
                            </div>
                        </div>
                        <div className="-mr-2 flex md:hidden">
                            {/* Mobile menu button */}
                            <DisclosureButton
                                className="group relative inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                <span className="absolute -inset-0.5"/>
                                <span className="sr-only">Open main menu</span>
                                <Bars3Icon aria-hidden="true" className="block size-6 group-data-[open]:hidden"/>
                                <XMarkIcon aria-hidden="true" className="hidden size-6 group-data-[open]:block"/>
                            </DisclosureButton>
                        </div>
                    </div>
                </div>

                <DisclosurePanel className="md:hidden">
                    <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
                        {navigation.map((item) => (
                            <DisclosureButton
                                key={item.name}
                                as="a"
                                href={item.href}
                                aria-current={item.current ? 'page' : undefined}
                                className={classNames(
                                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                    'block rounded-md px-3 py-2 text-base font-medium',
                                )}
                            >
                                {item.name}

                            </DisclosureButton>
                        ))}
                    </div>

                </DisclosurePanel>
            </Disclosure>

            <main>
                <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">{/* Your content */}</div>
            </main>
        </div>
    )
}
