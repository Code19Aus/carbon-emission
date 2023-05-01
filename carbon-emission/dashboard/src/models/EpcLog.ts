export type EpcLog = {
    "epcId": number;
    "previousReadingTime": Date;
    "readingTime": Date;
    "count": number;
    "timeBetweenEntryExit": number;
    "readerId": string;
    "floorNo": string;
    "antennaNumber": number;
    "wareHouseType": string;
    "status": "OUT" | "IN";
};