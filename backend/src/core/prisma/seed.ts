import { PrismaClient } from '@/prisma/generated';

const prisma = new PrismaClient();

async function main() {
	const boosts = [
		{
			name: 'Quick Finish',
			description: '×2 звёзд, якщо квест завершено впродовж 10 годин після активації',
			cooldownDays: 5,
			durationHours: 10,
		},
		{
			name: 'No Late Penalty',
			description: 'Ніякого штрафу за прострочення протягом 2 днів',
			cooldownDays: 5,
			durationHours: 48,
		},
	];

	for (const b of boosts) {
		await prisma.boost.upsert({
			where: { name: b.name },
			update: {},
			create: b,
		});
	}
}

main()
	.catch(e => {
		console.error(e);
		process.exit(1);
	})
	.finally(() => prisma.$disconnect());
