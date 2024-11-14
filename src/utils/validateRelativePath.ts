import { isAbsolute } from 'node:path'

const validateRelativePath = (
  path: string
): string => {
  // Return a valid relative path if the path does not start with `.`.
  if (!path.startsWith('.') && !isAbsolute(path)) {
    return './' + path
  }

  // Return a valid relative path if the path prefix is `.`.
  return path
}

export default validateRelativePath
