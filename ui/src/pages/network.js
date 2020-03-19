import { Component } from "react";
import Layout from "../components/layout"

export default class Network extends Component {
    constructor(props) {
        super(props);
        this.state={
            conn:[],
            rout:[],
            actconn:[]
        }
    }
    render() {
        return (
            <Layout>
                <div class="container w-full mx-auto pt-20">
                    <div className="mx-auto px-4 sm:px-8">
                        <div class="border-b border-gray-800 my-3 py-3">
                            <h5 class="font-bold uppercase text-gray-500">Connections</h5>
                        </div>
                        <div className="m-5">
                            <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                                <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
                                    <table className="min-w-full leading-normal">
                                        <thead>
                                            <tr>
                                                <th
                                                    className="px-5 py-5 border-b-2 border-gray-200 bg-gray-900 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
                                                >
                                                    <p className="text-gray-300 whitespace-no-wrap">
                                                        Name
                                            </p>
                                                </th>
                                                <th
                                                    className="px-5 py-5 border-b-2 border-gray-200 bg-gray-900 text-left text-xs font-semibold text-gray-300 uppercase tracking-wider"
                                                >
                                                    UUID
                                            </th>
                                                <th
                                                    className="px-5 py-5 border-b-2 border-gray-200 bg-gray-900 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
                                                >
                                                    <p className="text-gray-300 whitespace-no-wrap">
                                                        Type
                                            </p>
                                                </th>
                                                <th
                                                    className="px-5 py-5 border-b-2 border-gray-200 bg-gray-900 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
                                                >
                                                    <p className="text-gray-300 whitespace-no-wrap">
                                                        Device
                                            </p>
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>

                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mx-auto px-4 sm:px-8">
                        <div class="border-b border-gray-800 my-3 py-3">
                            <h5 class="font-bold uppercase text-gray-500">Routing table</h5>
                        </div>
                        <div className="m-5">
                            <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                                <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
                                    <table className="min-w-full leading-normal">
                                        <thead>
                                            <tr>
                                                <th
                                                    className="px-5 py-5 border-b-2 border-gray-200 bg-gray-900 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
                                                >
                                                    <p className="text-gray-300 whitespace-no-wrap">
                                                        Destination
                                            </p>
                                                </th>
                                                <th
                                                    className="px-5 py-5 border-b-2 border-gray-200 bg-gray-900 text-left text-xs font-semibold text-gray-300 uppercase tracking-wider"
                                                >
                                                    Gateway
                                            </th>
                                                <th
                                                    className="px-5 py-5 border-b-2 border-gray-200 bg-gray-900 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
                                                >
                                                    <p className="text-gray-300 whitespace-no-wrap">
                                                        Genmask
                                            </p>
                                                </th>
                                                <th
                                                    className="px-5 py-5 border-b-2 border-gray-200 bg-gray-900 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
                                                >
                                                    <p className="text-gray-300 whitespace-no-wrap">
                                                        Device
                                            </p>
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>

                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mx-auto px-4 sm:px-8">
                        <div class="border-b border-gray-800 my-3 py-3">
                            <h5 class="font-bold uppercase text-gray-500">Active Connections</h5>
                        </div>
                        <div className="m-5">
                            <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                                <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
                                    <table className="min-w-full leading-normal">
                                        <thead>
                                            <tr>
                                                <th
                                                    className="px-5 py-5 border-b-2 border-gray-200 bg-gray-900 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
                                                >
                                                    <p className="text-gray-300 whitespace-no-wrap">
                                                        Protocol
                                            </p>
                                                </th>
                                                <th
                                                    className="px-5 py-5 border-b-2 border-gray-200 bg-gray-900 text-left text-xs font-semibold text-gray-300 uppercase tracking-wider"
                                                >
                                                    Data Sent/Received
                                            </th>
                                                <th
                                                    className="px-5 py-5 border-b-2 border-gray-200 bg-gray-900 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
                                                >
                                                    <p className="text-gray-300 whitespace-no-wrap">
                                                        Local Address
                                            </p>
                                                </th>
                                                <th
                                                    className="px-5 py-5 border-b-2 border-gray-200 bg-gray-900 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
                                                >
                                                    <p className="text-gray-300 whitespace-no-wrap">
                                                        Foriegn Address
                                            </p>
                                                </th>
                                                <th
                                                    className="px-5 py-5 border-b-2 border-gray-200 bg-gray-900 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
                                                >
                                                    <p className="text-gray-300 whitespace-no-wrap">
                                                        State
                                            </p>
                                                </th>
                                                <th
                                                    className="px-5 py-5 border-b-2 border-gray-200 bg-gray-900 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
                                                >
                                                    <p className="text-gray-300 whitespace-no-wrap">
                                                        PID
                                            </p>
                                                </th>
                                                <th
                                                    className="px-5 py-5 border-b-2 border-gray-200 bg-gray-900 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
                                                >
                                                    <p className="text-gray-300 whitespace-no-wrap">
                                                        Process Name
                                            </p>
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>

                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </Layout>
        )
    }
}