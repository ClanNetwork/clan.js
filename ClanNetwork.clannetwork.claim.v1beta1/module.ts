// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import { StdFee } from "@cosmjs/launchpad";
import { SigningStargateClient, DeliverTxResponse } from "@cosmjs/stargate";
import { EncodeObject } from "@cosmjs/proto-signing";

import { Api } from "./rest";
import { MsgClaimAddressSigned } from "./types/clan/claim/v1beta1/tx";
import { MsgClaimForEthAddress } from "./types/clan/claim/v1beta1/tx";
import { MsgInitialClaim } from "./types/clan/claim/v1beta1/tx";

type sendMsgClaimAddressSignedParams = {
  value: MsgClaimAddressSigned;
  fee?: StdFee;
  memo?: string;
};

type sendMsgClaimForEthAddressParams = {
  value: MsgClaimForEthAddress;
  fee?: StdFee;
  memo?: string;
};

type sendMsgInitialClaimParams = {
  value: MsgInitialClaim;
  fee?: StdFee;
  memo?: string;
};

type msgClaimAddressSignedParams = {
  value: MsgClaimAddressSigned;
};

type msgClaimForEthAddressParams = {
  value: MsgClaimForEthAddress;
};

type msgInitialClaimParams = {
  value: MsgInitialClaim;
};

class Module extends Api<any> {
  private _client?: SigningStargateClient;
  private _addr?: string;

  constructor(baseUrl: string) {
    super({
      baseUrl,
    });
  }

  public withSigner(client: SigningStargateClient, _addr: string) {
    this._client = client;
    this._addr = _addr;
  }

  public noSigner() {
    this._client = undefined;
    this._addr = undefined;
  }

  async sendMsgClaimAddressSigned({
    value,
    fee,
    memo,
  }: sendMsgClaimAddressSignedParams): Promise<DeliverTxResponse> {
    if (!this._client) {
      throw new Error(
        "TxClient:sendMsgClaimAddressSigned: Unable to sign Tx. Signer is not present."
      );
    }
    if (!this._addr) {
      throw new Error(
        "TxClient:sendMsgClaimAddressSigned: Unable to sign Tx. Address is not present."
      );
    }
    try {
      let msg = this.msgClaimAddressSigned({
        value: MsgClaimAddressSigned.fromPartial(value),
      });
      return await this._client.signAndBroadcast(
        this._addr,
        [msg],
        fee ? fee : { amount: [], gas: "200000" },
        memo
      );
    } catch (e: any) {
      throw new Error(
        "TxClient:sendMsgClaimAddressSigned: Could not broadcast Tx: " +
          e.message
      );
    }
  }

  async sendMsgClaimForEthAddress({
    value,
    fee,
    memo,
  }: sendMsgClaimForEthAddressParams): Promise<DeliverTxResponse> {
    if (!this._client) {
      throw new Error(
        "TxClient:sendMsgClaimForEthAddress: Unable to sign Tx. Signer is not present."
      );
    }
    if (!this._addr) {
      throw new Error(
        "TxClient:sendMsgClaimForEthAddress: Unable to sign Tx. Address is not present."
      );
    }
    try {
      let msg = this.msgClaimForEthAddress({
        value: MsgClaimForEthAddress.fromPartial(value),
      });
      return await this._client.signAndBroadcast(
        this._addr,
        [msg],
        fee ? fee : { amount: [], gas: "200000" },
        memo
      );
    } catch (e: any) {
      throw new Error(
        "TxClient:sendMsgClaimForEthAddress: Could not broadcast Tx: " +
          e.message
      );
    }
  }

  async sendMsgInitialClaim({
    value,
    fee,
    memo,
  }: sendMsgInitialClaimParams): Promise<DeliverTxResponse> {
    if (!this._client) {
      throw new Error(
        "TxClient:sendMsgInitialClaim: Unable to sign Tx. Signer is not present."
      );
    }
    if (!this._addr) {
      throw new Error(
        "TxClient:sendMsgInitialClaim: Unable to sign Tx. Address is not present."
      );
    }
    try {
      let msg = this.msgInitialClaim({
        value: MsgInitialClaim.fromPartial(value),
      });
      return await this._client.signAndBroadcast(
        this._addr,
        [msg],
        fee ? fee : { amount: [], gas: "200000" },
        memo
      );
    } catch (e: any) {
      throw new Error(
        "TxClient:sendMsgInitialClaim: Could not broadcast Tx: " + e.message
      );
    }
  }

  msgClaimAddressSigned({ value }: msgClaimAddressSignedParams): EncodeObject {
    try {
      return {
        typeUrl: "/ClanNetwork.clannetwork.claim.v1beta1.MsgClaimAddressSigned",
        value: MsgClaimAddressSigned.fromPartial(value),
      };
    } catch (e: any) {
      throw new Error(
        "TxClient:MsgClaimAddressSigned: Could not create message: " + e.message
      );
    }
  }

  msgClaimForEthAddress({ value }: msgClaimForEthAddressParams): EncodeObject {
    try {
      return {
        typeUrl: "/ClanNetwork.clannetwork.claim.v1beta1.MsgClaimForEthAddress",
        value: MsgClaimForEthAddress.fromPartial(value),
      };
    } catch (e: any) {
      throw new Error(
        "TxClient:MsgClaimForEthAddress: Could not create message: " + e.message
      );
    }
  }

  msgInitialClaim({ value }: msgInitialClaimParams): EncodeObject {
    try {
      return {
        typeUrl: "/ClanNetwork.clannetwork.claim.v1beta1.MsgInitialClaim",
        value: MsgInitialClaim.fromPartial(value),
      };
    } catch (e: any) {
      throw new Error(
        "TxClient:MsgInitialClaim: Could not create message: " + e.message
      );
    }
  }
}

export default Module;
