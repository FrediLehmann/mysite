'use client';

import { Button, Input, Label, Textarea } from '@/components/ui';

import sendEmail from './sendEmail';

export default function ContactForm() {
	async function submitForm(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();

		await sendEmail({
			// @ts-ignore
			name: (e.target as HTMLFormElement).elements['name'].value,
			// @ts-ignore
			email: (e.target as HTMLFormElement).elements['email'].value,
			// @ts-ignore
			comment: (e.target as HTMLFormElement).elements['comment'].value
		});
	}

	return (
		<form className="w-[400px] space-y-4" onSubmit={submitForm}>
			<div>
				<Label htmlFor="name">Name</Label>
				<Input id="name" type="text" required />
			</div>
			<div>
				<Label htmlFor="email">E-Mail</Label>
				<Input id="email" type="email" required />
			</div>
			<div>
				<Label htmlFor="comment">Comment</Label>
				<Textarea id="comment" placeholder="What do you wan't me to know" required />
			</div>
			<Button type="submit" className="w-full">
				Send
			</Button>
		</form>
	);
}
