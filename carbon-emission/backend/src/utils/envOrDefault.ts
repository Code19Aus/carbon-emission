const envOrDefault = (envVar: string, defaultValue: string): string => {
    const value = process.env[envVar];
    return value || defaultValue;
};

export default envOrDefault;