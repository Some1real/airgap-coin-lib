import { ProtocolBlockExplorer } from '../../utils/ProtocolBlockExplorer'
import { NetworkType, ProtocolNetwork } from '../../utils/ProtocolNetwork'
import { ProtocolOptions } from '../../utils/ProtocolOptions'

import { TezosDomains } from './domains/TezosDomains'
import { TezosNetwork } from './TezosProtocol'

// tslint:disable:max-classes-per-file

const MAINNET_NAME: string = 'Mainnet'

const NODE_URL: string = 'https://tezos-node.prod.gke.papers.tech'

const BLOCK_EXPLORER_URL: string = 'https://tezblock.io'
const INDEXER_API: string = 'https://tezos-mainnet-conseil.prod.gke.papers.tech'
const INDEXER_APIKEY: string = 'airgap00391'

export type TezosProtocolNetworkResolver = (network: string) => TezosProtocolNetwork

export class TezosProtocolNetworkExtras {
  constructor(
    public readonly network: TezosNetwork = TezosNetwork.MAINNET,
    public readonly conseilUrl: string = INDEXER_API,
    public readonly conseilNetwork: TezosNetwork = TezosNetwork.MAINNET,
    public readonly conseilApiKey: string = INDEXER_APIKEY
  ) {}
}

export class TezblockBlockExplorer implements ProtocolBlockExplorer {
  constructor(public readonly blockExplorer: string = BLOCK_EXPLORER_URL) {}

  public async getAddressLink(address: string): Promise<string> {
    return `${this.blockExplorer}/account/${address}`
  }
  public async getTransactionLink(transactionId: string): Promise<string> {
    return `${this.blockExplorer}/transaction/${transactionId}`
  }
}

export class TezosProtocolNetwork extends ProtocolNetwork<TezosProtocolNetworkExtras> {
  constructor(
    name: string = MAINNET_NAME,
    type: NetworkType = NetworkType.MAINNET,
    rpcUrl: string = NODE_URL,
    blockExplorer: ProtocolBlockExplorer = new TezblockBlockExplorer(),
    extras: TezosProtocolNetworkExtras = new TezosProtocolNetworkExtras()
  ) {
    super(name, type, rpcUrl, blockExplorer, extras)
  }
}

export class TezosProtocolConfig {
  constructor(public readonly domains?: TezosDomains) {}
}

export class TezosProtocolOptions implements ProtocolOptions<TezosProtocolConfig> {
  // tslint:disable-next-line:no-unnecessary-initializer
  constructor(
    public readonly network: TezosProtocolNetwork = new TezosProtocolNetwork(),
    public readonly config: TezosProtocolConfig = new TezosProtocolConfig()
  ) {}
}
