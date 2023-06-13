/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type {
  KeysWithValueHook,
  KeysWithValueHookInterface,
} from "../KeysWithValueHook";

const _abi = [
  {
    inputs: [
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        internalType: "uint256",
        name: "start",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "end",
        type: "uint256",
      },
    ],
    name: "Slice_OutOfBounds",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "expected",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "received",
        type: "uint256",
      },
    ],
    name: "StoreCore_InvalidDataLength",
    type: "error",
  },
  {
    inputs: [],
    name: "StoreCore_NotDynamicField",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "tableId",
        type: "bytes32",
      },
      {
        internalType: "string",
        name: "tableIdString",
        type: "string",
      },
    ],
    name: "StoreCore_TableNotFound",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "sourceTableId",
        type: "bytes32",
      },
      {
        internalType: "bytes32[]",
        name: "key",
        type: "bytes32[]",
      },
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "onAfterSetField",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "sourceTableId",
        type: "bytes32",
      },
      {
        internalType: "bytes32[]",
        name: "key",
        type: "bytes32[]",
      },
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "onBeforeSetField",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "sourceTableId",
        type: "bytes32",
      },
      {
        internalType: "bytes32[]",
        name: "key",
        type: "bytes32[]",
      },
    ],
    name: "onDeleteRecord",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "sourceTableId",
        type: "bytes32",
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
    name: "onSetRecord",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b506123a9806100206000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c8063469b7ee2146100515780636b3d7d5f1461006657806382b6745f14610079578063b51fef6c1461008c575b600080fd5b61006461005f366004611e95565b61009f565b005b610064610074366004611e95565b610170565b610064610087366004611f1d565b610239565b61006461009a366004611f8a565b61033e565b604051636624edbf60e11b8152600090339063cc49db7e906100c7908890889060040161200c565b600060405180830381865afa1580156100e4573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f1916820160405261010c9190810190612051565b80519060200120905060006101417f6b6579737776616c000000000000000000000000000000000000000000000000876103ff565b9050610168818660008151811061015a5761015a6120bf565b60200260200101518461045f565b505050505050565b604051636624edbf60e11b8152600090339063cc49db7e90610198908890889060040161200c565b600060405180830381865afa1580156101b5573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526101dd9190810190612051565b80519060200120905060006102127f6b6579737776616c000000000000000000000000000000000000000000000000876103ff565b905061016881838760008151811061022c5761022c6120bf565b602002602001015161049a565b60006102657f6b6579737776616c000000000000000000000000000000000000000000000000856103ff565b604051636624edbf60e11b8152909150600090339063cc49db7e90610290908890889060040161200c565b600060405180830381865afa1580156102ad573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526102d59190810190612051565b805190602001209050828051906020012081036102f3575050505050565b610318828560008151811061030a5761030a6120bf565b60200260200101518361045f565b6103378284805190602001208660008151811061022c5761022c6120bf565b5050505050565b604051636624edbf60e11b8152600090339063cc49db7e90610366908690869060040161200c565b600060405180830381865afa158015610383573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526103ab9190810190612051565b80519060200120905060006103e07f6b6579737776616c000000000000000000000000000000000000000000000000856103ff565b90506103f9818460008151811061015a5761015a6120bf565b50505050565b60008061040c8360801b90565b7fffffffffffffffff000000000000000000000000000000000000000000000000851677ffffffffffffffff00000000000000000000000000000000604086901c161760809190911c1791505092915050565b60006104758361046f868561050a565b9061057e565b9050805160000361048f5761048a8483610656565b6103f9565b6103f98483836106a7565b6040805160018082528183019092526000916020808301908036833701905050905082816000815181106104d0576104d06120bf565b6020026020010181815250506103f984826000856040516020016104f691815260200190565b6040516020818303038152906040526106fe565b60408051600180825281830190925260609160009190602080830190803683370190505090508281600081518110610544576105446120bf565b602002602001018181525050600061055e85836000610791565b9050610575610570826000845161083e565b6108d7565b95945050505050565b60606000835167ffffffffffffffff81111561059c5761059c611d50565b6040519080825280602002602001820160405280156105c5578160200160208202803683370190505b5090506000805b855181101561064c57848682815181106105e8576105e86120bf565b60200260200101511461063a57858181518110610607576106076120bf565b6020026020010151838381518110610621576106216120bf565b602090810291909101015281610636816120eb565b9250505b80610644816120eb565b9150506105cc565b5081529392505050565b60408051600180825281830190925260009160208083019080368337019050509050818160008151811061068c5761068c6120bf565b6020026020010181815250506106a283826108e8565b505050565b6040805160018082528183019092526000916020808301908036833701905050905082816000815181106106dd576106dd6120bf565b6020026020010181815250506103f9848260006106f98661096f565b61097f565b6107066109da565b156107175761048a84848484610a58565b6040517f0c1a60000000000000000000000000000000000000000000000000000000000081523390630c1a600090610759908790879087908790600401612131565b600060405180830381600087803b15801561077357600080fd5b505af1158015610787573d6000803e3d6000fd5b5050505050505050565b606061079b6109da565b156107b2576107ab848484610c94565b9050610837565b6040517fd03edb8c000000000000000000000000000000000000000000000000000000008152339063d03edb8c906107f290879087908790600401612165565b600060405180830381865afa15801561080f573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526107ab9190810190612051565b9392505050565b6000818311158015610851575083518211155b610896578383836040517f23230fa300000000000000000000000000000000000000000000000000000000815260040161088d93929190612191565b60405180910390fd5b602084016108a484826121b6565b905060006108b285856121ce565b6fffffffffffffffffffffffffffffffff1660809290921b9190911795945050505050565b606060006108378360206001610caf565b6108f06109da565b15610903576108ff8282610df2565b5050565b6040517f505a181d000000000000000000000000000000000000000000000000000000008152339063505a181d90610941908590859060040161200c565b600060405180830381600087803b15801561095b57600080fd5b505af1158015610168573d6000803e3d6000fd5b6060816108378160206001610f88565b6109876109da565b156109985761048a84848484611013565b6040517f114a7266000000000000000000000000000000000000000000000000000000008152339063114a726690610759908790879087908790600401612131565b6000303b8082036109ed57600191505090565b3073ffffffffffffffffffffffffffffffffffffffff1663a5c2f0076040518163ffffffff1660e01b815260040160006040518083038186803b158015610a3357600080fd5b505afa925050508015610a44575060015b610a5057600091505090565b600191505090565b6000610a6385611207565b9050610a6e8161125c565b60ff168360ff161015610aad576040517f14306eb800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000610abb8686868561126d565b83604051602001610acd9291906121e5565b60405160208183030381529060405290507fd01f9f1368f831528fc9fe6442366b2b7d957fbfff3bcf7c24d9ab5fe51f8c4686868684604051610b139493929190612131565b60405180910390a16000610b26876112c8565b905060005b8151811015610bd7576000828281518110610b4857610b486120bf565b602002602001015190508073ffffffffffffffffffffffffffffffffffffffff1663469b7ee28a8a8a886040518563ffffffff1660e01b8152600401610b919493929190612131565b600060405180830381600087803b158015610bab57600080fd5b505af1158015610bbf573d6000803e3d6000fd5b50505050508080610bcf906120eb565b915050610b2b565b50610be5878785888861139d565b60005b8151811015610787576000828281518110610c0557610c056120bf565b602002602001015190508073ffffffffffffffffffffffffffffffffffffffff16636b3d7d5f8a8a8a886040518563ffffffff1660e01b8152600401610c4e9493929190612131565b600060405180830381600087803b158015610c6857600080fd5b505af1158015610c7c573d6000803e3d6000fd5b50505050508080610c8c906120eb565b915050610be8565b60606000610ca185611207565b905061057585858584611418565b60606000610cbd8560801c90565b90506fffffffffffffffffffffffffffffffff8516600084610cf557610ce4866008612214565b610cf0906101006121ce565b610cf8565b60005b90506000868381610d0b57610d0b612233565b049050610d188784612249565b15610da5576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603d60248201527f756e7061636b546f41727261793a207061636b65644c656e677468206d75737460448201527f2062652061206d756c7469706c65206f6620656c656d656e7453697a65000000606482015260840161088d565b602080820201604051955080860160405250808552600060208601855b83831015610de4578051851c8252600192909201916020909101908901610dc2565b505050505050509392505050565b6000610dfd83611207565b90507f2cc8610b80ef19409ae51ecbdd9c137960fb22ae9ef2d817d36ec1b685d68ecd8383604051610e3092919061200c565b60405180910390a16000610e43846112c8565b905060005b8151811015610ef0576000828281518110610e6557610e656120bf565b602002602001015190508073ffffffffffffffffffffffffffffffffffffffff1663b51fef6c87876040518363ffffffff1660e01b8152600401610eaa92919061200c565b600060405180830381600087803b158015610ec457600080fd5b505af1158015610ed8573d6000803e3d6000fd5b50505050508080610ee8906120eb565b915050610e48565b506000610efd858561144f565b9050610f57816000610f0f8660f01c90565b67ffffffffffffffff811115610f2757610f27611d50565b6040519080825280601f01601f191660200182016040528015610f51576020820181803683370190505b506114a5565b610f60836114ba565b60ff16600003610f71575050505050565b6000610f7d86866114c6565b600081559050610168565b60606000838551610f999190612214565b90508067ffffffffffffffff811115610fb457610fb4611d50565b6040519080825280601f01601f191660200182016040528015610fde576020820181803683370190505b50805190925061100b9086906fffffffffffffffffffffffffffffffff166020850160801b1786866114fd565b509392505050565b600061101e85611207565b90507fd01f9f1368f831528fc9fe6442366b2b7d957fbfff3bcf7c24d9ab5fe51f8c46858585856040516110559493929190612131565b60405180910390a16000611068866112c8565b905060005b815181101561111957600082828151811061108a5761108a6120bf565b602002602001015190508073ffffffffffffffffffffffffffffffffffffffff1663469b7ee2898989896040518563ffffffff1660e01b81526004016110d39493929190612131565b600060405180830381600087803b1580156110ed57600080fd5b505af1158015611101573d6000803e3d6000fd5b50505050508080611111906120eb565b91505061106d565b506111238261125c565b60ff168460ff1610156111425761113d868684878761161c565b61114f565b61114f86868487876116c7565b60005b81518110156111fe57600082828151811061116f5761116f6120bf565b602002602001015190508073ffffffffffffffffffffffffffffffffffffffff16636b3d7d5f898989896040518563ffffffff1660e01b81526004016111b89493929190612131565b600060405180830381600087803b1580156111d257600080fd5b505af11580156111e6573d6000803e3d6000fd5b505050505080806111f6906120eb565b915050611152565b50505050505050565b600061121282611704565b9050806112575781611223836117c9565b6040517fd623a70d00000000000000000000000000000000000000000000000000000000815260040161088d92919061225d565b919050565b6000601082901b5b60f81c92915050565b6060600061127a8361125c565b6112849085612276565b905060006112938787846117f4565b905060006112ae8360ff166112a88a8a61184d565b9061185a565b90506112ba828261188c565b93505050505b949350505050565b60408051600180825281830190925260609160009190602080830190803683370190505090508281600081518110611302576113026120bf565b602090810291909101810191909152604080517f6d756473746f7265000000000000000000000000000000000000000000000000818401527f486f6f6b73000000000000000000000000000000000000000000000000000000603082015281518082039093018352810190526000906113869061137e90612299565b836000610791565b90506112c0611398826000845161083e565b61189a565b60006113a88461125c565b6113b29084612276565b905060006113c087876114c6565b905060006113cc825490565b905060006113dd8260ff861661185a565b90506113fb8460ff168651836113f391906121b6565b8491906118ab565b808455915061140d8989868489611983565b505050505050505050565b60606114238261125c565b60ff168360ff1610156114435761143c858585856119c3565b90506112c0565b61143c8585858561126d565b60007f86425bff6b57326c7859e89024fe4f238ca327a1ae4a230180dd2f0e88aaa7d98383604051602001611486939291906122c0565b60408051601f1981840301815291905280516020909101209392505050565b60006020820190506103f98484838551611a23565b6000601882901b611264565b60007f86425bff6b57326c7859e89024fe4f238ca327a1ae4a230180dd2f0e88aaa7d98383604051602001611486939291906122df565b8351600061150b8560801c90565b90506000836115305761151f856008612214565b61152b906101006121ce565b611533565b60005b905060006115418685612214565b90506fffffffffffffffffffffffffffffffff87168111156115e5576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603860248201527f7061636b46726f6d41727261793a20696e73756666696369656e7420616c6c6f60448201527f6361746564207061636b6564536c696365206c656e6774680000000000000000606482015260840161088d565b600060208901845b8683101561160f578151851b81526001929092019160209091019088016115ed565b5050505050505050505050565b600061162b8460ff8516611ae1565b905081516116498260c58111156116445761164461233f565b611b0d565b146116a0576116638160c58111156116445761164461233f565b82516040517f521b3d330000000000000000000000000000000000000000000000000000000081526004810192909252602482015260440161088d565b60006116ac878761144f565b905060006116ba8686611bbe565b90506107878282866114a5565b60006116d28461125c565b6116dc9084612276565b90506116eb8686838551611c0a565b60006116f88787846117f4565b90506111fe8184611c3c565b60408051600180825281830190925260009182919060208083019080368337019050509050828160008151811061173d5761173d6120bf565b602090810291909101810191909152604080517f6d756473746f7265000000000000000000000000000000000000000000000000818401527f736368656d610000000000000000000000000000000000000000000000000000603082015281518082039093018352810190526000906117bf906117b990612299565b8361144f565b90506112c0815490565b6060816040516020016117de91815260200190565b6040516020818303038152906040529050919050565b60007f86425bff6b57326c7859e89024fe4f238ca327a1ae4a230180dd2f0e88aaa7d984848460405160200161182d9493929190612355565b60408051601f198184030181529190528051602090910120949350505050565b6000806117bf84846114c6565b600080611868836005612214565b6118739060076121b6565b905061188184826008021b90565b60d81c949350505050565b606061083783836000611c48565b606060006108378360146000610caf565b600083816118b98260c81c90565b905060006118ca878760ff1661185a565b90508085106118ee576118dd81866121ce565b6118e790836121b6565b9150611905565b6118f885826121ce565b61190290836121ce565b91505b6000611912876005612214565b61191d9060076121b6565b905078ffffffffffffffffffffffffffffffffffffffffffffffffff841660c884901b1793507fffffffffff0000000000000000000000000000000000000000000000000000006008820290811c19851660d888901b90911c1798975050505050505050565b60006119908686866117f4565b905061199d602084612388565b6119a790826121b6565b905060006119b6602085612249565b90506111fe8282856114a5565b606060006119d48360ff8616611ae1565b905060006119ed8260c58111156116445761164461233f565b905060006119fb888861144f565b90506000611a098688611bbe565b9050611a16828483611c48565b9998505050505050505050565b602083048401935060208381611a3b57611a3b612233565b0692508215611a945760208390036000600019600884021c1990506008850281811c91508451811c9050811987541682821617875550818311611a7f5750506103f9565b611a8a6001876121b6565b9550509182019190035b60208110611abd5781518455611aab6001856121b6565b935060209190910190601f1901611a94565b80156103f9576000600019600883021c198554845182169119161785555050505050565b6000611af983611af28460046121b6565b6008021b90565b60f81c60c58111156108375761083761233f565b6000808260c5811115611b2257611b2261233f565b60ff1690506020811015611b3b576108378160016121b6565b6040811015611b5b576020611b518260016121b6565b61083791906121ce565b6060811015611b71576040611b518260016121b6565b60608360c5811115611b8557611b8561233f565b03611b935750600192915050565b60618360c5811115611ba757611ba761233f565b03611bb55750601492915050565b50600092915050565b600080805b8360ff1681101561100b57611bec611bdb8683611ae1565b60c58111156116445761164461233f565b611bf690836121b6565b915080611c02816120eb565b915050611bc3565b6000611c1685856114c6565b90506000611c22825490565b9050611c328160ff8616856118ab565b8083559050610168565b6108ff826000836114a5565b60608267ffffffffffffffff811115611c6357611c63611d50565b6040519080825280601f01601f191660200182016040528015611c8d576020820181803683370190505b5090506020810161100b85858584602082048401935060208281611cb357611cb3612233565b0691508115611d045760208290036000600019600883021c1990508554600885021b811984511682821617845250818511611cef5750506103f9565b611cfa6001876121b6565b9550509283900392015b60208310611d2c5783548152611d1b6001856121b6565b9350601f1990920191602001611d04565b82156103f9576000600019600885021c198251865482169119161782525050505050565b634e487b7160e01b600052604160045260246000fd5b604051601f8201601f1916810167ffffffffffffffff81118282101715611d8f57611d8f611d50565b604052919050565b600082601f830112611da857600080fd5b8135602067ffffffffffffffff821115611dc457611dc4611d50565b8160051b611dd3828201611d66565b9283528481018201928281019087851115611ded57600080fd5b83870192505b84831015611e0c57823582529183019190830190611df3565b979650505050505050565b600067ffffffffffffffff821115611e3157611e31611d50565b50601f01601f191660200190565b600082601f830112611e5057600080fd5b8135611e63611e5e82611e17565b611d66565b818152846020838601011115611e7857600080fd5b816020850160208301376000918101602001919091529392505050565b60008060008060808587031215611eab57600080fd5b84359350602085013567ffffffffffffffff80821115611eca57600080fd5b611ed688838901611d97565b94506040870135915060ff82168214611eee57600080fd5b90925060608601359080821115611f0457600080fd5b50611f1187828801611e3f565b91505092959194509250565b600080600060608486031215611f3257600080fd5b83359250602084013567ffffffffffffffff80821115611f5157600080fd5b611f5d87838801611d97565b93506040860135915080821115611f7357600080fd5b50611f8086828701611e3f565b9150509250925092565b60008060408385031215611f9d57600080fd5b82359150602083013567ffffffffffffffff811115611fbb57600080fd5b611fc785828601611d97565b9150509250929050565b600081518084526020808501945080840160005b8381101561200157815187529582019590820190600101611fe5565b509495945050505050565b8281526040602082015260006112c06040830184611fd1565b60005b83811015612040578181015183820152602001612028565b838111156103f95750506000910152565b60006020828403121561206357600080fd5b815167ffffffffffffffff81111561207a57600080fd5b8201601f8101841361208b57600080fd5b8051612099611e5e82611e17565b8181528560208385010111156120ae57600080fd5b610575826020830160208601612025565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b600060001982036120fe576120fe6120d5565b5060010190565b6000815180845261211d816020860160208601612025565b601f01601f19169290920160200192915050565b84815260806020820152600061214a6080830186611fd1565b60ff851660408401528281036060840152611e0c8185612105565b83815260606020820152600061217e6060830185611fd1565b905060ff83166040830152949350505050565b6060815260006121a46060830186612105565b60208301949094525060400152919050565b600082198211156121c9576121c96120d5565b500190565b6000828210156121e0576121e06120d5565b500390565b600083516121f7818460208801612025565b83519083019061220b818360208801612025565b01949350505050565b600081600019048311821515161561222e5761222e6120d5565b500290565b634e487b7160e01b600052601260045260246000fd5b60008261225857612258612233565b500690565b8281526040602082015260006112c06040830184612105565b600060ff821660ff841680821015612290576122906120d5565b90039392505050565b805160208083015191908110156122ba576000198160200360031b1b821691505b50919050565b8381528260208201526060604082015260006105756060830184611fd1565b8381528260208201526080604082015260006122fe6080830184611fd1565b8281036060840152600681527f6c656e6774680000000000000000000000000000000000000000000000000000602082015260408101915050949350505050565b634e487b7160e01b600052602160045260246000fd5b8481528360208201526080604082015260006123746080830185611fd1565b905060ff8316606083015295945050505050565b60008261239757612397612233565b50049056fea164736f6c634300080d000a";

type KeysWithValueHookConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: KeysWithValueHookConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class KeysWithValueHook__factory extends ContractFactory {
  constructor(...args: KeysWithValueHookConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<KeysWithValueHook> {
    return super.deploy(overrides || {}) as Promise<KeysWithValueHook>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): KeysWithValueHook {
    return super.attach(address) as KeysWithValueHook;
  }
  override connect(signer: Signer): KeysWithValueHook__factory {
    return super.connect(signer) as KeysWithValueHook__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): KeysWithValueHookInterface {
    return new utils.Interface(_abi) as KeysWithValueHookInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): KeysWithValueHook {
    return new Contract(address, _abi, signerOrProvider) as KeysWithValueHook;
  }
}
