const groups = [
    {
        name: 'Humanitarian',
        icon: require('./assets/icons/Humanitarian.png'),
        title: "People like disaster relief, hungry, children, medical",
        groupItems: [
            {
                name: "International",
                icon: require('./assets/icons/international.png'),
                subItems: [
                    {
                        name: "Medical",
                        icon: require('./assets/icons/medical1.png')
                    },
                    {
                        name: "poverty",
                        icon: require('./assets/icons/poverty.png')
                    },
                    {
                        name: "Civil Rights",
                        icon: require('./assets/icons/civilRights.png')
                    }
                ]
            },
            {
                name: "Domestic",
                icon: require('./assets/icons/domestic.png'),
                subItems: [
                    {
                        name: "Cancer",
                        icon: require('./assets/icons/cancer.png')
                    },
                    {
                        name: "Mental Illness",
                        icon: require('./assets/icons/mentaIIllness.png')
                    },
                    {
                        name: "Homeless",
                        icon: require('./assets/icons/homeless.png')
                    }
                ]
            },
            {
                name: "War/Conflict",
                icon: require('./assets/icons/warConflict.png'),
                subItems: [
                    {
                        name: "Veterans",
                        icon: require('./assets/icons/veterans.png')
                    },
                    {
                        name: "Refugee",
                        icon: require('./assets/icons/refugee.png')
                    },
                ]
            },
        ]
    },
    {
        name: 'Nature',
        icon: require('./assets/icons/Nature.png'),
        title: "Animal Rescue, Environment Protection, Global Warming",
        groupItems: [
            {
                name: "Environmentism",
                icon: require('./assets/icons/environmentism.png'),
                subItems: [
                    {
                        name: "Global Warming",
                        icon: require('./assets/icons/globalWarming.png')
                    },
                    {
                        name: "Sea Clean Up",
                        icon: require('./assets/icons/seaCleanUp.png')
                    },
                    {
                        name: "Recycling",
                        icon: require('./assets/icons/recycling.png')
                    }
                ]
            },
            {
                name: "Animal Life",
                icon: require('./assets/icons/animalLife.png'),
                subItems: [
                    {
                        name: "Wild Life Preservation",
                        icon: require('./assets/icons/wildLife.png')
                    },
                    {
                        name: "Natural Disasters",
                        icon: require('./assets/icons/naturalDisasters.png')
                    },
                    {
                        name: "Animal Rescue",
                        icon: require('./assets/icons/animalRescue.png')
                    }
                ]
            },
        ]
    },
    {
        name: 'Children',
        icon: require('./assets/icons/Children.png'),
        title: "Would you like to add a custom amount?",
        groupItems: [
            {
                name: "International",
                icon: require('./assets/icons/international.png'),
                subItems: [
                    {
                        name: "Health",
                        icon: require('./assets/icons/health.png')
                    },
                    {
                        name: "Education",
                        icon: require('./assets/icons/education.png')
                    },
                    {
                        name: "Adoption",
                        icon: require('./assets/icons/adoption.png')
                    }
                ]
            },
            {
                name: "Domestic",
                icon: require('./assets/icons/domestic.png'),
                subItems: [
                    {
                        name: "Education",
                        icon: require('./assets/icons/education.png')
                    },
                    {
                        name: "Food Security",
                        icon: require('./assets/icons/foodSecurity.png')
                    },
                    {
                        name: "Medical",
                        icon: require('./assets/icons/medical2.png')
                    }
                ]
            },
        ]
    },
    {
        name: 'Equality',
        icon: require('./assets/icons/equalityOld.png'),
        title: "Currently needy people or other organizations",
        groupItems: [
            {
                name: "Racial Justice",
                icon: require('./assets/icons/racialJustic.png'),
                subItems: [
                    {
                        name: "Voting Rights",
                        icon: require('./assets/icons/votingRights.png')
                    },
                    {
                        name: "ACLU",
                        icon: require('./assets/icons/aclu.png')
                    },
                ]
            },
            {
                name: "Gender",
                icon: require('./assets/icons/gender.png'),
                subItems: [
                    {
                        name: "Woman's Rights",
                        icon: require('./assets/icons/womenRights.png')
                    },
                    {
                        name: "Domestic Abuse",
                        icon: require('./assets/icons/domesticAbuse.png')
                    },
                ]
            },
        ]
    },
]

const trending = {
    name: "Trending",
    icon: require('./assets/icons/Trending.png'),
    title: "Currently needy people or other organisations",
    subItems: [
        {
            name: 'Special Needs',
            icon: require('./assets/icons/specialNeeds.png')
        },
        {
            name: 'Religious',
            icon: require('./assets/icons/religious.png')
        },
        {
            name: 'Gun Violence',
            icon: require('./assets/icons/gunVoilance.png')
        },
        {
            name: 'Free Speech',
            icon: require('./assets/icons/freeSpeech.png')
        },
        {
            name: 'LGBT',
            icon: require('./assets/icons/lgbt.png')
        }
    ]
}



export {
    groups,
    trending
}