import { ChainId, JSBI, Percent, Token, WAVAX } from '@pangolindex/sdk'
import { AbstractConnector } from '@web3-react/abstract-connector'

import { injected, walletlink } from '../connectors'

export const GAS_PRICE = 225;

export const ROUTER_ADDRESS: { [chainId in ChainId]: string } = {
  [ChainId.FUJI]: '0x2D99ABD9008Dc933ff5c0CD271B88309593aB921',
  [ChainId.AVALANCHE]: '0xE54Ca86531e17Ef3616d22Ca28b0D458b6C89106'
}

export const LANDING_PAGE = 'https://pangolin.exchange/'
export const ANALYTICS_PAGE = 'https://info.pangolin.exchange/'

export const ZERO_ADDRESS = '0x0000000000000000000000000000000000000000'

export const GOVERNANCE_ADDRESS = '0xb0Ff2b1047d9E8d294c2eD798faE3fA817F43Ee1'

export const BRIDGE_MIGRATOR_ADDRESS = '0x4b23Aa72A1214d0E4fd3f2c8Da7C6ba660F7483C'

// a list of tokens by chain
type ChainTokenList = {
  readonly [chainId in ChainId]: Token[]
}

export const PNG: { [chainId in ChainId]: Token } = {
  [ChainId.FUJI]: new Token(ChainId.FUJI, '0x83080D4b5fC60e22dFFA8d14AD3BB41Dde48F199', 18, 'PNG', 'Pangolin'),
  [ChainId.AVALANCHE]: new Token(ChainId.AVALANCHE, '0x60781C2586D68229fde47564546784ab3fACA982', 18, 'PNG', 'Pangolin')
}

export const ETH: { [chainId in ChainId]: Token } = {
  [ChainId.FUJI]: new Token(ChainId.FUJI, ZERO_ADDRESS, 18, 'ETH', 'Ether'),
  [ChainId.AVALANCHE]: new Token(ChainId.AVALANCHE, '0xf20d962a6c8f70c731bd838a3a388D7d48fA6e15', 18, 'ETH', 'Ether')
}

export const WETHe: { [chainId in ChainId]: Token } = {
  [ChainId.FUJI]: new Token(ChainId.FUJI, ZERO_ADDRESS, 18, 'WETH.e', 'Ether'),
  [ChainId.AVALANCHE]: new Token(ChainId.AVALANCHE, '0x49D5c2BdFfac6CE2BFdB6640F4F80f226bc10bAB', 18, 'WETH.e', 'Ether')
}

export const USDT: { [chainId in ChainId]: Token } = {
  [ChainId.FUJI]: new Token(ChainId.FUJI, ZERO_ADDRESS, 6, 'USDT', 'Tether USD'),
  [ChainId.AVALANCHE]: new Token(ChainId.AVALANCHE, '0xde3A24028580884448a5397872046a019649b084', 6, 'USDT', 'Tether USD')
}

export const USDTe: { [chainId in ChainId]: Token } = {
  [ChainId.FUJI]: new Token(ChainId.FUJI, ZERO_ADDRESS, 6, 'USDT.e', 'Tether USD'),
  [ChainId.AVALANCHE]: new Token(ChainId.AVALANCHE, '0xc7198437980c041c805A1EDcbA50c1Ce5db95118', 6, 'USDT.e', 'Tether USD')
}

export const WBTC: { [chainId in ChainId]: Token } = {
  [ChainId.FUJI]: new Token(ChainId.FUJI, ZERO_ADDRESS, 8, 'WBTC', 'Wrapped Bitcoin'),
  [ChainId.AVALANCHE]: new Token(ChainId.AVALANCHE, '0x408D4cD0ADb7ceBd1F1A1C33A0Ba2098E1295bAB', 8, 'WBTC', 'Wrapped Bitcoin')
}

export const WBTCe: { [chainId in ChainId]: Token } = {
  [ChainId.FUJI]: new Token(ChainId.FUJI, ZERO_ADDRESS, 8, 'WBTC.e', 'Wrapped Bitcoin'),
  [ChainId.AVALANCHE]: new Token(ChainId.AVALANCHE, '0x50b7545627a5162F82A992c33b87aDc75187B218', 8, 'WBTC.e', 'Wrapped Bitcoin')
}

