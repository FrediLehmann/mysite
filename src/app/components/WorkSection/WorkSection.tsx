import { ProjectCard } from './components';

export default function WorkSection() {
	return (
		<section
			id="work"
			className="py-12 md:py-24 lg:py-32 container mx-auto space-y-2 items-center flex flex-col">
			<h2 className="text-lg md:text-2xl font-bold">Examples of my work</h2>
			<p className="text-md md:text-lg max-w-xl text-gray-500 dark:text-gray-300 text-center">
				Since I started my career in engineering, I&apos;ve always worked on web applications of
				various sizes, either on a product or as a contractor for various clients.
			</p>
			<div className="flex flex-wrap gap-4 pt-8 max-w-5xl justify-center">
				<ProjectCard
					label="ImmoScout24"
					timeframe="2019 - 2023"
					description="ImmoScout24 is a marketplace to sell, buy and rent homes. I worked there as a Front-end and as a Full-stack engineer."
					tags={['React', 'TypeScript', 'Redux', 'Node.js']}
					url="https://www.immoscout24.ch"
					work
				/>
				<ProjectCard
					label="Beratungshero"
					timeframe="2023 - 2025"
					description="Beratungshero is a realtime video consulting application. As the lead engineer at Berataungshero, it's my responsibility to build and maintain the platform. Making it fit for the future."
					tags={['React', 'TypeScript', 'Nextjs', 'Nestjs', 'Socket.io']}
					url="https://www.beratungshero.ch"
					work
				/>
				<ProjectCard
					label="Wayless"
					timeframe="2024 - Present"
					description="Wayless is a product enabling users to order prints of their PDF documents. Using Wayless you can order a print out to your home address or wherever you need it ot be sent"
					tags={['React', 'TypeScript', 'Redux', 'Node.js', 'Supabase']}
					url="https://wayless.ch"
				/>
				<ProjectCard
					label="Tellytics"
					timeframe="2023 - Present"
					description="Web analytics for small businesses. Tellytics is a platform that helps small businesses to understand their customers better."
					tags={['React', 'TypeScript', 'Nextjs', 'Supabase']}
					url="https://www.tellytics.ch"
				/>
				<ProjectCard
					label="Velogruppe 60 Plus"
					timeframe="2022 - Present"
					description="Platform for my father to digitalise his cycling club. The platform is used to communicate and plan cycling tours."
					tags={['React', 'TypeScript', 'Nextjs', 'ChakraUI', 'Supabase']}
					url="https://www.velogruppe60plus-sensetal.ch"
				/>
			</div>
		</section>
	);
}
