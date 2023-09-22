import * as argon from 'argon2'

let hashedPassword: string;

argon.hash('secret').then((password) => {
    hashedPassword = password
})

export const userSeeds = [
    {
        firstName: 'Tun',
        lastName: 'Yus',
        email: 'tuyus@gmail.com',
        password: hashedPassword,
        role: 'customer'
    },
    {
        firstName: 'Olu',
        lastName: 'Ose',
        email: 'olose@gmail.com',
        password: hashedPassword,
        role: 'provider'
    },
    {
        firstName: 'Ken',
        lastName: 'Jim',
        email: 'kejim@gmail.com',
        password: hashedPassword,
        role: 'distributor'
    },
    {
        firstName: 'Fre',
        lastName: 'Ebh',
        email: 'freb@gmail.com',
        password: hashedPassword,
        role: 'admin'
    },
    {
        firstName: 'Chu',
        lastName: 'Efa',
        email: 'chef@gmail.com',
        password: hashedPassword,
        role: 'customer'
    },
]