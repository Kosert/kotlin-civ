import { Tile } from "../gameobjects/tile";
import { civ } from "kotlin-civ";


export class HexMath {

    static pixelToHex(worldX: number, worldY: number): civ.hex.Coordinates {
        const x = (worldX - Tile.HEX_OFFSET) / Tile.HEX_SIZE
        const y = (worldY - Tile.HEX_OFFSET) / Tile.HEX_SIZE
        const q = (Tile.SQRT3 / 3 * x - 1.0 / 3 * y)
        const r = (2.0 / 3.0 * y)
        const s = -q - r
        return civ.hex.Coordinates.Companion.fromDoubles(q, r, s)
    }


}