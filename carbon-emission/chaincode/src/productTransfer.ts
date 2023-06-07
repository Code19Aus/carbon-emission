import { Context, Contract, Info, Returns, Transaction } from 'fabric-contract-api';
import stringify from 'json-stringify-deterministic';
import sortKeysRecursive from 'sort-keys-recursive';
import { Product, ProductFlow } from './product';

@Info({ title: 'ProductTransfer', description: 'Smart contract for managing products' })
export class ProductTransferContract extends Contract {
    // creating new product
    @Transaction()
    public async CreateProduct(ctx: Context, id: string, epc_id: string): Promise<void> {
        const newProduct: Product = {
            doc_type: "product",
            id,
            epc_id,
            status: "processing"
        };
        console.log("creating: ", newProduct);
        // we insert data in alphabetic order using 'json-stringify-deterministic' and 'sort-keys-recursive'
        await ctx.stub.putState(id, Buffer.from(stringify(sortKeysRecursive(newProduct))));
        console.log("created: ", newProduct);
    }

    // update product status
    @Transaction()
    public async UpdateProductStatusAsComplete(ctx: Context, id: string): Promise<void> {
        const productString = await this.ReadProduct(ctx, id);

        const product: Product = JSON.parse(productString.toString());
        product.status = "completed";
        await ctx.stub.putState(id, Buffer.from(stringify(sortKeysRecursive(product))));
        return;
    }

    // returns the product stored in the world state with given id.
    @Transaction(false)
    public async ReadProduct(ctx: Context, id: string): Promise<string> {
        const productJson = await ctx.stub.getState(id); // get the asset from chaincode state
        if (!productJson || productJson.length === 0) {
            throw new Error(`The product ${id} does not exist`);
        }
        return productJson.toString();
    }

    // GetAllAssets returns all assets found in the world state.
    @Transaction(false)
    @Returns('string')
    public async GetAllProducts(ctx: Context): Promise<string> {
        const allResults = [];
        // range query with empty string for startKey and endKey does an open-ended query of all assets in the chaincode namespace.
        const iterator = await ctx.stub.getStateByRange('', '');
        let result = await iterator.next();
        while (!result.done) {
            const strValue = Buffer.from(result.value.value.toString()).toString('utf8');
            let record: any;
            try {
                record = JSON.parse(strValue);
            } catch (err) {
                console.log(err);
                record = strValue;
            }
            allResults.push(record);
            result = await iterator.next();
        }
        return JSON.stringify(allResults);
    }

    // returns true when product with given ID exists in world state.
    @Transaction(false)
    @Returns('boolean')
    public async ProductExists(ctx: Context, id: string): Promise<boolean> {
        const productJson = await ctx.stub.getState(id);
        return productJson && productJson.length > 0;
    }


    /* -------------------------------------------------------------------------- */
    /*                        EVERYTHING ABOUT PRODUCT FLOW                       */
    /* -------------------------------------------------------------------------- */

    // creating new product flow
    @Transaction()
    public async CreateProductFlow(ctx: Context, id: string, product_id: string, epc_id: string, process_id: string, reader_id: string, antenna_number: string, start_time: string, end_time?: string): Promise<void> {
        const newProductFlow: ProductFlow = {
            doc_type: "productFlow",
            id,
            product_id,
            epc_id,
            process_id,
            reader_id,
            antenna_number,
            start_time,
            end_time
        };
        // we insert data in alphabetic order using 'json-stringify-deterministic' and 'sort-keys-recursive'
        await ctx.stub.putState(id, Buffer.from(stringify(sortKeysRecursive(newProductFlow))));
    }

    @Transaction(false)
    public async GetProductsFlowByQuery(ctx: Context, queryString: string): Promise<string> {
        return await this.GetQueryResultForQueryString(ctx, queryString);
    }

    @Transaction()
    public async UpdateProductFlow(ctx: Context, id: string, data: string): Promise<void> {
        const productFlow = JSON.parse(data);
        return ctx.stub.putState(id, Buffer.from(stringify(sortKeysRecursive(productFlow))));
    }

    /* -------------- THESE ARE COMMON FUNCTIONS FOR ALL CONTRACTS -------------- */
    // returns the data stored in the world state with given id.
    @Transaction(false)
    public async ReadData(ctx: Context, id: string): Promise<string> {
        const dataJson = await ctx.stub.getState(id); // get the asset from chaincode state
        if (!dataJson || dataJson.length === 0) {
            // throw new Error(`The data ${id} does not exist`);
            const response = {
                ok: false,
                status: 404,
                message: `The data ${id} does not exist`,
            };
            return JSON.stringify(response);
        }

        const response = {
            ok: true,
            status: 200,
            message: `The data ${id} exist`,
            data: JSON.parse(dataJson.toString())
        };
        return JSON.stringify(response);
    }

    // GetQueryResultForQueryString executes the passed in query string.
    // Result set is built and returned as a byte array containing the JSON results.
    async GetQueryResultForQueryString(ctx, queryString) {

        let resultsIterator = await ctx.stub.getQueryResult(queryString);
        let results = await this._GetAllResults(resultsIterator, false);

        return JSON.stringify(results);
    }

    // This is JavaScript so without Funcation Decorators, all functions are assumed
    // to be transaction functions
    //
    // For internal functions... prefix them with _
    async _GetAllResults(iterator: any, isHistory: any) {
        let allResults = [];
        let res = await iterator.next();
        while (!res.done) {
            if (res.value && res.value.value.toString()) {
                let jsonRes: any = {};
                console.log(res.value.value.toString('utf8'));
                if (isHistory && isHistory === true) {
                    jsonRes.TxId = res.value.txId;
                    jsonRes.Timestamp = res.value.timestamp;
                    try {
                        jsonRes.Value = JSON.parse(res.value.value.toString('utf8'));
                    } catch (err) {
                        console.log(err);
                        jsonRes.Value = res.value.value.toString('utf8');
                    }
                } else {
                    jsonRes.Key = res.value.key;
                    try {
                        jsonRes.Record = JSON.parse(res.value.value.toString('utf8'));
                    } catch (err) {
                        console.log(err);
                        jsonRes.Record = res.value.value.toString('utf8');
                    }
                }
                allResults.push(jsonRes);
            }
            res = await iterator.next();
        }
        iterator.close();
        return allResults;
    }
};