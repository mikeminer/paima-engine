export class WalletNotFound extends Error {
  constructor(message?: string) {
    super(message);
    this.name = 'WalletNotFound';
  }
}
export class UnsupportedWallet extends Error {
  constructor(message?: string) {
    super(message);
    this.name = 'UnsupportedWallet';
  }
}
export class ProviderNotInitialized extends Error {
  constructor(message?: string) {
    super(message);
    this.name = 'ProviderNotInitialized';
  }
}
export class ProviderApiError extends Error {
  constructor(message?: string) {
    super(message);
    this.name = 'ProviderApiError';
  }
}
