import { Component } from "react";
import Link from "next/link";

export default class Table extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let records;
        if (this.props.data.data) {
            let m = this.props.data.data;
            records = m.map((d, index) => (
                <tr>
                    <td className="px-5 py-5 border-b border-gray-200 bg-gray-700 text-sm">
                        <p className="text-gray-400 whitespace-no-wrap">{d.pid}</p>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-gray-700 text-sm">
                        <p className="text-gray-400 whitespace-no-wrap">{d.user}</p>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-gray-700 text-sm">
                        <p className="text-gray-400 whitespace-no-wrap">{d.state}</p>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-gray-700 text-sm">
                        <p className="text-gray-400 whitespace-no-wrap">{d.tmu}</p>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-gray-700 text-sm">
                        <p className="text-gray-400 whitespace-no-wrap">{d.cpu}%</p>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-gray-700 text-sm">
                        <p className="text-gray-400 whitespace-no-wrap">{d.mem}%</p>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-gray-700 text-sm">
                        <p className="text-gray-400 whitespace-no-wrap">{d.command}</p>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-gray-700 text-sm">
                        <span
                            className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight"
                        >
                            <span
                                aria-hidden
                                className="absolute inset-0 bg-green-500 opacity-50 rounded-full"
                            ></span>
                            <p className="text-gray-100 whitespace-no-wrap">{d.duration}</p>
                        </span>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-gray-700 text-sm text-right">
                        <Link href="/">
                            <a className="w-40 text-center inline-block bg-gray-900 hover:bg-gray-800 text-white py-2 px-4 rounded">
                                Kill Process
                            </a>
                        </Link>
                    </td>
                </tr >
            )
            );
        }
        return (
            <div className="mx-auto px-4 sm:px-8 min-h-screen">
                <div className="m-16 py-8">
                    <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                        <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
                            <table className="min-w-full leading-normal">
                                <thead>
                                    <tr>
                                        <th
                                            className="px-5 py-5 border-b-2 border-gray-200 bg-gray-900 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
                                        >
                                            <p className="text-gray-300 whitespace-no-wrap">
                                                PID
                                            </p>
                                        </th>
                                        <th
                                            className="px-5 py-5 border-b-2 border-gray-200 bg-gray-900 text-left text-xs font-semibold text-gray-300 uppercase tracking-wider"
                                        >
                                            User
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
                                                Memory Used
                                            </p>
                                        </th>
                                        <th
                                            className="px-5 py-5 border-b-2 border-gray-200 bg-gray-900 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
                                        >
                                            <p className="text-gray-300 whitespace-no-wrap">
                                                CPU
                                            </p>
                                        </th>
                                        <th
                                            className="px-5 py-5 border-b-2 border-gray-200 bg-gray-900 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
                                        >
                                            <p className="text-gray-300 whitespace-no-wrap">Memory</p>
                                        </th>
                                        <th
                                            className="px-5 py-5 border-b-2 border-gray-200 bg-gray-900 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
                                        >
                                            <p className="text-gray-300 whitespace-no-wrap">
                                                Command
                                            </p>
                                        </th>
                                        <th
                                            className="px-5 py-5 border-b-2 border-gray-200 bg-gray-900 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
                                        >
                                            <p className="text-gray-300 whitespace-no-wrap">Duration</p>
                                        </th>
                                        <th className="px-5 py-5 border-b-2 border-gray-200 bg-gray-900"></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {records}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

};


