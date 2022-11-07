import Reacts from 'react'


interface IFreelancerInterest {
    image_profile: string
    name: string
    nickname: string
}

const FreelancerInterest = ({ image_profile, name, nickname }: IFreelancerInterest) => {
    return (
        <>
            <div className='container_card_freelancer'>
                <div>
                    <img src={image_profile} />
                </div>
                <div>
                    <p>{name}</p>
                    <span>@{nickname}</span>
                </div>
            </div>

        </>
    )
}

export default FreelancerInterest
