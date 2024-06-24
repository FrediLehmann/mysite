import { ContactForm } from './components';

export default function ContactSection() {
	return (
		<section
			id="contact"
			className="py-12 md:py-24 lg:py-32 container mx-auto space-y-2 items-center flex flex-col">
			<h2 className="text-lg md:text-2xl font-bold">Contact me</h2>
			<ContactForm />
		</section>
	);
}
