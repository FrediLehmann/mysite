import { DownloadIcon } from 'lucide-react';
import Link from 'next/link';

import { Button } from '@/components/ui';

import { ContactForm } from './components';

export default function ContactSection() {
	return (
		<section
			id="contact"
			className="py-12 md:py-24 lg:py-32 container mx-auto items-center flex flex-col space-y-2">
			<h2 className="text-lg md:text-2xl font-bold">Want to book me as a freelancer?</h2>
			<p className="text-md md:text-lg max-w-xl text-gray-500 dark:text-gray-300 text-center">
				You can fill out this contact form or reach me through my socials. For more information
				about me you can download my CV.
			</p>
			<Button asChild variant="link" className="gap-2">
				<Link href="FrediLehmann_CV.pdf" target="_blank" rel="noopener noreferrer">
					Curriculum Vitae <DownloadIcon className="w-5 h-5" />
				</Link>
			</Button>
			<ContactForm />
		</section>
	);
}
