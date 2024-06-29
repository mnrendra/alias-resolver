import { isAbsolute } from 'node:path'

/**
 * Validate relative path.
 *
 * @param {string} path - A relative path without the `.` prefix.
 *
 * @returns {string} A valid relative path with the `.` prefix.
 */
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

// Export `validateRelativePath` as default value.
export default validateRelativePath
