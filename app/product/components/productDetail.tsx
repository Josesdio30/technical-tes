import Image from "next/image";

const ProductDetail = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
        <div className="relative">
          <Image
            src="/ml.png"
            alt="Mobile Legends Bang Bang banner"
            width={1200}
            height={1100}
            className="w-full object-cover"
          />
        </div>
        <div className="flex flex-col md:flex-row items-center space-x-0 md:space-x-4 p-4">
          <Image
            src="/logoml.png"
            alt="Mobile Legends Bang Bang logo"
            width={200}
            height={100}
            className="h-44 rounded-2xl"
          />
          <div className="text-center md:text-left">
            <h1 className="text-2xl font-bold text-gray-400">Mobile Legends Bang Bang</h1>
            <p className="text-gray-400">Moonton</p>
            <div className="flex flex-col md:flex-row items-center space-x-0 md:space-x-2 mt-2">
              <span className="text-gray-400 border rounded-2xl p-2 flex items-center space-x-2">
                <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16.499 13.2516C16.4983 15.4048 14.9852 17.2044 12.9644 17.6462L12.4859 16.2107C13.3889 16.0633 14.1564 15.5128 14.5977 14.75H12.749C11.9206 14.75 11.249 14.0784 11.249 13.25V10.25C11.249 9.42155 11.9206 8.75 12.749 8.75H14.9526C14.5835 5.79027 12.0587 3.5 8.99902 3.5C5.93931 3.5 3.41452 5.79027 3.04544 8.75H5.24902C6.07745 8.75 6.74902 9.42155 6.74902 10.25V13.25C6.74902 14.0784 6.07745 14.75 5.24902 14.75H2.99902C2.1706 14.75 1.49902 14.0784 1.49902 13.25V9.5C1.49902 5.35786 4.85689 2 8.99902 2C13.1411 2 16.499 5.35786 16.499 9.5V10.249V10.25V13.25V13.2516Z" fill="white"/>
                </svg>
                <span>Customer Service 24/7</span>
              </span>
              <span className="text-gray-400 border rounded-2xl p-2 flex items-center space-x-2">
                <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15.2385 3.4875L9.26543 1.45195C9.19336 1.42734 9.09668 1.41504 9 1.41504C8.90332 1.41504 8.80664 1.42734 8.73457 1.45195L2.76152 3.4875C2.61563 3.53672 2.49609 3.70547 2.49609 3.86016V12.3398C2.49609 12.4945 2.59629 12.6984 2.71758 12.7951L8.77676 17.5166C8.83828 17.5641 8.91738 17.5887 8.99824 17.5887C9.0791 17.5887 9.15996 17.5641 9.21973 17.5166L15.2789 12.7951C15.4002 12.7002 15.5004 12.4963 15.5004 12.3398V3.86016C15.5039 3.70547 15.3844 3.53848 15.2385 3.4875ZM12.208 6.48984L8.4709 11.635C8.44463 11.6709 8.41024 11.7002 8.37053 11.7203C8.33082 11.7405 8.28692 11.751 8.24238 11.751C8.19785 11.751 8.15394 11.7405 8.11423 11.7203C8.07453 11.7002 8.04014 11.6709 8.01387 11.635L5.79199 8.57637C5.7252 8.4832 5.79199 8.35313 5.90625 8.35313H6.87656C6.96621 8.35313 7.05234 8.39707 7.10508 8.46914L8.24238 10.0336L10.8949 6.38086C10.9477 6.30879 11.032 6.26484 11.1234 6.26484H12.0938C12.208 6.2666 12.2748 6.39668 12.208 6.48984Z" fill="white"/>
                </svg>
                <span>Official Distributor</span>
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Product Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold mb-4 text-gray-400">Pilih Produk</h2>
          <div className="bg-gray-700 p-4 rounded-lg mb-4">
            <button className="bg-blue-600 text-white py-2 px-4 rounded-lg">
              Diamonds
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Product Item */}
            {[...Array(3)].map((_, index) => (
              <div key={index} className="bg-gray-700 p-4 rounded-lg">
                <div className="flex items-center justify-between text-gray-400">
                  <span>12976 Diamonds (10289 + 2187 Bonus)</span>
                  <span className="bg-green-500 text-white py-1 px-2 rounded-lg">
                    Best Seller
                  </span>
                </div>
                <p className="text-green-400 mt-2">Rp 2.755.000,-</p>
              </div>
            ))}
          </div>
        </div>

        {/* User Input Section */}
        <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
          <h2 className="text-gray-400 text-xl font-semibold mb-4">Topup Game</h2>
          <div className="mb-4">
            <label className="block text-gray-400 mb-2">User ID*</label>
            <input
              type="text"
              className="w-full p-2 rounded-lg bg-gray-700 text-white"
              placeholder="Masukkan User ID"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-400 mb-2">Zone ID*</label>
            <input
              type="text"
              className="w-full p-2 rounded-lg bg-gray-700 text-white"
              placeholder="Masukkan Zone ID"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-400 mb-2">Nomor WhatsApp</label>
            <input
              type="text"
              className="w-full p-2 rounded-lg bg-gray-700 text-white"
              placeholder="Ketik nomor WA (081**********2)"
            />
          </div>
          <p className="text-gray-400 text-sm mb-4">
            Untuk mengetahui User ID Anda, silakan klik menu profile dibagian kiri
            atas pada menu utama game. User ID terletak pada bagian atas kiri profile.
          </p>
          <div>
            <button className="bg-blue-600 text-white py-2 px-4 rounded-lg w-full">
              Top Up Sekarang
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;