import '../styles/index.css'
import Layout from "../components/layout";
import Card from "../resources/card"

export default () => (
    <Layout>
        <div class="container w-full mx-auto pt-20">
            <div class="w-full px-4 md:px-0 md:mt-8 mb-16 text-gray-800 leading-normal">
                <div class="flex flex-wrap">
                    <Card title="Number of CPU Cores" data="5" />
                    <Card title="Number of CPU Cores" data="5" />
                </div>

                <hr class="border-b-2 border-gray-600 my-8 mx-4"></hr>

                <div class="w-full md:w-1/2 xl:w-1/3 p-3">

                    <div class="bg-gray-900 border border-gray-800 rounded shadow">
                        <div class="border-b border-gray-800 p-3">
                            <h5 class="font-bold uppercase text-gray-600">Hardware</h5>
                        </div>
                        <div class="p-5">

                        </div>
                    </div>
                    {/* <Graph/> */}

                </div>

                <div class="w-full p-3">

                    <div class="bg-gray-900 border border-gray-800 rounded shadow">
                        <div class="border-b border-gray-800 p-3">
                            <h5 class="font-bold uppercase text-gray-600">Table</h5>
                        </div>
                        <div class="p-5">
                            <table class="w-full p-5 text-gray-700">
                                <thead>
                                    <tr>
                                        <th class="text-left text-gray-600">Name</th>
                                        <th class="text-left text-gray-600">Side</th>
                                        <th class="text-left text-gray-600">Role</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    <tr>
                                        <td>Obi Wan Kenobi</td>
                                        <td>Light</td>
                                        <td>Jedi</td>
                                    </tr>
                                    <tr>
                                        <td>Greedo</td>
                                        <td>South</td>
                                        <td>Scumbag</td>
                                    </tr>
                                    <tr>
                                        <td>Darth Vader</td>
                                        <td>Dark</td>
                                        <td>Sith</td>
                                    </tr>
                                </tbody>
                            </table>

                            <p class="py-2"><a href="#" class="text-white">See More issues...</a></p>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Layout >

)