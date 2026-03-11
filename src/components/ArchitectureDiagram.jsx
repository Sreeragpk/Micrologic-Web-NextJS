import React from "react";

const ArchitectureDiagram = () => {
  return (
    <section className="bg-white py-16 px-4 md:px-12">
      <div className="max-w-6xl mx-auto space-y-8">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-slate-800 mb-8">
          MTS Software Architecture Diagram
        </h2>

        {/* CLOUD */}
        <div className="grid md:grid-cols-3 gap-4 items-center">
          <div className="bg-gradient-to-br from-gray-200 to-gray-100 border rounded-lg font-semibold p-3 text-center">
            Cloud Micrologic FactEyes
          </div>
          <div className="md:col-span-2 grid gap-2">
            <div className="bg-gray-300 text-center font-semibold rounded-lg p-3">
              Manufacturing Execution Systems (MES) and ERP
            </div>
            <div className="bg-sky-300 text-center font-semibold rounded-lg p-3">
              Traceability, Data Analytics and Publishing, FactEyes or 3rd Party Platform
            </div>
          </div>
        </div>

        {/* TEST SOFTWARE PLATFORM */}
        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-gradient-to-br from-blue-200 to-blue-50 border-l-4 border-blue-600 rounded-lg font-semibold p-3 text-center">
            Test Software Platform <br /> Micrologic Test Suite (MTS)
          </div>
          <div className="md:col-span-2 bg-gradient-to-br from-indigo-900 to-blue-800 text-white rounded-xl p-4 space-y-3">
            <div className="grid md:grid-cols-3 gap-2">
              <div className="bg-pink-400 p-2 rounded-lg text-center">Test UI</div>
              <div className="bg-pink-400 p-2 rounded-lg text-center">Data Connectivity & Reports</div>
              <div className="bg-pink-400 p-2 rounded-lg text-center">Tester Health</div>
            </div>
            <div className="grid md:grid-cols-3 gap-2">
              <div className="bg-sky-400 p-2 rounded-lg text-center md:col-span-2">Test Editor, Sequencer & Debug</div>
              <div className="bg-purple-400 p-2 rounded-lg text-center">Tool Monitor</div>
            </div>
            <div className="grid">
              <div className="bg-sky-400 p-2 rounded-lg text-center">Instrument Drivers & Config Tools</div>
            </div>
          </div>
        </div>

        {/* COMMUNICATION */}
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-gradient-to-br from-pink-200 to-pink-50 border-l-4 border-pink-500 rounded-lg font-semibold p-3 text-center">
            Communication
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2">
            {["UDS, FD, BRS, ISO TP","JTAG","RS 232","BLE","LAN","CAN","LIN","RS 485","I2C","SPI"].map((item) => (
              <div key={item} className="bg-pink-200 p-2 rounded-lg text-center text-sm">{item}</div>
            ))}
          </div>
        </div>

        {/* INSTRUMENTATION */}
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-gradient-to-br from-yellow-200 to-yellow-50 border-l-4 border-yellow-500 rounded-lg font-semibold p-3 text-center">
            Instrumentation
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2">
            {["Analog & Digital IO","Oscilloscope","Multiplexer","Digital Multimeter","Programmable PS","Electronic Load"].map((item) => (
              <div key={item} className="bg-yellow-300 p-2 rounded-lg text-center text-sm">{item}</div>
            ))}
          </div>
        </div>

        {/* TEST INFRASTRUCTURE */}
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-gradient-to-br from-sky-200 to-sky-50 border-l-4 border-sky-600 rounded-lg font-semibold p-3 text-center">
            Test Infrastructure
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2">
            {["Tester Cell","Test Computer","Display","Fixture","Mass Interconnect / Connector"].map((item) => (
              <div key={item} className="bg-sky-200 p-2 rounded-lg text-center text-sm">{item}</div>
            ))}
          </div>
        </div>

        {/* DEVICE */}
        <div className="grid md:grid-cols-2 gap-4 items-center">
          <div className="bg-gradient-to-br from-gray-200 to-gray-50 border-l-4 border-gray-500 rounded-lg font-semibold p-3 text-center">
            Device
          </div>
          <div className="bg-gray-300 p-3 rounded-lg text-center font-semibold">
            Device under Test (DUT)
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArchitectureDiagram;