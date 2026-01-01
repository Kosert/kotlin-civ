export const StorageItem = {

    AUTO_SAVE_SLOT: "AUTO_SAVE_SLOT",
    SAVE_SLOT_1: "SAVE_SLOT_1",
    SAVE_SLOT_2: "SAVE_SLOT_2",
    SAVE_SLOT_3: "SAVE_SLOT_3",
    SAVE_SLOT_4: "SAVE_SLOT_4",
    SAVE_SLOT_5: "SAVE_SLOT_5",

    getSaveSlot(index: number): string {
        return "SAVE_SLOT_" + index
    }

}