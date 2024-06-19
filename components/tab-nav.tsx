'use client'

import {
	Navbar,
	NavbarBrand,
	NavbarContent,
	NavbarItem,
	NavbarMenuToggle,
	NavbarMenu,
	NavbarMenuItem,
} from '@nextui-org/navbar'
import { useState } from 'react'

export const TabNav = () => {
	// navBar选项
	const navBarItem = [
		{
			name: 'Latest Blogs',
		},
		{
			name: 'Our Writers',
		},
		{
			name: 'Submit an Article',
		},
		{
			name: 'Contact Us',
		},
	]

	const [isMenuOpen, setIsMenuOpen] = useState(false)

	return (
		<Navbar
            shouldHideOnScroll
            
			className='flex flex-row bg-black text-white p-4'
			onMenuOpenChange={setIsMenuOpen}>
			<NavbarContent
				className='mr-auto'
				justify='start'>
				<NavbarMenuToggle
					aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
					className='sm:hidden'
				/>
				<NavbarBrand>
					<p className='font-bold text-inherit text-xl'>ACME</p>
				</NavbarBrand>
			</NavbarContent>
			<NavbarContent
				justify='end'
				className='hidden sm:flex gap-4 '>
				{navBarItem.map((item, index) => (
					<NavbarItem
						key={index}
						className='text-xl'>
						{item.name}
					</NavbarItem>
				))}
			</NavbarContent>
			<NavbarMenu>
				{navBarItem.map((item, index) => (
					<NavbarMenuItem key={`${item}-${index}`}>
						<div>{item.name}</div>
					</NavbarMenuItem>
				))}
			</NavbarMenu>
		</Navbar>
	)
}
