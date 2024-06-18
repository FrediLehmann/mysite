import { cn } from '@/lib/utils';
import { GlobeIcon } from 'lucide-react';
import Link from 'next/link';

import { Badge, Button } from '@/components/ui';

export default function ProjectCard({
	label,
	timeframe,
	description,
	tags,
	url,
	work
}: {
	label: string;
	timeframe: string;
	description: string;
	tags: string[];
	url: string;
	work?: boolean;
}) {
	return (
		<div className="border rounded py-2 px-3 w-72 flex flex-col">
			<h3 className="font-semibold text-lg">{label}</h3>
			<div className="flex items-center gap-3">
				<span className="text-gray-800 dark:text-gray-200 font-light text-sm">{timeframe}</span>
				<div
					className={cn(
						'border rounded-full py-[2px] px-2 text-xs',
						work
							? 'bg-neutral-800 dark:bg-neutral-600 text-white border-black'
							: 'bg-neutral-200 dark:text-black'
					)}>
					{work ? 'Work' : 'Private'}
				</div>
			</div>
			<p className=" text-gray-600 dark:text-gray-300 mt-3 mb-6">{description}</p>
			<div className="mt-auto space-y-3">
				<div className="flex flex-wrap gap-2 text-sm">
					{tags.map((tag) => (
						<Badge key={tag} variant="secondary">
							{tag}
						</Badge>
					))}
				</div>
				<Button asChild size="sm" className="py-[2px] text-xs leading-3">
					<Link href={url}>
						<GlobeIcon className="mr-1 w-4 h-4" /> Website
					</Link>
				</Button>
			</div>
		</div>
	);
}
