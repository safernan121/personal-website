// Production deploys come from main; see AGENTS.md.
import { execFileSync } from 'node:child_process'

const branch = execFileSync('git', ['rev-parse', '--abbrev-ref', 'HEAD'], { encoding: 'utf8' }).trim()
if (branch !== 'main' && process.env.ALLOW_BRANCH_DEPLOY !== '1') {
  console.error(`Refusing to deploy from "${branch}": production deploys come from main.`)
  console.error('Merge to main (CI deploys it), or set ALLOW_BRANCH_DEPLOY=1 for an intentional branch deploy.')
  process.exit(1)
}
