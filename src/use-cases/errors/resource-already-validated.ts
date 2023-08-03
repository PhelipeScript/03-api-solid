export class ResourceAlreadyValidated extends Error {
  constructor() {
    super('Resource already validated.')
  }
}
