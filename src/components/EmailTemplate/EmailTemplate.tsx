export default function EmailTemplate({
	name,
	email,
	comment
}: {
	name: string;
	email: string;
	comment: string;
}) {
	return (
		<>
			<div>{name}</div>
			<br></br>
			<div>{email}</div>
			<br></br>
			<p>{comment}</p>
		</>
	);
}
