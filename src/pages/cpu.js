import { Component } from "react";
import Table from '../resources/table'
import Layout from '../components/layout'
import { w3cwebsocket as W3CWebSocket } from "websocket";
const BackendUrl = process.env.backendurl;

export default class CPU extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
        this.client = new W3CWebSocket(`ws://${BackendUrl}/process`);
    }
    componentDidMount() {
        this.client.onopen = () => {
            console.log('WebSocket Client Connected');
        };
        this.client.onmessage = (message) => {
            let obj = JSON.parse(message.data);
            this.setState({ data: obj });
            this.client.send("next");
        };
    }
    componentWillUnmount() {
        console.log("closing");
        this.client.send("close");
    }
    render() {
        return (
            <Layout>
                <Table data={this.state.data} />
            </Layout>
        );
    }
}