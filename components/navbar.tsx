import Link from 'next/link'
import Image from 'next/image'
import { ChatBubbleBottomCenterIcon, PhoneIcon } from "@heroicons/react/24/outline";
import ToggleSlot from "@/components/ui/toggleSolt";


export default function Navbar() {
    const linkList = [
        {
            name: 'Page',
            path: '/',
        },
        {
            name: 'Project',
            path: '/project',
        }
    ]

    return (
        <>
            <header className="flex justify-between items-center p-4 bg-white">
                <div className="text-xl font-bold">LOGO</div>
                <nav className="space-x-6 flex-auto px-[24px]">
                    <ul className='flex gap-[15px]'>
                        {linkList.map(item => {
                            return (
                                <li key={item.name} className='items-center text-gray-600 hover:text-black'>
                                    <Link href={item.path}>
                                        {item.name}
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>
                </nav>
                <UserMenu />
            </header>
        </>
    )
}

const UserMenu = () => {
    const chatList = [
        {
            name: 'QQ',
            content: '835349858@qq.com'
        },
        {
            name: 'Google',
            content: 'bujiaotutu@gmail.com'
        }
    ]
    const phoneList = [
        {
            name: 'mobile',
            content: '18558785728'
        }
    ]
    return (
        <div className="flex items-center gap-[15px]">
            <ToggleSlot trigger={<ChatBubbleBottomCenterIcon className="h-6 w-6 text-gray-400 hover:text-black" />
            }>
                <ul className="text-gray-700 text-[14px] flex-col">
                    {
                        chatList.map(item => {
                            return (
                                <li className='flex  border-b border-black last:border-b-0 pb-1' key={item.name}>
                                    <div className='w-[60px] text-left'>
                                        {item.name}:
                                    </div>
                                    <span>{item.content}</span>
                                </li>
                            )
                        })
                    }
                </ul>
            </ToggleSlot>
            <ToggleSlot trigger={<PhoneIcon className="h-6 w-6 text-gray-400 hover:text-black" />
            }>
                <ul className="text-gray-700 text-[14px] flex-col">
                    {
                        phoneList.map(item => {
                            return (
                                <li className='flex  border-b border-black last:border-b-0 pb-1' key={item.name}>
                                    <div className='w-[60px] text-left'>
                                        {item.name}:
                                    </div>
                                    <span>{item.content}</span>
                                </li>
                            )
                        })
                    }
                </ul>
            </ToggleSlot>
            {/* <ToggleSlot trigger={<Image width={60} height={50} src={"/svg/nav_mobile.svg"} alt="{User}"></Image>
            }>
                <div className="text-gray-800">
                    test1
                </div>
            </ToggleSlot> */}
            <Image width={30} height={30} className='rounded-[50%] shadow-lg' src={"/profile.jpg"} alt="{User}"></Image>
        </div>
    );
};
