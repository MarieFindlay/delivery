export const REPEAT_SCHEDULES = {
    CUSTOM: 'CUSTOM',
    SAME_DAY: 'SAME_DAY',
}

export const ITEMS = [
    {
        ID: 1,
        COMMON_NAME: 'washing up liquid',
        SINGLE_UNIT_LABEL: 'bottle of washing up liquid',
        PLURAL_UNIT_LABEL: 'bottles of washing up liquid',
        PERSON_QUANTITY_MAP: {
            1: 2,
            2: 3,
            3: 4,
            4: 5
        },
    },
    {
        ID: 2,
        COMMON_NAME: 'laundry tablets',
        SINGLE_UNIT_LABEL: 'laundry tablet',
        PLURAL_UNIT_LABEL: 'laundry tablets',
        PERSON_QUANTITY_MAP: {
            1: 20,
            2: 40,
            3: 60,
            4: 80,
        }
    },
    {
        ID: 3,
        COMMON_NAME: 'dishwasher tablets',
        SINGLE_UNIT_LABEL: 'dishwasher tablet',
        PLURAL_UNIT_LABEL: 'dishwasher tablets',
        PERSON_QUANTITY_MAP: {
            1: 20,
            2: 40,
            3: 60,
            4: 80,
        }
    },
    {
        ID: 4,
        COMMON_NAME: 'sponges',
        SINGLE_UNIT_LABEL: 'sponge',
        PLURAL_UNIT_LABEL: 'sponges',
        PERSON_QUANTITY_MAP: {
            1: 4,
            2: 6,
            3: 8,
            4: 9
        }
    },
    {
        ID: 5,
        COMMON_NAME: 'toilet roll',
        SINGLE_UNIT_LABEL: 'toilet roll',
        PLURAL_UNIT_LABEL: 'toilet rolls',
        PERSON_QUANTITY_MAP: {
            1: 20,
            2: 30,
            3: 35,
            4: 40,
        }
    },
    {
        ID: 6,
        COMMON_NAME: 'toothpaste',
        SINGLE_UNIT_LABEL: 'tube of toothpaste',
        PLURAL_UNIT_LABEL: 'tubes of toothpaste',
        PERSON_QUANTITY_MAP: {
            1: 1,
            2: 2,
            3: 3,
            4: 4,
        }
    }
];

export const PLAN_NAMES = {
    HOUSEHOLD: 'Household Package (w/o Dishwasher)',
    HOUSEHOLD_DISHWASHER: 'Household Package (w/ Dishwasher)',
    HOUSEHOLD_TOILETRIES: 'Household & Toiletries Package (w/o Dishwasher)',
    HOUSEHOLD_TOILETRIES_DISHWASHER: 'Household & Toiletries Package (w/ Dishwasher)',
}

export const TEST_PLANS = [
    {
        ID: 1,
        STRIPE_PLAN_ID: 'prod_FdiqCG6NSelEvQ',
        NAME: PLAN_NAMES.HOUSEHOLD,
        INCLUDED_ITEM_IDS: [1, 2, 4, 5],
    },
    {
        ID: 2,
        STRIPE_PLAN_ID: 'prod_Fdiu8OoDI7n5hz',
        NAME: PLAN_NAMES.HOUSEHOLD_DISHWASHER,
        INCLUDED_ITEM_IDS: [1, 2, 3, 4, 5],
    },
    {
        ID: 3,
        STRIPE_PLAN_ID: 'prod_FdiwQvAQ7VABY9',
        NAME: PLAN_NAMES.HOUSEHOLD_TOILETRIES,
        INCLUDED_ITEM_IDS: [1, 2, 4, 5, 6]
    },
    {
        ID: 4,
        STRIPE_PLAN_ID: 'prod_FdizRgSqPqsu1y',
        NAME: PLAN_NAMES.HOUSEHOLD_TOILETRIES_DISHWASHER,
        INCLUDED_ITEM_IDS: [1, 2, 3, 4, 5, 6]
    },
]

//Pricing tiers per person, when there are x number of people
export const TEST_PLAN_PRICE_TIERS = [
    {
        PLAN_ID: 1,
        1: 1600,
        2: 1600,
        3: 1500,
        4: 1500,
        5: 1400,
        6: 1400,
    },
    {
        PLAN_ID: 2,
        1: 1700,
        2: 1700,
        3: 1600,
        4: 1600,
        5: 1500,
        6: 1500,
    },
    {
        PLAN_ID: 3,
        1: 2000,
        2: 2000,
        3: 1900,
        4: 1900,
        5: 1800,
        6: 1800,
    },
    {
        PLAN_ID: 4,
        1: 2100,
        2: 2100,
        3: 2000,
        4: 2000,
        5: 1900,
        6: 1900,
    }
]