export const LINK: { [chainId in ChainId]: Token } = {
  [ChainId.FUJI]: new Token(ChainId.FUJI, ZERO_ADDRESS, 18, 'LINK', 'ChainLink Token'),
  [ChainId.AVALANCHE]: new Token(ChainId.AVALANCHE, '0xB3fe5374F67D7a22886A0eE082b2E2f9d2651651', 18, 'LINK', 'ChainLink Token')
}

export const LINKe: { [chainId in ChainId]: Token } = {
  [ChainId.FUJI]: new Token(ChainId.FUJI, ZERO_ADDRESS, 18, 'LINK.e', 'ChainLink Token'),
  [ChainId.AVALANCHE]: new Token(ChainId.AVALANCHE, '0x5947BB275c521040051D82396192181b413227A3', 18, 'LINK.e', 'ChainLink Token')
}

export const DAI: { [chainId in ChainId]: Token } = {
  [ChainId.FUJI]: new Token(ChainId.FUJI, ZERO_ADDRESS, 18, 'DAI', 'Dai Stablecoin'),
  [ChainId.AVALANCHE]: new Token(ChainId.AVALANCHE, '0xbA7dEebBFC5fA1100Fb055a87773e1E99Cd3507a', 18, 'DAI', 'Dai Stablecoin')
}

export const DAIe: { [chainId in ChainId]: Token } = {
  [ChainId.FUJI]: new Token(ChainId.FUJI, ZERO_ADDRESS, 18, 'DAI.e', 'Dai Stablecoin'),
  [ChainId.AVALANCHE]: new Token(ChainId.AVALANCHE, '0xd586E7F844cEa2F87f50152665BCbc2C279D8d70', 18, 'DAI.e', 'Dai Stablecoin')
}

export const UNI: { [chainId in ChainId]: Token } = {
  [ChainId.FUJI]: new Token(ChainId.FUJI, ZERO_ADDRESS, 18, 'UNI', 'Uniswap'),
  [ChainId.AVALANCHE]: new Token(ChainId.AVALANCHE, '0xf39f9671906d8630812f9d9863bBEf5D523c84Ab', 18, 'UNI', 'Uniswap')
}

export const UNIe: { [chainId in ChainId]: Token } = {
  [ChainId.FUJI]: new Token(ChainId.FUJI, ZERO_ADDRESS, 18, 'UNI.e', 'Uniswap'),
  [ChainId.AVALANCHE]: new Token(ChainId.AVALANCHE, '0x8eBAf22B6F053dFFeaf46f4Dd9eFA95D89ba8580', 18, 'UNI.e', 'Uniswap')
}

export const SUSHI: { [chainId in ChainId]: Token } = {
  [ChainId.FUJI]: new Token(ChainId.FUJI, ZERO_ADDRESS, 18, 'SUSHI', 'SushiToken'),
  [ChainId.AVALANCHE]: new Token(ChainId.AVALANCHE, '0x39cf1BD5f15fb22eC3D9Ff86b0727aFc203427cc', 18, 'SUSHI', 'SushiToken')
}

export const SUSHIe: { [chainId in ChainId]: Token } = {
  [ChainId.FUJI]: new Token(ChainId.FUJI, ZERO_ADDRESS, 18, 'SUSHI.e', 'SushiToken'),
  [ChainId.AVALANCHE]: new Token(ChainId.AVALANCHE, '0x37B608519F91f70F2EeB0e5Ed9AF4061722e4F76', 18, 'SUSHI.e', 'SushiToken')
}

export const AAVE: { [chainId in ChainId]: Token } = {
  [ChainId.FUJI]: new Token(ChainId.FUJI, ZERO_ADDRESS, 18, 'AAVE', 'Aave Token'),
  [ChainId.AVALANCHE]: new Token(ChainId.AVALANCHE, '0x8cE2Dee54bB9921a2AE0A63dBb2DF8eD88B91dD9', 18, 'AAVE', 'Aave Token')
}

export const AAVEe: { [chainId in ChainId]: Token } = {
  [ChainId.FUJI]: new Token(ChainId.FUJI, ZERO_ADDRESS, 18, 'AAVE.e', 'Aave Token'),
  [ChainId.AVALANCHE]: new Token(ChainId.AVALANCHE, '0x63a72806098Bd3D9520cC43356dD78afe5D386D9', 18, 'AAVE.e', 'Aave Token')
}

