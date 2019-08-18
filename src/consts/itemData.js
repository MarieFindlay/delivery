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
        STRIPE_PLAN_ID: 'plan_FdisT5gj3zCZBs',
        NAME: PLAN_NAMES.HOUSEHOLD,
        INCLUDED_ITEM_IDS: [1, 2, 4, 5],
    },
    {
        ID: 2,
        STRIPE_PLAN_ID: 'plan_Fdiv5cusSdkUhc',
        NAME: PLAN_NAMES.HOUSEHOLD_DISHWASHER,
        INCLUDED_ITEM_IDS: [1, 2, 3, 4, 5],
    },
    {
        ID: 3,
        STRIPE_PLAN_ID: 'plan_FdiyxoEN5fvesx',
        NAME: PLAN_NAMES.HOUSEHOLD_TOILETRIES,
        INCLUDED_ITEM_IDS: [1, 2, 4, 5, 6]
    },
    {
        ID: 4,
        STRIPE_PLAN_ID: 'plan_Fdj00BsMWzwe1S',
        NAME: PLAN_NAMES.HOUSEHOLD_TOILETRIES_DISHWASHER,
        INCLUDED_ITEM_IDS: [1, 2, 3, 4, 5, 6]
    },
]