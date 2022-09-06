export class HttpError extends Error {
  constructor(message: string, public status: number) {
    super(message);
  }

  isBadRequest(): boolean {
    return this.status === 400;
  }

  isNotAuthenticated(): boolean {
    return this.status === 401;
  }
}