export const YFI: { [chainId in ChainId]: Token } = {
  [ChainId.FUJI]: new Token(ChainId.FUJI, ZERO_ADDRESS, 18, 'YFI', 'yearn.finance'),
  [ChainId.AVALANCHE]: new Token(ChainId.AVALANCHE, '0x99519AcB025a0e0d44c3875A4BbF03af65933627', 18, 'YFI', 'yearn.finance')
}

export const YFIe: { [chainId in ChainId]: Token } = {
  [ChainId.FUJI]: new Token(ChainId.FUJI, ZERO_ADDRESS, 18, 'YFI.e', 'yearn.finance'),
  [ChainId.AVALANCHE]: new Token(ChainId.AVALANCHE, '0x9eAaC1B23d935365bD7b542Fe22cEEe2922f52dc', 18, 'YFI.e', 'yearn.finance')
}

export const SNOB: { [chainId in ChainId]: Token } = {
  [ChainId.FUJI]: new Token(ChainId.FUJI, '0xF319e2f610462F846d6e93F51CdC862EEFF2a554', 18, 'SNOB', 'Snowball'),
  [ChainId.AVALANCHE]: new Token(ChainId.AVALANCHE, '0xC38f41A296A4493Ff429F1238e030924A1542e50', 18, 'SNOB', 'Snowball')
}

export const VSO: { [chainId in ChainId]: Token } = {
  [ChainId.FUJI]: new Token(ChainId.FUJI, ZERO_ADDRESS, 18, 'VSO', 'VersoToken'),
  [ChainId.AVALANCHE]: new Token(ChainId.AVALANCHE, '0x846D50248BAf8b7ceAA9d9B53BFd12d7D7FBB25a', 18, 'VSO', 'VersoToken')
}

export const SPORE: { [chainId in ChainId]: Token } = {
  [ChainId.FUJI]: new Token(ChainId.FUJI, ZERO_ADDRESS, 9, 'SPORE', 'Spore.Finance'),
  [ChainId.AVALANCHE]: new Token(ChainId.AVALANCHE, '0x6e7f5C0b9f4432716bDd0a77a3601291b9D9e985', 9, 'SPORE', 'Spore.Finance')
}

// Bridged via anyswap
export const BIFI: { [chainId in ChainId]: Token } = {
  [ChainId.FUJI]: new Token(ChainId.FUJI, ZERO_ADDRESS, 18, 'BIFI', 'beefy.finance'),
  [ChainId.AVALANCHE]: new Token(ChainId.AVALANCHE, '0xd6070ae98b8069de6B494332d1A1a81B6179D960', 18, 'BIFI', 'beefy.finance')
}

// Bridged via anyswap
export const BNB: { [chainId in ChainId]: Token } = {
  [ChainId.FUJI]: new Token(ChainId.FUJI, ZERO_ADDRESS, 18, 'BNB', 'Binance'),
  [ChainId.AVALANCHE]: new Token(ChainId.AVALANCHE, '0x264c1383EA520f73dd837F915ef3a732e204a493', 18, 'BNB', 'Binance')
}

export const XAVA: { [chainId in ChainId]: Token } = {
  [ChainId.FUJI]: new Token(ChainId.FUJI, ZERO_ADDRESS, 18, 'XAVA', 'Avalaunch'),
  [ChainId.AVALANCHE]: new Token(ChainId.AVALANCHE, '0xd1c3f94DE7e5B45fa4eDBBA472491a9f4B166FC4', 18, 'XAVA', 'Avalaunch')
}

export const PEFI: { [chainId in ChainId]: Token } = {
  [ChainId.FUJI]: new Token(ChainId.FUJI, ZERO_ADDRESS, 18, 'PEFI', 'PenguinToken'),
  [ChainId.AVALANCHE]: new Token(ChainId.AVALANCHE, '0xe896CDeaAC9615145c0cA09C8Cd5C25bced6384c', 18, 'PEFI', 'PenguinToken')
}

