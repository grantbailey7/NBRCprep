import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
  // Delete old duplicate/replaced posts that no longer exist in the seed files
  const slugsToDelete = [
    // Batch 2: was duplicate of batch 1
    'hemodynamic-monitoring-respiratory-therapists',
    // Batch 4: cross-batch duplicates replaced with new topics
    'respiratory-therapy-job-interview-common-questions',
    'cauti-prevention-rt-awareness',
    'respiratory-therapy-emr-documentation-tips',
    'respiratory-therapy-scope-of-practice-by-state',
    // Batch 5: VCD/PVFM duplicate replaced
    'paradoxical-vocal-fold-motion-assessment',
  ]

  for (const slug of slugsToDelete) {
    const result = await prisma.blogPost.deleteMany({ where: { slug } })
    if (result.count > 0) {
      console.log(`Deleted: ${slug}`)
    } else {
      console.log(`Not found (already clean): ${slug}`)
    }
  }

  console.log('\nCleanup complete.')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
