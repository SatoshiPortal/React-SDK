
import packageInfo from '../package.json';

import { BullSdkDetailsType, getSdkDetails, getLastPackageVersion } from "@bullbitcoin/sdk"

export type BullReactSdkDetailsType = BullSdkDetailsType & {
  currentReactSdkVersion: string,
  lastReactSdkVersion: string,
  lastReactSdkUpdate: Date,
}


export const getReactSdkDetails = async (): Promise<BullReactSdkDetailsType> => {

  const { lastVersion: lastReactSdkVersion, lastUpdate: lastReactSdkUpdate } = await getLastPackageVersion('@bullbitcoin/react-sdk');

  return {
    ...(await getSdkDetails()),

    message: packageInfo.description,
    currentReactSdkVersion: packageInfo.version,
    lastReactSdkVersion,
    lastReactSdkUpdate,
    documentationUrl: 'https://github.com/SatoshiPortal/React-SDK/',
  }
}