export const ALGORAND_LEDGER = 'TestNet';
export const USDC_ID = 400295506;
export const USDC_DECIMAL_POINTS = 0;
export const ASSET_URL = 'tosainuasa.com';
export var BACKEND_URL;
if (process.env.NODE_ENV === 'development') {
  BACKEND_URL = 'http://localhost:8000';
} else {
  BACKEND_URL = 'https://nft-be.ulam.io';
}
