import { ContactSection, WelcomeSection, WorkSection } from './components';

export default function Home() {
	return (
		<main className="min-h-dvh divide-y">
			<WelcomeSection />
			<WorkSection />
			<ContactSection />
		</main>
	);
}
