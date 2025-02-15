export const ProfileCard = () => {
    return (
      <div className="bg-white rounded-3xl shadow-lg p-4 w-96">
        <div className="relative h-64 mb-4">
          <img
            src="/profile-image.jpg"
            alt="Justin Bayer"
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>
        <div className="flex justify-between items-center">
          <div>
            <h3 className="text-2xl font-semibold">Justin Bayer</h3>
            <p className="text-gray-600">UI/UX designer</p>
          </div>
          <div className="flex items-center">
            <span className="text-yellow-400">★</span>
            <span className="ml-1">5 Star</span>
          </div>
        </div>
      </div>
    );
  };