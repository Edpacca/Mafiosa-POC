import type { Action } from "../models/types/ActionModel"

export const ACTION_NAMES: string[] = [
    "Invite to bar",
    "Invite to casino",
    "Invite to dirty job",
    "Invite to brothel",
    "Badmouth",
    "Challenge to race",
    "Challenge to fight",
    "Murder",
    "Threaten",
    "Blackmail"
]

export const ACTION_DATA: Action[] = [
    {
        name: "Invite to bar",
        positiveOutcome: {
            result: {
                opinionPoints: 1,
                actionPoints: 1
            },
            target: 'single'
        },
        negativeOutcome: {
            result: {
                opinionPoints: -1,
                actionPoints: -1
            },
            target: 'single'
        },
        traitChances: [
            {trait: "impulsive", chanceOfSuccess: 'high' },
            {trait: "calculated", chanceOfSuccess: 'equal'},
            {trait: "socialiser", chanceOfSuccess: 'high' },
            {trait: "handyman", chanceOfSuccess: 'high' },
            {trait: "loyal", chanceOfSuccess: 'equal' },
            {trait: "disloyal", chanceOfSuccess: 'equal' },
            {trait: "ambitious", chanceOfSuccess: 'low' },
            {trait: "lazy", chanceOfSuccess: 'high' }
        ]
    },
    {
        name: "Invite to casino",
        positiveOutcome: {
            result: {
                opinionPoints: 2,
                actionPoints: 2
            },
            target: 'single'
        },
        negativeOutcome: {
            result: {
                opinionPoints: -2,
                actionPoints: -2
            },
            target: 'single'
        },
        traitChances: [
            {trait: "impulsive", chanceOfSuccess: 'high' },
            {trait: "calculated", chanceOfSuccess: 'equal'},
            {trait: "socialiser", chanceOfSuccess: 'high' },
            {trait: "handyman", chanceOfSuccess: 'high' },
            {trait: "loyal", chanceOfSuccess: 'equal' },
            {trait: "disloyal", chanceOfSuccess: 'equal' },
            {trait: "ambitious", chanceOfSuccess: 'low' },
            {trait: "lazy", chanceOfSuccess: 'high' }
        ]
    },
    {
        name: "Invite to dirty job",
        positiveOutcome: {
            result: {
                opinionPoints: 3,
                actionPoints: 3
            },
            target: 'single'
        },
        negativeOutcome: {
            result: {
                opinionPoints: -3,
                actionPoints: -3
            },
            target: 'single'
        },
        traitChances: [
            {trait: "impulsive", chanceOfSuccess: 'high' },
            {trait: "calculated", chanceOfSuccess: 'equal'},
            {trait: "socialiser", chanceOfSuccess: 'high' },
            {trait: "handyman", chanceOfSuccess: 'high' },
            {trait: "loyal", chanceOfSuccess: 'equal' },
            {trait: "disloyal", chanceOfSuccess: 'equal' },
            {trait: "ambitious", chanceOfSuccess: 'low' },
            {trait: "lazy", chanceOfSuccess: 'high' }
        ]
    },
    {
        name: "Invite to brothel",
        positiveOutcome: {
            result: {
                opinionPoints: 4,
                actionPoints: 4
            },
            target: 'single'
        },
        negativeOutcome: {
            result: {
                opinionPoints: -4,
                actionPoints: -4
            },
            target: 'single'
        },
        traitChances: [
            {trait: "impulsive", chanceOfSuccess: 'high' },
            {trait: "calculated", chanceOfSuccess: 'equal'},
            {trait: "socialiser", chanceOfSuccess: 'high' },
            {trait: "handyman", chanceOfSuccess: 'high' },
            {trait: "loyal", chanceOfSuccess: 'equal' },
            {trait: "disloyal", chanceOfSuccess: 'equal' },
            {trait: "ambitious", chanceOfSuccess: 'low' },
            {trait: "lazy", chanceOfSuccess: 'high' }
        ]
    },
    {
        name: "Badmouth",
        positiveOutcome: {
            result: {
                opinionPoints: 2,
                actionPoints: 1
            },
            target: 'single'
        },
        negativeOutcome: {
            result: {
                opinionPoints: -2,
                actionPoints: 0
            },
            target: 'single'
        },
        traitChances: [
            {trait: "impulsive", chanceOfSuccess: 'high' },
            {trait: "calculated", chanceOfSuccess: 'equal'},
            {trait: "socialiser", chanceOfSuccess: 'high' },
            {trait: "handyman", chanceOfSuccess: 'high' },
            {trait: "loyal", chanceOfSuccess: 'equal' },
            {trait: "disloyal", chanceOfSuccess: 'equal' },
            {trait: "ambitious", chanceOfSuccess: 'low' },
            {trait: "lazy", chanceOfSuccess: 'high' }
        ]
    },
    {
        name: "Challenge to race",
        positiveOutcome: {
            result: {
                opinionPoints: 3,
                actionPoints: -1
            },
            target: 'single'
        },
        negativeOutcome: {
            result: {
                opinionPoints: -2,
                actionPoints: -1
            },
            target: 'single'
        },
        traitChances: [
            {trait: "impulsive", chanceOfSuccess: 'high' },
            {trait: "calculated", chanceOfSuccess: 'equal'},
            {trait: "socialiser", chanceOfSuccess: 'high' },
            {trait: "handyman", chanceOfSuccess: 'high' },
            {trait: "loyal", chanceOfSuccess: 'equal' },
            {trait: "disloyal", chanceOfSuccess: 'equal' },
            {trait: "ambitious", chanceOfSuccess: 'low' },
            {trait: "lazy", chanceOfSuccess: 'high' }
        ]
    },
    {
        name: "Challenge to fight",
        positiveOutcome: {
            result: {
                opinionPoints: 2,
                actionPoints: 0
            },
            target: 'single'
        },
        negativeOutcome: {
            result: {
                opinionPoints: -2,
                actionPoints: 0
            },
            target: 'single'
        },
        traitChances: [
            {trait: "impulsive", chanceOfSuccess: 'high' },
            {trait: "calculated", chanceOfSuccess: 'equal'},
            {trait: "socialiser", chanceOfSuccess: 'high' },
            {trait: "handyman", chanceOfSuccess: 'high' },
            {trait: "loyal", chanceOfSuccess: 'equal' },
            {trait: "disloyal", chanceOfSuccess: 'equal' },
            {trait: "ambitious", chanceOfSuccess: 'low' },
            {trait: "lazy", chanceOfSuccess: 'high' }
        ]
    },
    {
        name: "Murder",
        positiveOutcome: {
            result: {
                opinionPoints: 2,
                actionPoints: 0
            },
            target: 'single'
        },
        negativeOutcome: {
            result: {
                opinionPoints: -2,
                actionPoints: 0
            },
            target: 'single'
        },
        traitChances: [
            {trait: "impulsive", chanceOfSuccess: 'high' },
            {trait: "calculated", chanceOfSuccess: 'equal'},
            {trait: "socialiser", chanceOfSuccess: 'high' },
            {trait: "handyman", chanceOfSuccess: 'high' },
            {trait: "loyal", chanceOfSuccess: 'equal' },
            {trait: "disloyal", chanceOfSuccess: 'equal' },
            {trait: "ambitious", chanceOfSuccess: 'low' },
            {trait: "lazy", chanceOfSuccess: 'high' }
        ]
    },
    {
        name: "Threaten",
        positiveOutcome: {
            result: {
                opinionPoints: 2,
                actionPoints: 0
            },
            target: 'single'
        },
        negativeOutcome: {
            result: {
                opinionPoints: -2,
                actionPoints: 0
            },
            target: 'single'
        },
        traitChances: [
            {trait: "impulsive", chanceOfSuccess: 'high' },
            {trait: "calculated", chanceOfSuccess: 'equal'},
            {trait: "socialiser", chanceOfSuccess: 'high' },
            {trait: "handyman", chanceOfSuccess: 'high' },
            {trait: "loyal", chanceOfSuccess: 'equal' },
            {trait: "disloyal", chanceOfSuccess: 'equal' },
            {trait: "ambitious", chanceOfSuccess: 'low' },
            {trait: "lazy", chanceOfSuccess: 'high' }
        ]
    },
    {
        name: "Blackmail",
        positiveOutcome: {
            result: {
                opinionPoints: 2,
                actionPoints: 0
            },
            target: 'single'
        },
        negativeOutcome: {
            result: {
                opinionPoints: -2,
                actionPoints: 0
            },
            target: 'single'
        },
        traitChances: [
            {trait: "impulsive", chanceOfSuccess: 'high' },
            {trait: "calculated", chanceOfSuccess: 'equal'},
            {trait: "socialiser", chanceOfSuccess: 'high' },
            {trait: "handyman", chanceOfSuccess: 'high' },
            {trait: "loyal", chanceOfSuccess: 'equal' },
            {trait: "disloyal", chanceOfSuccess: 'equal' },
            {trait: "ambitious", chanceOfSuccess: 'low' },
            {trait: "lazy", chanceOfSuccess: 'high' }
        ]
    }
]