const PREFIX = "KOTLIN_CIV_"

export const StorageItem = {

    AUTO_SAVE_SLOT: PREFIX + "AUTO_SAVE_SLOT",
    SAVE_SLOT_1: PREFIX + "SAVE_SLOT_1",
    SAVE_SLOT_2: PREFIX + "SAVE_SLOT_2",
    SAVE_SLOT_3: PREFIX + "SAVE_SLOT_3",
    SAVE_SLOT_4: PREFIX + "SAVE_SLOT_4",
    SAVE_SLOT_5: PREFIX + "SAVE_SLOT_5",

    getSaveSlot(index: number): string {
        return PREFIX + "SAVE_SLOT_" + index
    }
}