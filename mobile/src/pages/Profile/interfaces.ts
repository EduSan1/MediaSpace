export interface IProject {
    id: string
    name: string,
    description: string
    value: number
    status: string
    images: [{
        url: string
    }]
    categories: any
    navigation: any
    interest: [
        {
            id: string,
            all_members_accept: boolean,
            is_selected: boolean,
            team: {
                id: string,
                name: string,
                nickname: string,
                description: string,
                profile_picture: string,
                general_evaluation: number,
                status: boolean,
                is_active: boolean,
                is_freelancer: boolean,
                create_at: string,
                update_at: string
            },
            members: [
                {
                    id: string,
                    is_active: boolean,
                    accept: boolean,
                    is_selected: boolean
                }
            ]
        }
    ],
    sub_categories: [
        {
            id: string,
            name: string,
            is_active: boolean,
            create_at: string,
            update_at: string
        }
    ],
    requirements: [
        {
            id: string,
            title: string,
            description: string,
            gain_percentage: number,
            is_accepted: boolean,
            is_delivered: boolean,
            is_active: boolean,
            create_at: string,
            update_at: string,
            delivery: []
        }
    ],
    management: {
        id: string,
        payment_confirmed: boolean,
        payment_date: string,
        payment_type: string,
        create_at: string,
        update_at: string,
        team_project_management: [
            {
                id: string,
                is_active: boolean
            }
        ],
        members: []
    },
    user: {
        id: string,
        first_name: string,
        last_name: string,
        nickname: string,
        birth_date: string,
        cpf: string,
        mail: string,
        biography: string,
        profile_picture: string,
        is_active: boolean,
        is_authenticated: boolean,
        create_at: string,
        update_at: string,
        gender: {
            id: string,
            gender: string,
            create_at: string,
            update_at: string
        },
        phone: {
            id: string,
            ddd: string,
            phone: string,
            ddi: string
        },
        teams: [],
        project_member: []
    }
}

export interface IUser {
    id: string,
    first_name: string,
    last_name: string,
    nickname: string,
    birth_date: string,
    cpf: string,
    mail: string,
    biography: string,
    profile_picture: string,
    is_active: boolean,
    is_authenticated: boolean,
    create_at: string,
    update_at: string,
    gender: {
        id: string,
        gender: string
    }
}

export interface IMyProject {
    AWAITING_START: IProject[],
    VALIDATING_REQUIREMENTS: IProject[],
    IN_EXECUTION: IProject[],
    COMPLETE: IProject[],
    CANCELED: IProject[]
}
export interface IUserProjects {
    AWAITING_START: [],
    VALIDATING_REQUIREMENTS: [],
    IN_EXECUTION: [],
    COMPLETE: [],
    CANCELED: []
}

export interface IFreelancerProjects {
    VALIDATING_REQUIREMENTS: [],
    IN_EXECUTION: [],
    COMPLETE: [],
    CANCELED: []
}

export interface ICategory {
    name: string
    icon: string
}
