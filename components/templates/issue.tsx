import { Component } from "react"
import Loading from "../loading"
import IssueModel, { ISSUE_TYPE } from "../../src/models/issue-model"

interface IIssueTemplateProps {
    setIssue: (issue: IssueModel) => void
}

class IssueTemplate extends Component<IIssueTemplateProps, {}> {

    state = {
        gpsLoading: false,
        position: null,
        selectedOption: ISSUE_TYPE.DAMAGED_TREE,
        description: ""
    }

    render() {
        const { gpsLoading, description } = this.state
        const position: Position | null = this.state.position
        const readablePosition = this.createReadablePosition(position)

        const options = this.optionsMap.map((issueType, index) => {
            return (
                <option key={index} value={issueType.value}>{issueType.label}</option>
            )
        })

        return (
            <div>
                <div className="mt-8">
                    <div className="flex justify-center">
                        <h2 className="text-gray-700" style={{ fontSize: "2rem" }}>Meldung</h2>
                    </div>

                    <div className="flex justify-center mt-4 ">
                        <div className="lg:w-1/3 w-5/6 relative inline-block">
                            <select className="block appearance-none border-2 border-gray-200 rounded py-2 px-4 bg-gray-200 text-gray-700 leading-tight focus:outline-none w-full"
                                onChange={this.selectOption}>
                                {options}
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center mt-4">
                        <div className="lg:w-1/3 w-5/6">
                            <textarea className="resize bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
                                style={{ height: "100px", width: "100%" }}
                                placeholder="Beschreibe die Meldung..."
                                value={description}
                                onChange={this.onChangeDescription} />
                        </div>
                    </div>

                    <div className="flex justify-center mt-4">
                        <div className="flex items-center bg-gray-200 lg:w-1/3 w-5/6 py-2 px-4 appearance-none rounded focus:outline-none focus:bg-white focus:border-blue-500">
                            <input className="appearance-none bg-transparent border-none w-full text-gray-700 leading-tight focus:outline-none" type="text" placeholder="Koordinaten" aria-label="Full name" value={readablePosition} />
                            <button className="flex-shrink-0 text-sm text-white" type="button" onClick={this.getPosition}>
                                {gpsLoading ? <Loading /> : <img src="/icons/location.svg" style={{ height: "20px", width: "20px" }} />}
                            </button>
                        </div>
                    </div>

                    <div className="flex justify-center mt-4">
                        <button onClick={this.onClickBtn} className="hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" style={{backgroundColor: "#008C0E"}}>
                            Problem absenden
                        </button>
                    </div>
                </div>
            </div>
        )
    }

    getPosition = () => {
        this.setState({ gpsLoading: true })
        try {
            navigator.geolocation.getCurrentPosition(position => this.setState({ position, gpsLoading: false }))

        } catch (err) {
            this.setState({ gpsLoading: false })
        }
    }

    createReadablePosition = (position: Position | null) => {
        if (!position) return ""

        const lat = position.coords.latitude
        const lng = position.coords.longitude

        return `${lat}, ${lng}`
    }

    onChangeDescription = (e: any) => {
        const description = e.target.value
        this.setState({ description })
    }

    selectOption = (e: any) => {
        const selectedOption = e.target.value
        this.setState({ selectedOption })
    }

    optionsMap = [
        { value: ISSUE_TYPE.DAMAGED_TREE, label: "Baum beschädigt" },
        { value: ISSUE_TYPE.ANIMAL, label: "Tier" },
        { value: ISSUE_TYPE.HEALTHY_TREE, label: "Gesunder Baum" },
        { value: ISSUE_TYPE.MISC, label: "Verschiedenes" },
        { value: ISSUE_TYPE.TREE_DEAD, label: "Toter Baum" },
        { value: ISSUE_TYPE.TREE_SICK, label: "Kranker Baum" },
    ]

    /**
     * TODO refine
     */
    onClickBtn = () => {
        const { selectedOption, description, position } = this.state
        if (!position) return

        const issue = new IssueModel(description, position.coords.latitude, position.coords.longitude, selectedOption, false)
        this.props.setIssue(issue)

        this.setState({ position: null, description: "" })
    }
}

export default IssueTemplate