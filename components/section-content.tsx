import { Image } from '@nextui-org/image'
import { Button } from '@nextui-org/button'

// 内容
export const SectionContent = () => {
	// 文字内容
	const textContent = {
		title: ['Make Web Design ', 'Easy To', 'Develop'],
		subtitle:
			'We are design and development house. We make bespoke design and then bring them to reality by efficiently developing it.Hire us now to upgrade your digital identify.',
	}

	return (
		<div className='flex justify-around p-10 h-full bg-[#EEF7F3]'>
			<div className='md:basis-3/5 flex flex-col md:p-10 gap-4 self-center'>
				<div className='text-3xl md:text-7xl font-medium'>
					{textContent.title.map((item, index) => (
						<div key={index}>{item}</div>
					))}
				</div>
				<div className='text-xl text-[#959997] line-clamp-4'>
					{textContent.subtitle}
				</div>
				<div>
					<Button
						className='text-2xl after:content-[""] after:ml-0.5 after:bg-gradient-to-r after:from-cyan-500 after:to-blue-500 after:w-10 after:h-10 after:rounded-full after:absolute after:left-0 after:-z-10'
						variant='light'>
						Get Started
					</Button>
				</div>
			</div>
			<div className='transition-all translate-x-96 right-0 absolute md:translate-x-0 md:relative md:flex self-center'>
				<Image
					alt='Ornament'
					src='/favicon.ico'
				/>
			</div>
		</div>
	)
}
