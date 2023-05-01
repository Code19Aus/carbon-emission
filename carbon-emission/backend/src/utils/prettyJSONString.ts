const prettyJSONString = (inputString: string): string => {
    if (inputString) {
        return JSON.stringify(JSON.parse(inputString), null, 2);
    } else {
        return inputString;
    }
};

export default prettyJSONString;