export enum status {
    idle = 1,
    loading,
    succeeded,
    failed
}

export interface dataState {
    data: {
        items: any[],
        status: number
    },
    expandedItem: {
        item: {},
        status: number
    }
}