import '../styles/index.css'
import Layout from "../components/layout";
import Card from "../resources/card"
// import Graph from "../resources/graph"
export default () => (
    <Layout>
        <div class="container w-full mx-auto pt-20">
            <div class="w-full px-4 md:px-0 md:mt-8 mb-16 text-gray-800 leading-normal">
                <div class="flex flex-wrap">
                    <Card title="Number of CPU Cores" data="5"/>
                    <Card title="Number of CPU Cores" data="5"/>
                </div>

                <hr class="border-b-2 border-gray-600 my-8 mx-4"></hr>

                <div class="w-full md:w-1/2 xl:w-1/3 p-3">

                    {/* <div class="bg-gray-900 border border-gray-800 rounded shadow">
                        <div class="border-b border-gray-800 p-3">
                            <h5 class="font-bold uppercase text-gray-600">Template</h5>
                        </div>
                        <div class="p-5">

                        </div>
                    </div> */}
                    {/* <Graph/> */}

                </div>
                <div className="mx-auto px-4 sm:px-8 min-h-screen">
          <div className="py-8">
            <div className="sm:flex sm:items-center sm:px-4 xl:flex-1 xl:justify-between">
              <div className="py-4 text-center lg:text-left">
                <h2 className="text-xl font-semibold leading-tight text-gray-900">'s Class</h2>
              </div>
              <div className="xl:block relative xl:max-w-xs xl:w-full"><div className="absolute inset-y-0 left-0 flex items-center pl-3"><svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 fill-current text-gray-600"><path d="M16.32 14.9l1.1 1.1c.4-.02.83.13 1.14.44l3 3a1.5 1.5 0 0 1-2.12 2.12l-3-3a1.5 1.5 0 0 1-.44-1.14l-1.1-1.1a8 8 0 1 1 1.41-1.41l.01-.01zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"></path></svg></div><input placeholder="Search by keywords" className="block w-full border border-transparent bg-white focus:outline-none focus:border-gray-300 text-gray-900 rounded-lg pl-10 pr-4 py-2" /></div>
            </div>
            <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
              <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
                <table className="min-w-full leading-normal">
                  <thead>
                    <tr>
                      <th
                        className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
                      >
                        Description
              </th>
                      <th
                        className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
                      >
                        <p className="text-gray-900 whitespace-no-wrap">
                          Student
                    </p>

                        <p className="text-gray-600 whitespace-no-wrap">Parent</p>
                      </th>
                      <th
                        className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
                      >
                        <p className="text-gray-900 whitespace-no-wrap">
                          Contact No.
                    </p>

                        <p className="text-gray-600 whitespace-no-wrap">Email id</p>
                      </th>
                      <th
                        className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
                      >
                        <p className="text-gray-900 whitespace-no-wrap">Joining date</p>
                        <p className="text-gray-600 whitespace-no-wrap">Fee duration type</p>
                      </th>
                      <th
                        className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
                      >
                        Fee Amount
              </th>
                      <th
                        className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
                      >
                        Payment Status
              </th>
                      <th
                        className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
                      >
                        Next fee date
              </th>
                      <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* {records} */}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
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