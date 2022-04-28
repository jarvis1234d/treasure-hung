import Head from "next/head"

function invalidQr() {
  return (
    <div className="flex bg-red-500 min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Fail: Treasure Hunt - SOCSE</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="mr-2 ml-2">
          <h1 className="text-center text-white text-xl font-extrabold">Invalid QR Code</h1>

      </main>
      </div>
  )
}

export default invalidQr