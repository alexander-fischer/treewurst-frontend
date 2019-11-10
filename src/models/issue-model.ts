export default class IssueModel {
    public description: string
    public latitude: number
    public longitude: number
    public issueType: string
    public isResolved: boolean
    public id?: string

    constructor(description: string, latitude: number, longitude: number, issueType: ISSUE_TYPE, isResolved: boolean, id?: string) {
        this.description = description
        this.latitude = latitude
        this.longitude = longitude
        this.issueType = issueType
        this.isResolved = isResolved ? isResolved : false
        this.id = id
    }
}

export enum ISSUE_TYPE {
    HEALTHY_TREE = "HEALTHY_TREE",
    TREE_SICK = "TREE_SICK",
    DAMAGED_TREE = "DAMAGED_TREE",
    ANIMAL = "ANIMAL",
    TREE_DEAD = "TREE_DEAD",
    MISC = "MISC"
}