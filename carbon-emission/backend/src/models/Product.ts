export type Product = {
    doc_type?: string;
    id: string;
    epc_id: string;
    status: "processing" | "completed";
}


export type ProductFlow = {
    doc_type?: string;
    id: string;
    product_id: string;
    epc_id: string;
    start_time: string;
    end_time?: string;
    process_id: string;
    reader_id: string;
    antenna_number: string;
}