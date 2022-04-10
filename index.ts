// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import { Registry } from "@cosmjs/proto-signing";

import { plugEnv, plugKeplr, plugSigner, plugWebsocket } from "./plugins";

import {
  Module as ClanNetworkClannetworkClaimV1Beta1,
  msgTypes as ClanNetworkClannetworkClaimV1Beta1MsgTypes,
} from "./ClanNetwork.clannetwork.claim.v1beta1";
import {
  Module as CosmosAuthV1Beta1,
  msgTypes as CosmosAuthV1Beta1MsgTypes,
} from "./cosmos.auth.v1beta1";
import {
  Module as CosmosBankV1Beta1,
  msgTypes as CosmosBankV1Beta1MsgTypes,
} from "./cosmos.bank.v1beta1";
import {
  Module as CosmosBaseTendermintV1Beta1,
  msgTypes as CosmosBaseTendermintV1Beta1MsgTypes,
} from "./cosmos.base.tendermint.v1beta1";
import {
  Module as CosmosCrisisV1Beta1,
  msgTypes as CosmosCrisisV1Beta1MsgTypes,
} from "./cosmos.crisis.v1beta1";
import {
  Module as CosmosDistributionV1Beta1,
  msgTypes as CosmosDistributionV1Beta1MsgTypes,
} from "./cosmos.distribution.v1beta1";
import {
  Module as CosmosEvidenceV1Beta1,
  msgTypes as CosmosEvidenceV1Beta1MsgTypes,
} from "./cosmos.evidence.v1beta1";
import {
  Module as CosmosGovV1Beta1,
  msgTypes as CosmosGovV1Beta1MsgTypes,
} from "./cosmos.gov.v1beta1";
import {
  Module as CosmosMintV1Beta1,
  msgTypes as CosmosMintV1Beta1MsgTypes,
} from "./cosmos.mint.v1beta1";
import {
  Module as CosmosParamsV1Beta1,
  msgTypes as CosmosParamsV1Beta1MsgTypes,
} from "./cosmos.params.v1beta1";
import {
  Module as CosmosSlashingV1Beta1,
  msgTypes as CosmosSlashingV1Beta1MsgTypes,
} from "./cosmos.slashing.v1beta1";
import {
  Module as CosmosStakingV1Beta1,
  msgTypes as CosmosStakingV1Beta1MsgTypes,
} from "./cosmos.staking.v1beta1";
import {
  Module as CosmosTxV1Beta1,
  msgTypes as CosmosTxV1Beta1MsgTypes,
} from "./cosmos.tx.v1beta1";
import {
  Module as CosmosUpgradeV1Beta1,
  msgTypes as CosmosUpgradeV1Beta1MsgTypes,
} from "./cosmos.upgrade.v1beta1";
import {
  Module as CosmosVestingV1Beta1,
  msgTypes as CosmosVestingV1Beta1MsgTypes,
} from "./cosmos.vesting.v1beta1";
import {
  Module as IbcApplicationsTransferV1,
  msgTypes as IbcApplicationsTransferV1MsgTypes,
} from "./ibc.applications.transfer.v1";
import {
  Module as IbcCoreChannelV1,
  msgTypes as IbcCoreChannelV1MsgTypes,
} from "./ibc.core.channel.v1";
import {
  Module as IbcCoreClientV1,
  msgTypes as IbcCoreClientV1MsgTypes,
} from "./ibc.core.client.v1";
import {
  Module as IbcCoreConnectionV1,
  msgTypes as IbcCoreConnectionV1MsgTypes,
} from "./ibc.core.connection.v1";
import {
  Module as IbcCorePortV1,
  msgTypes as IbcCorePortV1MsgTypes,
} from "./ibc.core.port.v1";

const registry = new Registry([
  ...ClanNetworkClannetworkClaimV1Beta1MsgTypes,
  ...CosmosAuthV1Beta1MsgTypes,
  ...CosmosBankV1Beta1MsgTypes,
  ...CosmosBaseTendermintV1Beta1MsgTypes,
  ...CosmosCrisisV1Beta1MsgTypes,
  ...CosmosDistributionV1Beta1MsgTypes,
  ...CosmosEvidenceV1Beta1MsgTypes,
  ...CosmosGovV1Beta1MsgTypes,
  ...CosmosMintV1Beta1MsgTypes,
  ...CosmosParamsV1Beta1MsgTypes,
  ...CosmosSlashingV1Beta1MsgTypes,
  ...CosmosStakingV1Beta1MsgTypes,
  ...CosmosTxV1Beta1MsgTypes,
  ...CosmosUpgradeV1Beta1MsgTypes,
  ...CosmosVestingV1Beta1MsgTypes,
  ...IbcApplicationsTransferV1MsgTypes,
  ...IbcCoreChannelV1MsgTypes,
  ...IbcCoreClientV1MsgTypes,
  ...IbcCoreConnectionV1MsgTypes,
  ...IbcCorePortV1MsgTypes,
]);

