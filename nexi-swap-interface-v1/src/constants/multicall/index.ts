import { ChainId } from '@nexiswap/sdk'
import MULTICALL_ABI from './abi.json'

const MULTICALL_NETWORKS: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: '0x882146A1AB632f34154e7BC85fbb994ED621Bce2', // TODO
  [ChainId.TESTNET]: '0x882146A1AB632f34154e7BC85fbb994ED621Bce2'
}

export { MULTICALL_ABI, MULTICALL_NETWORKS }
