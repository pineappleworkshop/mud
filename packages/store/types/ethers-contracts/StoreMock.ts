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
} from "./common";

export interface StoreMockInterface extends utils.Interface {
  functions: {
    "deleteRecord(bytes32,bytes32[])": FunctionFragment;
    "emitEphemeralRecord(bytes32,bytes32[],bytes)": FunctionFragment;
    "getField(bytes32,bytes32[],uint8)": FunctionFragment;
    "getFieldLength(bytes32,bytes32[],uint8,bytes32)": FunctionFragment;
    "getFieldSlice(bytes32,bytes32[],uint8,bytes32,uint256,uint256)": FunctionFragment;
    "getKeySchema(bytes32)": FunctionFragment;
    "getRecord(bytes32,bytes32[],bytes32)": FunctionFragment;
    "getRecord(bytes32,bytes32[])": FunctionFragment;
    "getSchema(bytes32)": FunctionFragment;
    "isStore()": FunctionFragment;
    "popFromField(bytes32,bytes32[],uint8,uint256)": FunctionFragment;
    "pushToField(bytes32,bytes32[],uint8,bytes)": FunctionFragment;
    "registerSchema(bytes32,bytes32,bytes32)": FunctionFragment;
    "registerStoreHook(bytes32,address)": FunctionFragment;
    "setField(bytes32,bytes32[],uint8,bytes)": FunctionFragment;
    "setMetadata(bytes32,string,string[])": FunctionFragment;
    "setRecord(bytes32,bytes32[],bytes)": FunctionFragment;
    "updateInField(bytes32,bytes32[],uint8,uint256,bytes)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "deleteRecord"
      | "emitEphemeralRecord"
      | "getField"
      | "getFieldLength"
      | "getFieldSlice"
      | "getKeySchema"
      | "getRecord(bytes32,bytes32[],bytes32)"
      | "getRecord(bytes32,bytes32[])"
      | "getSchema"
      | "isStore"
      | "popFromField"
      | "pushToField"
      | "registerSchema"
      | "registerStoreHook"
      | "setField"
      | "setMetadata"
      | "setRecord"
      | "updateInField"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "deleteRecord",
    values: [PromiseOrValue<BytesLike>, PromiseOrValue<BytesLike>[]]
  ): string;
  encodeFunctionData(
    functionFragment: "emitEphemeralRecord",
    values: [
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BytesLike>[],
      PromiseOrValue<BytesLike>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "getField",
    values: [
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BytesLike>[],
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "getFieldLength",
    values: [
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BytesLike>[],
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BytesLike>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "getFieldSlice",
    values: [
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BytesLike>[],
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "getKeySchema",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "getRecord(bytes32,bytes32[],bytes32)",
    values: [
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BytesLike>[],
      PromiseOrValue<BytesLike>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "getRecord(bytes32,bytes32[])",
    values: [PromiseOrValue<BytesLike>, PromiseOrValue<BytesLike>[]]
  ): string;
  encodeFunctionData(
    functionFragment: "getSchema",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(functionFragment: "isStore", values?: undefined): string;
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
    functionFragment: "registerSchema",
    values: [
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BytesLike>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "registerStoreHook",
    values: [PromiseOrValue<BytesLike>, PromiseOrValue<string>]
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
    functionFragment: "setMetadata",
    values: [
      PromiseOrValue<BytesLike>,
      PromiseOrValue<string>,
      PromiseOrValue<string>[]
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
    functionFragment: "emitEphemeralRecord",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getField", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getFieldLength",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getFieldSlice",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getKeySchema",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getRecord(bytes32,bytes32[],bytes32)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getRecord(bytes32,bytes32[])",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getSchema", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "isStore", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "popFromField",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "pushToField",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "registerSchema",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "registerStoreHook",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setField", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setMetadata",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setRecord", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "updateInField",
    data: BytesLike
  ): Result;

  events: {
    "StoreDeleteRecord(bytes32,bytes32[])": EventFragment;
    "StoreEphemeralRecord(bytes32,bytes32[],bytes)": EventFragment;
    "StoreSetField(bytes32,bytes32[],uint8,bytes)": EventFragment;
    "StoreSetRecord(bytes32,bytes32[],bytes)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "StoreDeleteRecord"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "StoreEphemeralRecord"): EventFragment;
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

export interface StoreEphemeralRecordEventObject {
  table: string;
  key: string[];
  data: string;
}
export type StoreEphemeralRecordEvent = TypedEvent<
  [string, string[], string],
  StoreEphemeralRecordEventObject
>;

export type StoreEphemeralRecordEventFilter =
  TypedEventFilter<StoreEphemeralRecordEvent>;

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

export interface StoreMock extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: StoreMockInterface;

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

    emitEphemeralRecord(
      table: PromiseOrValue<BytesLike>,
      key: PromiseOrValue<BytesLike>[],
      data: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    getField(
      table: PromiseOrValue<BytesLike>,
      key: PromiseOrValue<BytesLike>[],
      schemaIndex: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string] & { data: string }>;

    getFieldLength(
      tableId: PromiseOrValue<BytesLike>,
      key: PromiseOrValue<BytesLike>[],
      schemaIndex: PromiseOrValue<BigNumberish>,
      schema: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getFieldSlice(
      tableId: PromiseOrValue<BytesLike>,
      key: PromiseOrValue<BytesLike>[],
      schemaIndex: PromiseOrValue<BigNumberish>,
      schema: PromiseOrValue<BytesLike>,
      start: PromiseOrValue<BigNumberish>,
      end: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    getKeySchema(
      table: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[string] & { schema: string }>;

    "getRecord(bytes32,bytes32[],bytes32)"(
      table: PromiseOrValue<BytesLike>,
      key: PromiseOrValue<BytesLike>[],
      schema: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[string] & { data: string }>;

    "getRecord(bytes32,bytes32[])"(
      table: PromiseOrValue<BytesLike>,
      key: PromiseOrValue<BytesLike>[],
      overrides?: CallOverrides
    ): Promise<[string] & { data: string }>;

    getSchema(
      table: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[string] & { schema: string }>;

    isStore(overrides?: CallOverrides): Promise<[void]>;

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

    registerSchema(
      table: PromiseOrValue<BytesLike>,
      schema: PromiseOrValue<BytesLike>,
      keySchema: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    registerStoreHook(
      table: PromiseOrValue<BytesLike>,
      hook: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setField(
      table: PromiseOrValue<BytesLike>,
      key: PromiseOrValue<BytesLike>[],
      schemaIndex: PromiseOrValue<BigNumberish>,
      data: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setMetadata(
      table: PromiseOrValue<BytesLike>,
      tableName: PromiseOrValue<string>,
      fieldNames: PromiseOrValue<string>[],
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

  emitEphemeralRecord(
    table: PromiseOrValue<BytesLike>,
    key: PromiseOrValue<BytesLike>[],
    data: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  getField(
    table: PromiseOrValue<BytesLike>,
    key: PromiseOrValue<BytesLike>[],
    schemaIndex: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<string>;

  getFieldLength(
    tableId: PromiseOrValue<BytesLike>,
    key: PromiseOrValue<BytesLike>[],
    schemaIndex: PromiseOrValue<BigNumberish>,
    schema: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getFieldSlice(
    tableId: PromiseOrValue<BytesLike>,
    key: PromiseOrValue<BytesLike>[],
    schemaIndex: PromiseOrValue<BigNumberish>,
    schema: PromiseOrValue<BytesLike>,
    start: PromiseOrValue<BigNumberish>,
    end: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<string>;

  getKeySchema(
    table: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<string>;

  "getRecord(bytes32,bytes32[],bytes32)"(
    table: PromiseOrValue<BytesLike>,
    key: PromiseOrValue<BytesLike>[],
    schema: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<string>;

  "getRecord(bytes32,bytes32[])"(
    table: PromiseOrValue<BytesLike>,
    key: PromiseOrValue<BytesLike>[],
    overrides?: CallOverrides
  ): Promise<string>;

  getSchema(
    table: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<string>;

  isStore(overrides?: CallOverrides): Promise<void>;

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

  registerSchema(
    table: PromiseOrValue<BytesLike>,
    schema: PromiseOrValue<BytesLike>,
    keySchema: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  registerStoreHook(
    table: PromiseOrValue<BytesLike>,
    hook: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setField(
    table: PromiseOrValue<BytesLike>,
    key: PromiseOrValue<BytesLike>[],
    schemaIndex: PromiseOrValue<BigNumberish>,
    data: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setMetadata(
    table: PromiseOrValue<BytesLike>,
    tableName: PromiseOrValue<string>,
    fieldNames: PromiseOrValue<string>[],
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

    emitEphemeralRecord(
      table: PromiseOrValue<BytesLike>,
      key: PromiseOrValue<BytesLike>[],
      data: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;

    getField(
      table: PromiseOrValue<BytesLike>,
      key: PromiseOrValue<BytesLike>[],
      schemaIndex: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<string>;

    getFieldLength(
      tableId: PromiseOrValue<BytesLike>,
      key: PromiseOrValue<BytesLike>[],
      schemaIndex: PromiseOrValue<BigNumberish>,
      schema: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getFieldSlice(
      tableId: PromiseOrValue<BytesLike>,
      key: PromiseOrValue<BytesLike>[],
      schemaIndex: PromiseOrValue<BigNumberish>,
      schema: PromiseOrValue<BytesLike>,
      start: PromiseOrValue<BigNumberish>,
      end: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<string>;

    getKeySchema(
      table: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<string>;

    "getRecord(bytes32,bytes32[],bytes32)"(
      table: PromiseOrValue<BytesLike>,
      key: PromiseOrValue<BytesLike>[],
      schema: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<string>;

    "getRecord(bytes32,bytes32[])"(
      table: PromiseOrValue<BytesLike>,
      key: PromiseOrValue<BytesLike>[],
      overrides?: CallOverrides
    ): Promise<string>;

    getSchema(
      table: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<string>;

    isStore(overrides?: CallOverrides): Promise<void>;

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

    registerSchema(
      table: PromiseOrValue<BytesLike>,
      schema: PromiseOrValue<BytesLike>,
      keySchema: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;

    registerStoreHook(
      table: PromiseOrValue<BytesLike>,
      hook: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    setField(
      table: PromiseOrValue<BytesLike>,
      key: PromiseOrValue<BytesLike>[],
      schemaIndex: PromiseOrValue<BigNumberish>,
      data: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;

    setMetadata(
      table: PromiseOrValue<BytesLike>,
      tableName: PromiseOrValue<string>,
      fieldNames: PromiseOrValue<string>[],
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

    "StoreEphemeralRecord(bytes32,bytes32[],bytes)"(
      table?: null,
      key?: null,
      data?: null
    ): StoreEphemeralRecordEventFilter;
    StoreEphemeralRecord(
      table?: null,
      key?: null,
      data?: null
    ): StoreEphemeralRecordEventFilter;

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

    emitEphemeralRecord(
      table: PromiseOrValue<BytesLike>,
      key: PromiseOrValue<BytesLike>[],
      data: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    getField(
      table: PromiseOrValue<BytesLike>,
      key: PromiseOrValue<BytesLike>[],
      schemaIndex: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getFieldLength(
      tableId: PromiseOrValue<BytesLike>,
      key: PromiseOrValue<BytesLike>[],
      schemaIndex: PromiseOrValue<BigNumberish>,
      schema: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getFieldSlice(
      tableId: PromiseOrValue<BytesLike>,
      key: PromiseOrValue<BytesLike>[],
      schemaIndex: PromiseOrValue<BigNumberish>,
      schema: PromiseOrValue<BytesLike>,
      start: PromiseOrValue<BigNumberish>,
      end: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getKeySchema(
      table: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getRecord(bytes32,bytes32[],bytes32)"(
      table: PromiseOrValue<BytesLike>,
      key: PromiseOrValue<BytesLike>[],
      schema: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getRecord(bytes32,bytes32[])"(
      table: PromiseOrValue<BytesLike>,
      key: PromiseOrValue<BytesLike>[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getSchema(
      table: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isStore(overrides?: CallOverrides): Promise<BigNumber>;

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

    registerSchema(
      table: PromiseOrValue<BytesLike>,
      schema: PromiseOrValue<BytesLike>,
      keySchema: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    registerStoreHook(
      table: PromiseOrValue<BytesLike>,
      hook: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setField(
      table: PromiseOrValue<BytesLike>,
      key: PromiseOrValue<BytesLike>[],
      schemaIndex: PromiseOrValue<BigNumberish>,
      data: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setMetadata(
      table: PromiseOrValue<BytesLike>,
      tableName: PromiseOrValue<string>,
      fieldNames: PromiseOrValue<string>[],
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

    emitEphemeralRecord(
      table: PromiseOrValue<BytesLike>,
      key: PromiseOrValue<BytesLike>[],
      data: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    getField(
      table: PromiseOrValue<BytesLike>,
      key: PromiseOrValue<BytesLike>[],
      schemaIndex: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getFieldLength(
      tableId: PromiseOrValue<BytesLike>,
      key: PromiseOrValue<BytesLike>[],
      schemaIndex: PromiseOrValue<BigNumberish>,
      schema: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getFieldSlice(
      tableId: PromiseOrValue<BytesLike>,
      key: PromiseOrValue<BytesLike>[],
      schemaIndex: PromiseOrValue<BigNumberish>,
      schema: PromiseOrValue<BytesLike>,
      start: PromiseOrValue<BigNumberish>,
      end: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getKeySchema(
      table: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getRecord(bytes32,bytes32[],bytes32)"(
      table: PromiseOrValue<BytesLike>,
      key: PromiseOrValue<BytesLike>[],
      schema: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getRecord(bytes32,bytes32[])"(
      table: PromiseOrValue<BytesLike>,
      key: PromiseOrValue<BytesLike>[],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getSchema(
      table: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isStore(overrides?: CallOverrides): Promise<PopulatedTransaction>;

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

    registerSchema(
      table: PromiseOrValue<BytesLike>,
      schema: PromiseOrValue<BytesLike>,
      keySchema: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    registerStoreHook(
      table: PromiseOrValue<BytesLike>,
      hook: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setField(
      table: PromiseOrValue<BytesLike>,
      key: PromiseOrValue<BytesLike>[],
      schemaIndex: PromiseOrValue<BigNumberish>,
      data: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setMetadata(
      table: PromiseOrValue<BytesLike>,
      tableName: PromiseOrValue<string>,
      fieldNames: PromiseOrValue<string>[],
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
