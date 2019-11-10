import React, { Component } from "react"
import Nav from "../components/nav"
import Meta from "../components/meta"
import { withRouter } from "next/router"
import { WithRouterProps } from "next/dist/client/with-router"
import IssueTemplate from "../components/templates/issue"

import * as firebase from "firebase/app"
import "firebase/auth"
import "firebase/firestore"
import IssueModel from "../src/models/issue-model"

class Index extends Component<WithRouterProps, { selectedTemplate: any, app: any, issues: any[] }> {

    constructor(props: WithRouterProps) {
        super(props)

        const selectedTemplate = <IssueTemplate
            setIssue={this.setIssue} />
        this.state = {
            selectedTemplate,
            app: null,
            issues: []
        }
    }

    render() {
        const { selectedTemplate, issues } = this.state
        return (
            <div>
                <Meta
                    title="TreeWurst" />
                <Nav
                    issues={issues}
                    setIssue={this.setIssue}
                    selectTemplate={this.selectTemplate} />

                {selectedTemplate}
            </div>
        )
    }

    componentDidMount() {
        this.initFirebase()
        this.getIssues()
    }

    firebaseConfig = {
        apiKey: "AIzaSyDD5O-60ru9Jz8olQ57duxliRjB4pY9Y4A",
        authDomain: "treewurst.firebaseapp.com",
        databaseURL: "https://treewurst.firebaseio.com",
        projectId: "treewurst",
        storageBucket: "treewurst.appspot.com",
        messagingSenderId: "283130025049",
        appId: "1:283130025049:web:312075581cbe28b27d4d48"
    }

    initFirebase = () => {
        const apps = firebase.apps
        if (apps.length === 0) {
            const app = firebase.initializeApp(this.firebaseConfig)
            this.setState({ app })

        } else {
            this.setState({ app: apps[0] })
        }
    }

    getIssues = () => {
        const db = firebase.firestore()

        db.collection("issues").onSnapshot((querySnapshot) => {
            const issues = []
            querySnapshot.forEach((doc) => {
                issues.push(doc.data())
            })
            this.setState({ issues })
        })
    }

    setIssue = async (issue: IssueModel) => {
        const db = firebase.firestore()
        await db.collection("issues").doc((new Date()).toISOString()).set({
            description: issue.description,
            latitude: issue.latitude,
            longitude: issue.longitude,
            issueType: issue.issueType
        })
    }

    selectTemplate = (template: any) => {
        this.setState({ selectedTemplate: template })
    }
}

export default withRouter(Index)