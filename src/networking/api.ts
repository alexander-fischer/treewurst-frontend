import axios from "axios"
import IssueModel from "../models/issue-model"

const apiAxios = axios.create({
    baseURL: "",
    timeout: 30000,
})

export const postIssue = async (issue: IssueModel) => {
    await apiAxios.post("", issue)
}