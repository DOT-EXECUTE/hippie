function App() {
  return (
    <>
      <div className="flex flex-col items-center gap-1 border-b-2 p-0 m-0">
        <h1 className="fv fw-700 text-2xl">hippie</h1>
      </div>
      <br />
      <div className="grid grid-cols-2 grid-rows-2 gap-2 p-1">
        <div className="border rounded-4xl">
          <h4 className="flex justify-center items-center border-b min-w-full">manage blocks</h4>
          <p className="flex justify-center">manage blocks on  <strong>this</strong>  computer</p>
        </div>
        <div className="border rounded-4xl">
          <h4 className="flex justify-center items-center border-b min-w-full">manage blocks</h4>
          <p className="flex justify-center">manage blocks on  <strong>this</strong>  computer</p>
        </div>
      </div>
    </>
  )
}

export default App
