"use strict";
exports.__esModule = true;
var fs_1 = require("fs");
var replaceInFile = function (file, src, dest) {
    var content = fs_1.readFileSync(file, 'utf-8');
    var newContent = content.split(src).join(dest);
    fs_1.writeFileSync(file, newContent);
};
replaceInFile('./dist/protocols/ethereum/BaseEthereumProtocol.d.ts', 'get subProtocols(): any[];', 'readonly subProtocols: any[];');
replaceInFile('./dist/protocols/tezos/TezosProtocol.d.ts', 'get subProtocols(): any[];', 'readonly subProtocols: any[];');
replaceInFile('./dist/wallet/AirGapWallet.d.ts', 'get receivingPublicAddress(): string;', 'readonly receivingPublicAddress: string;');
replaceInFile('./dist/serializer/utils/toBuffer.d.ts', 'export declare type RLPData = number | string | boolean | BigNumber | Buffer | RLPData[]', 'export declare type RLPData = number | string | boolean | BigNumber | Buffer');
replaceInFile('./dist/protocols/polkadot/codec/type/SCALEEra.d.ts', 'get isMortal(): boolean;', 'readonly isMortal: boolean;');
replaceInFile('./dist/protocols/polkadot/codec/type/SCALEHash.d.ts', 'get isEmpty(): boolean;', 'readonly isEmpty: boolean;');
replaceInFile('./dist/protocols/polkadot/codec/type/SCALEOptional.d.ts', 'get value(): T;', 'readonly value: T;');
replaceInFile('./dist/protocols/polkadot/codec/type/SCALEOptional.d.ts', 'get hasValue(): boolean;', 'readonly hasValue: boolean;');
replaceInFile('./dist/protocols/polkadot/metadata/module/MetadataModule.d.ts', 'get hasStorage(): boolean;', 'readonly hasStorage: boolean;');
replaceInFile('./dist/protocols/polkadot/metadata/module/MetadataModule.d.ts', 'get hasCalls(): boolean;', 'readonly hasCalls: boolean;');
replaceInFile('./dist/protocols/polkadot/metadata/module/MetadataModule.d.ts', 'get hasEvents(): boolean;', 'readonly hasEvents: boolean;');
replaceInFile('./dist/protocols/polkadot/metadata/module/storage/MetadataStorageEntryType.d.ts', 'protected get scaleFields(): SCALEType[];', 'protected readonly scaleFields: SCALEType[];');
replaceInFile('./dist/protocols/polkadot/transaction/PolkadotSignature.d.ts', 'get isSigned(): boolean;', 'readonly isSigned: boolean;');
