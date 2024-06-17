import { ChevronRightIcon } from 'lucide-react';
import Link from 'next/link';

import { Button } from '@/components/ui';

export default function WelcomeSection() {
	return (
		<section className="py-12 md:py-24 lg:py-32 container mx-auto">
			<div className="flex flex-col justify-center space-y-3">
				<span className="text-lg md:text-xl">Welcome to the personal website of</span>
				<h1 className="text-3xl md:text-5xl font-bold">Frederic Lehmann </h1>
				<div className="flex space-x-3">
					<Button asChild>
						<Link href="#contact">
							Contact me
							<ChevronRightIcon className="ml-1 h-5 w-5" />
						</Link>
					</Button>
					<Button asChild variant="secondary">
						<Link href="#work">
							See my work
							<ChevronRightIcon className="ml-1 h-5 w-5" />
						</Link>
					</Button>
				</div>
			</div>
		</section>
	);
}
