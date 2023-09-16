// SPDX-License-Identifier: MIT
pragma solidity >=0.8.0;

/* Autogenerated file. Do not edit manually. */

// Import schema type
import { SchemaType } from "@latticexyz/schema-type/src/solidity/SchemaType.sol";

// Import store internals
import { IStore } from "@latticexyz/store/src/IStore.sol";
import { StoreSwitch } from "@latticexyz/store/src/StoreSwitch.sol";
import { StoreCore } from "@latticexyz/store/src/StoreCore.sol";
import { Bytes } from "@latticexyz/store/src/Bytes.sol";
import { Memory } from "@latticexyz/store/src/Memory.sol";
import { SliceLib } from "@latticexyz/store/src/Slice.sol";
import { EncodeArray } from "@latticexyz/store/src/tightcoder/EncodeArray.sol";
import { FieldLayout, FieldLayoutLib } from "@latticexyz/store/src/FieldLayout.sol";
import { Schema, SchemaLib } from "@latticexyz/store/src/Schema.sol";
import { PackedCounter, PackedCounterLib } from "@latticexyz/store/src/PackedCounter.sol";

bytes32 constant _tableId = bytes32(abi.encodePacked(bytes16(""), bytes16("Inventory")));
bytes32 constant InventoryTableId = _tableId;

library Inventory {
  /** Get the table values' field layout */
  function getFieldLayout() internal pure returns (FieldLayout) {
    uint256[] memory _fieldLayout = new uint256[](1);
    _fieldLayout[0] = 4;

    return FieldLayoutLib.encode(_fieldLayout, 0);
  }

  /** Get the table's key schema */
  function getKeySchema() internal pure returns (Schema) {
    SchemaType[] memory _keySchema = new SchemaType[](3);
    _keySchema[0] = SchemaType.ADDRESS;
    _keySchema[1] = SchemaType.UINT32;
    _keySchema[2] = SchemaType.UINT32;

    return SchemaLib.encode(_keySchema);
  }

  /** Get the table's value schema */
  function getValueSchema() internal pure returns (Schema) {
    SchemaType[] memory _valueSchema = new SchemaType[](1);
    _valueSchema[0] = SchemaType.UINT32;

    return SchemaLib.encode(_valueSchema);
  }

  /** Get the table's key names */
  function getKeyNames() internal pure returns (string[] memory keyNames) {
    keyNames = new string[](3);
    keyNames[0] = "owner";
    keyNames[1] = "item";
    keyNames[2] = "itemVariant";
  }

  /** Get the table's field names */
  function getFieldNames() internal pure returns (string[] memory fieldNames) {
    fieldNames = new string[](1);
    fieldNames[0] = "amount";
  }

  /** Register the table with its config */
  function register() internal {
    StoreSwitch.registerTable(
      _tableId,
      getFieldLayout(),
      getKeySchema(),
      getValueSchema(),
      getKeyNames(),
      getFieldNames()
    );
  }

  /** Register the table with its config (using the specified store) */
  function register(IStore _store) internal {
    _store.registerTable(_tableId, getFieldLayout(), getKeySchema(), getValueSchema(), getKeyNames(), getFieldNames());
  }

  /** Get amount */
  function get(address owner, uint32 item, uint32 itemVariant) internal view returns (uint32 amount) {
    bytes32[] memory _keyTuple = new bytes32[](3);
    _keyTuple[0] = bytes32(uint256(uint160(owner)));
    _keyTuple[1] = bytes32(uint256(item));
    _keyTuple[2] = bytes32(uint256(itemVariant));

    bytes memory _blob = StoreSwitch.getField(_tableId, _keyTuple, 0, getFieldLayout());
    return (uint32(Bytes.slice4(_blob, 0)));
  }

  /** Get amount (using the specified store) */
  function get(IStore _store, address owner, uint32 item, uint32 itemVariant) internal view returns (uint32 amount) {
    bytes32[] memory _keyTuple = new bytes32[](3);
    _keyTuple[0] = bytes32(uint256(uint160(owner)));
    _keyTuple[1] = bytes32(uint256(item));
    _keyTuple[2] = bytes32(uint256(itemVariant));

    bytes memory _blob = _store.getField(_tableId, _keyTuple, 0, getFieldLayout());
    return (uint32(Bytes.slice4(_blob, 0)));
  }

  /** Set amount */
  function set(address owner, uint32 item, uint32 itemVariant, uint32 amount) internal {
    bytes32[] memory _keyTuple = new bytes32[](3);
    _keyTuple[0] = bytes32(uint256(uint160(owner)));
    _keyTuple[1] = bytes32(uint256(item));
    _keyTuple[2] = bytes32(uint256(itemVariant));

    StoreSwitch.setField(_tableId, _keyTuple, 0, abi.encodePacked((amount)), getFieldLayout());
  }

  /** Set amount (using the specified store) */
  function set(IStore _store, address owner, uint32 item, uint32 itemVariant, uint32 amount) internal {
    bytes32[] memory _keyTuple = new bytes32[](3);
    _keyTuple[0] = bytes32(uint256(uint160(owner)));
    _keyTuple[1] = bytes32(uint256(item));
    _keyTuple[2] = bytes32(uint256(itemVariant));

    _store.setField(_tableId, _keyTuple, 0, abi.encodePacked((amount)), getFieldLayout());
  }

  /** Tightly pack static data using this table's schema */
  function encodeStatic(uint32 amount) internal pure returns (bytes memory) {
    return abi.encodePacked(amount);
  }

  /** Tightly pack full data using this table's field layout */
  function encode(uint32 amount) internal pure returns (bytes memory) {
    bytes memory _staticData = encodeStatic(amount);

    PackedCounter _encodedLengths;
    bytes memory _dynamicData;

    return abi.encodePacked(_staticData, _encodedLengths, _dynamicData);
  }

  /** Encode keys as a bytes32 array using this table's field layout */
  function encodeKeyTuple(address owner, uint32 item, uint32 itemVariant) internal pure returns (bytes32[] memory) {
    bytes32[] memory _keyTuple = new bytes32[](3);
    _keyTuple[0] = bytes32(uint256(uint160(owner)));
    _keyTuple[1] = bytes32(uint256(item));
    _keyTuple[2] = bytes32(uint256(itemVariant));

    return _keyTuple;
  }

  /* Delete all data for given keys */
  function deleteRecord(address owner, uint32 item, uint32 itemVariant) internal {
    bytes32[] memory _keyTuple = new bytes32[](3);
    _keyTuple[0] = bytes32(uint256(uint160(owner)));
    _keyTuple[1] = bytes32(uint256(item));
    _keyTuple[2] = bytes32(uint256(itemVariant));

    StoreSwitch.deleteRecord(_tableId, _keyTuple, getFieldLayout());
  }

  /* Delete all data for given keys (using the specified store) */
  function deleteRecord(IStore _store, address owner, uint32 item, uint32 itemVariant) internal {
    bytes32[] memory _keyTuple = new bytes32[](3);
    _keyTuple[0] = bytes32(uint256(uint160(owner)));
    _keyTuple[1] = bytes32(uint256(item));
    _keyTuple[2] = bytes32(uint256(itemVariant));

    _store.deleteRecord(_tableId, _keyTuple, getFieldLayout());
  }
}
