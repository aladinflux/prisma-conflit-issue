import seed from './seed'
import cliProgress from 'cli-progress'

const bar = new cliProgress.SingleBar({}, cliProgress.Presets.shades_classic);
const PROGRESS_MAX = 100

const start = async () => {
  const seedGenerator = seed()
  
  bar.start(PROGRESS_MAX, 0)

  let value = 0
  while(value < PROGRESS_MAX) {
    value = (await seedGenerator.next()).value || 0
    bar.update(value)
  }
  bar.stop()

  console.log('')
  console.log('🍔 seeding done, db full.')
  process.exit()
}

start()