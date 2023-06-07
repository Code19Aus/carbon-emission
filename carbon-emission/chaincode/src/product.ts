import { Object, Property } from 'fabric-contract-api';

@Object()
export class Product {
  @Property()
  public doc_type?: string;

  @Property()
  public id: string;

  @Property()
  public epc_id: string;

  @Property()
  public status: "processing" | "completed";
}

@Object()
export class ProductFlow {
  @Property()
  public doc_type: string;

  @Property()
  public id: string;

  @Property()
  public product_id: string;

  @Property()
  public epc_id: string;

  @Property()
  public start_time: string;

  @Property()
  public end_time?: string;

  @Property()
  public process_id: string;

  @Property()
  public reader_id: string;

  @Property()
  public antenna_number: string;
}