import * as argon from 'argon2'

let hashedPassword: string;

argon.hash('secret').then((password) => {
    hashedPassword = password
})

export const policySeeds = [
    {
        name: 'Family Plan HMO',
        description: 'Some nice things to say about this policy',
        type: 'health',
        price: 1000,
        status: 'active'
    },
    {
        name: 'Single Plan HMO',
        description: 'Some nice things to say about this policy',
        type: 'health',
        price: 500,
        status: 'active'
    },
    {
        name: 'Auto Assurance',
        description: 'Some nice things to say about this policy',
        type: 'automobile',
        price: 1000,
        status: 'active'
    },
    {
        name: 'Property Sure',
        description: 'Some nice things to say about this policy',
        type: 'property',
        price: 5000,
        status: 'active'
    },
]