import { Component } from "react";
import Table from '../resources/table'
import Layout from '../components/layout'

export default class CPU extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Layout>
                <Table />
            </Layout>
        );
    }
}