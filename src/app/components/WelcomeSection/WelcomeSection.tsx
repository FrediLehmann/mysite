import { ChevronRightIcon } from 'lucide-react';
import Link from 'next/link';

import { ThemeToggle } from '@/components/ThemeToggle';
import IconCloud from '@/components/magicui/IconCloud';
import { Button } from '@/components/ui';

import { ICON_SLUGS } from './constants';

export default function WelcomeSection() {
	return (
		<section className="py-12 md:py-24 lg:py-32 container mx-auto">
			<div className="flex flex-col md:flex-row gap-10 md:gap-24 lg:gap-40">
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
						<ThemeToggle />
					</div>
				</div>
				<div className="max-w-[16rem] md:max-w-[20rem] lg:max-w-[28rem] mx-auto">
					<IconCloud iconSlugs={ICON_SLUGS} />
				</div>
			</div>
		</section>
	);
}
