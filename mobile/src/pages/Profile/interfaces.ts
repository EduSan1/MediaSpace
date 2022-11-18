export interface IProject {
    id: string
    name: string,
    description: string
    value: number
    images: [{
        url: string
    }]
    categories: any
    user: {
        id: string
        first_name: string
        nickname: string
        profile_picture: string
    },
    navigation: any
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
