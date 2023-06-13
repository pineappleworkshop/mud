/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../../common";

export interface IStoreWriteInterface extends utils.Interface {
  functions: {
    "deleteRecord(bytes32,bytes32[])": FunctionFragment;
    "popFromField(bytes32,bytes32[],uint8,uint256)": FunctionFragment;
    "pushToField(bytes32,bytes32[],uint8,bytes)": FunctionFragment;
    "setField(bytes32,bytes32[],uint8,bytes)": FunctionFragment;
    "setRecord(bytes32,bytes32[],bytes)": FunctionFragment;
    "updateInField(bytes32,bytes32[],uint8,uint256,bytes)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "deleteRecord"
      | "popFromField"
      | "pushToField"
      | "setField"
      | "setRecord"
      | "updateInField"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "deleteRecord",
    values: [PromiseOrValue<BytesLike>, PromiseOrValue<BytesLike>[]]
  ): string;
  encodeFunctionData(
    functionFragment: "popFromField",
    values: [
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BytesLike>[],
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "pushToField",
    values: [
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BytesLike>[],
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BytesLike>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "setField",
    values: [
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BytesLike>[],
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BytesLike>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "setRecord",
    values: [
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BytesLike>[],
      PromiseOrValue<BytesLike>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "updateInField",
    values: [
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BytesLike>[],
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BytesLike>
    ]
  ): string;

  decodeFunctionResult(
    functionFragment: "deleteRecord",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "popFromField",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "pushToField",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setField", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "setRecord", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "updateInField",
    data: BytesLike
  ): Result;

  events: {
    "StoreDeleteRecord(bytes32,bytes32[])": EventFragment;
    "StoreSetField(bytes32,bytes32[],uint8,bytes)": EventFragment;
    "StoreSetRecord(bytes32,bytes32[],bytes)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "StoreDeleteRecord"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "StoreSetField"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "StoreSetRecord"): EventFragment;
}

export interface StoreDeleteRecordEventObject {
  table: string;
  key: string[];
}
export type StoreDeleteRecordEvent = TypedEvent<
  [string, string[]],
  StoreDeleteRecordEventObject
>;

export type StoreDeleteRecordEventFilter =
  TypedEventFilter<StoreDeleteRecordEvent>;

export interface StoreSetFieldEventObject {
  table: string;
  key: string[];
  schemaIndex: number;
  data: string;
}
export type StoreSetFieldEvent = TypedEvent<
  [string, string[], number, string],
  StoreSetFieldEventObject
>;

export type StoreSetFieldEventFilter = TypedEventFilter<StoreSetFieldEvent>;

export interface StoreSetRecordEventObject {
  table: string;
  key: string[];
  data: string;
}
export type StoreSetRecordEvent = TypedEvent<
  [string, string[], string],
  StoreSetRecordEventObject
>;

export type StoreSetRecordEventFilter = TypedEventFilter<StoreSetRecordEvent>;

export interface IStoreWrite extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IStoreWriteInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    deleteRecord(
      table: PromiseOrValue<BytesLike>,
      key: PromiseOrValue<BytesLike>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    popFromField(
      table: PromiseOrValue<BytesLike>,
      key: PromiseOrValue<BytesLike>[],
      schemaIndex: PromiseOrValue<BigNumberish>,
      byteLengthToPop: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    pushToField(
      table: PromiseOrValue<BytesLike>,
      key: PromiseOrValue<BytesLike>[],
      schemaIndex: PromiseOrValue<BigNumberish>,
      dataToPush: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setField(
      table: PromiseOrValue<BytesLike>,
      key: PromiseOrValue<BytesLike>[],
      schemaIndex: PromiseOrValue<BigNumberish>,
      data: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setRecord(
      table: PromiseOrValue<BytesLike>,
      key: PromiseOrValue<BytesLike>[],
      data: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    updateInField(
      table: PromiseOrValue<BytesLike>,
      key: PromiseOrValue<BytesLike>[],
      schemaIndex: PromiseOrValue<BigNumberish>,
      startByteIndex: PromiseOrValue<BigNumberish>,
      dataToSet: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  deleteRecord(
    table: PromiseOrValue<BytesLike>,
    key: PromiseOrValue<BytesLike>[],
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  popFromField(
    table: PromiseOrValue<BytesLike>,
    key: PromiseOrValue<BytesLike>[],
    schemaIndex: PromiseOrValue<BigNumberish>,
    byteLengthToPop: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  pushToField(
    table: PromiseOrValue<BytesLike>,
    key: PromiseOrValue<BytesLike>[],
    schemaIndex: PromiseOrValue<BigNumberish>,
    dataToPush: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setField(
    table: PromiseOrValue<BytesLike>,
    key: PromiseOrValue<BytesLike>[],
    schemaIndex: PromiseOrValue<BigNumberish>,
    data: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setRecord(
    table: PromiseOrValue<BytesLike>,
    key: PromiseOrValue<BytesLike>[],
    data: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  updateInField(
    table: PromiseOrValue<BytesLike>,
    key: PromiseOrValue<BytesLike>[],
    schemaIndex: PromiseOrValue<BigNumberish>,
    startByteIndex: PromiseOrValue<BigNumberish>,
    dataToSet: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    deleteRecord(
      table: PromiseOrValue<BytesLike>,
      key: PromiseOrValue<BytesLike>[],
      overrides?: CallOverrides
    ): Promise<void>;

    popFromField(
      table: PromiseOrValue<BytesLike>,
      key: PromiseOrValue<BytesLike>[],
      schemaIndex: PromiseOrValue<BigNumberish>,
      byteLengthToPop: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    pushToField(
      table: PromiseOrValue<BytesLike>,
      key: PromiseOrValue<BytesLike>[],
      schemaIndex: PromiseOrValue<BigNumberish>,
      dataToPush: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;

    setField(
      table: PromiseOrValue<BytesLike>,
      key: PromiseOrValue<BytesLike>[],
      schemaIndex: PromiseOrValue<BigNumberish>,
      data: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;

    setRecord(
      table: PromiseOrValue<BytesLike>,
      key: PromiseOrValue<BytesLike>[],
      data: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;

    updateInField(
      table: PromiseOrValue<BytesLike>,
      key: PromiseOrValue<BytesLike>[],
      schemaIndex: PromiseOrValue<BigNumberish>,
      startByteIndex: PromiseOrValue<BigNumberish>,
      dataToSet: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "StoreDeleteRecord(bytes32,bytes32[])"(
      table?: null,
      key?: null
    ): StoreDeleteRecordEventFilter;
    StoreDeleteRecord(table?: null, key?: null): StoreDeleteRecordEventFilter;

    "StoreSetField(bytes32,bytes32[],uint8,bytes)"(
      table?: null,
      key?: null,
      schemaIndex?: null,
      data?: null
    ): StoreSetFieldEventFilter;
    StoreSetField(
      table?: null,
      key?: null,
      schemaIndex?: null,
      data?: null
    ): StoreSetFieldEventFilter;

    "StoreSetRecord(bytes32,bytes32[],bytes)"(
      table?: null,
      key?: null,
      data?: null
    ): StoreSetRecordEventFilter;
    StoreSetRecord(
      table?: null,
      key?: null,
      data?: null
    ): StoreSetRecordEventFilter;
  };

  estimateGas: {
    deleteRecord(
      table: PromiseOrValue<BytesLike>,
      key: PromiseOrValue<BytesLike>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    popFromField(
      table: PromiseOrValue<BytesLike>,
      key: PromiseOrValue<BytesLike>[],
      schemaIndex: PromiseOrValue<BigNumberish>,
      byteLengthToPop: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    pushToField(
      table: PromiseOrValue<BytesLike>,
      key: PromiseOrValue<BytesLike>[],
      schemaIndex: PromiseOrValue<BigNumberish>,
      dataToPush: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setField(
      table: PromiseOrValue<BytesLike>,
      key: PromiseOrValue<BytesLike>[],
      schemaIndex: PromiseOrValue<BigNumberish>,
      data: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setRecord(
      table: PromiseOrValue<BytesLike>,
      key: PromiseOrValue<BytesLike>[],
      data: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    updateInField(
      table: PromiseOrValue<BytesLike>,
      key: PromiseOrValue<BytesLike>[],
      schemaIndex: PromiseOrValue<BigNumberish>,
      startByteIndex: PromiseOrValue<BigNumberish>,
      dataToSet: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    deleteRecord(
      table: PromiseOrValue<BytesLike>,
      key: PromiseOrValue<BytesLike>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    popFromField(
      table: PromiseOrValue<BytesLike>,
      key: PromiseOrValue<BytesLike>[],
      schemaIndex: PromiseOrValue<BigNumberish>,
      byteLengthToPop: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    pushToField(
      table: PromiseOrValue<BytesLike>,
      key: PromiseOrValue<BytesLike>[],
      schemaIndex: PromiseOrValue<BigNumberish>,
      dataToPush: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setField(
      table: PromiseOrValue<BytesLike>,
      key: PromiseOrValue<BytesLike>[],
      schemaIndex: PromiseOrValue<BigNumberish>,
      data: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setRecord(
      table: PromiseOrValue<BytesLike>,
      key: PromiseOrValue<BytesLike>[],
      data: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    updateInField(
      table: PromiseOrValue<BytesLike>,
      key: PromiseOrValue<BytesLike>[],
      schemaIndex: PromiseOrValue<BigNumberish>,
      startByteIndex: PromiseOrValue<BigNumberish>,
      dataToSet: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
