import { RequirementFileORM } from "../entity/RequirementFile"
import { IDomainDeliveryProps } from "../interface/Delivery"

export default class DeliveryDomain {

    id: string
    title: string
    description: string
    files: RequirementFileORM[]
    is_accepted: null

    constructor(props: IDomainDeliveryProps) {
        this.id = props.id
        this.title = props.title
        this.description = props.description
        this.files = props.files
        this.is_accepted = props.is_accepted

    }
}