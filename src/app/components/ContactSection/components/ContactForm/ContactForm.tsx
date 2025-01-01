'use client';

import { Loader2Icon, SendIcon } from 'lucide-react';
import { useState } from 'react';

import { Button, Input, Label, Textarea } from '@/components/ui';

import sendEmail from './sendEmail';

export default function ContactForm() {
	const [sending, setSending] = useState(false);
	const [success, setSuccess] = useState(false);

	async function submitForm(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();
		setSending(true);

		const result = await sendEmail({
			// @ts-ignore
			name: (e.target as HTMLFormElement).elements['name'].value,
			// @ts-ignore
			email: (e.target as HTMLFormElement).elements['email'].value,
			// @ts-ignore
			comment: (e.target as HTMLFormElement).elements['comment'].value
		});

		if (result.success) setSuccess(true);

		setSending(false);
	}

	return (
		<form className="w-full sm:w-1/2 lg:w-1/3 space-y-4 pt-8" onSubmit={submitForm}>
			<div className="space-y-1">
				<Label htmlFor="name">Name</Label>
				<Input id="name" type="text" required />
			</div>
			<div className="space-y-1">
				<Label htmlFor="email">E-Mail</Label>
				<Input id="email" type="email" required />
			</div>
			<div className="space-y-1">
				<Label htmlFor="comment">Comment</Label>
				<Textarea id="comment" placeholder="What do you wan't me to know" required />
			</div>
			<Button type="submit" className="w-full" disabled={sending || success}>
				{sending && (
					<>
						<Loader2Icon className="w-5 h-5 animate-spin mr-2" />
						Send
					</>
				)}
				{success && (
					<>
						<SendIcon className="w-5 h-5 mr-2" />
						Sent
					</>
				)}
				{!sending && !success && 'Send'}
			</Button>
		</form>
	);
}
