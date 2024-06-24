'use server';

import { Resend } from 'resend';

import { EmailTemplate } from '@/components/EmailTemplate';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function sendEmail({
	email,
	name,
	comment
}: {
	email: string;
	name: string;
	comment: string;
}) {
	'use server';

	const { error } = await resend.emails.send({
		from: `Personal Website <${process.env.SENDER_EMAIL_PRESONAL_WEBSITE}>`,
		to: [process.env.PERSONAL_EMAIL_ADDRESS],
		subject: 'Email from personal Website',
		react: EmailTemplate({ email, name, comment })
	});

	if (error) {
		return { success: false };
	}

	return { success: true };
}