export const TRYB: { [chainId in ChainId]: Token } = {
  [ChainId.FUJI]: new Token(ChainId.FUJI, ZERO_ADDRESS, 6, 'TRYB', 'BiLira'),
  [ChainId.AVALANCHE]: new Token(ChainId.AVALANCHE, '0x564A341Df6C126f90cf3ECB92120FD7190ACb401', 6, 'TRYB', 'BiLira')
}

export const SHERPA: { [chainId in ChainId]: Token } = {
  [ChainId.FUJI]: new Token(ChainId.FUJI, ZERO_ADDRESS, 18, 'SHERPA', 'Sherpa'),
  [ChainId.AVALANCHE]: new Token(ChainId.AVALANCHE, '0xa5E59761eBD4436fa4d20E1A27cBa29FB2471Fc6', 18, 'SHERPA', 'Sherpa')
}

export const YAK: { [chainId in ChainId]: Token } = {
  [ChainId.FUJI]: new Token(ChainId.FUJI, ZERO_ADDRESS, 18, 'YAK', 'Yak Token'),
  [ChainId.AVALANCHE]: new Token(ChainId.AVALANCHE, '0x59414b3089ce2AF0010e7523Dea7E2b35d776ec7', 18, 'YAK', 'Yak Token')
}

export const QI: { [chainId in ChainId]: Token } = {
  [ChainId.FUJI]: new Token(ChainId.FUJI, ZERO_ADDRESS, 18, 'QI', 'BENQI'),
  [ChainId.AVALANCHE]: new Token(ChainId.AVALANCHE, '0x8729438EB15e2C8B576fCc6AeCdA6A148776C0F5', 18, 'QI', 'BENQI')
}

export const DYP: { [chainId in ChainId]: Token } = {
  [ChainId.FUJI]: new Token(ChainId.FUJI, ZERO_ADDRESS, 18, 'DYP', 'DeFiYieldProtocol'),
  [ChainId.AVALANCHE]: new Token(ChainId.AVALANCHE, '0x961C8c0B1aaD0c0b10a51FeF6a867E3091BCef17', 18, 'DYP', 'DeFiYieldProtocol')
}

export const WALBT: { [chainId in ChainId]: Token } = {
  [ChainId.FUJI]: new Token(ChainId.FUJI, ZERO_ADDRESS, 18, 'WALBT', 'Wrapped AllianceBlock Token'),
  [ChainId.AVALANCHE]: new Token(ChainId.AVALANCHE, '0x9E037dE681CaFA6E661e6108eD9c2bd1AA567Ecd', 18, 'WALBT', 'Wrapped AllianceBlock Token')
}

export const HUSKY: { [chainId in ChainId]: Token } = {
  [ChainId.FUJI]: new Token(ChainId.FUJI, ZERO_ADDRESS, 18, 'HUSKY', 'Husky'),
  [ChainId.AVALANCHE]: new Token(ChainId.AVALANCHE, '0x65378b697853568dA9ff8EaB60C13E1Ee9f4a654', 18, 'HUSKY', 'Husky')
}

export const USDCe: { [chainId in ChainId]: Token } = {
  [ChainId.FUJI]: new Token(ChainId.FUJI, ZERO_ADDRESS, 6, 'USDC.e', 'USD Coin'),
  [ChainId.AVALANCHE]: new Token(ChainId.AVALANCHE, '0xA7D7079b0FEaD91F3e65f86E8915Cb59c1a4C664', 6, 'USDC.e', 'USD Coin')
}

export const LYD: { [chainId in ChainId]: Token } = {
  [ChainId.FUJI]: new Token(ChainId.FUJI, ZERO_ADDRESS, 18, 'LYD', 'LydiaFinance Token'),
  [ChainId.AVALANCHE]: new Token(ChainId.AVALANCHE, '0x4C9B4E1AC6F24CdE3660D5E4Ef1eBF77C710C084', 18, 'LYD', 'LydiaFinance Token')
}

export const TUSD: { [chainId in ChainId]: Token } = {
  [ChainId.FUJI]: new Token(ChainId.FUJI, ZERO_ADDRESS, 18, 'TUSD', 'TrueUSD'),
  [ChainId.AVALANCHE]: new Token(ChainId.AVALANCHE, '0x1C20E891Bab6b1727d14Da358FAe2984Ed9B59EB', 18, 'TUSD', 'TrueUSD')
}

