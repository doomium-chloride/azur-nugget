export interface Ship {
    wikiUrl: string;    // An valid, full url to its wiki page
    id: string;         // ID of ship, provided by the wiki (not in game id)
    names: {            // Ship's name
        code: string;
        en: string;
        cn?: string;
        jp?: string;
        kr?: string;
    };
    class: string;      // Ship's class
    nationality: string;// Ship's nationality
    hullType: string;   // Ship type (Destroyer etc)
    thumbnail: string;  // A thumbnail ideal for small places
    rarity: string;     // Super Rare, hopefully
    stars: {
        stars: string;      // i.e. ★★☆☆☆
        value: number;      // i.e. 2
    };

 //Retrofitted ships
  retrofit: Boolean;
  retrofitId: String;
  retrofitProjects: any// See comments below
  retrofit_hullType: String;
    stats: {
        baseStats: Stats;
        level100: Stats;
        level120: Stats;
        level100Retrofit?: Stats;
        level120Retrofit?: Stats;
    };
    slots: {
        1: Slot;
        2: Slot;
        3: Slot;
    };
    enhanceValue: object;// mapped by [key = "stat type", value = "enhance value"]
    scrapValue: {
        coin: number;
        oil: number;
        medal: number;
    };
    skills: Array<Skill>;
    limitBreaks: Array<Array<string>>;      // first layer = breaks, second layer = bonus
    fleetTech: {                            // fleet tech stuff
        statsBonus: {
            collection: {                   // on collection
                applicable: Array<string>;  // applicable ship types (i.e. Destroyer)
                stat: string;               // name of stat to enhance
                bonus: string;              // human-readable version of how much to enhance
            };
            maxLevel: {                     // on reaching max-level
                applicable: Array<string>;
                stat: string;
                bonus: string;
            };
        };
        techPoints: {
            collection: number;
            maxLimitBreak: number;
            maxLevel: number;
            total: number;
        };
    };
    construction: {
        constructionTime: string;
        availableIn: {
            light: Boolean;
            heavy: Boolean;
            aviation: Boolean;
            limited: Boolean;
            exchange: Boolean;
        };
    };
    misc: {
        artist: string;
        web?: Artist;
        pixiv?: Artist;
        twitter?: Artist;
        voice?: Artist;
    };
}

// Project Code (A-Z): {
//     name: String,
//     attributes: [
//       "\"Health\" +45"
//     ];
//     materials: [
//       "2x \"DestroyerT1BP\""
//     ];
//     coins: Number;
//     level: Number;
//     levelBreakLevel: Number;
//     levelBreakStars: "★★☆☆☆";
//     recurrence: Number;
//     require: [
//       "Required Projects",
//       "A"
//     ]
//  }, "B": {...}

export interface Artist {
    name: string;
    url: string;
}

export interface Slot {
    type: string;
    minEfficiency: number;  // in percentage
    maxEfficiency: number;  // in percentage
}

export interface Stats {
    health: string;
    armor: string;
    reload: string;
    luck: string;
    firepower: string;
    torpedo: string;
    evasion: string;
    speed: string;
    antiair: string;
    aviation: string;
    oilConsumption: string;
    accuracy: string;
    antisubmarineWarfare: string;
    // For submarines
    oxygen?: string;
    ammunition?: string;
    huntingRange?: Array<Array<string>>; // hunting range represented by 2d array
}

export interface Skill {
    icon: string;       // url
    names: {
        en?: string;
        cn?: string;
        jp?: string;
        kr?: string;
    };
    description: string;
    color: string;      // descriptive color name (not hex code)
}