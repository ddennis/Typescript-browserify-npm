/**
 * Created by Fantastisk on 01-04-2016.
 */

export class SingerUtil {

    private links:Array<string> = ["https://en.wikipedia.org/wiki/Bruce_Willis", "https://en.wikipedia.org/wiki/Aretha_Franklin"]


    constructor() {
    }

    getLinkByIndex(index:number):string {
        return this.links[index];
    }


}