export const GAJ: { [chainId in ChainId]: Token } = {
  [ChainId.FUJI]: new Token(ChainId.FUJI, ZERO_ADDRESS, 18, 'GAJ', 'PolyGaj Token'),
  [ChainId.AVALANCHE]: new Token(ChainId.AVALANCHE, '0x595c8481c48894771CE8FaDE54ac6Bf59093F9E8', 18, 'GAJ', 'PolyGaj Token')
}

export const GDL: { [chainId in ChainId]: Token } = {
  [ChainId.FUJI]: new Token(ChainId.FUJI, ZERO_ADDRESS, 18, 'GDL', 'Gondola'),
  [ChainId.AVALANCHE]: new Token(ChainId.AVALANCHE, '0xD606199557c8Ab6F4Cc70bD03FaCc96ca576f142', 18, 'GDL', 'Gondola')
}

export const MFI: { [chainId in ChainId]: Token } = {
  [ChainId.FUJI]: new Token(ChainId.FUJI, ZERO_ADDRESS, 18, 'MFI', 'MarginSwap'),
  [ChainId.AVALANCHE]: new Token(ChainId.AVALANCHE, '0x9Fda7cEeC4c18008096C2fE2B85F05dc300F94d0', 18, 'MFI', 'MarginSwap')
}

export const SHIBX: { [chainId in ChainId]: Token } = {
  [ChainId.FUJI]: new Token(ChainId.FUJI, ZERO_ADDRESS, 18, 'SHIBX', 'SHIBAVAX'),
  [ChainId.AVALANCHE]: new Token(ChainId.AVALANCHE, '0x440aBbf18c54b2782A4917b80a1746d3A2c2Cce1', 18, 'SHIBX', 'SHIBAVAX')
}

export const AVE: { [chainId in ChainId]: Token } = {
  [ChainId.FUJI]: new Token(ChainId.FUJI, ZERO_ADDRESS, 18, 'AVE', 'Avaware'),
  [ChainId.AVALANCHE]: new Token(ChainId.AVALANCHE, '0x78ea17559B3D2CF85a7F9C2C704eda119Db5E6dE', 18, 'AVE', 'Avaware')
}

export const ELE: { [chainId in ChainId]: Token } = {
  [ChainId.FUJI]: new Token(ChainId.FUJI, ZERO_ADDRESS, 18, 'ELE', 'Eleven.finance'),
  [ChainId.AVALANCHE]: new Token(ChainId.AVALANCHE, '0xAcD7B3D9c10e97d0efA418903C0c7669E702E4C0', 18, 'ELE', 'Eleven.finance')
}

export const FRAX: { [chainId in ChainId]: Token } = {
  [ChainId.FUJI]: new Token(ChainId.FUJI, ZERO_ADDRESS, 18, 'FRAX', 'Frax'),
  [ChainId.AVALANCHE]: new Token(ChainId.AVALANCHE, '0xDC42728B0eA910349ed3c6e1c9Dc06b5FB591f98', 18, 'FRAX', 'Frax')
}

export const FXS: { [chainId in ChainId]: Token } = {
  [ChainId.FUJI]: new Token(ChainId.FUJI, ZERO_ADDRESS, 18, 'FXS', 'Frax Share'),
  [ChainId.AVALANCHE]: new Token(ChainId.AVALANCHE, '0xD67de0e0a0Fd7b15dC8348Bb9BE742F3c5850454', 18, 'FXS', 'Frax Share')
}

export const START: { [chainId in ChainId]: Token } = {
  [ChainId.FUJI]: new Token(ChainId.FUJI, ZERO_ADDRESS, 18, 'START', 'Starter'),
  [ChainId.AVALANCHE]: new Token(ChainId.AVALANCHE, '0xF44Fb887334Fa17d2c5c0F970B5D320ab53eD557', 18, 'START', 'Starter')
}

export const SWAPe: { [chainId in ChainId]: Token } = {
  [ChainId.FUJI]: new Token(ChainId.FUJI, ZERO_ADDRESS, 18, 'SWAP.e', 'TrustSwap Token'),
  [ChainId.AVALANCHE]: new Token(ChainId.AVALANCHE, '0xc7B5D72C836e718cDA8888eaf03707fAef675079', 18, 'SWAP.e', 'TrustSwap Token')
}

