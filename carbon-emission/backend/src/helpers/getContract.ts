import { Gateway, Wallets } from "fabric-network";
import path from 'path';
import fs from 'fs';

const channelName = 'mychannel';
const chaincodeName = 'basic';

const getContract = async (userId: string) => {
    // load the network configuration
    const ccpPath = path.resolve(__dirname, '..', '..', '..', '..', 'network', 'organizations', 'peerOrganizations', 'org1.example.com', 'connection-org1.json');
    const ccp = JSON.parse(fs.readFileSync(ccpPath, 'utf8'));

    // Create a new file system based wallet for managing identities.
    // const walletPath = path.join(process.cwd(), 'wallet');
    const walletPath = path.resolve(__dirname, '..', '..', '..', 'application', 'dist', 'wallet');
    const wallet = await Wallets.newFileSystemWallet(walletPath);
    console.log(`Wallet path: ${walletPath}`);

    // Check to see if we've already enrolled the user.
    const identity = await wallet.get(userId);
    if (!identity) {
        console.log(`An identity for the user "${userId}" does not exist in the wallet`);
        console.log('Run the registerUser.js application before retrying');
        throw new Error("User not registered - Blockchain Error");
    }

    // Create a new gateway for connecting to our peer node.
    const gateway = new Gateway();
    await gateway.connect(ccp, { wallet, identity: userId, discovery: { enabled: true, asLocalhost: true } });

    // Get the network (channel) our contract is deployed to.
    const network = await gateway.getNetwork(channelName);

    // Get the contract from the network.
    const contract = network.getContract(chaincodeName);

    // Evaluate the specified transaction.
    // queryCar transaction - requires 1 argument, ex: ('queryCar', 'CAR4')
    // queryAllCars transaction - requires no arguments, ex: ('queryAllCars')

    // const result = await contract.evaluateTransaction('queryCar', 'CAR4');
    // console.log(`Transaction has been evaluated, result is: ${result.toString()}`);

    // let result = await contract.evaluateTransaction('GetAllAssets');
    // console.log(`*** Result: ${prettyJSONString(result.toString())}`);
    return contract;
}


export default getContract;