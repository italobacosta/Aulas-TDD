export class ServerError extends Error {
  constructor () {
    super('Internal Serve error')
    this.name = 'ServerError'
  }
}