type Environment = ReturnType<typeof plugEnv>["env"];

function plugClanNetworkClannetworkClaimV1Beta1(env: Environment): {
  clanNetworkClannetworkClaimV1Beta1: ClanNetworkClannetworkClaimV1Beta1;
} {
  return {
    clanNetworkClannetworkClaimV1Beta1: new ClanNetworkClannetworkClaimV1Beta1(
      env.apiURL
    ),
  };
}

function plugCosmosAuthV1Beta1(env: Environment): {
  cosmosAuthV1Beta1: CosmosAuthV1Beta1;
} {
  return {
    cosmosAuthV1Beta1: new CosmosAuthV1Beta1(env.apiURL),
  };
}

function plugCosmosBankV1Beta1(env: Environment): {
  cosmosBankV1Beta1: CosmosBankV1Beta1;
} {
  return {
    cosmosBankV1Beta1: new CosmosBankV1Beta1(env.apiURL),
  };
}

function plugCosmosBaseTendermintV1Beta1(env: Environment): {
  cosmosBaseTendermintV1Beta1: CosmosBaseTendermintV1Beta1;
} {
  return {
    cosmosBaseTendermintV1Beta1: new CosmosBaseTendermintV1Beta1(env.apiURL),
  };
}

function plugCosmosCrisisV1Beta1(env: Environment): {
  cosmosCrisisV1Beta1: CosmosCrisisV1Beta1;
} {
  return {
    cosmosCrisisV1Beta1: new CosmosCrisisV1Beta1(env.apiURL),
  };
}

function plugCosmosDistributionV1Beta1(env: Environment): {
  cosmosDistributionV1Beta1: CosmosDistributionV1Beta1;
} {
  return {
    cosmosDistributionV1Beta1: new CosmosDistributionV1Beta1(env.apiURL),
  };
}

function plugCosmosEvidenceV1Beta1(env: Environment): {
  cosmosEvidenceV1Beta1: CosmosEvidenceV1Beta1;
} {
  return {
    cosmosEvidenceV1Beta1: new CosmosEvidenceV1Beta1(env.apiURL),
  };
}

function plugCosmosGovV1Beta1(env: Environment): {
  cosmosGovV1Beta1: CosmosGovV1Beta1;
} {
  return {
    cosmosGovV1Beta1: new CosmosGovV1Beta1(env.apiURL),
  };
}

function plugCosmosMintV1Beta1(env: Environment): {
  cosmosMintV1Beta1: CosmosMintV1Beta1;
} {
  return {
    cosmosMintV1Beta1: new CosmosMintV1Beta1(env.apiURL),
  };
}

function plugCosmosParamsV1Beta1(env: Environment): {
  cosmosParamsV1Beta1: CosmosParamsV1Beta1;
} {
  return {
    cosmosParamsV1Beta1: new CosmosParamsV1Beta1(env.apiURL),
  };
}

function plugCosmosSlashingV1Beta1(env: Environment): {
  cosmosSlashingV1Beta1: CosmosSlashingV1Beta1;
} {
  return {
    cosmosSlashingV1Beta1: new CosmosSlashingV1Beta1(env.apiURL),
  };
}

function plugCosmosStakingV1Beta1(env: Environment): {
  cosmosStakingV1Beta1: CosmosStakingV1Beta1;
} {
  return {
    cosmosStakingV1Beta1: new CosmosStakingV1Beta1(env.apiURL),
  };
}

function plugCosmosTxV1Beta1(env: Environment): {
  cosmosTxV1Beta1: CosmosTxV1Beta1;
} {
  return {
    cosmosTxV1Beta1: new CosmosTxV1Beta1(env.apiURL),
  };
}

function plugCosmosUpgradeV1Beta1(env: Environment): {
  cosmosUpgradeV1Beta1: CosmosUpgradeV1Beta1;
} {
  return {
    cosmosUpgradeV1Beta1: new CosmosUpgradeV1Beta1(env.apiURL),
  };
}

function plugCosmosVestingV1Beta1(env: Environment): {
  cosmosVestingV1Beta1: CosmosVestingV1Beta1;
} {
  return {
    cosmosVestingV1Beta1: new CosmosVestingV1Beta1(env.apiURL),
  };
}

function plugIbcApplicationsTransferV1(env: Environment): {
  ibcApplicationsTransferV1: IbcApplicationsTransferV1;
} {
  return {
    ibcApplicationsTransferV1: new IbcApplicationsTransferV1(env.apiURL),
  };
}

function plugIbcCoreChannelV1(env: Environment): {
  ibcCoreChannelV1: IbcCoreChannelV1;
} {
  return {
    ibcCoreChannelV1: new IbcCoreChannelV1(env.apiURL),
  };
}

