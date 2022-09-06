export class HttpError extends Error {
  constructor(message: string, public status: number) {
    super(message);
  }

  isNotAuthenticated(): boolean {
    return this.status === 401;
  }
}
