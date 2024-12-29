import { ChevronRightIcon } from 'lucide-react';
import Link from 'next/link';

import { ThemeToggle } from '@/components/ThemeToggle';
import { BlueskyIcon, GithubIcon, LinkedInIcon } from '@/components/icons';
import IconCloud from '@/components/magicui/IconCloud';
import { Button } from '@/components/ui';

import { ICON_SLUGS } from './constants';

export default function WelcomeSection() {
	return (
		<section className="py-12 md:py-24 lg:py-32 container mx-auto">
			<div className="flex flex-col md:flex-row gap-10 md:gap-24 lg:gap-40">
				<div className="flex flex-col justify-center space-y-3">
					<span className="text-lg md:text-xl">Welcome to my personal website</span>
					<h1 className="text-3xl md:text-5xl font-bold">Frederic Lehmann </h1>
					<div className="flex flex-col md:flex-row space-y-3 md:space-y-0 space-x-0 md:space-x-3 items-center">
						<Button asChild className="w-full md:w-auto">
							<Link href="#contact">
								Contact me
								<ChevronRightIcon className="ml-1 h-5 w-5" />
							</Link>
						</Button>
						<Button asChild variant="secondary" className="w-full md:w-auto">
							<Link href="#work">
								See my work
								<ChevronRightIcon className="ml-1 h-5 w-5" />
							</Link>
						</Button>
					</div>
					<div className="flex space-x-2 justify-center md:justify-start">
						<Button asChild size="icon" variant="outline" aria-label="Github Profile">
							<Link href="https://github.com/FrediLehmann">
								<GithubIcon className="h-5 w-5 dark:fill-white" />
							</Link>
						</Button>
						<Button asChild size="icon" variant="outline" aria-label="LinkedIn Profile">
							<Link href="https://www.linkedin.com/in/frederic-lehmann/">
								<LinkedInIcon className="h-5 w-5 dark:fill-white" />
							</Link>
						</Button>
						<Button asChild size="icon" variant="outline" aria-label="Bluesky Profile">
							<Link href="https://bsky.app/profile/fredilehmann.bsky.social">
								<BlueskyIcon className="h-5 w-5 dark:fill-white" />
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
