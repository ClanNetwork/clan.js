import { GeneratedType } from "@cosmjs/proto-signing";
import { MsgClaimAddressSigned } from "./types/clan/claim/v1beta1/tx";
import { MsgClaimForEthAddress } from "./types/clan/claim/v1beta1/tx";
import { MsgInitialClaim } from "./types/clan/claim/v1beta1/tx";

const msgTypes: Array<[string, GeneratedType]>  = [
    ["/ClanNetwork.clannetwork.claim.v1beta1.MsgClaimAddressSigned", MsgClaimAddressSigned],
    ["/ClanNetwork.clannetwork.claim.v1beta1.MsgClaimForEthAddress", MsgClaimForEthAddress],
    ["/ClanNetwork.clannetwork.claim.v1beta1.MsgInitialClaim", MsgInitialClaim],
    
];

export { msgTypes }