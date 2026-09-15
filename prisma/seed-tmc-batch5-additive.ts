import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function addBatch5() {
  // Check if batch 5 cards already exist
  const existing = await prisma.flashcard.count({
    where: {
      divisionId: 'cmsm41fq00000zf54wqjaayvz',
      orderIndex: { gte: 401, lte: 500 },
    },
  });

  if (existing > 0) {
    console.log(`Found ${existing} batch 5 cards already in database. Skipping to avoid duplicates.`);
    return;
  }

  // Import and run the batch 5 seed
  const { seedTmcBatch5 } = await import('./seed-tmc-batch5');
  await seedTmcBatch5();

  console.log('Done! Batch 5 TMC flashcards added successfully.');
}

addBatch5()
  .catch((e) => {
    console.error('Error adding batch 5:', e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
