/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  IWorldData,
  IWorldDataInterface,
} from "../../IWorldKernel.sol/IWorldData";

const _abi = [
  {
    inputs: [
      {
        internalType: "bytes16",
        name: "namespace",
        type: "bytes16",
      },
      {
        internalType: "bytes16",
        name: "name",
        type: "bytes16",
      },
      {
        internalType: "bytes32[]",
        name: "key",
        type: "bytes32[]",
      },
    ],
    name: "deleteRecord",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes16",
        name: "namespace",
        type: "bytes16",
      },
      {
        internalType: "bytes16",
        name: "name",
        type: "bytes16",
      },
      {
        internalType: "bytes32[]",
        name: "key",
        type: "bytes32[]",
      },
      {
        internalType: "uint8",
        name: "schemaIndex",
        type: "uint8",
      },
      {
        internalType: "uint256",
        name: "byteLengthToPop",
        type: "uint256",
      },
    ],
    name: "popFromField",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes16",
        name: "namespace",
        type: "bytes16",
      },
      {
        internalType: "bytes16",
        name: "name",
        type: "bytes16",
      },
      {
        internalType: "bytes32[]",
        name: "key",
        type: "bytes32[]",
      },
      {
        internalType: "uint8",
        name: "schemaIndex",
        type: "uint8",
      },
      {
        internalType: "bytes",
        name: "dataToPush",
        type: "bytes",
      },
    ],
    name: "pushToField",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes16",
        name: "namespace",
        type: "bytes16",
      },
      {
        internalType: "bytes16",
        name: "name",
        type: "bytes16",
      },
      {
        internalType: "bytes32[]",
        name: "key",
        type: "bytes32[]",
      },
      {
        internalType: "uint8",
        name: "schemaIndex",
        type: "uint8",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "setField",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes16",
        name: "namespace",
        type: "bytes16",
      },
      {
        internalType: "bytes16",
        name: "name",
        type: "bytes16",
      },
      {
        internalType: "bytes32[]",
        name: "key",
        type: "bytes32[]",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "setRecord",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes16",
        name: "namespace",
        type: "bytes16",
      },
      {
        internalType: "bytes16",
        name: "name",
        type: "bytes16",
      },
      {
        internalType: "bytes32[]",
        name: "key",
        type: "bytes32[]",
      },
      {
        internalType: "uint8",
        name: "schemaIndex",
        type: "uint8",
      },
      {
        internalType: "uint256",
        name: "startByteIndex",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "dataToSet",
        type: "bytes",
      },
    ],
    name: "updateInField",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

export class IWorldData__factory {
  static readonly abi = _abi;
  static createInterface(): IWorldDataInterface {
    return new utils.Interface(_abi) as IWorldDataInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IWorldData {
    return new Contract(address, _abi, signerOrProvider) as IWorldData;
  }
}
