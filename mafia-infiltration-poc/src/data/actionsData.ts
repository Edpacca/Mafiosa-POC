import type { Action } from "../models/interfaces/ActionModel"

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
            {trait: "impulsive", chanceOfSuccess: 1 },
            {trait: "calculated", chanceOfSuccess: 0},
            {trait: "socialiser", chanceOfSuccess: 1 },
            {trait: "handyman", chanceOfSuccess: 1 },
            {trait: "loyal", chanceOfSuccess: 0 },
            {trait: "disloyal", chanceOfSuccess: 0 },
            {trait: "ambitious", chanceOfSuccess: -1 },
            {trait: "lazy", chanceOfSuccess: 1 }
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
            {trait: "impulsive", chanceOfSuccess: -1 },
            {trait: "calculated", chanceOfSuccess: 1},
            {trait: "socialiser", chanceOfSuccess: 1 },
            {trait: "handyman", chanceOfSuccess: -1 },
            {trait: "loyal", chanceOfSuccess: 1 },
            {trait: "disloyal", chanceOfSuccess: 1 },
            {trait: "ambitious", chanceOfSuccess: 1 },
            {trait: "lazy", chanceOfSuccess: -1 }
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
            {trait: "impulsive", chanceOfSuccess: 0 },
            {trait: "calculated", chanceOfSuccess: -1},
            {trait: "socialiser", chanceOfSuccess: 0 },
            {trait: "handyman", chanceOfSuccess: 1 },
            {trait: "loyal", chanceOfSuccess: -1 },
            {trait: "disloyal", chanceOfSuccess: 0 },
            {trait: "ambitious", chanceOfSuccess: -1 },
            {trait: "lazy", chanceOfSuccess: 0 }
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
            {trait: "impulsive", chanceOfSuccess: -1 },
            {trait: "calculated", chanceOfSuccess: 0},
            {trait: "socialiser", chanceOfSuccess: -1 },
            {trait: "handyman", chanceOfSuccess: 1 },
            {trait: "loyal", chanceOfSuccess: 1 },
            {trait: "disloyal", chanceOfSuccess: -1 },
            {trait: "ambitious", chanceOfSuccess: -1 },
            {trait: "lazy", chanceOfSuccess: 1 }
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
            {trait: "impulsive", chanceOfSuccess: 1 },
            {trait: "calculated", chanceOfSuccess: 0},
            {trait: "socialiser", chanceOfSuccess: 1 },
            {trait: "handyman", chanceOfSuccess: 1 },
            {trait: "loyal", chanceOfSuccess: 0 },
            {trait: "disloyal", chanceOfSuccess: 0 },
            {trait: "ambitious", chanceOfSuccess: -1 },
            {trait: "lazy", chanceOfSuccess: 1 }
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
            {trait: "impulsive", chanceOfSuccess: 1 },
            {trait: "calculated", chanceOfSuccess: 0},
            {trait: "socialiser", chanceOfSuccess: 1 },
            {trait: "handyman", chanceOfSuccess: 1 },
            {trait: "loyal", chanceOfSuccess: 0 },
            {trait: "disloyal", chanceOfSuccess: 0 },
            {trait: "ambitious", chanceOfSuccess: -1 },
            {trait: "lazy", chanceOfSuccess: 1 }
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
            {trait: "impulsive", chanceOfSuccess: 1 },
            {trait: "calculated", chanceOfSuccess: 0},
            {trait: "socialiser", chanceOfSuccess: 1 },
            {trait: "handyman", chanceOfSuccess: 1 },
            {trait: "loyal", chanceOfSuccess: 0 },
            {trait: "disloyal", chanceOfSuccess: 0 },
            {trait: "ambitious", chanceOfSuccess: -1 },
            {trait: "lazy", chanceOfSuccess: 1 }
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
            {trait: "impulsive", chanceOfSuccess: 1 },
            {trait: "calculated", chanceOfSuccess: 0},
            {trait: "socialiser", chanceOfSuccess: 1 },
            {trait: "handyman", chanceOfSuccess: 1 },
            {trait: "loyal", chanceOfSuccess: 0 },
            {trait: "disloyal", chanceOfSuccess: 0 },
            {trait: "ambitious", chanceOfSuccess: -1 },
            {trait: "lazy", chanceOfSuccess: 1 }
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
            {trait: "impulsive", chanceOfSuccess: 1 },
            {trait: "calculated", chanceOfSuccess: 0},
            {trait: "socialiser", chanceOfSuccess: 1 },
            {trait: "handyman", chanceOfSuccess: 1 },
            {trait: "loyal", chanceOfSuccess: 0 },
            {trait: "disloyal", chanceOfSuccess: 0 },
            {trait: "ambitious", chanceOfSuccess: -1 },
            {trait: "lazy", chanceOfSuccess: 1 }
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
            {trait: "impulsive", chanceOfSuccess: 1 },
            {trait: "calculated", chanceOfSuccess: 0},
            {trait: "socialiser", chanceOfSuccess: 1 },
            {trait: "handyman", chanceOfSuccess: 1 },
            {trait: "loyal", chanceOfSuccess: 0 },
            {trait: "disloyal", chanceOfSuccess: 0 },
            {trait: "ambitious", chanceOfSuccess: -1 },
            {trait: "lazy", chanceOfSuccess: 1 }
        ]
    }
]