function plugIbcCoreClientV1(env: Environment): {
  ibcCoreClientV1: IbcCoreClientV1;
} {
  return {
    ibcCoreClientV1: new IbcCoreClientV1(env.apiURL),
  };
}

function plugIbcCoreConnectionV1(env: Environment): {
  ibcCoreConnectionV1: IbcCoreConnectionV1;
} {
  return {
    ibcCoreConnectionV1: new IbcCoreConnectionV1(env.apiURL),
  };
}

function plugIbcCorePortV1(env: Environment): {
  ibcCorePortV1: IbcCorePortV1;
} {
  return {
    ibcCorePortV1: new IbcCorePortV1(env.apiURL),
  };
}

type ClanClient = ReturnType<typeof plugClanNetworkClannetworkClaimV1Beta1> &
  ReturnType<typeof plugCosmosAuthV1Beta1> &
  ReturnType<typeof plugCosmosBankV1Beta1> &
  ReturnType<typeof plugCosmosBaseTendermintV1Beta1> &
  ReturnType<typeof plugCosmosCrisisV1Beta1> &
  ReturnType<typeof plugCosmosDistributionV1Beta1> &
  ReturnType<typeof plugCosmosEvidenceV1Beta1> &
  ReturnType<typeof plugCosmosGovV1Beta1> &
  ReturnType<typeof plugCosmosMintV1Beta1> &
  ReturnType<typeof plugCosmosParamsV1Beta1> &
  ReturnType<typeof plugCosmosSlashingV1Beta1> &
  ReturnType<typeof plugCosmosStakingV1Beta1> &
  ReturnType<typeof plugCosmosTxV1Beta1> &
  ReturnType<typeof plugCosmosUpgradeV1Beta1> &
  ReturnType<typeof plugCosmosVestingV1Beta1> &
  ReturnType<typeof plugIbcApplicationsTransferV1> &
  ReturnType<typeof plugIbcCoreChannelV1> &
  ReturnType<typeof plugIbcCoreClientV1> &
  ReturnType<typeof plugIbcCoreConnectionV1> &
  ReturnType<typeof plugIbcCorePortV1> &
  ReturnType<typeof plugSigner> &
  ReturnType<typeof plugKeplr> &
  ReturnType<typeof plugWebsocket> &
  ReturnType<typeof plugEnv>;

let createClanClient = (p: { env: Environment }) =>
  _use({
    ...plugClanNetworkClannetworkClaimV1Beta1(p.env),

    ...plugCosmosAuthV1Beta1(p.env),

    ...plugCosmosBankV1Beta1(p.env),

    ...plugCosmosBaseTendermintV1Beta1(p.env),

    ...plugCosmosCrisisV1Beta1(p.env),

    ...plugCosmosDistributionV1Beta1(p.env),

    ...plugCosmosEvidenceV1Beta1(p.env),

    ...plugCosmosGovV1Beta1(p.env),

    ...plugCosmosMintV1Beta1(p.env),

    ...plugCosmosParamsV1Beta1(p.env),

    ...plugCosmosSlashingV1Beta1(p.env),

    ...plugCosmosStakingV1Beta1(p.env),

    ...plugCosmosTxV1Beta1(p.env),

    ...plugCosmosUpgradeV1Beta1(p.env),

    ...plugCosmosVestingV1Beta1(p.env),

    ...plugIbcApplicationsTransferV1(p.env),

    ...plugIbcCoreChannelV1(p.env),

    ...plugIbcCoreClientV1(p.env),

    ...plugIbcCoreConnectionV1(p.env),

    ...plugIbcCorePortV1(p.env),

    ...plugSigner(),

    ...plugKeplr(),

    ...plugWebsocket(p.env),

    ...plugEnv(p.env),
  });

function _use<T>(elements: T): { [K in keyof T]: T[K] } {
  return Object.assign({}, elements);
}

export * from "./plugins";
export {
  plugClanNetworkClannetworkClaimV1Beta1,
  plugCosmosAuthV1Beta1,
  plugCosmosBankV1Beta1,
  plugCosmosBaseTendermintV1Beta1,
  plugCosmosCrisisV1Beta1,
  plugCosmosDistributionV1Beta1,
  plugCosmosEvidenceV1Beta1,
  plugCosmosGovV1Beta1,
  plugCosmosMintV1Beta1,
  plugCosmosParamsV1Beta1,
  plugCosmosSlashingV1Beta1,
  plugCosmosStakingV1Beta1,
  plugCosmosTxV1Beta1,
  plugCosmosUpgradeV1Beta1,
  plugCosmosVestingV1Beta1,
  plugIbcApplicationsTransferV1,
  plugIbcCoreChannelV1,
  plugIbcCoreClientV1,
  plugIbcCoreConnectionV1,
  plugIbcCorePortV1,
  createClanClient,
  Environment,
  registry,
  ClanClient,
  _use,
};
