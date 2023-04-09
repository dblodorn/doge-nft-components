import type { NFTObject } from "@zoralabs/nft-hooks/dist";

export const defaultGetContentData = (nft: NFTObject) => {
  console.log(nft.nft?.contentURI)
  const removeFleek = nft.nft?.contentURI && nft.nft?.contentURI?.replace(/https:\/\/ipfs.fleek.co/g, "https://ipfs.decentralized-content.com")
  
  return {
    contentURI: (nft.media?.content?.uri ||
      nft.media?.image?.uri ||
      removeFleek) as string,
    metadata: nft.metadata,
    contract: nft.nft?.contract?.address,
    tokenId: nft.nft?.tokenId,
  };
};

export type GetContentDataType = {
  getContentData?: (nft: NFTObject) => {
    contentURI?: string;
    metadata?: any;
    contract?: any;
    tokenId?: any;
  };
};