export const YTS: { [chainId in ChainId]: Token } = {
  [ChainId.FUJI]: new Token(ChainId.FUJI, ZERO_ADDRESS, 18, 'YTS', 'YetiSwap'),
  [ChainId.AVALANCHE]: new Token(ChainId.AVALANCHE, '0x488F73cddDA1DE3664775fFd91623637383D6404', 18, 'YTS', 'YetiSwap')
}

export const TUNDRA: { [chainId in ChainId]: Token } = {
  [ChainId.FUJI]: new Token(ChainId.FUJI, ZERO_ADDRESS, 18, 'TUNDRA', 'TUNDRA Token'),
  [ChainId.AVALANCHE]: new Token(ChainId.AVALANCHE, '0x21c5402C3B7d40C89Cc472C9dF5dD7E51BbAb1b1', 18, 'TUNDRA', 'TUNDRA Token')
}

export const XUSD: { [chainId in ChainId]: Token } = {
  [ChainId.FUJI]: new Token(ChainId.FUJI, ZERO_ADDRESS, 18, 'xUSD', 'xDollar Stablecoin'),
  [ChainId.AVALANCHE]: new Token(ChainId.AVALANCHE, '0x3509f19581aFEDEff07c53592bc0Ca84e4855475', 18, 'xUSD', 'xDollar Stablecoin')
}

export const XDO: { [chainId in ChainId]: Token } = {
  [ChainId.FUJI]: new Token(ChainId.FUJI, ZERO_ADDRESS, 18, 'XDO', 'xDollar'),
  [ChainId.AVALANCHE]: new Token(ChainId.AVALANCHE, '0x9eF758aC000a354479e538B8b2f01b917b8e89e7', 18, 'XDO', 'xDollar')
}

export const JOE: { [chainId in ChainId]: Token } = {
  [ChainId.FUJI]: new Token(ChainId.FUJI, ZERO_ADDRESS, 18, 'JOE', 'JOE Token'),
  [ChainId.AVALANCHE]: new Token(ChainId.AVALANCHE, '0x6e84a6216eA6dACC71eE8E6b0a5B7322EEbC0fDd', 18, 'JOE', 'JOE Token')
}

export const ZABU: { [chainId in ChainId]: Token } = {
  [ChainId.FUJI]: new Token(ChainId.FUJI, ZERO_ADDRESS, 18, 'ZABU', 'ZABU Token'),
  [ChainId.AVALANCHE]: new Token(ChainId.AVALANCHE, '0xDd453dBD253fA4E5e745047d93667Ce9DA93bbCF', 18, 'ZABU', 'ZABU Token')
}

export const AIRDROP_ADDRESS: { [chainId in ChainId]?: string } = {
  [ChainId.FUJI]: ZERO_ADDRESS,
  [ChainId.AVALANCHE]: '0x0C58C2041da4CfCcF5818Bbe3b66DBC23B3902d9'
}

const WAVAX_AND_PNG_ONLY: ChainTokenList = {
  [ChainId.FUJI]: [WAVAX[ChainId.FUJI], PNG[ChainId.FUJI]],
  [ChainId.AVALANCHE]: [WAVAX[ChainId.AVALANCHE], PNG[ChainId.AVALANCHE]]
}

// used to construct intermediary pairs for trading
export const BASES_TO_CHECK_TRADES_AGAINST: ChainTokenList = {
  ...WAVAX_AND_PNG_ONLY,
}

/**
 * Some tokens can only be swapped via certain pairs, so we override the list of bases that are considered for these
 * tokens.
 */
export const CUSTOM_BASES: { [chainId in ChainId]?: { [tokenAddress: string]: Token[] } } = {
  [ChainId.AVALANCHE]: {

  }
}

// used for display in the default list when adding liquidity
export const SUGGESTED_BASES: ChainTokenList = {
  ...WAVAX_AND_PNG_ONLY,
}

// used to construct the list of all pairs we consider by default in the frontend
export const BASES_TO_TRACK_LIQUIDITY_FOR: ChainTokenList = {
  ...WAVAX_AND_PNG_ONLY,
}

