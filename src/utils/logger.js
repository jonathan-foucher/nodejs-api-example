const fontColors = {
  reset: '\x1b[0m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
}

const getFormattedDateTime = () => new Date().toISOString()

const error = (s) => console.error(`${getFormattedDateTime()}\t${fontColors.red}ERROR${fontColors.reset}\t${s}`)

const info = (s) => console.info(`${getFormattedDateTime()}\t${fontColors.green}INFO${fontColors.reset}\t${s}`)

const log = (s) => console.log(`${getFormattedDateTime()}\t${fontColors.blue}LOG${fontColors.reset}\t${s}`)

const warn = (s) => console.warn(`${getFormattedDateTime()}\t${fontColors.yellow}WARN${fontColors.reset}\t${s}`)

const debug = (s) => console.debug(`${getFormattedDateTime()}\t${fontColors.blue}DEBUG${fontColors.reset}\t${s}`)

export { error, info, log, warn, debug }