export const PINNED_PAIRS: { readonly [chainId in ChainId]?: [Token, Token][] } = {
  [ChainId.AVALANCHE]: [
  ]
}

export interface WalletInfo {
  connector?: AbstractConnector
  name: string
  iconName: string
  description: string
  href: string | null
  color: string
  primary?: true
  mobile?: true
  mobileOnly?: true
}

export const SUPPORTED_WALLETS: { [key: string]: WalletInfo } = {
  INJECTED: {
    connector: injected,
    name: 'Injected',
    iconName: 'arrow-right.svg',
    description: 'Injected web3 provider.',
    href: null,
    color: '#010101',
    primary: true
  },
  METAMASK: {
    connector: injected,
    name: 'MetaMask',
    iconName: 'metamask.png',
    description: 'Easy-to-use browser extension.',
    href: null,
    color: '#E8831D'
  },
  WALLET_LINK: {
    connector: walletlink,
    name: 'Coinbase Wallet',
    iconName: 'coinbaseWalletIcon.svg',
    description: 'Use Coinbase Wallet app on mobile device',
    href: null,
    color: '#315CF5',
  },
}

export const NetworkContextName = 'NETWORK'

export const AVALANCHE_CHAIN_PARAMS = {
  chainId: '0xa86a', // A 0x-prefixed hexadecimal chainId
  chainName: 'Avalanche Mainnet C-Chain',
  nativeCurrency: {
    name: 'Avalanche',
    symbol: 'AVAX',
    decimals: 18
  },
  rpcUrls: ['https://api.avax.network/ext/bc/C/rpc'],
  blockExplorerUrls: ['https://cchain.explorer.avax.network/']
}

// default allowed slippage, in bips
export const INITIAL_ALLOWED_SLIPPAGE = 50
// 60 minutes, denominated in seconds
export const DEFAULT_DEADLINE_FROM_NOW = 60 * 60

export const BIG_INT_ZERO = JSBI.BigInt(0)

// one basis point
export const ONE_BIPS = new Percent(JSBI.BigInt(1), JSBI.BigInt(10000))
export const BIPS_BASE = JSBI.BigInt(10000)
// used for warning states
export const ALLOWED_PRICE_IMPACT_LOW: Percent = new Percent(JSBI.BigInt(100), BIPS_BASE) // 1%
export const ALLOWED_PRICE_IMPACT_MEDIUM: Percent = new Percent(JSBI.BigInt(300), BIPS_BASE) // 3%
export const ALLOWED_PRICE_IMPACT_HIGH: Percent = new Percent(JSBI.BigInt(500), BIPS_BASE) // 5%
// if the price slippage exceeds this number, force the user to type 'confirm' to execute
export const PRICE_IMPACT_WITHOUT_FEE_CONFIRM_MIN: Percent = new Percent(JSBI.BigInt(1000), BIPS_BASE) // 10%
// for non expert mode disable swaps above this
export const BLOCKED_PRICE_IMPACT_NON_EXPERT: Percent = new Percent(JSBI.BigInt(1500), BIPS_BASE) // 15%

// used to ensure the user doesn't send so much ETH so they end up with <.01
export const MIN_ETH: JSBI = JSBI.exponentiate(JSBI.BigInt(10), JSBI.BigInt(16)) // .01 ETH
export const BETTER_TRADE_LINK_THRESHOLD = new Percent(JSBI.BigInt(75), JSBI.BigInt(10000))

export const WYRE_API_KEY = process.env.REACT_APP_WYRE_API_KEY ? process.env.REACT_APP_WYRE_API_KEY : ''
export const WYRE_SECRET_KEY = process.env.REACT_APP_WYRE_SECRET_KEY ? process.env.REACT_APP_WYRE_SECRET_KEY : ''
export const WYRE_ID = process.env.REACT_APP_WYRE_ID ? process.env.REACT_APP_WYRE_ID : ''
export const WYRE_API_URL = 'https://api.sendwyre.com'
export const WYRE_QUOTE_API_ENDPOINT = '/v3/orders/quote/partner'
export const WYRE_RESERVE_API_ENDPOINT = '/v3/orders/reserve'
export const WYRE_CALLBACK_URL = 'https://app.pangolin.exchange/'
